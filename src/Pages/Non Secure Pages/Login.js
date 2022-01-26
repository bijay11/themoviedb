import { useState, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";

const Login = () => {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const { login } = useAuth();

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setError("");
      setLoading(true);
      await login(emailRef.current.value, passwordRef.current.value);
      navigate("/entertainment");
    } catch (error) {
      console.log("test error", error);
      setError("Failed to log in");
    }
    setLoading(false);
  };

  return (
    <div
      className="d-flex align-items-center justify-content-center"
      style={{ minHeight: "100vh" }}
    >
      <div className="w-100" style={{ maxWidth: "400px" }}>
        <div className="card">
          <div className="card-body">
            <h2 className="text-center">Log In</h2>

            {error && <div className="alert alert-danger">{error}</div>}
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

              <button
                disabled={loading}
                type="submit"
                className="btn btn-primary w-100"
              >
                Log In
              </button>
            </form>
            <div className="w-100 text-center mt-2">
              Need an account? <Link to="/signup">Sign Up</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Login;
