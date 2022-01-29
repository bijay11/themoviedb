import { useState, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";

const Login = () => {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const [error, setError] = useState("");

  const { login, setLoginUser } = useAuth();

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setError("");
      setLoginUser(true);
      await login(emailRef.current.value, passwordRef.current.value);
      navigate("/entertainment");

      //<Navigate to="/entertainment" />;
    } catch (error) {
      setError(
        error.code === "auth/user-not-found"
          ? "Email not Found"
          : "Wrong Password"
      );
    }
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
            <h2 className="text-center">Log In</h2>

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

              <button type="submit" className="btn btn-primary w-100">
                Log In
              </button>
            </form>
            <div className="w-100 text-center mt-2">
              Need an account?
              <Link
                to="/signup
              "
              >
                Sign Up
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Login;
