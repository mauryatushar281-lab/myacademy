
import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";

import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";

import { GoogleOAuthProvider } from "@react-oauth/google";

import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <GoogleOAuthProvider
      clientId={import.meta.env.VITE_GOOGLE_CLIENT_ID}
    >
      <GoogleReCaptchaProvider
        reCaptchaKey={import.meta.env.VITE_RECAPTCHA_SITE_KEY}
      >
        <App />
      </GoogleReCaptchaProvider>
    </GoogleOAuthProvider>
  </React.StrictMode>
);


// import React from "react";
// import ReactDOM from "react-dom/client";

// import App from "./App";

// import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";

// import { GoogleOAuthProvider } from "@react-oauth/google";

// import "./index.css";

// ReactDOM.createRoot(document.getElementById("root")).render(
//   <React.StrictMode>
//     <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_CLIENT_ID}>
//       <App />
//     </GoogleOAuthProvider>
//   </React.StrictMode>,
//   <React.StrictMode>
//     <GoogleReCaptchaProvider
//       reCaptchaKey={import.meta.env.VITE_RECAPTCHA_SITE_KEY}
//     >
//       <App />
//     </GoogleReCaptchaProvider>
//   </React.StrictMode>,
// );

// import React from "react";
// import ReactDOM from "react-dom/client";
// import App from "./App";
// import { GoogleOAuthProvider } from "@react-oauth/google";
// import "./index.css";

// ReactDOM.createRoot(document.getElementById("root")).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_CLIENT_ID}>
//   <App />
// </GoogleOAuthProvider>
// );
