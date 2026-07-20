import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/public/Home/Home";
import Courses from "./pages/public/Courses/Courses";
import About from "./pages/public/About/About";
import Contact from "./pages/public/Contact/Contact";
import Login from "./pages/auth/Login/Login";
import ForgotPassword from "./pages/auth/ForgotPassword/ForgotPassword";
import ResetPassword from "./pages/auth/ResetPassword/ResetPassword";
import CourseCategory from "./pages/public/CourseCatagories/CourseCategory";

import StudentDashboard from "./pages/student/StudentDashBoard/StudentDashboard";
import Profile from "./pages/student/Student-Profile/Profile";
import Learning from "./pages/student/Student-Learning/Learning";
import GoogleSuccess from "./pages/auth/GoogleSuccess/GoogleSuccess";
import ProtectedRoute from "./routes/ProtectedRoute";

import Certificate from "./pages/admin/Certificate/Certificates";

import AdminLogin from "./pages/auth/AdminLogin/AdminLogin";
import AdminRoute from "./routes/AdminRoute";

import AdminDashboard from "./pages/admin/AdminDashboard/AdminDashboard";
import Analytics from "./pages/admin/AdminAnalytics/Analytics";
import AdminLearning from "./pages/admin/AdminLearning/AdminLearning";
import UploadLecture from "./pages/admin/Upload/UploadLectures/UploadLecture";
import UploadContent from "./pages/admin/Upload/UploadContent/UploadContent";
import Students from "./pages/admin/Students/Students";
import ContactMessages from"./pages/admin/ContactMessage/ContactMessages"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/courses" element={<Courses />} />

        <Route path="/about" element={<About />} />

        <Route path="/contact" element={<Contact />} />

        <Route path="/courses/:category" element={<CourseCategory />} />

        <Route path="/login" element={<Login />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/google-success" element={<GoogleSuccess />} />

        <Route path="/reset-password/:token" element={<ResetPassword />} />

        <Route
          path="/student-dashboard"
          element={
            <ProtectedRoute>
              <StudentDashboard />
            </ProtectedRoute>
          }
        />

        <Route
          path="/dashboard/profile"
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
        />

        <Route
          path="/learning/:courseId"
          element={
            <ProtectedRoute>
              <Learning />
            </ProtectedRoute>
          }
        />

        <Route path="/certificate" element={<Certificate />} />

        {/* here for admin  */}
        <Route path="/admin-login" element={<AdminLogin />} />

        {/* <Route path="/admin" element={<AdminDashboard />} /> */}
        <Route
          path="/admin"
          element={
            <AdminRoute>
              <AdminDashboard />
            </AdminRoute>
          }
        />
        <Route
          path="/admin-learning"
          element={
            <AdminRoute>
              <AdminLearning />
            </AdminRoute>
          }
        />

        <Route
          path="/admin-Analytics"
          element={
            <AdminRoute>
              <Analytics />
            </AdminRoute>
          }
        />

        <Route
          path="/admin-uploads"
          element={
            <AdminRoute>
              <UploadLecture />
            </AdminRoute>
          }
        />

        <Route
          path="/admin-upload-content"
          element={
            <AdminRoute>
              <UploadContent />
            </AdminRoute>
          }
        />

        <Route
          path="/admin-students"
          element={
            <AdminRoute>
              <Students />
            </AdminRoute>
          }
        />
        <Route path="/admin-contactList" element={
          <AdminRoute>
            <ContactMessages />
          </AdminRoute>
        } />
        {/* <Route path="/admin-learning" element={<AdminLearning />} />
        <Route path="/admin-Analytics" element={<Analytics />} />
        <Route path="/admin-uploads" element={<UploadLecture />} />
        <Route path="/admin-upload-content" element={<UploadContent />} />
        <Route path="/admin-students" element={<Students />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;

// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
// import heroImg from './assets/hero.png'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <section id="center">
//         <div className="hero">
//           <img src={heroImg} className="base" width="170" height="179" alt="" />
//           <img src={reactLogo} className="framework" alt="React logo" />
//           <img src={viteLogo} className="vite" alt="Vite logo" />
//         </div>
//         <div>
//           <h1>Get started</h1>
//           <p>
//             Edit <code>src/App.jsx</code> and save to test <code>HMR</code>
//           </p>
//         </div>
//         <button
//           type="button"
//           className="counter"
//           onClick={() => setCount((count) => count + 1)}
//         >
//           Count is {count}
//         </button>
//       </section>

//       <div className="ticks"></div>

//       <section id="next-steps">
//         <div id="docs">
//           <svg className="icon" role="presentation" aria-hidden="true">
//             <use href="/icons.svg#documentation-icon"></use>
//           </svg>
//           <h2>Documentation</h2>
//           <p>Your questions, answered</p>
//           <ul>
//             <li>
//               <a href="https://vite.dev/" target="_blank">
//                 <img className="logo" src={viteLogo} alt="" />
//                 Explore Vite
//               </a>
//             </li>
//             <li>
//               <a href="https://react.dev/" target="_blank">
//                 <img className="button-icon" src={reactLogo} alt="" />
//                 Learn more
//               </a>
//             </li>
//           </ul>
//         </div>
//         <div id="social">
//           <svg className="icon" role="presentation" aria-hidden="true">
//             <use href="/icons.svg#social-icon"></use>
//           </svg>
//           <h2>Connect with us</h2>
//           <p>Join the Vite community</p>
//           <ul>
//             <li>
//               <a href="https://github.com/vitejs/vite" target="_blank">
//                 <svg
//                   className="button-icon"
//                   role="presentation"
//                   aria-hidden="true"
//                 >
//                   <use href="/icons.svg#github-icon"></use>
//                 </svg>
//                 GitHub
//               </a>
//             </li>
//             <li>
//               <a href="https://chat.vite.dev/" target="_blank">
//                 <svg
//                   className="button-icon"
//                   role="presentation"
//                   aria-hidden="true"
//                 >
//                   <use href="/icons.svg#discord-icon"></use>
//                 </svg>
//                 Discord
//               </a>
//             </li>
//             <li>
//               <a href="https://x.com/vite_js" target="_blank">
//                 <svg
//                   className="button-icon"
//                   role="presentation"
//                   aria-hidden="true"
//                 >
//                   <use href="/icons.svg#x-icon"></use>
//                 </svg>
//                 X.com
//               </a>
//             </li>
//             <li>
//               <a href="https://bsky.app/profile/vite.dev" target="_blank">
//                 <svg
//                   className="button-icon"
//                   role="presentation"
//                   aria-hidden="true"
//                 >
//                   <use href="/icons.svg#bluesky-icon"></use>
//                 </svg>
//                 Bluesky
//               </a>
//             </li>
//           </ul>
//         </div>
//       </section>

//       <div className="ticks"></div>
//       <section id="spacer"></section>
//     </>
//   )
// }

// export default App
