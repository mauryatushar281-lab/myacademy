import { useNavigate, useParams } from "react-router-dom";
import {
  ArrowLeft,
  BookOpen,
  Play,
  FileText,
  Brain,
  ClipboardList,
  Clock,
  ChevronRight,
  GraduationCap,
} from "lucide-react";

import "./FreeLearning.css";

function FreeLearning() {
  const { className, subject } = useParams();
  const navigate = useNavigate();

  // --------------------------------
  // COURSE DATA
  // --------------------------------

  const learningData = {
    class11: {
      physics: {
        name: "Physics",
        description:
          "Build a strong foundation in Physics through concepts, animations, notes and practice.",
        chapters: [
          {
            id: 1,
            name: "Units and Measurements",
            description:
              "Learn physical quantities, units, dimensions and measurement errors.",
            lessons: "Animation • Notes • Quiz • MCQs",
            duration: "45 min",
            topics: 8,
          },
          {
            id: 2,
            name: "Motion in a Straight Line",
            description:
              "Understand position, velocity, acceleration and motion graphs.",
            lessons: "Animation • Notes • Quiz • MCQs",
            duration: "55 min",
            topics: 10,
          },
          {
            id: 3,
            name: "Motion in a Plane",
            description:
              "Learn vectors, projectile motion and two-dimensional motion.",
            lessons: "Animation • Notes • Quiz • MCQs",
            duration: "60 min",
            topics: 9,
          },
          {
            id: 4,
            name: "Laws of Motion",
            description:
              "Understand Newton's laws, friction and applications of force.",
            lessons: "Animation • Notes • Quiz • MCQs",
            duration: "65 min",
            topics: 12,
          },
          {
            id: 5,
            name: "Work, Energy and Power",
            description:
              "Master work-energy theorem, kinetic energy and power.",
            lessons: "Animation • Notes • Quiz • MCQs",
            duration: "55 min",
            topics: 10,
          },
        ],
      },

      chemistry: {
        name: "Chemistry",
        description:
          "Learn Chemistry through visual explanations, notes, animations and practice.",
        chapters: [
          {
            id: 1,
            name: "Some Basic Concepts of Chemistry",
            description:
              "Understand mole concept, atomic mass, molecular mass and stoichiometry.",
            lessons: "Animation • Notes • Quiz • MCQs",
            duration: "50 min",
            topics: 10,
          },
          {
            id: 2,
            name: "Structure of Atom",
            description:
              "Explore atomic models, quantum numbers and electronic configuration.",
            lessons: "Animation • Notes • Quiz • MCQs",
            duration: "55 min",
            topics: 12,
          },
          {
            id: 3,
            name: "Classification of Elements",
            description: "Learn periodic classification and periodic trends.",
            lessons: "Animation • Notes • Quiz • MCQs",
            duration: "45 min",
            topics: 8,
          },
          {
            id: 4,
            name: "Chemical Bonding",
            description:
              "Understand ionic bonds, covalent bonds, VSEPR and hybridisation.",
            lessons: "Animation • Notes • Quiz • MCQs",
            duration: "70 min",
            topics: 14,
          },
        ],
      },

      mathematics: {
        name: "Mathematics",
        description:
          "Develop mathematical understanding through examples, practice and quizzes.",
        chapters: [
          {
            id: 1,
            name: "Sets",
            description:
              "Learn sets, subsets, intervals, union and intersection.",
            lessons: "Animation • Notes • Quiz • MCQs",
            duration: "40 min",
            topics: 8,
          },
          {
            id: 2,
            name: "Relations and Functions",
            description:
              "Understand relations, functions, domain, range and types of functions.",
            lessons: "Animation • Notes • Quiz • MCQs",
            duration: "55 min",
            topics: 10,
          },
          {
            id: 3,
            name: "Trigonometric Functions",
            description:
              "Learn trigonometric ratios, identities and equations.",
            lessons: "Animation • Notes • Quiz • MCQs",
            duration: "65 min",
            topics: 12,
          },
          {
            id: 4,
            name: "Complex Numbers",
            description:
              "Understand complex numbers, algebra and geometric representation.",
            lessons: "Animation • Notes • Quiz • MCQs",
            duration: "50 min",
            topics: 9,
          },
        ],
      },
    },

    // --------------------------------
    // CLASS 12
    // --------------------------------

    class12: {
      physics: {
        name: "Physics",
        description:
          "Master Class 12 Physics with conceptual explanations, animations and exam practice.",
        chapters: [
          {
            id: 1,
            name: "Electric Charges and Fields",
            description:
              "Learn electric charge, Coulomb's law, electric field and Gauss's law.",
            lessons: "Animation • Notes • Quiz • MCQs",
            duration: "60 min",
            topics: 12,
          },
          {
            id: 2,
            name: "Electrostatic Potential and Capacitance",
            description:
              "Understand electric potential, capacitors and capacitance.",
            lessons: "Animation • Notes • Quiz • MCQs",
            duration: "55 min",
            topics: 10,
          },
          {
            id: 3,
            name: "Current Electricity",
            description:
              "Learn current, resistance, circuits, Kirchhoff's laws and bridges.",
            lessons: "Animation • Notes • Quiz • MCQs",
            duration: "65 min",
            topics: 14,
          },
          {
            id: 4,
            name: "Moving Charges and Magnetism",
            description:
              "Understand magnetic fields, force on charges and moving charges.",
            lessons: "Animation • Notes • Quiz • MCQs",
            duration: "70 min",
            topics: 13,
          },
        ],
      },

      chemistry: {
        name: "Chemistry",
        description:
          "Master Class 12 Chemistry with visual learning, notes, quizzes and MCQs.",
        chapters: [
          {
            id: 1,
            name: "Solutions",
            description:
              "Understand concentration, solubility, colligative properties and solutions.",
            lessons: "Animation • Notes • Quiz • MCQs",
            duration: "50 min",
            topics: 10,
          },
          {
            id: 2,
            name: "Electrochemistry",
            description:
              "Learn electrochemical cells, Nernst equation, conductivity and batteries.",
            lessons: "Animation • Notes • Quiz • MCQs",
            duration: "60 min",
            topics: 12,
          },
          {
            id: 3,
            name: "Chemical Kinetics",
            description:
              "Understand rate of reaction, order, molecularity and Arrhenius equation.",
            lessons: "Animation • Notes • Quiz • MCQs",
            duration: "45 min",
            topics: 9,
          },
          {
            id: 4,
            name: "Surface Chemistry",
            description: "Learn adsorption, catalysis, colloids and emulsions.",
            lessons: "Animation • Notes • Quiz • MCQs",
            duration: "40 min",
            topics: 8,
          },
          {
            id: 5,
            name: "Coordination Compounds",
            description:
              "Understand coordination entities, ligands, nomenclature and bonding.",
            lessons: "Animation • Notes • Quiz • MCQs",
            duration: "55 min",
            topics: 11,
          },
        ],
      },

      mathematics: {
        name: "Mathematics",
        description:
          "Master Class 12 Mathematics through concepts, examples, quizzes and practice.",
        chapters: [
          {
            id: 1,
            name: "Relations and Functions",
            description:
              "Learn relations, functions, inverse functions and binary operations.",
            lessons: "Animation • Notes • Quiz • MCQs",
            duration: "50 min",
            topics: 9,
          },
          {
            id: 2,
            name: "Inverse Trigonometric Functions",
            description:
              "Understand inverse trigonometric functions and their properties.",
            lessons: "Animation • Notes • Quiz • MCQs",
            duration: "45 min",
            topics: 8,
          },
          {
            id: 3,
            name: "Matrices",
            description: "Learn matrix operations, types and properties.",
            lessons: "Animation • Notes • Quiz • MCQs",
            duration: "55 min",
            topics: 10,
          },
          {
            id: 4,
            name: "Determinants",
            description:
              "Understand determinants, properties and applications.",
            lessons: "Animation • Notes • Quiz • MCQs",
            duration: "55 min",
            topics: 10,
          },
        ],
      },
    },
  };

  // --------------------------------
  // GET SELECTED SUBJECT
  // --------------------------------

  const selectedClass = learningData[className];

  const selectedSubject = selectedClass?.[subject];

  // --------------------------------
  // INVALID ROUTE
  // --------------------------------

  if (!selectedSubject) {
    return (
      <div className="learning-error">
        <BookOpen size={50} />

        <h2>Course Not Found</h2>

        <p>We couldn't find the requested class or subject.</p>

        <button onClick={() => navigate(-1)}>
          <ArrowLeft size={18} />
          Go Back
        </button>
      </div>
    );
  }

  // --------------------------------
  // OPEN CHAPTER
  // --------------------------------

  const handleChapter = (chapter) => {
    navigate(`/free-learning/${className}/${subject}/chapter/${chapter.id}`);
  };

  return (
    <div className="free-learning-page">
      {/* BACK */}

      <button className="back-button" onClick={() => navigate(-1)}>
        <ArrowLeft size={18} />
        Back
      </button>

      {/* HERO */}

      <section className="learning-hero">
        <div className="learning-hero-content">
          <span className="learning-badge">FREE LEARNING</span>

          <div className="breadcrumb">
            {className} / {selectedSubject.name}
          </div>

          <h1>{selectedSubject.name}</h1>

          <p>{selectedSubject.description}</p>

          <div className="hero-stats">
            <div>
              <strong>{selectedSubject.chapters.length}</strong>

              <span>Chapters</span>
            </div>

            <div>
              <strong>
                {selectedSubject.chapters.reduce(
                  (total, chapter) => total + chapter.topics,
                  0,
                )}
              </strong>

              <span>Topics</span>
            </div>

            <div>
              <strong>FREE</strong>

              <span>Access</span>
            </div>
          </div>
        </div>

        <div className="learning-hero-icon">
          <GraduationCap size={90} />
        </div>
      </section>

      {/* LEARNING FEATURES */}

      <section className="learning-features">
        <div className="feature-card">
          <Play size={28} />

          <div>
            <h3>Animations</h3>
            <p>Understand concepts visually</p>
          </div>
        </div>

        <div className="feature-card">
          <FileText size={28} />

          <div>
            <h3>Notes</h3>
            <p>Quick revision material</p>
          </div>
        </div>

        <div className="feature-card">
          <ClipboardList size={28} />

          <div>
            <h3>MCQs</h3>
            <p>Practice important questions</p>
          </div>
        </div>

        <div className="feature-card">
          <Brain size={28} />

          <div>
            <h3>Quiz</h3>
            <p>Test your understanding</p>
          </div>
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
        </div>

        <div className="chapters-list">
          {selectedSubject.chapters.map((chapter) => (
            <div className="chapter-card" key={chapter.id}>
              {/* NUMBER */}

              <div className="chapter-number">
                {String(chapter.id).padStart(2, "0")}
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
                onClick={() => handleChapter(chapter)}
              >
                Start
                <ChevronRight size={18} />
              </button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default FreeLearning;
