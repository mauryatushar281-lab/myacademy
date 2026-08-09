import {
  ArrowLeft,
  PlayCircle,
  FileText,
  CircleHelp,
  BookOpen,
  ChevronRight,
  Clock,
  Star,
  CheckCircle2,
  Download,
  ListVideo,
  GraduationCap,
} from "lucide-react";

import { useNavigate, useParams } from "react-router-dom";

import "./AnimationPlayer.css";

export default function AnimationPlayer() {
  const { className, subject, chapterId, chapterSlug } = useParams();

  const navigate = useNavigate();

  // --------------------------------------------------
  // Temporary frontend data
  // Later this data will come from your backend API
  // --------------------------------------------------

  const chapterData = {
    className: className,
    subject: subject,
    chapterId: chapterId,
    chapterSlug: chapterSlug,

    title: "Electrostatics",

    description:
      "Understand the fundamental concepts of electrostatics through visual animations, detailed explanations and practice resources.",

    animationTitle: "Introduction to Electrostatics",

    animationDescription:
      "Learn the basic concepts of electric charge, electric field and electrostatic interaction through an easy-to-understand animation.",

    duration: "12 min",

    level: "Beginner Friendly",

    videoUrl: "/videos/electrostatics.mp4",

    topics: [
      "Electric Charge",
      "Coulomb's Law",
      "Electric Field",
      "Electric Potential",
    ],

    resources: {
      notes: true,
      mcq: true,
      quiz: true,
    },
  };

  // --------------------------------------------------
  // Navigation
  // --------------------------------------------------

  const goBack = () => {
    navigate(-1);
  };

  const goToNotes = () => {
    navigate(
      `/free-learning/${className}/${subject}/${chapterId}/${chapterSlug}/notes`,
    );
  };

  const goToMCQ = () => {
    navigate(
      `/free-learning/${className}/${subject}/${chapterId}/${chapterSlug}/mcq`,
    );
  };

  const goToQuiz = () => {
    navigate(
      `/free-learning/${className}/${subject}/${chapterId}/${chapterSlug}/quiz`,
    );
  };

  const goToChapters = () => {
    navigate(`/free-learning/${className}/${subject}`);
  };

  return (
    <main className="animation-page">
      {/* =================================================
          BACK BUTTON
      ================================================= */}

      <button className="back-btn" onClick={goBack}>
        <ArrowLeft size={18} />
        Back
      </button>

      {/* =================================================
          BREADCRUMB
      ================================================= */}

      <nav className="animation-breadcrumb">
        <button onClick={() => navigate("/")}>Home</button>

        <ChevronRight size={15} />

        <button onClick={() => navigate(`/free-learning`)}>
          Free Learning
        </button>

        <ChevronRight size={15} />

        <button
          onClick={() => navigate(`/free-learning/${className}/${subject}`)}
        >
          {className}
        </button>

        <ChevronRight size={15} />

        <button
          onClick={() => navigate(`/free-learning/${className}/${subject}`)}
        >
          {subject}
        </button>

        <ChevronRight size={15} />

        <span>{chapterData.title}</span>
      </nav>

      {/* =================================================
          HEADER
      ================================================= */}

      <section className="animation-header">
        <div className="header-content">
          <span className="learning-badge">FREE LEARNING</span>

          <span className="chapter-label">Chapter {chapterId}</span>

          <h1>{chapterData.title}</h1>

          <p>{chapterData.description}</p>

          {/* META */}

          <div className="animation-meta">
            <span>
              <Clock size={16} />
              {chapterData.duration}
            </span>

            <span>
              <Star size={16} />
              {chapterData.level}
            </span>

            <span>
              <PlayCircle size={16} />
              Animation
            </span>
          </div>
        </div>

        {/* HEADER ICON */}

        <div className="header-icon">
          <GraduationCap size={75} />
        </div>
      </section>

      {/* =================================================
          MAIN CONTENT
      ================================================= */}

      <section className="animation-content">
        {/* =================================================
            VIDEO PLAYER
        ================================================= */}

        <div className="video-section">
          <div className="section-heading">
            <div>
              <span>VISUAL LEARNING</span>

              <h2>{chapterData.animationTitle}</h2>
            </div>

            <span className="video-duration">{chapterData.duration}</span>
          </div>

          <div className="video-card">
            <video
              controls
              controlsList="nodownload"
              preload="metadata"
              poster="/assets/hero.png"
            >
              <source src={chapterData.videoUrl} type="video/mp4" />
              Your browser does not support the video player.
            </video>
          </div>
        </div>

        {/* =================================================
            ABOUT ANIMATION
        ================================================= */}

        <section className="description-card">
          <div className="description-icon">
            <PlayCircle size={24} />
          </div>

          <div>
            <span className="card-label">ABOUT THIS ANIMATION</span>

            <h2>What will you learn?</h2>

            <p>{chapterData.animationDescription}</p>
          </div>
        </section>

        {/* =================================================
            TOPICS
        ================================================= */}

        <section className="topics-section">
          <div className="section-heading">
            <div>
              <span>CHAPTER TOPICS</span>

              <h2>What you'll learn</h2>
            </div>
          </div>

          <div className="topics-grid">
            {chapterData.topics.map((topic, index) => (
              <div className="topic-card" key={index}>
                <CheckCircle2 size={20} />

                <span>{topic}</span>
              </div>
            ))}
          </div>
        </section>

        {/* =================================================
            LEARNING RESOURCES
        ================================================= */}

        <section className="resources-section">
          <div className="section-heading">
            <div>
              <span>CONTINUE LEARNING</span>

              <h2>Chapter Resources</h2>

              <p>Practice what you have learned using these resources.</p>
            </div>
          </div>

          <div className="resource-grid">
            {/* NOTES */}

            <button className="resource-card" onClick={goToNotes}>
              <div className="resource-icon notes-icon">
                <FileText size={30} />
              </div>

              <div className="resource-content">
                <h3>Notes</h3>

                <p>Read detailed notes and revise important concepts.</p>

                <span>
                  Open Notes
                  <ChevronRight size={16} />
                </span>
              </div>
            </button>

            {/* MCQ */}

            <button className="resource-card" onClick={goToMCQ}>
              <div className="resource-icon mcq-icon">
                <BookOpen size={30} />
              </div>

              <div className="resource-content">
                <h3>MCQ Practice</h3>

                <p>Practice important multiple choice questions.</p>

                <span>
                  Practice MCQs
                  <ChevronRight size={16} />
                </span>
              </div>
            </button>

            {/* QUIZ */}

            <button className="resource-card" onClick={goToQuiz}>
              <div className="resource-icon quiz-icon">
                <CircleHelp size={30} />
              </div>

              <div className="resource-content">
                <h3>Quiz</h3>

                <p>Test your understanding of this chapter.</p>

                <span>
                  Start Quiz
                  <ChevronRight size={16} />
                </span>
              </div>
            </button>
          </div>
        </section>

        {/* =================================================
            CHAPTER NAVIGATION
        ================================================= */}

        <section className="chapter-navigation">
          <button className="chapter-list-btn" onClick={goToChapters}>
            <ListVideo size={20} />
            View All Chapters
          </button>
        </section>
      </section>
    </main>
  );
}

