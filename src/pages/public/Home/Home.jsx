import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getCourses } from "../../../services/courseService";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import Hero from "@/components/Hero/Hero";
import CourseCard from "@/components/CourseCard/CourseCard";
import { GraduationCap, BadgeCheck, MonitorPlay } from "lucide-react";

import "./Home.css";

function Home() {
  const [courses, setCourses] = useState([]);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const data = await getCourses();

        setCourses(data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchCourses();
  }, []);

  return (
    <>
      <Navbar />

      <Hero />

      {/* Featured Courses */}
      <section className="featured-section">
        <h2 className="section-title">Featured Courses</h2>

        <div className="course-grid">
          {loading ? (
            <h2>Loading courses...</h2>
          ) : (
            courses.map((course) => (
              <CourseCard key={course._id} course={course} />
            ))
          )}
        </div>
      </section>

      {/* Why Choose Us */}
      {/* <section className="why-us">
        <h2 className="section-title">Why Choose Us?</h2>

        <div className="why-grid">
          <div className="why-card">
            <h3>👨‍🏫 Expert Instructors</h3>
            <p>Learn from experienced educators and industry professionals.</p>
          </div>

          <div className="why-card">
            <h3>🎥 Lifetime Access</h3>
            <p>Access your purchased courses anytime, anywhere.</p>
          </div>

          <div className="why-card">
            <h3>📝 Assignments & Tests</h3>
            <p>Practice with quizzes, assignments, and projects.</p>
          </div>
        </div>
      </section> */}
      {/* <section className="why-us">
  <h2 className="section-title">Why Choose Us?</h2>

  <div className="why-grid">

    <div className="why-card">
      <div className="why-icon">
        <GraduationCap size={34} />
      </div>

      <h3>Expert Instructors</h3>

      <p>
        Learn from experienced educators and industry professionals.
      </p>
    </div>

    <div className="why-card">
      <div className="why-icon">
        <MonitorPlay size={34} />
      </div>

      <h3>Lifetime Access</h3>

      <p>
        Access your purchased courses anytime, anywhere.
      </p>
    </div>

    <div className="why-card">
      <div className="why-icon">
        <ClipboardCheck size={34} />
      </div>

      <h3>Assignments & Tests</h3>

      <p>
        Practice with quizzes, assignments, and projects.
      </p>
    </div>

  </div>
</section> */}

      <section className="why-us">
        <h2 className="section-title">Why Choose Us?</h2>

        <div className="why-grid">
          <div className="why-card">
            <div className="why-icon">
              <GraduationCap size={40} />
            </div>

            <h3>Expert Instructors</h3>

            <p>Learn from experienced educators and industry professionals.</p>
          </div>

          <div className="why-card">
            <div className="why-icon">
              <MonitorPlay size={40} />
            </div>

            <h3>Lifetime Access</h3>

            <p>Access your purchased courses anytime from any device.</p>
          </div>

          <div className="why-card">
            <div className="why-icon">
              <BadgeCheck size={40} />
            </div>

            <h3>Assignments & Tests</h3>

            <p>Practice with quizzes, assignments and real-world projects.</p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="testimonial-section">
        <h2 className="section-title">Student Reviews</h2>

        <div className="testimonial-grid">
          <div className="testimonial-card">
            <h3>⭐⭐⭐⭐⭐</h3>

            <p>
              Best platform for learning MERN Stack. Everything is explained
              clearly.
            </p>

            <h4>- Rahul Sharma</h4>
          </div>

          <div className="testimonial-card">
            <h3>⭐⭐⭐⭐⭐</h3>

            <p>Amazing courses and practical projects. Highly recommended.</p>

            <h4>- Priya Singh</h4>
          </div>
        </div>
      </section>

      {/* Call To Action */}
      <section className="cta-section">
        <h2>Start Learning Today</h2>

        <p>
          Join thousands of students and build your future with expert-led
          courses.
        </p>

        <button onClick={() => navigate("/courses")}>Browse Courses</button>
      </section>

      <Footer />
    </>
  );
}

export default Home;
