 import { useState } from "react";
import { loginUser, registerUser } from "@/services/authApi";
import { Mail, Lock, Eye, EyeOff,  User } from "lucide-react";
// GraduationCap,
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import "./Login.css";
import desktopLogo from "/circle-IgnitingRise.png";

function Login() {
  const navigate = useNavigate();

  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // ✅ EMAIL LOGIN / REGISTER
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = isLogin
        ? await loginUser(formData)
        : await registerUser(formData);

      const data = response.data;

      if (isLogin) {
        localStorage.setItem("token", data.token);
        localStorage.setItem("user", JSON.stringify(data.user));

        navigate("/student-dashboard");
      } else {
        alert("Registration successful. Please login.");
        setIsLogin(true);
      }
    } catch (error) {
      console.error(error);
      alert(error.response?.data?.message || "Server Error");
    }
  };

  // 🔥 GOOGLE LOGIN FIX (IMPORTANT)
  const handleGoogleLogin = () => {
    const backendURL = import.meta.env.VITE_API_URL;

    window.location.href = `${backendURL}/auth/google`;
  };

  return (
    <div className="auth-page">
      <div className="auth-card">
        <div className="auth-logo">
          <div className="logo-icon">
            <img src={desktopLogo} alt="IgnitingRise" className="logo-img" />
          </div>

          <h1>IgnitingRise</h1>
          <span>Learn • Grow • Succeed</span>
        </div>

        <div className="auth-tabs">
          <button
            className={isLogin ? "active" : ""}
            onClick={() => setIsLogin(true)}
          >
            Login
          </button>

          <button
            className={!isLogin ? "active" : ""}
            onClick={() => setIsLogin(false)}
          >
            Register
          </button>
        </div>

        <h2>{isLogin ? "Welcome Back" : "Create Account"}</h2>

        <p>
          {isLogin
            ? "Sign in to access your courses."
            : "Join IgnitingRise and start learning."}
        </p>

        {/* FORM */}
        <form className="auth-form" onSubmit={handleSubmit}>
          {!isLogin && (
            <div className="input-group">
              <User size={20} />
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
          )}

          <div className="input-group">
            <Mail size={20} />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="input-group">
            <Lock size={20} />
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              required
            />

            <span
              className="eye-icon"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </span>
          </div>

          <button type="submit" className="auth-btn">
            {isLogin ? "Login" : "Create Account"}
          </button>
        </form>

        {/* GOOGLE LOGIN */}
        <div className="divider">
          <span>OR</span>
        </div>

        <button className="google-btn" onClick={handleGoogleLogin}>
          <FcGoogle size={24} />
          Continue with Google
        </button>

        {isLogin && (
          <Link to="/forgot-password" className="forgot-link">
            Forgot Password?
          </Link>
        )}
      </div>
    </div>
  );
}

export default Login;

// import { useState } from "react";
// import { loginUser, registerUser } from "../services/authApi";
// import { Mail, Lock, Eye, EyeOff, GraduationCap, User } from "lucide-react";

// import { useNavigate } from "react-router-dom";

// import { FcGoogle } from "react-icons/fc";

// import "./Login.css";

// function Login() {
//   const navigate = useNavigate();

//   const [isLogin, setIsLogin] = useState(true);

//   const [showPassword, setShowPassword] = useState(false);

//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     password: "",
//   });

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const response = isLogin
//         ? await loginUser(formData)
//         : await registerUser(formData);

//       const data = response.data;

//       if (isLogin) {
//         localStorage.setItem("token", data.token);
//         localStorage.setItem("user", JSON.stringify(data.user));
//         navigate("/student-dashboard");
//       } else {
//         alert("Registration successful. Please login.");
//         setIsLogin(true);
//       }
//     } catch (error) {
//       console.error(error);
//       alert(error.response?.data?.message || "Server Error");
//     }
//   };

//   const handleGoogleLogin = () => {
//     window.location.href = `${import.meta.env.VITE_API_URL}/auth/google`;
//   };

//   return (
//     <div className="auth-page">
//       <div className="auth-card">
//         <div className="auth-logo">
//           <div className="logo-icon">
//             <GraduationCap size={42} />
//           </div>

//           <h1>My-Academy</h1>

//           <span>Learn • Grow • Succeed</span>
//         </div>

//         <div className="auth-tabs">
//           <button
//             className={isLogin ? "active" : ""}
//             onClick={() => setIsLogin(true)}
//           >
//             Login
//           </button>

//           <button
//             className={!isLogin ? "active" : ""}
//             onClick={() => setIsLogin(false)}
//           >
//             Register
//           </button>
//         </div>

//         <h2>{isLogin ? "Welcome Back" : "Create Account"}</h2>

//         <p>
//           {isLogin
//             ? "Sign in to access your courses."
//             : "Join My-Academy and start learning."}
//         </p>

//         <form className="auth-form" onSubmit={handleSubmit}>
//           {!isLogin && (
//             <div className="input-group">
//               <User size={20} />

//               <input
//                 type="text"
//                 name="name"
//                 placeholder="Full Name"
//                 value={formData.name}
//                 onChange={handleChange}
//                 required
//               />
//             </div>
//           )}

//           <div className="input-group">
//             <Mail size={20} />

//             <input
//               type="email"
//               name="email"
//               placeholder="Email Address"
//               value={formData.email}
//               onChange={handleChange}
//               required
//             />
//           </div>

//           <div className="input-group">
//             <Lock size={20} />

//             <input
//               type={showPassword ? "text" : "password"}
//               name="password"
//               placeholder="Password"
//               value={formData.password}
//               onChange={handleChange}
//               required
//             />

//             <span
//               className="eye-icon"
//               onClick={() => setShowPassword(!showPassword)}
//             >
//               {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
//             </span>
//           </div>

//           <button type="submit" className="auth-btn">
//             {isLogin ? "Login" : "Create Account"}
//           </button>
//         </form>

//         <div className="divider">
//           <span>OR</span>
//         </div>

//         <button className="google-btn" onClick={handleGoogleLogin}>
//           <FcGoogle size={24} />
//           Continue with Google
//         </button>

//         {isLogin && (
//           <a href="#" className="forgot-link">
//             Forgot Password?
//           </a>
//         )}
//       </div>
//     </div>
//   );
// }

// export default Login;
