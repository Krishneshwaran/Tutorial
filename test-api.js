const { GoogleGenerativeAI } = require("@google/generative-ai");

// Replace with your actual API key
const apiKey = "AIzaSyAXBC4yRlexXqAq5vavfePydktrwOmIQ5U";

const genAI = new GoogleGenerativeAI(apiKey);

async function testAPI() {
  try {
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-pro" });
    const result = await model.generateContent("What is the capital of France?");
    console.log(result.response.text());
  } catch (error) {
    console.error("Error testing API:", error);
  }
}

testAPI();