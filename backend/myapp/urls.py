from django.urls import path
from .views import user_login, register_user, get_concepts, run_code, get_languages, insert_concepts, submit_code

urlpatterns = [
    path('login/', user_login, name='user_login'),
    path('register/', register_user, name='register_user'),
    path("concepts/<str:language>/", get_concepts, name="get_concepts"),
    path("languages/", get_languages, name="get_languages"),
    path("insert-concepts/", insert_concepts, name="insert_concepts"),
    path('submit-code/', submit_code, name='submit_code'),
    path('run-code/', run_code, name='run_code')
]