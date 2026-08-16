import { useState, useEffect } from "react";
import { getProfile } from "../../../services/userService";
import { useNavigate } from "react-router-dom";
import "./StudentDashboard.css";

const Morning = "/Forest.gif";
const Afternoon = "/Sunset.gif";
const Evening = "/Late at night.gif";
const GoodNight = "/Counting stars.gif";

import {
  GraduationCap,
  BookOpen,
  Trophy,
  Clock3,
  PlayCircle,
  User,
  LogOut,
  ShoppingCart,
  ArrowRight,
  Sparkles,
} from "lucide-react";

function StudentDashboard() {
  const navigate = useNavigate();

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProfile();
  }, []);

  const fetchProfile = async () => {
    try {
      const profile = await getProfile();
      setUser(profile);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/login");
  };

  const hour = new Date().getHours();

  let greeting;
  let greetingImage;

  if (hour < 12) {
    greeting = "Good Morning";
    greetingImage = Morning;
  } else if (hour < 17) {
    greeting = "Good Afternoon";

    greetingImage = Afternoon;
  } else if (hour < 20) {
    greeting = "Good Evening";
    greetingImage = Evening;
  } else {
    greeting = "Good Night";
    greetingImage = GoodNight;
  }

  const stats = [
    {
      title: "Enrolled Courses",
      value: user?.enrolledCourses || 0,
      icon: <BookOpen size={32} />,
    },
    {
      title: "Learning Hours",
      value: `${user?.learningHours || 0} hrs`,
      icon: <Clock3 size={32} />,
    },
    {
      title: "Certificates",
      value: user?.certificates || 0,
      icon: <Trophy size={32} />,
    },
    {
      title: "Overall Progress",
      value: `${user?.progress || 0}%`,
      icon: <GraduationCap size={32} />,
    },
  ];

  if (loading) {
    return (
      <div className="dashboard">
        <div className="loading-header shimmer"></div>

        <div className="loading-stats">
          <div className="loading-card shimmer"></div>
          <div className="loading-card shimmer"></div>
          <div className="loading-card shimmer"></div>
          <div className="loading-card shimmer"></div>
        </div>

        <div className="loading-course shimmer"></div>

        <div className="loading-course shimmer"></div>
      </div>
    );
  }

  return (
    <div className="dashboard">
      {/* Header */}

      <div className="dashboard-header">
        <div className="welcome-box">
          <img src={greetingImage} alt={greeting} className="greeting-image" />
          <div>
            <h1>
              {greeting}, {user?.name || "Student"} 👋
            </h1>

            <p>Keep learning consistently and achieve your goals every day.</p>
          </div>
        </div>

        <div className="header-right">
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

      {/* Continue Learning */}

      {user?.courses?.length > 0 && (
        <div className="continue-banner">
          <div>
            <span className="continue-tag">
              <Sparkles size={18} />
              Continue Learning
            </span>

            <h2>{user.courses[0].title}</h2>

            <p>{user.courses[0].progress}% Completed</p>
          </div>

          <button onClick={() => navigate(`/learning/${user.courses[0]._id}`)}>
            Resume
            <ArrowRight size={18} />
          </button>
        </div>
      )}

      {/* Stats */}

      <div className="stats-grid">
        {stats.map((item, index) => (
          <div className="stat-card" key={index}>
            {item.icon}
            <h2>{item.value}</h2>
            <p>{item.title}</p>
          </div>
        ))}
      </div>

      {/* Courses */}

      <div className="dashboard-section">
        <h2>My Courses</h2>

        {user?.courses?.length > 0 ? (
          <div className="course-grid">
            {user.courses.map((course) => (
              <div className="course-card" key={course._id}>
                <img
                  src={course.thumbnail || "/images/course-placeholder.jpg"}
                  alt={course.title}
                  className="course-image"
                />

                {/* <h3>{course.title}</h3>

                <p>{course.description}</p> */}

                {/* here for students card  */}

                <div className="course-badge">Active</div>

                <img
                  src={course.thumbnail || "/images/course-placeholder.jpg"}
                  alt={course.title}
                  className="course-image"
                />

                <h3>{course.title}</h3>

                <p>{course.description}</p>

                <div className="course-footer">
                  <span className="course-lessons">
                    📚 {course.totalLectures || 0} Lessons
                  </span>

                  <span className="course-duration">
                    ⏱ {course.duration || "0 hrs"}
                  </span>
                </div>

                <div className="progress-bar">
                  <div
                    className="progress-fill"
                    style={{ width: `${course.progress || 0}%` }}
                  />
                </div>

                <span>{course.progress || 0}% Completed</span>

                <button onClick={() => navigate(`/learning/${course._id}`)}>
                  Continue Learning
                </button>

                {/* here students card end  */}

                <div className="progress-bar">
                  <div
                    className="progress-fill"
                    style={{
                      width: `${course.progress || 0}%`,
                    }}
                  />
                </div>

                <span>{course.progress || 0}% Completed</span>

                <button onClick={() => navigate(`/learning/${course._id}`)}>
                  Continue Learning
                </button>
              </div>
            ))}
          </div>
        ) : (
          <div className="empty-dashboard">
            <img src="/Online learning.gif" alt="Start Learning" />

            <h2>Welcome to IgnitingRise 🎉</h2>

            <p>
              Your learning journey starts here. Explore our expert-designed
              courses, purchase your favorite one, and begin building your
              future today.
            </p>

            <button
              className="btn btn-primary btn-block"
              onClick={() => navigate("/courses")}
            >
              <ShoppingCart size={20} />
              Explore Courses
            </button>

            {/* <span className="empty-note">
              100+ Students are already learning with IgnitingRise. Join them today and unlock your potential!
            </span> */}
          </div>
        )}
      </div>

      {/* Recommended */}

      <div className="dashboard-section">
        <div className="section-header">
          <h2>Recommended Courses</h2>

          <button className="view-all-btn" onClick={() => navigate("/courses")}>
            View All
          </button>
        </div>

        <div className="recommended-grid">
          <div className="recommended-card">
            <span className="course-badge">Bestseller</span>

            <img src="/images/courses/chemistry.jpg" alt="Chemistry" />

            <div className="recommended-content">
              <h3>Class 12 Chemistry</h3>

              <p>
                Complete Electrochemistry course with animations, notes, quizzes
                and PYQs.
              </p>

              <div className="recommended-info">
                <span className="course-rating">⭐ 4.9</span>

                <span className="course-price">₹999</span>
              </div>

              <button onClick={() => navigate("/courses")}>
                Explore Course
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Activity */}

      <div className="dashboard-section">
        <h2>Recent Activity</h2>

        {user?.activities?.length > 0 ? (
          user.activities.map((activity, index) => (
            <div className="activity-list">
              {user.activities.map((activity) => (
                <div className="activity-card" key={activity._id}>
                  <div className="activity-icon">
                    <PlayCircle size={22} />
                  </div>

                  <div className="activity-content">
                    <h4>{activity.title}</h4>

                    <p>{activity.description}</p>
                  </div>

                  <span className="activity-time">{activity.time}</span>
                </div>
              ))}
            </div>
          ))
        ) : (
          <div className="no-activity">
            <p>No recent activity found.</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default StudentDashboard;

// import { useState, useEffect } from "react";
// import { getProfile } from "../../../services/userService";
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
//   const [loading, setLoading] = useState(true);

//   // ================= FETCH PROFILE =================
//   useEffect(() => {
//     const fetchProfile = async () => {
//       try {
//         const profile = await getProfile();
//           console.log("PROFILE DATA:", profile);
//         setUser(profile);
//       } catch (error) {
//         console.error("Profile error:", error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchProfile();
//   }, []);

//   // ================= LOGOUT =================
//   const logout = () => {
//     localStorage.removeItem("token");
//     localStorage.removeItem("user");
//     navigate("/login");
//   };

//   // ================= LOADING =================
//   if (loading) {
//     return (
//       <div className="dashboard">
//         <h2>Loading Dashboard...</h2>
//       </div>
//     );
//   }

//   return (
//     <div className="dashboard">
//       {/* HEADER */}
//       <div className="dashboard-header">
//         <div>
//           <h1>Welcome Back, {user?.name || "Student"} 👋</h1>
//           <p>Continue your learning journey and track your progress.</p>
//         </div>

//         <div className="header-right">
//           {/* PROFILE IMAGE */}
//           <div
//             className="profile-box"
//             onClick={() => navigate("/dashboard/profile")}
//           >
//             {user?.photo ? (
//               <img src={user.photo} alt="profile" className="profile-image" />
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

//       {/* STATS (FROM BACKEND) */}
//       <div className="stats-grid">
//         <div className="stat-card">
//           <BookOpen size={32} />
//           <h2>{user?.enrolledCourses || 0}</h2>
//           <p>Enrolled Courses</p>
//         </div>

//         <div className="stat-card">
//           <Clock3 size={32} />
//           <h2>{user?.learningHours || 0} hrs</h2>
//           <p>Learning Time</p>
//         </div>

//         <div className="stat-card">
//           <Trophy size={32} />
//           <h2>{user?.certificates || 0}</h2>
//           <p>Certificates</p>
//         </div>

//         <div className="stat-card">
//           <GraduationCap size={32} />
//           <h2>{user?.progress || 0}%</h2>
//           <p>Course Progress</p>
//         </div>
//       </div>

//       {/* COURSES */}
//       <div className="dashboard-section">
//         <h2>My Courses</h2>

//         <div className="course-grid">
//           {(user?.courses || []).map((course, index) => (
//             <div className="course-card" key={index}>
//               <h3>{course.title}</h3>
//               <p>{course.description}</p>

//               <div className="progress-bar">
//                 <div
//                   className="progress-fill"
//                   style={{ width: `${course.progress}%` }}
//                 />
//               </div>

//               <span>{course.progress}% Completed</span>

//               <button onClick={() => navigate(`/learning/${course._id}`)}>
//                 Continue Learning
//               </button>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* RECENT ACTIVITY */}
//       <div className="dashboard-section">
//         <h2>Recent Activity</h2>

//         {(user?.activities || []).map((act, i) => (
//           <div className="activity-card" key={i}>
//             <PlayCircle size={22} />
//             <div>
//               <h4>{act.title}</h4>
//               <p>{act.time}</p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default StudentDashboard;
