import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const [error, setError] = useState("");
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    setError("");
    try {
      await logout();
      navigate("/");
    } catch (error) {
      setError("Cannot log out");
      console.log("cannot log out", error);
    }
  };
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-3">
      <div className="container-fluid">
        <Link
          to={`${currentUser ? "/entertainment" : "/"}`}
          className="navbar-brand"
        >
          MovieDB
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarTogglerDemo02"
          aria-controls="navbarTogglerDemo02"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            {currentUser && (
              <>
                <li className="nav-item">
                  <NavLink to="/entertainment" className="nav-link">
                    Home
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/trending" className="nav-link">
                    Trending
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/movies" className="nav-link">
                    Movies
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/tvSeries" className="nav-link">
                    TV Series
                  </NavLink>
                </li>
              </>
            )}
          </ul>
          {/* <form className="d-flex">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form> */}
          <div className="d-flex">
            {currentUser && (
              <button className="btn btn-link" onClick={handleLogout}>
                Log Out
              </button>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};
export default Header;
