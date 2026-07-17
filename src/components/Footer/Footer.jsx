import "./Footer.css";

import {
  Mail,
  Phone,
  MapPin,
  ShieldCheck,
  Award,
  Target,
  CreditCard,
  Smartphone,
  MessageCircle,
  Users,
  BookOpen,
  Star,
  TrendingUp,
  Send,
  PlayCircle,
} from "lucide-react";
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaLinkedinIn,
  FaGooglePlay,
  FaApple,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">
      {/* Newsletter */}
      <div className="newsletter">
        <div className="newsletter-content">
          <h2>Join Our Learning Community</h2>

          <p>
            Get course updates, study materials, discounts, career guidance and
            learning resources directly in your inbox.
          </p>

          <div className="newsletter-form">
            <input type="email" placeholder="Enter your email address" />

            <button>
              <Send size={18} />
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="footer-container">
        {/* Brand */}
        <div className="footer-section">
          <h2 className="logo">My-Academy</h2>

          <p>
            Empowering students with high-quality education, practical skills
            and career-focused learning experiences.
          </p>

          <div className="social-icons">
            <a href="#">
              <FaFacebookF />
            </a>

            <a href="#">
              <FaInstagram />
            </a>

            <a href="#">
              <FaYoutube />
            </a>

            <a href="#">
              <FaLinkedinIn />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="footer-section">
          <h3>Quick Links</h3>

          <ul>
            <li>Home</li>
            <li>Courses</li>
            <li>About Us</li>
            <li>Contact</li>
            <li>Testimonials</li>
          </ul>
        </div>

        {/* Courses */}
        <div className="footer-section">
          <h3>Popular Courses</h3>

          <ul>
            <li>Class 11 Mathematics</li>
            <li>Class 12 Mathematics</li>
            <li>MERN Stack Development</li>
            <li>React Complete Course</li>
            <li>DSA With Java</li>
          </ul>
        </div>

        {/* Contact */}
        <div className="footer-section">
          <h3>Contact Us</h3>

          <div className="contact-item">
            <Mail size={18} />
            <span>support@tusharacademy.com</span>
          </div>

          <div className="contact-item">
            <Phone size={18} />
            <span>+91 7084287787</span>
          </div>

          <div className="contact-item">
            <MapPin size={18} />
            <span>Lucknow, Uttar Pradesh</span>
          </div>
        </div>
      </div>

      {/* Statistics */}
      <div className="footer-stats">
        <div className="stat">
          <Users size={30} />
          <h2>1000+</h2>
          <p>Students</p>
        </div>

        <div className="stat">
          <BookOpen size={30} />
          <h2>25+</h2>
          <p>Courses</p>
        </div>

        <div className="stat">
          <TrendingUp size={30} />
          <h2>95%</h2>
          <p>Success Rate</p>
        </div>

        <div className="stat">
          <Star size={30} />
          <h2>4.9</h2>
          <p>Average Rating</p>
        </div>
      </div>

      {/* Trust Badges */}
      <div className="trust-badges">
        <div className="badge">
          <ShieldCheck size={18} />
          Secure Payments
        </div>

        <div className="badge">
          <PlayCircle size={18} />
          Lifetime Access
        </div>

        <div className="badge">
          <Award size={18} />
          Certificate Included
        </div>

        <div className="badge">
          <Target size={18} />
          Career Focused
        </div>
      </div>

      {/* Payments */}
      <div className="payment-section">
        <div className="payment-header">
          <h3>Secure Payment Partners</h3>
          <p>
            100% secure transactions with trusted payment gateways and multiple
            payment options for students.
          </p>
        </div>

        <div className="payment-icons">
          <div className="payment-card">
            <CreditCard size={22} />
            <span>Visa</span>
          </div>

          <div className="payment-card">
            <CreditCard size={22} />
            <span>Mastercard</span>
          </div>

          <div className="payment-card">
            <CreditCard size={22} />
            <span>Razorpay</span>
          </div>

          <div className="payment-card">
            <Smartphone size={22} />
            <span>UPI</span>
          </div>
        </div>

        <div className="payment-security">
          🔒 SSL Secured • Safe Checkout • Instant Access After Payment
        </div>
      </div>

      {/* Mobile App */}
      <div className="app-section">
        <div className="app-content">
          <div className="app-badge">
            <Smartphone size={18} />
            Mobile Learning Experience
          </div>

          <h3>Download My Academy App</h3>

          <p>
            Watch lectures, practice quizzes, download notes, and learn anywhere
            with our mobile app.
          </p>

          <div className="app-buttons">
            <button className="store-btn google-play">
              <FaGooglePlay size={22} />

              <div>
                <small>GET IT ON</small>
                <span>Google Play</span>
              </div>
            </button>

            <button className="store-btn app-store">
              <FaApple size={24} />

              <div>
                <small>Download on the</small>
                <span>App Store</span>
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <div className="legal-links">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms & Conditions</a>
          <a href="#">Refund Policy</a>
          <a href="#">Cookie Policy</a>
        </div>

        <p>© {new Date().getFullYear()} My-Academy. All Rights Reserved.</p>
      </div>

      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/917084287787"
        className="whatsapp-btn"
        target="_blank"
        rel="noreferrer"
      >
        <MessageCircle size={30} />
      </a>
    </footer>
  );
}

export default Footer;
