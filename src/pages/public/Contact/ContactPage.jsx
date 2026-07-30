import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";
import Contact from "./Contact";

function ContactPage() {
  return (
    <GoogleReCaptchaProvider
      reCaptchaKey={import.meta.env.VITE_RECAPTCHA_SITE_KEY}
    >
      <Contact />
    </GoogleReCaptchaProvider>
  );
}

export default ContactPage;
