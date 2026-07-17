import { Edit, Trash2, Star, Users, BookOpen, Clock } from "lucide-react";

import "./AdminCourseCard.css";

function AdminCourseCard({ course, editCourse, deleteCourse }) {
  return (
    <div className="course-card">
      <div className="thumbnail-wrapper">
        <img src={course.thumbnail} alt={course.title} />

        <div className="image-overlay" />

        <div className="rating">
          <Star size={14} fill="currentColor" />
          <span>{course.rating || "4.9"}</span>
        </div>

        <div
          className={`course-status ${
            course.status?.toLowerCase() || "published"
          }`}
        >
          {course.status || "Published"}
        </div>
      </div>

      <div className="course-info">
        <h2>{course.title}</h2>

        <p className="description">{course.description}</p>

        <div className="course-meta">
          <div className="meta-item">
            <Users size={18} />
            <span>{course.students || 0}</span>
            <small>Students</small>
          </div>

          <div className="meta-item">
            <BookOpen size={18} />
            <span>{course.lectures || 0}</span>
            <small>Lectures</small>
          </div>

          <div className="meta-item">
            <Clock size={18} />
            <span>{course.duration || "0h"}</span>
            <small>Duration</small>
          </div>
        </div>

        <div className="instructor">
          <div className="avatar">{course.instructor?.charAt(0)}</div>

          <div>
            <h4>{course.instructor}</h4>

            <span className="category">{course.category}</span>
          </div>
        </div>

        <div className="price-row">
          <div>
            <h3 className="price">₹{course.price}</h3>

            {course.originalPrice && (
              <small className="old-price">₹{course.originalPrice}</small>
            )}
          </div>
        </div>

        <div className="progress">
          <div className="progress-bar">
            <div
              className="progress-fill"
              style={{
                width: `${course.progress || 100}%`,
              }}
            />
          </div>

          <small>{course.progress || 100}% Completed</small>
        </div>

        <div className="actions">
          <button className="edit" onClick={() => editCourse(course)}>
            <Edit size={18} />
            Edit
          </button>

          <button className="delete" onClick={() => deleteCourse(course._id)}>
            <Trash2 size={18} />
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default AdminCourseCard;

// import { Edit, Trash2 } from "lucide-react";
// import "./AdminCourseCard.css";

// function CourseCard({ course, editCourse, deleteCourse }) {
//   return (
//     <div className="course-card">
//       <img src={course.thumbnail} alt={course.title} />

//       <div className="course-info">
//         <h2>{course.title}</h2>

//         <p>{course.description}</p>

//         <span>{course.instructor}</span>

//         <p className="price">₹{course.price}</p>

//         <p className="category">{course.category}</p>

//         <div className="actions">
//           <button className="edit" onClick={() => editCourse(course)}>
//             <Edit size={18} />
//           </button>

//           <button className="delete" onClick={() => deleteCourse(course._id)}>
//             <Trash2 size={18} />
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default CourseCard;
