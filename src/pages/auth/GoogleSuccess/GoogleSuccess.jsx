import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getMe } from "../../../services/userApi";

function GoogleSuccess() {
  const navigate = useNavigate();

  useEffect(() => {
    const init = async () => {
      try {
        const params = new URLSearchParams(window.location.search);
        const token = params.get("token");

        if (!token) {
          navigate("/login");
          return;
        }

        // 1. Save token
        localStorage.setItem("token", token);

        // 2. Get user from backend (/me)
        const res = await getMe();

        // 3. Save user
        localStorage.setItem("user", JSON.stringify(res.data));

        // 4. Redirect
        navigate("/student-dashboard");
      } catch (error) {
        console.error("Google login failed:", error);
        navigate("/login");
      }
    };

    init();
  }, [navigate]);

  return <h2>Logging in...</h2>;
}

export default GoogleSuccess;

// import { useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import { getMe } from "../services/userApi";

// function GoogleSuccess() {
//   const navigate = useNavigate();

//   useEffect(() => {
//     const params = new URLSearchParams(window.location.search);

//     const token = params.get("token");
//     const user = params.get("user");

//     if (token) {
//       localStorage.setItem("token", token);
//     }

//     if (user) {
//       localStorage.setItem("user", decodeURIComponent(user));
//     }

//     navigate("/student-dashboard");
//   }, [navigate]);

//   return <h2>Logging in...</h2>;
// }

// export default GoogleSuccess;

// import { useEffect } from "react";
// import { useNavigate } from "react-router-dom";

// function GoogleSuccess() {
//   const navigate = useNavigate();

//   useEffect(() => {
//     const token = new URLSearchParams(window.location.search).get("token");

//     console.log("Google Token:", token);

//     if (token) {
//       localStorage.setItem("token", token);

//       // IMPORTANT: delay ensures React state sync
//       setTimeout(() => {
//         navigate("/student-dashboard");
//       }, 100);
//     } else {
//       navigate("/login");
//     }
//   }, []);

//   return <h2>Logging in...</h2>;
// }

// export default GoogleSuccess;
// import { useEffect } from "react";
// import { useNavigate } from "react-router-dom";

// function GoogleSuccess() {
//   const navigate = useNavigate();

//   useEffect(() => {
//     const params = new URLSearchParams(window.location.search);

//     const token = params.get("token");

//     if (token) {
//       localStorage.setItem("token", token);
//       console.log("Token stored:", token);
//       navigate("/student-dashboard");
//     } else {
//       navigate("/login");
//     }
//   }, [navigate]);

//   return <h2>Logging in...</h2>;
// }

// export default GoogleSuccess;
