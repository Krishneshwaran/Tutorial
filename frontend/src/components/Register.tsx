import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleRegister = async () => {
    try {
      await axios.post("http://127.0.0.1:8000/api/register/", { username, password });
      alert("User registered successfully");
      navigate("/");
    } catch (error) {
      alert("Error registering user");
    }
  };

  return (
    <div className="flex h-screen justify-center items-center bg-gray-900">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">Register</h2>
        <input
          type="text"
          placeholder="Username"
          className="w-full p-2 border rounded-md mb-2"
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full p-2 border rounded-md mb-4"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="bg-green-500 text-white px-4 py-2 rounded-md w-full" onClick={handleRegister}>
          Register
        </button>
      </div>
    </div>
  );
};

export default Register;
