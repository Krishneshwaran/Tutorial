import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Tutorials = () => {
  const [languages, setLanguages] = useState<string[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get("http://127.0.0.1:8000/api/languages/")
      .then(response => setLanguages(response.data.languages))
      .catch(error => console.error("Error fetching languages", error));
  }, []);

  return (
    <div className="p-8 bg-gray-900 min-h-screen text-white">
      <h2 className="text-3xl font-bold mb-4">Select a Tutorial</h2>
      <div className="grid grid-cols-3 gap-4">
        {languages.map((language, index) => (
          <button
            key={index}
            className="bg-blue-600 p-4 rounded-md text-xl font-semibold"
            onClick={() => navigate(`/concepts/${language}`)}
          >
            {language.toUpperCase()}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Tutorials;
