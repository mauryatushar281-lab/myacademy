import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Lock, Eye, EyeOff, CheckCircle, ArrowLeft } from "lucide-react";

import API from "@/services/api";
import "./ResetPassword.css";

function ResetPassword() {
  const { token } = useParams();

  const [password, setPassword] = useState("");

  const [showPassword, setShowPassword] = useState(false);

  const [loading, setLoading] = useState(false);

  const [message, setMessage] = useState("");

  const [error, setError] = useState("");

  const submit = async (e) => {
    e.preventDefault();

    setMessage("");
    setError("");

    try {
      setLoading(true);

      const res = await API.post("/users/reset-password", {
        token,
        password,
      });

      setMessage(res.data.message || "Password changed successfully");

      setPassword("");
    } catch (err) {
      setError(err.response?.data?.message || "Unable to reset password");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="reset-page">
      <div className="reset-card">
        <div className="reset-icon">
          <Lock size={35} />
        </div>

        <h1>Create New Password</h1>

        <p className="reset-text">
          Enter your new password to secure your account.
        </p>

        <form onSubmit={submit}>
          <div className="password-box">
            <Lock size={20} />

            <input
              type={showPassword ? "text" : "password"}
              placeholder="New password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />

            <button
              type="button"
              className="eye-btn"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>

          <button className="reset-btn" disabled={loading}>
            {loading ? "Updating..." : "Reset Password"}
          </button>
        </form>

        {message && (
          <div className="success-box">
            <CheckCircle size={20} />

            {message}
          </div>
        )}

        {error && <div className="error-box">{error}</div>}

        <Link to="/login" className="back-login">
          <ArrowLeft size={17} />
          Back to Login
        </Link>
      </div>
    </div>
  );
}

export default ResetPassword;
