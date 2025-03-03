import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { motion } from "framer-motion";
import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { FaChevronRight, FaCode, FaBookOpen, FaArrowLeft, FaUser, FaClock } from "react-icons/fa";

interface Concept {
  title: string;
  content: string;
  example_code: string;
}

const Concepts = () => {
  const { language } = useParams();
  const [concepts, setConcepts] = useState<Concept[]>([]);
  const [selectedConcept, setSelectedConcept] = useState<Concept | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [activeTab, setActiveTab] = useState<"content" | "code">("content");
  const navigate = useNavigate();
  

  useEffect(() => {
    setLoading(true);
    axios
      .get(`http://127.0.0.1:8000/api/concepts/${language}/`)
      .then((response) => {
        setConcepts(response.data.concepts);
        setSelectedConcept(response.data.concepts[0]);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching concepts", error);
        setError("Failed to load concepts. Please try again later.");
        setLoading(false);
      });
  }, [language]);

  const handlePracticeCoding = () => {
    if (selectedConcept) {
      navigate("/code-editor", { 
        state: { 
          code: selectedConcept.example_code,
          language,
          conceptTitle: selectedConcept.title 
        } 
      });
    }
  };

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen bg-gray-900">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex flex-col items-center justify-center h-screen bg-gray-900 text-white">
        <div className="text-red-500 text-xl mb-4">⚠️ {error}</div>
        <button 
          className="bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-md transition-colors duration-200"
          onClick={() => window.location.reload()}
        >
          Try Again
        </button>
      </div>
    );
  }

  return (
    <div className="flex flex-col h-screen bg-gray-900 text-white">
      {/* Header with user info and time */}
      <header className="bg-gray-800 px-6 py-3 flex justify-between items-center shadow-md z-10">
        <div className="flex items-center">
          <button 
            className="mr-4 p-2 rounded-md hover:bg-gray-700 md:hidden"
            onClick={toggleSidebar}
          >
            {sidebarOpen ? <FaArrowLeft /> : <FaChevronRight />}
          </button>
          <h1 className="text-xl font-bold text-blue-400">{language?.toUpperCase()} Learning Platform</h1>
        </div>
        
      </header>

      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        <aside 
          className={`${
            sidebarOpen ? 'w-full md:w-1/4 translate-x-0' : 'w-0 -translate-x-full md:translate-x-0 md:w-0'
          } bg-gray-800 transition-all duration-300 ease-in-out overflow-hidden flex-shrink-0 border-r border-gray-700`}
        >
          <div className="p-6 overflow-y-auto h-full">
            <h2 className="text-2xl font-bold mb-6 text-white">
              Concept List
            </h2>
            
            <nav className="space-y-1">
              {concepts.map((concept, index) => (
                <button
                  key={index}
                  className={`w-full text-left p-4 rounded-lg transition-all duration-200
                    ${selectedConcept?.title === concept.title 
                      ? "bg-blue-600 text-white" 
                      : "hover:bg-gray-700 text-gray-300"
                    } flex items-center`}
                  onClick={() => {
                    setSelectedConcept(concept);
                    if (window.innerWidth < 768) {
                      setSidebarOpen(false);
                    }
                  }}
                >
                  <span className="w-6 h-6 flex items-center justify-center rounded-full bg-gray-700 mr-3 text-sm">
                    {index + 1}
                  </span>
                  <span className="font-medium">{concept.title}</span>
                </button>
              ))}
            </nav>
          </div>
        </aside>

        {/* Main content */}
        <main className="flex-1 overflow-y-auto p-0">
          {selectedConcept ? (
            <div className="p-6 max-w-4xl mx-auto">
              {!sidebarOpen && (
                <button
                  className="md:hidden mb-4 p-2 bg-gray-800 rounded-md hover:bg-gray-700"
                  onClick={toggleSidebar}
                  aria-label="Open sidebar"
                >
                  <FaChevronRight />
                </button>
              )}

              <h1 className="text-4xl font-extrabold mb-6 text-white border-b border-gray-700 pb-4">
                {selectedConcept.title}
              </h1>

              <div className="mb-8">
                <div className="flex space-x-4 border-b border-gray-700">
                  <button
                    className={`px-4 py-3 font-medium flex items-center space-x-2 border-b-2 transition-all ${
                      activeTab === "content"
                        ? "border-blue-500 text-blue-400"
                        : "border-transparent text-gray-400 hover:text-gray-300"
                    }`}
                    onClick={() => setActiveTab("content")}
                  >
                    <FaBookOpen /> <span>Content</span>
                  </button>
                  <button
                    className={`px-4 py-3 font-medium flex items-center space-x-2 border-b-2 transition-all ${
                      activeTab === "code"
                        ? "border-blue-500 text-blue-400"
                        : "border-transparent text-gray-400 hover:text-gray-300"
                    }`}
                    onClick={() => setActiveTab("code")}
                  >
                    <FaCode /> <span>Example Code</span>
                  </button>
                </div>
              </div>

              <div className="mt-6">
                {activeTab === "content" ? (
                  <div className="prose prose-lg prose-invert max-w-none">
                    {selectedConcept.content.split('\n\n').map((paragraph, idx) => (
                      <p key={idx} className="mb-5 text-gray-200 leading-relaxed text-lg">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                ) : (
                  <div className="rounded-lg overflow-hidden shadow-2xl">
                    <div className="bg-gray-800 px-4 py-2 text-sm text-gray-400 flex justify-between items-center">
                      <span>Example Code</span>
                      <span className="px-2 py-1 rounded bg-gray-700 text-xs">{language}</span>
                    </div>
                    <SyntaxHighlighter
                      language={language?.toLowerCase()}
                      style={atomOneDark}
                      showLineNumbers={true}
                      customStyle={{
                        padding: '1.5rem',
                        borderRadius: '0 0 0.5rem 0.5rem',
                        fontSize: '0.95rem',
                      }}
                    >
                      {selectedConcept.example_code}
                    </SyntaxHighlighter>
                  </div>
                )}
              </div>

              <div className="mt-10 flex flex-col md:flex-row gap-4">
                <button
                  className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-4 rounded-lg font-medium shadow-lg transition-all duration-200 text-center"
                  onClick={handlePracticeCoding}
                >
                  <FaCode className="inline mr-2" /> Practice This Concept
                </button>
                
                <button
                  className="bg-gray-800 hover:bg-gray-700 text-white px-6 py-4 rounded-lg font-medium border border-gray-700 transition-colors duration-200 text-center"
                  onClick={() => setActiveTab(activeTab === "content" ? "code" : "content")}
                >
                  {activeTab === "content" ? (
                    <>
                      <FaCode className="inline mr-2" /> View Example Code
                    </>
                  ) : (
                    <>
                      <FaBookOpen className="inline mr-2" /> View Concept Details
                    </>
                  )}
                </button>
              </div>
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center h-full">
              <div className="text-2xl text-gray-500 mb-4">Select a concept from the sidebar</div>
              {!sidebarOpen && (
                <button
                  className="bg-blue-500 hover:bg-blue-600 px-5 py-3 rounded-md transition-colors duration-200"
                  onClick={toggleSidebar}
                >
                  Show Concept List
                </button>
              )}
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default Concepts;