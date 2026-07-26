import { useParams, useNavigate } from "react-router-dom";
import {
  BookOpen,
  FileText,
  PlayCircle,
  CircleHelp,
  ArrowRight,
  ChevronRight,
} from "lucide-react";

import "./Chapters.css";

const chapters = [
  {
    id: 1,
    name: "Electrochemistry",
    lessons: "Animation • Notes • Quiz • MCQs",
    duration: "45 min",
  },
  {
    id: 2,
    name: "Chemical Kinetics",
    lessons: "Animation • Notes • Quiz • MCQs",
    duration: "35 min",
  },
  {
    id: 3,
    name: "Surface Chemistry",
    lessons: "Animation • Notes • Quiz • MCQs",
    duration: "40 min",
  },
];

export default function Chapters() {
  const { className, subject } = useParams();
  const navigate = useNavigate();

  return (
    <section className="chapters-page">
      <div className="breadcrumb">
        Home
        <ChevronRight size={16} />
        Free Learning
        <ChevronRight size={16} />
        {className}
        <ChevronRight size={16} />
        <span>{subject}</span>
      </div>

      <h1>{subject}</h1>

      <p>
        Choose a chapter and start learning through animations, notes, MCQs and
        quizzes.
      </p>

      <div className="chapter-grid">
        {chapters.map((chapter, index) => (
          <div
            key={chapter.id}
            className="chapter-card"
            onClick={() =>
              navigate(`/free-learning/${className}/${subject}/${chapter.id}`)
            }
          >
            <div className="chapter-top">
              <span className="chapter-number">Chapter {index + 1}</span>

              <span className="duration">{chapter.duration}</span>
            </div>

            <h2>{chapter.name}</h2>

            <p>{chapter.lessons}</p>

            <div className="chapter-features">
              <span>
                <PlayCircle size={18} />
                Animation
              </span>

              <span>
                <FileText size={18} />
                Notes
              </span>

              <span>
                <CircleHelp size={18} />
                Quiz
              </span>

              <span>
                <BookOpen size={18} />
                MCQs
              </span>
            </div>

            <button>
              Start Learning
              <ArrowRight size={18} />
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
