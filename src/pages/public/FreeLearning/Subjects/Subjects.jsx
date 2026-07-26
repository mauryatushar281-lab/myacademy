import { useParams, useNavigate } from "react-router-dom";
import {
  Atom,
  FlaskConical,
  Calculator,
  ArrowRight,
  ChevronRight,
} from "lucide-react";

import "./Subjects.css";

const subjects = [
  {
    name: "Physics",
    icon: <Atom size={42} />,
    color: "#2563eb",
    description: "Concepts, Numericals & Animations",
  },
  {
    name: "Chemistry",
    icon: <FlaskConical size={42} />,
    color: "#16a34a",
    description: "Animations, Notes & MCQs",
  },
  {
    name: "Maths",
    icon: <Calculator size={42} />,
    color: "#9333ea",
    description: "Practice Questions & Solutions",
  },
];

export default function Subjects() {
  const { className } = useParams();
  const navigate = useNavigate();

  return (
    <section className="subjects-page">
      <div className="breadcrumb">
        Home
        <ChevronRight size={16} />
        Free Learning
        <ChevronRight size={16} />
        <span>{className}</span>
      </div>

      <h1>{className}</h1>

      <p>
        Select your favourite subject and start learning with animations, notes,
        quizzes and MCQs.
      </p>

      <div className="subject-grid">
        {subjects.map((subject, index) => (
          <div
            key={index}
            className="subject-card"
            style={{
              "--theme": subject.color,
            }}
            onClick={() =>
              navigate(`/free-learning/${className}/${subject.name}`)
            }
          >
            <div className="subject-icon">{subject.icon}</div>

            <h2>{subject.name}</h2>

            <p>{subject.description}</p>

            <button>
              Explore
              <ArrowRight size={18} />
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
