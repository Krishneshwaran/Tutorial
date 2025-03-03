"use client"

import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import axios from "axios";
import Editor from "@monaco-editor/react";

const CodeEditor = () => {
  const router = useRouter();
  const initialCode = "print('Hello, Python')";
  const [code, setCode] = useState(initialCode);
  const [output, setOutput] = useState("");
  const [isRunning, setIsRunning] = useState(false);
  const [testCaseResult, setTestCaseResult] = useState<boolean | null>(null);
  const [expectedOutput, setExpectedOutput] = useState("");
  const [stdin, setStdin] = useState("");
  const [theme, setTheme] = useState("vs-dark");
  const [language, setLanguage] = useState("python");

  // Reset test case result when code changes
  useEffect(() => {
    setTestCaseResult(null);
  }, [code]);

  const handleRun = async () => {
    try {
      setIsRunning(true);
      setOutput("");
      setTestCaseResult(null);
      
      const response = await axios.post("http://127.0.0.1:8000/api/submit-code/", {
        source_code: code,
        stdin: stdin,
        expected_output: expectedOutput,
      });
      
      setOutput(response.data.stdout || response.data.stderr || "No output");
      
      // Check if there was an error in execution
      if (response.data.stderr) {
        setTestCaseResult(false);
        return;
      }
      
      // Validate against expected output if provided
      if (expectedOutput.trim()) {
        // Remove trailing whitespace for comparison
        const normalizedActual = (response.data.stdout || "").trim();
        const normalizedExpected = expectedOutput.trim();
        
        setTestCaseResult(normalizedActual === normalizedExpected);
      }
    } catch (error: any) {
      setOutput("Error executing code: " + (error?.message || "Unknown error"));
      setTestCaseResult(false);
    } finally {
      setIsRunning(false);
    }
  };

  const getTestResultMessage = () => {
    if (testCaseResult === null) return "";
    return testCaseResult ? "✅ Test Case PASSED" : "❌ Test Case FAILED";
  }

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      <div className="container mx-auto px-4 py-6">
        <header className="mb-6">
          <h1 className="text-3xl font-bold text-white mb-2">Python Code Editor</h1>
          <div className="flex space-x-4">
            <select 
              className="bg-gray-800 text-white px-3 py-1 rounded border border-gray-700"
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
            >
              <option value="python">Python</option>
              <option value="javascript">JavaScript</option>
              <option value="java">Java</option>
            </select>
            <select 
              className="bg-gray-800 text-white px-3 py-1 rounded border border-gray-700"
              value={theme}
              onChange={(e) => setTheme(e.target.value)}
            >
              <option value="vs-dark">Dark</option>
              <option value="light">Light</option>
            </select>
          </div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div className="bg-gray-800 rounded-lg overflow-hidden border border-gray-700">
              <div className="px-4 py-2 bg-gray-700 flex justify-between items-center">
                <h2 className="font-semibold">Code</h2>
                <button
                  className="px-3 py-1 bg-blue-600 hover:bg-blue-700 text-white rounded transition duration-200"
                  onClick={() => setCode(initialCode)}
                >
                  Reset
                </button>
              </div>
              <Editor
                height="400px"
                language={language}
                theme={theme}
                value={code}
                onChange={(value) => setCode(value || "")}
                options={{
                  minimap: { enabled: false },
                  fontSize: 14,
                  lineNumbers: "on",
                  scrollBeyondLastLine: false,
                  automaticLayout: true,
                }}
              />
            </div>

            <div className="bg-gray-800 rounded-lg overflow-hidden border border-gray-700">
              <div className="px-4 py-2 bg-gray-700">
                <h2 className="font-semibold">Input (stdin)</h2>
              </div>
              <textarea
                className="w-full h-24 p-3 bg-gray-800 text-white focus:outline-none resize-none"
                placeholder="Enter input data here..."
                value={stdin}
                onChange={(e) => setStdin(e.target.value)}
              />
            </div>
          </div>

          <div className="space-y-4">
            <div className="bg-gray-800 rounded-lg overflow-hidden border border-gray-700">
              <div className="px-4 py-2 bg-gray-700">
                <h2 className="font-semibold">Expected Output (for test case)</h2>
              </div>
              <textarea
                className="w-full h-24 p-3 bg-gray-800 text-white focus:outline-none resize-none"
                placeholder="Enter expected output to validate test case..."
                value={expectedOutput}
                onChange={(e) => setExpectedOutput(e.target.value)}
              />
            </div>

            <div className="bg-gray-800 rounded-lg overflow-hidden border border-gray-700">
              <div className="px-4 py-2 bg-gray-700 flex items-center justify-between">
                <h2 className="font-semibold">Output</h2>
                {testCaseResult !== null && (
                  <span className={`text-sm font-medium px-2 py-1 rounded ${testCaseResult ? 'bg-green-900 text-green-200' : 'bg-red-900 text-red-200'}`}>
                    {getTestResultMessage()}
                  </span>
                )}
              </div>
              <pre className="p-3 min-h-40 max-h-80 overflow-auto whitespace-pre-wrap break-words bg-gray-800 text-gray-100">
                {output || "Code execution output will appear here..."}
              </pre>
            </div>

            <div className="flex justify-center">
              <button
                className={`w-full py-3 rounded-lg font-semibold transition duration-200 ${
                  isRunning
                    ? "bg-gray-600 text-gray-300 cursor-not-allowed"
                    : "bg-green-600 hover:bg-green-700 text-white"
                }`}
                onClick={handleRun}
                disabled={isRunning}
              >
                {isRunning ? "Running..." : "Run Code"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CodeEditor;