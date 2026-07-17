import { useParams } from "react-router-dom";
import { BookOpen, Play, Users, ArrowRight, GraduationCap } from "lucide-react";

import "./CourseCategory.css";

function CourseCategory() {
  const { category } = useParams();

  const categoryData = {
    class11: {
      title: "Class 11",
      subtitle: "Build a strong foundation for your future",
      courses: ["Physics", "Chemistry", "Mathematics", "Biology"],
    },

    class12: {
      title: "Class 12",
      subtitle: "Master board exams and competitive preparation",
      courses: ["Physics", "Chemistry", "Mathematics", "English"],
    },

    jee: {
      title: "JEE Preparation",
      subtitle: "Crack engineering entrance exams with expert guidance",
      courses: ["JEE Physics", "JEE Chemistry", "JEE Mathematics"],
    },

    ssc: {
      title: "SSC Preparation",
      subtitle: "Prepare smarter for government examinations",
      courses: ["Reasoning", "English", "General Awareness"],
    },
  };

  const data = categoryData[category] || {
    title: category,
    subtitle: "Explore our courses",
    courses: [],
  };

  return (
    <div className="category-page">
      <section className="category-hero">
        <div className="hero-content">
          <div className="badge">
            <GraduationCap size={18} />
            Premium Learning
          </div>

          <h1>{data.title} Courses</h1>

          <p className="hero-text">{data.subtitle}</p>

          <button>
            <Play size={18} />
            Start Learning
          </button>
        </div>

        <div className="hero-card">
          <div className="hero-icon">
            <BookOpen size={45} />
          </div>

          <h2>Learn Anywhere</h2>

          <p>Study anytime, anywhere with video lessons, notes and tests.</p>

          <div className="student-box">
            <Users size={28} />

            <div>
              <strong>10K+ Students</strong>

              <p>Already learning with us</p>
            </div>
          </div>
        </div>
      </section>

      <section className="course-section">
        {/* <div className="section-title">
          <BookOpen />

          <div>
            <h2>Available Courses</h2>

            <p>Explore our popular courses in this category</p>
          </div>
        </div> */}

        <div className="section-title">
          <BookOpen />
          <div className="title-badge">Learning Library</div>

          <h2>Explore Our Courses</h2>

          <p>
            Upgrade your skills with expert-designed courses, interactive
            lessons and practice materials.
          </p>

          <div className="title-stats">
            <div>
              <strong>100+</strong>
              <span>Courses</span>
            </div>

            <div>
              <strong>10K+</strong>
              <span>Students</span>
            </div>

            <div>
              <strong>24/7</strong>
              <span>Learning</span>
            </div>
          </div>
        </div>

        <div className="course-grid">
          {data.courses.map((course, index) => (
            <div className="course-card" key={index}>
              <div className="course-icon">
                <BookOpen size={42} />
              </div>

              <h3>{course}</h3>

              <p>Learn concepts, practice questions and improve skills.</p>

              <button>
                View Course
                <ArrowRight size={18} />
              </button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default CourseCategory;
