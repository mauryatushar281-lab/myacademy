import { useNavigate } from "react-router-dom";
import { GraduationCap, ArrowRight } from "lucide-react";
import "./FreeLearning.css";

const classes = [
  {
    name: "Class 11",
    description: "Physics • Chemistry • Maths",
  },
  {
    name: "Class 12",
    description: "Complete Board Preparation",
  },
];

export default function FreeLearning() {
  const navigate = useNavigate();

  return (
    <section className="free-learning">
      <h1>Free Learning</h1>

      <p>
        Learn concepts through animations, notes, quizzes and practice
        completely free.
      </p>

      <div className="class-grid">
        {classes.map((item, index) => (
          <div
            key={index}
            className="class-card"
            onClick={() => navigate(`/free-learning/${item.name}`)}
          >
            <div className="class-icon">
              <GraduationCap size={34} />
            </div>

            <h2>{item.name}</h2>

            <p>{item.description}</p>

            <div className="class-btn">
              Explore <ArrowRight size={18} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
