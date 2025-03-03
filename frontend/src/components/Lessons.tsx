import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

// Define the type for the lesson object
interface Lesson {
  title: string;
}

const Lessons: React.FC = () => {
  const [lessons, setLessons] = useState<Lesson[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get<{ lessons: Lesson[] }>("http://127.0.0.1:8000/api/lessons/")
      .then((response) => {
        setLessons(response.data.lessons);
      });
  }, []);

  return (
    <div>
      <h2>Lessons</h2>
      <ul>
        {lessons.map((lesson, index) => (
          <li key={index}>{lesson.title}</li>
        ))}
      </ul>
      <button onClick={() => navigate("/code-editor")}>Practice Coding</button>
    </div>
  );
};

export default Lessons;
