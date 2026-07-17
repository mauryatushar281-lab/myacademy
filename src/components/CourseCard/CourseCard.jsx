import { enrollCourse } from "../../services/enrollmentService";
import { useNavigate } from "react-router-dom";

import "./CourseCard.css";

function CourseCard({ course }) {
  const navigate = useNavigate();
  const handleEnroll = async (id) => {
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        alert("Please login first");
        navigate("/login");
        return;
      }
      const res = await enrollCourse(id);
      alert(res.message);
    } catch (error) {
      console.log(error);
      alert(error.response?.data?.message || "Enrollment failed");
    }
  };
  return (
    <div className="course-card">
      <div className="course-image">
        <img src={course.thumbnail} alt={course.title} />
      </div>

      <div className="course-content">
        <span className="course-badge">Bestseller</span>

        <h2 className="course-title">{course.title}</h2>

        <p className="course-instructor">👨‍🏫 {course.instructor}</p>

        <p className="course-duration">⏱️ {course.duration}</p>

        <div className="course-rating">⭐ 4.9 (500+ Reviews)</div>

        <div className="course-footer">
          <p className="course-price">₹{course.price}</p>

          <button
            className="enroll-btn"
            onClick={() => handleEnroll(course._id)}
          >
            Enroll Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default CourseCard;

// import { enrollCourse } from "../services/enrollmentService";
// import { useNavigate } from "react-router-dom";

// function CourseCard({ course }) {
//   const navigate = useNavigate();
//   const handleEnroll = async (id) => {
//     try {
//       const token = localStorage.getItem("token");
//       if (!token) {
//         alert("Please login first");
//         navigate("/login");
//         return;
//       }
//       const res = await enrollCourse(id);
//       alert(res.message);
//     } catch (error) {
//       console.log(error);
//       alert(error.response?.data?.message || "Enrollment failed");
//     }
//   };

//   return (
//     <div className="course-card">
//       <img src={course.thumbnail} />

//       <h3>{course.title}</h3>

//       <p>👨‍🏫 {course.instructor}</p>
//       <p className="course-duration">⏱️ {course.duration}</p>
//       <p>₹ {course.price}</p>

//       <button onClick={() => handleEnroll(course._id)}>Enroll Now</button>
//     </div>
//   );
// }
// export default CourseCard;
