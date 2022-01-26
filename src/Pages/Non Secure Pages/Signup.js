import { useState, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";

const Signup = () => {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const confirmPasswordRef = useRef(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const { signup } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (passwordRef.current.value !== confirmPasswordRef.current.value) {
      return setError("Passwords do not match");
    }
    try {
      setError("");
      setLoading(true);
      await signup(emailRef.current.value, passwordRef.current.value);
      navigate("/");
    } catch (error) {
      setError(
        error.code === "auth/weak-password"
          ? "Password should be at least 6 characters"
          : "Failed to create account"
      );
    }
    setLoading(false);
  };

  return (
    <div
      className="d-flex align-items-center justify-content-center"
      style={{ minHeight: "100vh" }}
    >
      <div className="w-100" style={{ maxWidth: "400px" }}>
        {error && <div className="alert alert-danger">{error}</div>}
        <div className="card">
          <div className="card-body">
            <h2 className="text-center">Sign Up</h2>

            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  aria-describedby="emailHelp"
                  ref={emailRef}
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="password" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  ref={passwordRef}
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="confirmPassword" className="form-label">
                  Confirm Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="confirmPassword"
                  ref={confirmPasswordRef}
                  required
                />
              </div>

              <button
                disabled={loading}
                type="submit"
                className="btn btn-primary w-100"
              >
                Sign Up
              </button>
            </form>
            <div className="w-100 text-center mt-2">
              Already have an account? <Link to="/">Log In</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Signup;
