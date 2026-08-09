import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  CheckCircle2,
  ChevronRight,
  Clock3,
  FileQuestion,
  GraduationCap,
  Lightbulb,
  PlayCircle,
  Target,
  Trophy,
} from "lucide-react";

import { useNavigate, useParams } from "react-router-dom";

import "./QuizHome.css";

export default function QuizHome() {
  const { className, subject, chapterId, chapterSlug } = useParams();

  const navigate = useNavigate();

  // =========================================================
  // CHAPTER DATA
  // Later you can replace this with API data
  // =========================================================

  const chapterData = {
    title: formatSlug(chapterSlug),

    description:
      "Test your understanding of this chapter through carefully designed multiple-choice questions. Practice important concepts and identify areas that need revision.",

    questions: 10,

    duration: "15 min",

    difficulty: "Beginner",

    topics: [
      "Electric Charge",
      "Coulomb's Law",
      "Electric Field",
      "Electric Potential",
    ],
  };

  // =========================================================
  // HELPERS
  // =========================================================

  function formatSlug(slug) {
    if (!slug) return "Chapter Quiz";

    return slug
      .replace(/-/g, " ")
      .replace(/\b\w/g, (char) => char.toUpperCase());
  }

  // =========================================================
  // NAVIGATION
  // =========================================================

  const startQuiz = () => {
    navigate(
      `/free-learning/${className}/${subject}/${chapterId}/${chapterSlug}/quiz/start`,
    );
  };

  const goBack = () => {
    navigate(-1);
  };

  const goToChapter = () => {
    navigate(
      `/free-learning/${className}/${subject}/${chapterId}/${chapterSlug}`,
    );
  };

  const goToChapters = () => {
    navigate(`/free-learning/${className}/${subject}`);
  };

  return (
    <main className="quiz-home-page">
      {/* =====================================================
          BACK BUTTON
      ===================================================== */}

      <button
        type="button"
        className="quiz-back-button"
        onClick={goBack}
        aria-label="Go back"
      >
        <ArrowLeft size={18} />
        <span>Back</span>
      </button>

      {/* =====================================================
          BREADCRUMB
      ===================================================== */}

      <nav className="quiz-breadcrumb" aria-label="Breadcrumb">
        <button type="button" onClick={() => navigate("/")}>
          Home
        </button>

        <ChevronRight size={15} />

        <button type="button" onClick={() => navigate("/free-learning")}>
          Free Learning
        </button>

        <ChevronRight size={15} />

        <button
          type="button"
          onClick={() => navigate(`/free-learning/${className}`)}
        >
          {className}
        </button>

        <ChevronRight size={15} />

        <button
          type="button"
          onClick={() => navigate(`/free-learning/${className}/${subject}`)}
        >
          {subject}
        </button>

        <ChevronRight size={15} />

        <span>{chapterData.title}</span>

        <ChevronRight size={15} />

        <strong>Quiz</strong>
      </nav>

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="quiz-hero">
        <div className="quiz-hero-background-circle circle-one" />
        <div className="quiz-hero-background-circle circle-two" />

        <div className="quiz-hero-content">
          {/* Badge */}

          <div className="quiz-badge">
            <Trophy size={15} />
            FREE QUIZ
          </div>

          {/* Chapter */}

          <span className="quiz-chapter-label">CHAPTER {chapterId}</span>

          {/* Title */}

          <h1>
            {chapterData.title}
            <span> Quiz</span>
          </h1>

          {/* Description */}

          <p className="quiz-hero-description">{chapterData.description}</p>

          {/* Stats */}

          <div className="quiz-stats">
            <div className="quiz-stat">
              <div className="quiz-stat-icon">
                <FileQuestion size={20} />
              </div>

              <div>
                <strong>{chapterData.questions}</strong>
                <span>Questions</span>
              </div>
            </div>

            <div className="quiz-stat">
              <div className="quiz-stat-icon">
                <Clock3 size={20} />
              </div>

              <div>
                <strong>{chapterData.duration}</strong>
                <span>Duration</span>
              </div>
            </div>

            <div className="quiz-stat">
              <div className="quiz-stat-icon">
                <Target size={20} />
              </div>

              <div>
                <strong>{chapterData.difficulty}</strong>
                <span>Level</span>
              </div>
            </div>
          </div>

          {/* CTA */}

          <div className="quiz-actions">
            <button
              type="button"
              className="start-quiz-button"
              onClick={startQuiz}
            >
              <PlayCircle size={21} />

              <span>Start Quiz</span>

              <ArrowRight size={19} />
            </button>

            <button
              type="button"
              className="view-chapter-button"
              onClick={goToChapter}
            >
              <BookOpen size={18} />
              Review Chapter
            </button>
          </div>
        </div>

        {/* Hero Illustration */}

        <div className="quiz-hero-visual">
          <div className="quiz-icon-glow" />

          <div className="quiz-main-icon">
            <GraduationCap size={85} />
          </div>

          <div className="floating-card floating-card-top">
            <CheckCircle2 size={18} />
            <span>Practice</span>
          </div>

          <div className="floating-card floating-card-bottom">
            <Target size={18} />
            <span>Improve</span>
          </div>
        </div>
      </section>

      {/* =====================================================
          QUIZ INFORMATION
      ===================================================== */}

      <section className="quiz-information">
        <div className="quiz-section-heading">
          <span>BEFORE YOU START</span>

          <h2>Quiz Information</h2>

          <p>Here's what you should know before starting your quiz.</p>
        </div>

        <div className="quiz-info-grid">
          <div className="quiz-info-card">
            <div className="quiz-info-icon">
              <FileQuestion size={24} />
            </div>

            <div>
              <strong>{chapterData.questions}</strong>
              <span>Total Questions</span>
            </div>
          </div>

          <div className="quiz-info-card">
            <div className="quiz-info-icon">
              <Clock3 size={24} />
            </div>

            <div>
              <strong>{chapterData.duration}</strong>
              <span>Estimated Time</span>
            </div>
          </div>

          <div className="quiz-info-card">
            <div className="quiz-info-icon">
              <Target size={24} />
            </div>

            <div>
              <strong>MCQ</strong>
              <span>Question Type</span>
            </div>
          </div>

          <div className="quiz-info-card">
            <div className="quiz-info-icon">
              <Trophy size={24} />
            </div>

            <div>
              <strong>Free</strong>
              <span>Access</span>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          TOPICS
      ===================================================== */}

      <section className="quiz-topics-section">
        <div className="quiz-section-heading">
          <span>CHAPTER COVERAGE</span>

          <h2>Topics Covered</h2>

          <p>Questions in this quiz are based on these important concepts.</p>
        </div>

        <div className="quiz-topics-grid">
          {chapterData.topics.map((topic, index) => (
            <div className="quiz-topic-card" key={topic}>
              <div className="quiz-topic-number">
                {String(index + 1).padStart(2, "0")}
              </div>

              <div className="quiz-topic-content">
                <CheckCircle2 size={18} />

                <span>{topic}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* =====================================================
          INSTRUCTIONS
      ===================================================== */}

      <section className="quiz-instructions">
        <div className="quiz-instructions-icon">
          <Lightbulb size={27} />
        </div>

        <div>
          <span>QUICK TIPS</span>

          <h2>Before starting your quiz</h2>

          <ul>
            <li>
              <CheckCircle2 size={17} />
              Read each question carefully.
            </li>

            <li>
              <CheckCircle2 size={17} />
              Choose the best answer from the given options.
            </li>

            <li>
              <CheckCircle2 size={17} />
              Try to complete the quiz without unnecessary guessing.
            </li>

            <li>
              <CheckCircle2 size={17} />
              Review the chapter if you need additional preparation.
            </li>
          </ul>
        </div>
      </section>

      {/* =====================================================
          BOTTOM CTA
      ===================================================== */}

      <section className="quiz-bottom-cta">
        <div>
          <span>READY TO TEST YOUR KNOWLEDGE?</span>

          <h2>Let's start your {chapterData.title} quiz.</h2>

          <p>Take the quiz and find out how well you understand the chapter.</p>
        </div>

        <div className="quiz-bottom-actions">
          <button
            type="button"
            className="secondary-chapter-button"
            onClick={goToChapters}
          >
            View Chapters
          </button>

          <button
            type="button"
            className="bottom-start-button"
            onClick={startQuiz}
          >
            Start Quiz
            <ArrowRight size={19} />
          </button>
        </div>
      </section>
    </main>
  );
}

// import { useNavigate, useParams } from "react-router-dom";
// import { ArrowLeft, BookOpen, PlayCircle } from "lucide-react";
// import "./QuizHome.css";

// function QuizHome() {
//   const { className, subject, chapterId, chapterSlug } = useParams();
//   const navigate = useNavigate();

//   const startQuiz = () => {
//     navigate(
//       `/free-learning/${className}/${subject}/${chapterId}/${chapterSlug}/quiz/start`,
//     );
//   };

//   return (
//     <main className="quiz-home-page">
//       <button className="quiz-back-button" onClick={() => navigate(-1)}>
//         <ArrowLeft size={18} />
//         Back
//       </button>

//       <section className="quiz-hero">
//         <div className="quiz-hero-content">
//           <span className="quiz-badge">FREE LEARNING</span>

//           <span className="quiz-label">CHAPTER {chapterId}</span>

//           <h1>
//             {chapterSlug
//               ?.replace(/-/g, " ")
//               .replace(/\b\w/g, (char) => char.toUpperCase())}
//           </h1>

//           <p>
//             Test your understanding with an interactive quiz designed to
//             strengthen your concepts.
//           </p>

//           <div className="quiz-stats">
//             <div>
//               <strong>10</strong>
//               <span>Questions</span>
//             </div>

//             <div>
//               <strong>15</strong>
//               <span>Minutes</span>
//             </div>

//             <div>
//               <strong>MCQ</strong>
//               <span>Format</span>
//             </div>
//           </div>

//           <button className="start-quiz-button" onClick={startQuiz}>
//             <PlayCircle size={20} />
//             Start Quiz
//           </button>
//         </div>

//         <div className="quiz-hero-icon">
//           <BookOpen size={90} />
//         </div>
//       </section>
//     </main>
//   );
// }

// export default QuizHome;
