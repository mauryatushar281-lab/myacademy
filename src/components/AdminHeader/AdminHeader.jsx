import {
  LayoutDashboard,
  BarChart3,
  BookOpen,
  GraduationCap,
  Upload,
} from "lucide-react";

import { NavLink, useNavigate } from "react-router-dom";
import "./AdminHeader.css";

function AdminHeader({ admin }) {
  const navigate = useNavigate();

  return (
    <header className="admin-header">

      {/* Logo */}
      <div className="header-logo">
        <h2>🚀 IgnitingRise</h2>
      </div>

      {/* Navigation */}

      <nav className="header-nav">

        <NavLink to="/admin" end>
          <LayoutDashboard size={18} />
          <span>Dashboard</span>
        </NavLink>

        <NavLink to="/admin-analytics">
          <BarChart3 size={18} />
          <span>Analytics</span>
        </NavLink>

        <NavLink to="/admin-learning">
          <BookOpen size={18} />
          <span>Courses</span>
        </NavLink>

        <NavLink to="/admin-students">
          <GraduationCap size={18} />
          <span>Students</span>
        </NavLink>

        <NavLink to="/admin-uploads">
          <Upload size={18} />
          <span>Lectures</span>
        </NavLink>

        <NavLink to="/admin-upload-content">
          <Upload size={18} />
          <span>Content</span>
        </NavLink>

      </nav>

      {/* Right Section */}

      <div className="header-right">

        <div
          className="admin-profile"
          onClick={() => navigate("/admin/profile")}
        >
          <img
            src={admin?.photo || "https://i.pravatar.cc/100"}
            alt="Admin"
          />

          <div>
            <h4>{admin?.name || "Admin"}</h4>
            <span>Administrator</span>
          </div>
        </div>

      </div>

    </header>
  );
}

export default AdminHeader;

// import { Bell, Search } from "lucide-react";
// import { useNavigate } from "react-router-dom";
// import "./AdminHeader.css";

// function AdminHeader({ title, subtitle, admin, buttonText, buttonLink }) {
//   const navigate = useNavigate();

//   return (
//     <div className="admin-topbar">
//       {/* Left */}
//       <div className="admin-left">
//         <h1>{title}</h1>
//         <p>{subtitle}</p>
//       </div>

//       {/* Right */}
//       <div className="admin-right">
//         <div className="search-box">
//           <Search size={18} />
//           <input type="text" placeholder="Search..." />
//         </div>

//         <button className="notification-btn">
//           <Bell size={20} />
//         </button>

//         <div
//           className="admin-profile"
//           onClick={() => navigate("/admin/profile")}
//         >
//           <img src={admin?.photo || "https://i.pravatar.cc/100"} alt="Admin" />

//           <div>
//             <h4>{admin?.name || "Admin"}</h4>
//             <span>Administrator</span>
//           </div>
//         </div>

//         {buttonText && (
//           <button className="primary-btn" onClick={() => navigate(buttonLink)}>
//             {buttonText}
//           </button>
//         )}
//       </div>
//     </div>
//   );
// }

// export default AdminHeader;
