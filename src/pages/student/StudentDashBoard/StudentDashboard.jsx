import { useState, useEffect } from "react";
import { getProfile } from "../../../services/userService";
import "./StudentDashboard.css";

import {
  GraduationCap,
  BookOpen,
  Trophy,
  Clock3,
  PlayCircle,
  User,
  LogOut,
} from "lucide-react";

import { useNavigate } from "react-router-dom";

function StudentDashboard() {
  const navigate = useNavigate();

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // ================= FETCH PROFILE =================
  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const profile = await getProfile();
          console.log("PROFILE DATA:", profile);
        setUser(profile);
      } catch (error) {
        console.error("Profile error:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, []);

  // ================= LOGOUT =================
  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/login");
  };

  // ================= LOADING =================
  if (loading) {
    return (
      <div className="dashboard">
        <h2>Loading Dashboard...</h2>
      </div>
    );
  }

  return (
    <div className="dashboard">
      {/* HEADER */}
      <div className="dashboard-header">
        <div>
          <h1>Welcome Back, {user?.name || "Student"} 👋</h1>
          <p>Continue your learning journey and track your progress.</p>
        </div>

        <div className="header-right">
          {/* PROFILE IMAGE */}
          <div
            className="profile-box"
            onClick={() => navigate("/dashboard/profile")}
          >
            {user?.photo ? (
              <img src={user.photo} alt="profile" className="profile-image" />
            ) : (
              <User size={26} />
            )}
          </div>

          <button className="logout-btn" onClick={logout}>
            <LogOut size={18} />
            Logout
          </button>
        </div>
      </div>

      {/* STATS (FROM BACKEND) */}
      <div className="stats-grid">
        <div className="stat-card">
          <BookOpen size={32} />
          <h2>{user?.enrolledCourses || 0}</h2>
          <p>Enrolled Courses</p>
        </div>

        <div className="stat-card">
          <Clock3 size={32} />
          <h2>{user?.learningHours || 0} hrs</h2>
          <p>Learning Time</p>
        </div>

        <div className="stat-card">
          <Trophy size={32} />
          <h2>{user?.certificates || 0}</h2>
          <p>Certificates</p>
        </div>

        <div className="stat-card">
          <GraduationCap size={32} />
          <h2>{user?.progress || 0}%</h2>
          <p>Course Progress</p>
        </div>
      </div>

      {/* COURSES */}
      <div className="dashboard-section">
        <h2>My Courses</h2>

        <div className="course-grid">
          {(user?.courses || []).map((course, index) => (
            <div className="course-card" key={index}>
              <h3>{course.title}</h3>
              <p>{course.description}</p>

              <div className="progress-bar">
                <div
                  className="progress-fill"
                  style={{ width: `${course.progress}%` }}
                />
              </div>

              <span>{course.progress}% Completed</span>

              <button onClick={() => navigate(`/learning/${course._id}`)}>
                Continue Learning
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* RECENT ACTIVITY */}
      <div className="dashboard-section">
        <h2>Recent Activity</h2>

        {(user?.activities || []).map((act, i) => (
          <div className="activity-card" key={i}>
            <PlayCircle size={22} />
            <div>
              <h4>{act.title}</h4>
              <p>{act.time}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default StudentDashboard;

// import { useState, useEffect } from "react";
// import { getProfile } from "../../services/userService";
// import "./StudentDashboard.css";
// import {
//   GraduationCap,
//   BookOpen,
//   Trophy,
//   Clock3,
//   PlayCircle,
//   User,
//   LogOut,
// } from "lucide-react";

// import { useNavigate } from "react-router-dom";

// function StudentDashboard() {
//   const navigate = useNavigate();
//   const [user, setUser] = useState(null);

//   useEffect(() => {
//     const fetchProfile = async () => {
//       try {
//         const profile = await getProfile();
//         setUser(profile);
//       } catch (error) {
//         console.error(
//           "Error fetching profile:",
//           error.response?.data || error.message,
//         );
//       }
//     };

//     fetchProfile();
//   }, []);

//   console.log("Logged in user:", user);

//   const logout = () => {
//     localStorage.removeItem("token");
//     localStorage.removeItem("user");
//     navigate("/login");
//   };

//   return (
//     <div className="dashboard">
//       {/* Header */}
//       <div className="dashboard-header">
//         <div>
//           <h1>Welcome Back, {user?.name || "Student"} 👋</h1>

//           <p>Continue your learning journey and track your progress.</p>
//         </div>

//         <div className="header-right">
//           <div
//             className="profile-box"
//             onClick={() => navigate("/dashboard/profile")}
//           >
//             {user?.photo ? (
//               <img
//                 src={
//                   user.photo ||
//                   `https://ui-avatars.com/api/?name=${encodeURIComponent(
//                     user?.name || "Student",
//                   )}`
//                 }
//                 alt={user?.name}
//                 className="profile-image"
//                 onLoad={() => console.log("Image Loaded")}
//                 onError={(e) => {
//                   console.log("Image Failed");
//                   e.target.src = "/default-avatar.png";
//                 }}
//               />
//             ) : (
//               <User size={26} />
//             )}
//           </div>

//           <button className="logout-btn" onClick={logout}>
//             <LogOut size={18} />
//             Logout
//           </button>
//         </div>
//       </div>

//       {/* Stats */}
//       <div className="stats-grid">
//         <div className="stat-card">
//           <BookOpen size={32} />
//           <h2>4</h2>
//           <p>Enrolled Courses</p>
//         </div>

//         <div className="stat-card">
//           <Clock3 size={32} />
//           <h2>58 hrs</h2>
//           <p>Learning Time</p>
//         </div>

//         <div className="stat-card">
//           <Trophy size={32} />
//           <h2>3</h2>
//           <p>Certificates</p>
//         </div>

//         <div className="stat-card">
//           <GraduationCap size={32} />
//           <h2>82%</h2>
//           <p>Course Progress</p>
//         </div>
//       </div>

//       {/* Courses */}
//       <div className="dashboard-section">
//         <h2>My Courses</h2>

//         <div className="course-grid">
//           <div className="course-card">
//             <h3>Class 11 Mathematics</h3>

//             <p>Complete Algebra, Trigonometry, Calculus & Statistics.</p>

//             <div className="progress-bar">
//               <div
//                 className="progress-fill"
//                 style={{
//                   width: "70%",
//                 }}
//               ></div>
//             </div>

//             <span>70% Completed</span>

//             <button>Continue Learning</button>
//           </div>

//           <div className="course-card">
//             <h3>React Development</h3>

//             <p>Build modern frontend applications using React.</p>

//             <div className="progress-bar">
//               <div
//                 className="progress-fill"
//                 style={{
//                   width: "45%",
//                 }}
//               ></div>
//             </div>

//             <span>45% Completed</span>

//             <button>Continue Learning</button>
//           </div>
//         </div>
//       </div>

//       {/* Recent Activity */}
//       <div className="dashboard-section">
//         <h2>Recent Activity</h2>

//         <div className="activity-card">
//           <PlayCircle size={22} />

//           <div>
//             <h4>React Hooks Lecture Completed</h4>

//             <p>Today • 2 Hours Ago</p>
//           </div>
//         </div>

//         <div className="activity-card">
//           <PlayCircle size={22} />

//           <div>
//             <h4>Assignment Submitted</h4>

//             <p>Yesterday</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default StudentDashboard;
