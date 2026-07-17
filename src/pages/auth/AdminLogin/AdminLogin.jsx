import { useState } from "react";
import { useNavigate } from "react-router-dom";
// import { ShieldCheck, Mail, Lock, User, Chrome } from "lucide-react";
import { ShieldCheck, Mail, Lock, User } from "lucide-react";
import { FcGoogle } from "react-icons/fc";
import API from "@/services/api";
import { GoogleLogin } from "@react-oauth/google";
import "./AdminLogin.css";

export default function AdminLogin() {
  const [mode, setMode] = useState("login");

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      if (mode === "login") {
        const res = await API.post("/admin/login", {
          email,
          password,
        });

        localStorage.setItem("token", res.data.token);

        localStorage.setItem("role", "admin");

        navigate("/admin");
      } else {
        await API.post("/admin/create", {
          name,
          email,
          password,
        });

        alert("Admin created. Login now");

        setMode("login");
      }
    } catch (error) {
      alert(error.response?.data?.message || "Something went wrong");
    }
  };

  return (
    <div className="admin-auth">
      <div className="admin-card">
        <div className="admin-logo">
          <ShieldCheck size={45} />
        </div>

        <h1>{mode === "login" ? "Admin Login" : "Create Admin"}</h1>

        <p>Manage your academy securely</p>

        <form onSubmit={submitHandler}>
          {mode === "register" && (
            <div className="input-box">
              <User />

              <input
                placeholder="Admin name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
          )}

          <div className="input-box">
            <Mail />

            <input
              placeholder="Admin email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="input-box">
            <Lock />

            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button type="submit" className="login-btn">
            {mode === "login" ? "Login" : "Create Admin"}
          </button>
        </form>

        {/* <button className="google-btn">
          <FcGoogle size={22} />
          Continue with Google
        </button> */}
        <div className="google-btn">
          <GoogleLogin
            onSuccess={async (credentialResponse) => {
              try {
                const res = await API.post("/admin/google-login", {
                  token: credentialResponse.credential,
                });

                localStorage.setItem("token", res.data.token);

                localStorage.setItem("role", "admin");

                navigate("/admin");
              } catch (error) {
                alert(error.response?.data?.message || "Google login failed");
              }
            }}
            onError={() => {
              alert("Google login failed");
            }}
          />
        </div>

        <div className="switch">
          {mode === "login" ? "New admin?" : "Already admin?"}

          <span
            onClick={() => setMode(mode === "login" ? "register" : "login")}
          >
            {mode === "login" ? " Create account" : " Login"}
          </span>
        </div>
      </div>
    </div>
  );
}

// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import API from "../services/api";

// export default function AdminLogin() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const navigate = useNavigate();

//   const loginAdmin = async (e) => {
//     e.preventDefault();

//     try {
//       const res = await API.post("/admin/login", {
//         email,
//         password,
//       });

//       localStorage.setItem("token", res.data.token);

//       localStorage.setItem("role", "admin");

//       navigate("/admin");
//     } catch (error) {
//       alert(error.response?.data?.message || "Login failed");
//     }
//   };

//   return (
//     <div>
//       <h1>Admin Login</h1>

//       <form onSubmit={loginAdmin}>
//         <input
//           placeholder="Email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//         />

//         <input
//           type="password"
//           placeholder="Password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//         />

//         <button>Login</button>
//       </form>
//     </div>
//   );
// }
