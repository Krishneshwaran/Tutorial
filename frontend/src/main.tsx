import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";
import Login from "./components/Login";
import Register from "./components/Register";
import Tutorials from "./components/Tutorials";
import Concepts from "./components/concepts";
import CodeEditor from "./components/CodeEditor";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/tutorials" element={<Tutorials />} />
        <Route path="/concepts/:language" element={<Concepts />} />
        <Route path="/code-editor" element={<CodeEditor />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
