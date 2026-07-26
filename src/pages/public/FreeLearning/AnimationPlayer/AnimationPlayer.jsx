import {
  ArrowLeft,
  PlayCircle,
  FileText,
  CircleHelp,
  BookOpen,
  ChevronRight,
  Clock,
  Star,
} from "lucide-react";

import { useNavigate, useParams } from "react-router-dom";

import "./AnimationPlayer.css";

export default function AnimationPlayer() {
  const { className, subject, chapterId } = useParams();

  const navigate = useNavigate();

  return (
    <section className="animation-page">
      {/* Breadcrumb */}

      <div className="breadcrumb">
        Home
        <ChevronRight size={16} />
        Free Learning
        <ChevronRight size={16} />
        {className}
        <ChevronRight size={16} />
        {subject}
      </div>

      {/* Header */}

      <div className="animation-header">
        <button className="back-btn" onClick={() => navigate(-1)}>
          <ArrowLeft size={18} />
          Back
        </button>

        <div>
          <h1>Daniell Cell Animation</h1>

          <div className="animation-meta">
            <span>
              <Clock size={16} />
              12 min
            </span>

            <span>
              <Star size={16} />
              Beginner Friendly
            </span>
          </div>
        </div>
      </div>

      {/* Player */}

      <div className="video-card">
        <video controls>
          <source src="/videos/daniell-cell.mp4" />
        </video>
      </div>

      {/* Description */}

      <div className="description-card">
        <h2>About this Animation</h2>

        <p>
          Learn how the Daniell Cell works using an interactive animation.
          Observe electron flow, ion movement, oxidation, reduction and the role
          of the salt bridge.
        </p>
      </div>

      {/* Resources */}

      <div className="resource-grid">
        <div className="resource-card" onClick={() => navigate("../notes")}>
          <FileText size={36} />

          <h3>Notes</h3>

          <p>Download chapter notes.</p>
        </div>

        <div className="resource-card" onClick={() => navigate("../mcq")}>
          <BookOpen size={36} />

          <h3>MCQ Practice</h3>

          <p>Practice important questions.</p>
        </div>

        <div className="resource-card" onClick={() => navigate("../quiz")}>
          <CircleHelp size={36} />

          <h3>Quiz</h3>

          <p>Test your understanding.</p>
        </div>
      </div>
    </section>
  );
}
