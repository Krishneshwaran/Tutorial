import { useLocation } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import Editor from "@monaco-editor/react";

const CodeEditor = () => {
  const location = useLocation();
  const initialCode = location.state?.code || "print('Hello, Python')";
  const [code, setCode] = useState(initialCode);
  const [output, setOutput] = useState("");

  const handleRun = async () => {
    try {
      const response = await axios.post("http://127.0.0.1:8000/api/submit-code/", {
        source_code: code,
        stdin: "",
        expected_output: "",
      });
      setOutput(response.data.stdout || response.data.stderr);
    } catch (error) {
      setOutput("Error executing code");
    }
  };

  return (
    <div className="p-8 bg-gray-900 h-screen">
      <h2 className="text-white text-2xl mb-4">Code Editor</h2>
      <Editor height="400px" language="python" theme="vs-dark" value={code} onChange={(value) => setCode(value || "")} />
      <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md" onClick={handleRun}>
        Run Code
      </button>
      <pre className="text-white mt-4">Output: {output}</pre>
    </div>
  );
};

export default CodeEditor;
