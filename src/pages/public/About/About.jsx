import "./About.css";
import { Laptop, BookOpen, Target, Trophy } from "lucide-react";
import Navbar from "../../../components/Navbar/Navbar";
function About() {
  return (
    <div className="about-container">
      <Navbar />
      {/* Hero Section */}
      <section className="about-hero">
        <h1>About My-Academy</h1>
        <p>
          Empowering students with high-quality education, practical skills, and
          career-focused learning.
        </p>
      </section>

      {/* Story Section */}
      <section className="about-section">
        <div className="about-content">
          <div>
            <h2>My Story</h2>
            <p>
              Hi, I'm Tushar Maurya, a B.Tech graduate and educator passionate
              about helping students learn Mathematics and Technology.
            </p>

            <p>
              I started My-Academy with a mission to provide affordable and
              high-quality education to students across India.
            </p>
          </div>

          <img src="/TusharPic.jpeg" alt="Instructor" />
        </div>
        <span className="story-badge">Founder & Educator</span>
      </section>

      {/* Statistics */}
      <section className="stats-section">
        <div className="stat-card">
          <h2>100+</h2>
          <p>Students</p>
        </div>

        <div className="stat-card">
          <h2>20+</h2>
          <p>Courses</p>
        </div>

        <div className="stat-card">
          <h2>95%</h2>
          <p>Success Rate</p>
        </div>

        <div className="stat-card">
          <h2>4.9★</h2>
          <p>Student Rating</p>
        </div>
      </section>

      {/* Mission */}
      <section className="mission-section">
        <h2>Our Mission</h2>

        <p>
          To make quality education accessible, affordable, and practical for
          every student.
        </p>
      </section>

      {/* Achievements */}
      <section className="achievement-section">
        <h2>Achievements</h2>

        {/* <div className="achievement-grid">
          <div className="achievement-card">
            📚
            <h3>Quality Courses</h3>
            <p>Well-structured learning paths.</p>
          </div>

          <div className="achievement-card">
            🎯
            <h3>Career Focused</h3>
            <p>Practical and industry-oriented content.</p>
          </div>

          <div className="achievement-card">
            🏆
            <h3>Student Success</h3>
            <p>Helping students achieve their goals.</p>
          </div>
        </div> */}
        <div className="achievement-grid">
          <div className="achievement-card">
            <div className="achievement-icon">
              <BookOpen size={38} />
            </div>

            <h3>Quality Courses</h3>

            <p>
              Well-structured learning paths designed for effective learning.
            </p>
          </div>

          <div className="achievement-card">
            <div className="achievement-icon">
              <Target size={38} />
            </div>

            <h3>Career Focused</h3>

            <p>
              Practical and industry-oriented content for real-world success.
            </p>
          </div>

          <div className="achievement-card">
            <div className="achievement-icon">
              <Trophy size={34} />
            </div>

            <h3>Student Success</h3>

            <p>Helping students achieve academic and professional goals.</p>
          </div>
        </div>
      </section>
      {/* Why Choose Us */}

      <section className="why-section">
        <div className="section-heading">
          <h2>Why Choose My-Academy?</h2>

          <p>
            We focus on practical learning, career growth and student success.
          </p>
        </div>

        <div className="why-grid">
          <div className="why-card">
            <div className="why-icon">
              <Laptop size={38} />
            </div>

            <h3>Industry Skills</h3>

            <p>
              Learn modern technologies and tools used by leading companies.
            </p>
          </div>

          <div className="why-card">
            <div className="why-icon">
              <BookOpen size={38} />
            </div>

            <h3>Structured Courses</h3>

            <p>
              Follow step-by-step learning paths designed for maximum
              understanding.
            </p>
          </div>

          <div className="why-card">
            <div className="why-icon">
              <Target size={38} />
            </div>

            <h3>Career Focused</h3>

            <p>Build practical skills that create real career opportunities.</p>
          </div>
        </div>
      </section>

      {/* Journey */}

      <section className="journey-section">
        <div className="section-header">
          <span className="section-tag">🚀 Growth Journey</span>

          <h2>My Teaching Journey</h2>

          <p>
            A journey of learning, teaching, and building educational
            experiences for students.
          </p>
        </div>

        <div className="timeline">
          <div className="timeline-item">
            <div className="timeline-year">2022</div>

            <div className="timeline-content">
              <h3>B.Tech Journey Started</h3>

              <p>
                Began pursuing B.Tech while exploring Mathematics, Programming,
                and Technology.
              </p>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-year">2023</div>

            <div className="timeline-content">
              <h3>Started Teaching Students</h3>

              <p>
                Mentored students in Mathematics and problem-solving techniques.
              </p>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-year">2025</div>

            <div className="timeline-content">
              <h3>Created Online Courses</h3>

              <p>
                Developed structured learning programs for Mathematics and Web
                Development.
              </p>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-year">2026</div>

            <div className="timeline-content">
              <h3>Launched My-Academy</h3>

              <p>
                Started an online learning platform helping students learn
                skills for the future.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Student Success */}

      <section className="success-section">
        <h2>Student Success Stories</h2>

        <div className="success-grid">
          <div className="success-card">
            ⭐⭐⭐⭐⭐
            <p>Mathematics became easy after joining My-Academy.</p>
            <h4>- Rahul Kumar</h4>
          </div>

          <div className="success-card">
            ⭐⭐⭐⭐⭐
            <p>MERN course helped me build my first project.</p>
            <h4>- Priya Singh</h4>
          </div>

          <div className="success-card">
            ⭐⭐⭐⭐⭐
            <p>Excellent teaching style and practical examples.</p>
            <h4>- Amit Verma</h4>
          </div>
        </div>
      </section>

      {/* CTA */}

      <section className="about-cta">
        <h2>Ready To Start Learning?</h2>

        <p>Join thousands of students learning with us.</p>

        <button>Explore Courses</button>
      </section>
    </div>
  );
}

export default About;
