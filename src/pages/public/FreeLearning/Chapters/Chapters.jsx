import { useParams, useNavigate } from "react-router-dom";
import {
  BookOpen,
  FileText,
  PlayCircle,
  CircleHelp,
  ArrowRight,
  Clock,
  ChevronRight,
} from "lucide-react";

import "./Chapters.css";

const learningData = {
  class12: {
    chemistry: {
      name: "Chemistry",
      description:
        "Learn Class 12 Chemistry through animations, notes, MCQs and quizzes.",

      chapters: [
        {
          id: 1,
          name: "Solutions",
          description:
            "Understand concentration, solubility and properties of solutions.",
          topics: 8,
          duration: "45 min",
          lessons: "Animation • Notes • Quiz • MCQs",
        },
        {
          id: 2,
          name: "Electrochemistry",
          description:
            "Understand electrochemical cells, conductivity and electrolysis.",
          topics: 10,
          duration: "55 min",
          lessons: "Animation • Notes • Quiz • MCQs",
        },
        {
          id: 3,
          name: "Chemical Kinetics",
          description:
            "Study reaction rates, order of reaction and activation energy.",
          topics: 7,
          duration: "40 min",
          lessons: "Animation • Notes • Quiz • MCQs",
        },
        {
          id: 4,
          name: "Surface Chemistry",
          description:
            "Learn adsorption, catalysis, colloids and related concepts.",
          topics: 6,
          duration: "35 min",
          lessons: "Animation • Notes • Quiz • MCQs",
        },
      ],
    },

    physics: {
      name: "Physics",
      description:
        "Build strong Class 12 Physics concepts with visual learning.",

      chapters: [
        {
          id: 1,
          name: "Electric Charges and Fields",
          description:
            "Understand electric charge, electric field and Gauss's law.",
          topics: 9,
          duration: "50 min",
          lessons: "Animation • Notes • Quiz • MCQs",
        },
        {
          id: 2,
          name: "Electrostatic Potential and Capacitance",
          description:
            "Learn potential, capacitance and combinations of capacitors.",
          topics: 8,
          duration: "45 min",
          lessons: "Animation • Notes • Quiz • MCQs",
        },
        {
          id: 3,
          name: "Current Electricity",
          description:
            "Understand current, resistance, circuits and Kirchhoff's laws.",
          topics: 10,
          duration: "55 min",
          lessons: "Animation • Notes • Quiz • MCQs",
        },
      ],
    },

    mathematics: {
      name: "Mathematics",
      description: "Master Class 12 Mathematics through concepts and practice.",

      chapters: [
        {
          id: 1,
          name: "Relations and Functions",
          description: "Understand relations, functions and their properties.",
          topics: 7,
          duration: "40 min",
          lessons: "Animation • Notes • Quiz • MCQs",
        },
        {
          id: 2,
          name: "Inverse Trigonometric Functions",
          description:
            "Learn inverse trigonometric functions and their properties.",
          topics: 6,
          duration: "35 min",
          lessons: "Animation • Notes • Quiz • MCQs",
        },
        {
          id: 3,
          name: "Matrices",
          description: "Learn matrix operations, types and applications.",
          topics: 8,
          duration: "45 min",
          lessons: "Animation • Notes • Quiz • MCQs",
        },
      ],
    },
  },

  class11: {
    physics: {
      name: "Physics",
      description: "Build a strong foundation in Class 11 Physics.",

      chapters: [
        {
          id: 1,
          name: "Units and Measurements",
          description:
            "Learn units, dimensions, significant figures and measurements.",
          topics: 6,
          duration: "35 min",
          lessons: "Animation • Notes • Quiz • MCQs",
        },
        {
          id: 2,
          name: "Motion in a Straight Line",
          description:
            "Understand position, velocity, acceleration and motion graphs.",
          topics: 8,
          duration: "45 min",
          lessons: "Animation • Notes • Quiz • MCQs",
        },
      ],
    },

    chemistry: {
      name: "Chemistry",
      description: "Build your Class 11 Chemistry foundation.",

      chapters: [
        {
          id: 1,
          name: "Some Basic Concepts of Chemistry",
          description:
            "Learn mole concept, atomic mass and chemical calculations.",
          topics: 8,
          duration: "45 min",
          lessons: "Animation • Notes • Quiz • MCQs",
        },
        {
          id: 2,
          name: "Structure of Atom",
          description:
            "Understand atomic structure and electronic configuration.",
          topics: 7,
          duration: "40 min",
          lessons: "Animation • Notes • Quiz • MCQs",
        },
      ],
    },
  },
};

export default function Chapters() {
  const { className, subject } = useParams();
  const navigate = useNavigate();

  const selectedClass = learningData[className?.toLowerCase()];
  const selectedSubject = selectedClass?.[subject?.toLowerCase()];

  // Invalid class/subject
  if (!selectedSubject) {
    return (
      <div className="learning-error">
        <BookOpen size={50} />

        <h2>Content Not Found</h2>

        <p>We couldn't find learning content for this class and subject.</p>

        <button onClick={() => navigate("/free-learning")}>
          Back to Free Learning
        </button>
      </div>
    );
  }

  const handleChapter = (chapter) => {
    const chapterSlug = chapter.name
      .toLowerCase()
      .trim()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "");

    navigate(
      `/free-learning/${className}/${subject}/${chapter.id}/${chapterSlug}`,
    );
  };

  return (
    <div className="free-learning-page">
      {/* BACK */}

      <button className="back-button" onClick={() => navigate(-1)}>
        ← Back
      </button>

      {/* HEADER */}

      <section className="learning-header">
        <div>
          <span className="learning-badge">FREE LEARNING</span>

          <div className="breadcrumb">
            Home <ChevronRight size={14} />
            Free Learning <ChevronRight size={14} />
            {className} <ChevronRight size={14} />
            {selectedSubject.name}
          </div>

          <h1 style={{ color: "#ffffff" }}>{selectedSubject.name}</h1>

          <p>{selectedSubject.description}</p>
        </div>

        <div className="subject-icon">
          <BookOpen size={60} />
        </div>
      </section>

      {/* CHAPTERS */}

      <section className="chapters-section">
        <div className="section-header">
          <div>
            <span>COURSE CONTENT</span>

            <h2>{selectedSubject.name} Chapters</h2>

            <p>Select a chapter to start learning.</p>
          </div>

          <div className="chapter-count">
            {selectedSubject.chapters.length} Chapters
          </div>
        </div>

        <div className="chapters-list">
          {selectedSubject.chapters.map((chapter, index) => (
            <div
              className="chapter-card"
              key={chapter.id}
              onClick={() => handleChapter(chapter)}
            >
              {/* NUMBER */}

              <div className="chapter-number">
                {String(index + 1).padStart(2, "0")}
              </div>

              {/* CONTENT */}

              <div className="chapter-content">
                <h3>{chapter.name}</h3>

                <p>{chapter.description}</p>

                <div className="chapter-meta">
                  <span>
                    <BookOpen size={15} />
                    {chapter.topics} Topics
                  </span>

                  <span>
                    <Clock size={15} />
                    {chapter.duration}
                  </span>
                </div>

                <div className="chapter-lessons">
                  {chapter.lessons.split(" • ").map((lesson) => (
                    <span key={lesson}>{lesson}</span>
                  ))}
                </div>
              </div>

              {/* BUTTON */}

              <button
                className="chapter-button"
                onClick={(event) => {
                  event.stopPropagation();
                  handleChapter(chapter);
                }}
              >
                Start
                <ArrowRight size={18} />
              </button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
