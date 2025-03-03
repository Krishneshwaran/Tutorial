import http.client
import json
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from pymongo import MongoClient
from django.contrib.auth import authenticate, login
from django.contrib.auth.models import User
from django.contrib.auth.hashers import make_password

# MongoDB Atlas connection
client = MongoClient("mongodb+srv://krish:krish@study.po9dv.mongodb.net/")
db = client["python_learning"]
users_collection = db["users"]
lessons_collection = db["lessons"]
concepts_collection = db["concepts"]

JUDGE_API_KEY = "adfbe3a184mshb52145137acec4dp1405edjsne54330b823c0"
JUDGE_API_HOST = "judge029.p.rapidapi.com"

@csrf_exempt
def user_login(request):
    if request.method == "POST":
        data = json.loads(request.body)
        username = data.get("username")
        password = data.get("password")
        user = authenticate(username=username, password=password)
        if user:
            login(request, user)
            return JsonResponse({"message": "Login successful"})
        return JsonResponse({"error": "Invalid credentials"}, status=400)

@csrf_exempt
def register_user(request):
    if request.method == "POST":
        data = json.loads(request.body)
        username = data.get("username")
        password = data.get("password")

        if User.objects.filter(username=username).exists():
            return JsonResponse({"error": "User already exists"}, status=400)

        user = User.objects.create_user(username=username, password=password)
        user.save()

        # Hash the password before storing it in MongoDB
        hashed_password = make_password(password)
        user_data = {
            "username": username,
            "password": hashed_password
        }
        users_collection.insert_one(user_data)

        return JsonResponse({"message": "User registered successfully"})
    
@csrf_exempt
def get_concepts(request, language):
    if request.method == "GET":
        concepts = list(concepts_collection.find({"language": language}, {"_id": 0}))
        return JsonResponse({"concepts": concepts})

@csrf_exempt
def get_languages(request):
    if request.method == "GET":
        languages = concepts_collection.distinct("language")
        return JsonResponse({"languages": languages})

@csrf_exempt
def insert_concepts(request):
    if request.method == "POST":
        data = json.loads(request.body)
        concepts_collection.insert_many(data["concepts"])
        return JsonResponse({"message": "Concepts inserted successfully"})

@csrf_exempt
def submit_code(request):
    if request.method == "POST":
        data = json.loads(request.body)
        source_code = data.get("source_code")
        language_id = 71  # Python 3
        stdin = data.get("stdin", "")
        expected_output = data.get("expected_output", "")
        
        payload = json.dumps({
            "source_code": source_code,
            "language_id": language_id,
            "stdin": stdin,
            "expected_output": expected_output
        })

        headers = {
            'x-rapidapi-key': JUDGE_API_KEY,
            'x-rapidapi-host': JUDGE_API_HOST,
            'Content-Type': "application/json"
        }
        
        conn = http.client.HTTPSConnection(JUDGE_API_HOST)
        conn.request("POST", "/submissions?base64_encoded=false&wait=true&fields=*", payload, headers)
        res = conn.getresponse()
        data = res.read()
        conn.close()

        return JsonResponse(json.loads(data))
    
import requests
@csrf_exempt
def run_code(request):
    if request.method == "POST":
        try:
            data = json.loads(request.body)
            code = data.get("code", "")
            language = data.get("language", "python")

            # Judge API Request
            judge_response = requests.post(
                "https://api.judge0.com/submissions/?base64_encoded=false&wait=true",
                json={"language_id": 71, "source_code": code},  # 71 = Python3
                headers={"Content-Type": "application/json"}
            )

            result = judge_response.json()
            output = result.get("stdout", result.get("stderr", "Error executing code"))

            return JsonResponse({"output": output})
        except Exception as e:
            return JsonResponse({"error": str(e)}, status=400)
    
    return JsonResponse({"error": "Invalid request"}, status=400)