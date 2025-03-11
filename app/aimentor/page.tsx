"use client"; // Mark this file as a Client Component

import { useState } from "react";
import Head from "next/head";

// Import the Google Generative AI library
const { GoogleGenerativeAI } = require("@google/generative-ai");

// Load the API key from environment variables
const apiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY;

// Debug log to verify the API key is loaded
console.log("API Key:", apiKey);

if (!apiKey) {
  console.error("NEXT_PUBLIC_GEMINI_API_KEY is missing. Please check your .env file.");
}

// Initialize the Google Generative AI client
const genAI = new GoogleGenerativeAI(apiKey);

// Configure the model
const model = genAI.getGenerativeModel({
  model: "gemini-1.5-pro",
});

const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 40,
  maxOutputTokens: 8192,
  responseMimeType: "text/plain",
};

export default function AIMentorPage() {
  const [input, setInput] = useState(""); // User input state
  const [response, setResponse] = useState(""); // AI response state
  const [loading, setLoading] = useState(false); // Loading state

  // Function to handle sending the user's input to the AI model
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault(); // Prevent page reload
    if (!input.trim()) return; // Prevent empty submissions

    setLoading(true); // Set loading state to true

    try {
      if (!apiKey) {
        throw new Error("API key is missing. Please check your environment variables.");
      }

      const chatSession = model.startChat({
        generationConfig,
        history: [
          {
            role: "user",
            parts: [{ text: "Hello" }],
          },
          {
            role: "model",
            parts: [{ text: "Hello! How can I help you today?" }],
          },
        ],
      });

      const result = await chatSession.sendMessage(input);
      const aiResponse = result.response.text();
      setResponse(aiResponse); // Update the response state
    } catch (error) {
      console.error("Error communicating with the AI model:", error);
      console.error("Error Response:", error.response?.data); // Detailed error logging
      setResponse("An error occurred while processing your request. Please check the console for details.");
    } finally {
      setLoading(false); // Reset loading state
    }
  };

  return (
    <>
      <Head>
        <title>AI Mentor - CodeLearn</title>
        <meta name="description" content="Get personalized guidance from an AI mentor." />
      </Head>

      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-6">AI Mentor</h1>

        {/* Input Form */}
        <form onSubmit={handleSubmit} className="mb-6">
          <label htmlFor="userInput" className="block text-lg font-medium mb-2">
            Ask your question:
          </label>
          <textarea
            id="userInput"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            rows={4}
            placeholder="Type your question here..."
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
          />
          <button
            type="submit"
            disabled={loading}
            className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-300 disabled:bg-gray-400"
          >
            {loading ? "Loading..." : "Submit"}
          </button>
        </form>

        {/* AI Response */}
        {response && (
          <div className="bg-gray-100 p-4 rounded-md">
            <h2 className="text-xl font-semibold mb-2">AI Response:</h2>
            <p>{response}</p>
          </div>
        )}
      </div>
    </>
  );
}