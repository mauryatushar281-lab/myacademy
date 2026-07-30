import { useState, useEffect } from "react";
import Search from "../Search/Search";
import { Menu, X, Bell } from "lucide-react";
import { Link, NavLink, useNavigate } from "react-router-dom";

import desktopLogo from "/logo-desktop.png";
import mobileLogo from "/logo-mobile.png";

import "./Navbar.css";

function Navbar() {
  const navigate = useNavigate();

  const [user, setUser] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);

  const [search, setSearch] = useState("");

  useEffect(() => {
    const loadUser = () => {
      const data = localStorage.getItem("user");
      JSON.parse(localStorage.getItem("user"));

      setUser(data ? JSON.parse(data) : null);
    };

    loadUser();

    window.addEventListener("storage", loadUser);

    return () => {
      window.removeEventListener("storage", loadUser);
    };
  }, []);

  const courses = [
    "Class 11 Maths",
    "Class 12 Physics",
    "React Development",
    "SSC CGL",
    "JEE Mathematics",
  ];

  const filteredCourses = courses.filter((c) =>
    c.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="logo">
          <picture>
            <source media="(max-width:768px)" srcSet={mobileLogo} />

            <img src={desktopLogo} alt="My Academy" className="logo-image" />
          </picture>

          {/* <span className="logo-text">My Academy</span> */}
        </Link>

        <div className={`nav-links ${menuOpen ? "active" : ""}`}>
          <NavLink to="/" onClick={() => setMenuOpen(false)}>
            Home
          </NavLink>

          <div className="dropdown">
            <button className="dropdown-btn">Categories</button>

            <div className="dropdown-menu">
              <NavLink to="/courses/class11">Class 11</NavLink>

              <NavLink to="/courses/class12">Class 12</NavLink>

              <NavLink to="/courses/jee">JEE</NavLink>

              <NavLink to="/courses/ssc">SSC</NavLink>
            </div>
          </div>

          <NavLink to="/courses">Courses</NavLink>

          <NavLink to="/about">About</NavLink>

          <NavLink to="/contact">Contact</NavLink>

          {!user && (
            <NavLink
              to="/login"
              className="mobile-login-btn"
              onClick={() => setMenuOpen(false)}
            >
              Login
            </NavLink>
          )}
        </div>

        <div className="right-section">
          <div className="search-wrapper">
            <Search
              value={search}
              onChange={setSearch}
              placeholder="Search Courses"
              onClear={() => setSearch("")}
            />

            {search && filteredCourses.length > 0 && (
              <div className="suggestions">
                {filteredCourses.map((course) => (
                  <div
                    key={course}
                    className="suggestion-item"
                    onClick={() => {
                      setSearch("");

                      navigate("/courses");
                    }}
                  >
                    {course}
                  </div>
                ))}
              </div>
            )}
          </div>

          {user && (
            <div className="notification-box">
              <Bell size={22} />
              {/* <span className="notification-count">3</span> */}
            </div>
          )}

          {user ? (
            <img
              src={
                user?.photo ||
                `https://ui-avatars.com/api/?name=${encodeURIComponent(
                  user?.name || "User",
                )}`
              }
              className="navbar-profile"
              onClick={() => navigate("/student-dashboard")}
              alt="profile"
            />
          ) : (
            <NavLink to="/login" className="login-btn">
              Login
            </NavLink>
          )}

          <button className="menu-btn" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? (
              <X className="menu-icon" />
            ) : (
              <Menu className="menu-icon" />
            )}
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;


