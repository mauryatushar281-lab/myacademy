import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getCourse } from "../../../services/learningService";
import { getLectures } from "../../../services/lectureService";
import VideoPlayer from "../../VideoPlayer";
import "./Learning.css";

function Learning() {
  const { courseId } = useParams();

  const [course, setCourse] = useState(null);
  const [lectures, setLectures] = useState([]);
  const [currentLecture, setCurrentLecture] = useState(null);
  const [completedLectures, setCompletedLectures] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    loadCourse();
  }, [courseId]);

  const loadCourse = async () => {
    try {
      setLoading(true);

      const courseRes = await getCourse(courseId);
      setCourse(courseRes.data);

      const lectureRes = await getLectures(courseId);

      setLectures(lectureRes.data);

      if (lectureRes.data.length > 0) {
        setCurrentLecture(lectureRes.data[0]);
      }

      setLoading(false);
    } catch (err) {
      console.error(err);
      setError("Unable to load course");
      setLoading(false);
    }
  };

  const handleComplete = (lectureId) => {
    if (!completedLectures.includes(lectureId)) {
      setCompletedLectures((prev) => [...prev, lectureId]);
    }
  };

  if (loading) return <h2>Loading...</h2>;

  if (error) return <h2>{error}</h2>;

  return (
    <div className="learning-page">
      {/* VIDEO */}

      <div className="video-section">
        <h2>{currentLecture?.title}</h2>

        {currentLecture && (
          <VideoPlayer lecture={currentLecture} courseId={courseId} />
        )}

        <div className="video-actions">
          <button
            className="complete-btn"
            onClick={() => handleComplete(currentLecture._id)}
          >
            {completedLectures.includes(currentLecture?._id)
              ? "✅ Completed"
              : "Mark as Complete"}
          </button>
        </div>
      </div>

      {/* SIDEBAR */}

      <div className="lesson-sidebar">
        <h3>Course Lectures</h3>

        {lectures.map((lecture) => (
          <div
            key={lecture._id}
            className={`lesson-item ${
              currentLecture?._id === lecture._id ? "active" : ""
            }`}
            onClick={() => setCurrentLecture(lecture)}
          >
            <h4>
              {completedLectures.includes(lecture._id) && "✅ "}
              {lecture.title}
            </h4>

            <span>{lecture.duration}s</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Learning;

// import { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import { getCourse } from "../../../services/learningService";
// import "./Learning.css";
// import VideoPlayer from "../../VideoPlayer";
// import "../../../services/progressService";
// // import { saveProgress } from "../services/progressService";
// function Learning() {
//   const { courseId } = useParams();

//   const [course, setCourse] = useState(null);
//   const [currentLesson, setCurrentLesson] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [completedLessons, setCompletedLessons] = useState([]);

//   useEffect(() => {
//     const loadCourse = async () => {
//       try {
//         setLoading(true);
//         setError(null);

//         const res = await getCourse(courseId);

//         const data = res.data;
//         console.log(data);

//         if (!data) {
//           throw new Error("Course not found");
//         }

//         setCourse(data);

//         if (data.lessons && data.lessons.length > 0) {
//           setCurrentLesson(data.lessons[0]);
//         }
//       } catch (err) {
//         setError(err.message || "Something went wrong");
//       } finally {
//         setLoading(false);
//       }
//     };

//     loadCourse();
//   }, [courseId]);

//   // mark lesson complete (frontend only for now)
//   const handleCompleteLesson = (lessonId) => {
//     if (!completedLessons.includes(lessonId)) {
//       setCompletedLessons([...completedLessons, lessonId]);
//     }
//   };

//   if (loading) {
//     return <h2 className="loading">Loading course...</h2>;
//   }

//   if (error) {
//     return <h2 className="error">{error}</h2>;
//   }

//   if (!course) {
//     return <h2>No course found</h2>;
//   }

//   return (
//     <div className="learning-page">
//       {/* VIDEO SECTION */}
//       <div className="video-section">
//         <h2>{currentLesson?.title}</h2>

//         {/* <iframe
//           width="100%"
//           height="500"
//           src={currentLesson?.videoUrl}
//           title="Video"
//           allowFullScreen
//         /> */}

//         <VideoPlayer lecture={currentLesson} courseId={courseId} />

//         <div className="video-actions">
//           {currentLesson?.notesUrl && (
//             <a
//               href={currentLesson.notesUrl}
//               target="_blank"
//               rel="noreferrer"
//               className="notes-btn"
//             >
//               📄 Download Notes
//             </a>
//           )}

//           <button
//             className="complete-btn"
//             onClick={() => handleCompleteLesson(currentLesson?._id)}
//           >
//             {completedLessons.includes(currentLesson?._id)
//               ? "✅ Completed"
//               : "Mark as Complete"}
//           </button>
//         </div>
//       </div>

//       {/* SIDEBAR */}
//       <div className="lesson-sidebar">
//         <h3>Course Lessons</h3>

//         {course.lessons.map((lesson, index) => {
//           const isCompleted = completedLessons.includes(lesson._id);

//           return (
//             <div
//               key={lesson._id || index}
//               className={`lesson-item ${
//                 currentLesson?._id === lesson._id ? "active" : ""
//               }`}
//               onClick={() => setCurrentLesson(lesson)}
//             >
//               <h4>
//                 {isCompleted && "✅ "}
//                 {lesson.title}
//               </h4>

//               <span>{lesson.duration}</span>
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// }

// export default Learning;

// import { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import { getCourse } from "../../services/learningService";
// import "./Learning.css";

// function Learning() {
//   const { courseId } = useParams();

//   const [course, setCourse] = useState(null);
//   const [currentLesson, setCurrentLesson] = useState(null);

//   useEffect(() => {
//     const loadCourse = async () => {
//       try {
//         const res = await getCourse(courseId);

//         setCourse(res.data);

//         if (res.data.lessons.length > 0) {
//           setCurrentLesson(res.data.lessons[0]);
//         }
//       } catch (error) {
//         console.log(error);
//       }
//     };

//     loadCourse();
//   }, [courseId]);

//   if (!course) return <h2>Loading...</h2>;

//   return (
//     <div className="learning-page">
//       <div className="video-section">
//         <h2>{currentLesson?.title}</h2>

//         <iframe
//           width="100%"
//           height="500"
//           src={currentLesson?.videoUrl}
//           title="Video"
//           allowFullScreen
//         />

//         {currentLesson?.notesUrl && (
//           <a href={currentLesson.notesUrl} target="_blank">
//             Download Notes
//           </a>
//         )}
//       </div>

//       <div className="lesson-sidebar">
//         <h3>Course Lessons</h3>

//         {course.lessons.map((lesson) => (
//           <div
//             key={lesson._id}
//             className="lesson-item"
//             onClick={() => setCurrentLesson(lesson)}
//           >
//             <h4>{lesson.title}</h4>
//             <span>{lesson.duration}</span>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Learning;

// import { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import { getCourse } from "../../services/learningService";
// import "./Learning.css";
// function Learning() {
//   const { courseId } = useParams();
//   const [course, setCourse] = useState(null);
//   const [currentLesson, setCurrentLesson] = useState(null);

//   useEffect(() => {
//     const loadCourse = async () => {
//       try {
//         const res = await getCourse(courseId);
//         setCourse(res.data);
//         if (res.data.lessons.length > 0) {
//           setCurrentLesson(res.data.lessons[0]);
//         }
//       } catch (error) {
//         console.log(error);
//       }
//     };
//     loadCourse();
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, []);

//   if (!course) return <h2>Loading...</h2>;
//   return (
//     <div className="learning-page">
//       {" "}
//       <div className="video-section">
//         {" "}
//         <h2>{currentLesson?.title}</h2>{" "}
//         <iframe
//           width="100%"
//           height="500"
//           src={currentLesson?.videoUrl}
//           title="Video"
//           allowFullScreen
//         />{" "}
//         {currentLesson?.notesUrl && (
//           <a href={currentLesson.notesUrl} target="_blank">
//             {" "}
//             Download Notes{" "}
//           </a>
//         )}{" "}
//       </div>{" "}
//       <div className="lesson-sidebar">
//         {" "}
//         <h3>Course Lessons</h3>{" "}
//         {course.lessons.map((lesson) => (
//           <div
//             key={lesson._id}
//             className="lesson-item"
//             onClick={() => setCurrentLesson(lesson)}
//           >
//             {" "}
//             <h4>{lesson.title}</h4> <span>{lesson.duration}</span>{" "}
//           </div>
//         ))}{" "}
//       </div>{" "}
//     </div>
//   );
// }
// export default Learning;