// import {
//   ArrowLeft,
//   PlayCircle,
//   FileText,
//   CircleHelp,
//   BookOpen,
//   ChevronRight,
//   Clock,
//   Star,
// } from "lucide-react";

// import { useNavigate, useParams } from "react-router-dom";

// import "./AnimationPlayer.css";

// export default function AnimationPlayer() {
//   const { className, subject, chapterId } = useParams();

//   const navigate = useNavigate();

//   return (
//     <section className="animation-page">
//       {/* Breadcrumb */}

//       <div className="breadcrumb">
//         Home
//         <ChevronRight size={16} />
//         Free Learning
//         <ChevronRight size={16} />
//         {className}
//         <ChevronRight size={16} />
//         {subject}
//       </div>

//       {/* Header */}

//       <div className="animation-header">
//         <button className="back-btn" onClick={() => navigate(-1)}>
//           <ArrowLeft size={18} />
//           Back
//         </button>

//         <div>
//           <h1>Daniell Cell Animation</h1>

//           <div className="animation-meta">
//             <span>
//               <Clock size={16} />
//               12 min
//             </span>

//             <span>
//               <Star size={16} />
//               Beginner Friendly
//             </span>
//           </div>
//         </div>
//       </div>

//       {/* Player */}

//       <div className="video-card">
//         <video controls>
//           <source src="/videos/daniell-cell.mp4" />
//         </video>
//       </div>

//       {/* Description */}

//       <div className="description-card">
//         <h2>About this Animation</h2>

//         <p>
//           Learn how the Daniell Cell works using an interactive animation.
//           Observe electron flow, ion movement, oxidation, reduction and the role
//           of the salt bridge.
//         </p>
//       </div>

//       {/* Resources */}

//       <div className="resource-grid">
//         <div className="resource-card" onClick={() => navigate("../notes")}>
//           <FileText size={36} />

//           <h3>Notes</h3>

//           <p>Download chapter notes.</p>
//         </div>

//         <div className="resource-card" onClick={() => navigate("../mcq")}>
//           <BookOpen size={36} />

//           <h3>MCQ Practice</h3>

//           <p>Practice important questions.</p>
//         </div>

//         <div className="resource-card" onClick={() => navigate("../quiz")}>
//           <CircleHelp size={36} />

//           <h3>Quiz</h3>

//           <p>Test your understanding.</p>
//         </div>
//       </div>
//     </section>
//   );
// }
