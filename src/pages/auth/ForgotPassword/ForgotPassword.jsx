import { useState } from "react";
import { Mail, ArrowLeft, Send } from "lucide-react";
import { Link } from "react-router-dom";
import API from "@/services/api"; // adjust path
import "./ForgotPassword.css";

function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    setMessage("");
    setError("");

    try {
      setLoading(true);

      const res = await API.post("/users/forgot-password", {
        email,
      });

      setMessage(res.data.message);
    } catch (err) {
      setError(err.response?.data?.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="forgot-page">
      <div className="forgot-card">
        <div className="forgot-icon">
          <Mail size={32} />
        </div>

        <h1>Forgot Password?</h1>

        <p className="forgot-subtitle">
          Enter your email and we will send you a password reset link.
        </p>

        <form onSubmit={handleSubmit}>
          <div className="forgot-input">
            <Mail size={20} />

            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <button className="reset-btn" disabled={loading}>
            <Send size={18} />

            {loading ? "Sending..." : "Send Reset Link"}
          </button>
        </form>

        {message && <p className="success-msg">{message}</p>}

        {error && <p className="error-msg">{error}</p>}

        <Link to="/login" className="back-login">
          <ArrowLeft size={16} />
          Back to Login
        </Link>
      </div>
    </div>
  );
}

export default ForgotPassword;
