import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";

const Header = ({ isPremiumMember }) => {
  const [error, setError] = useState("");
  const { currentUser, logout, loginUser } = useAuth();

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
            {currentUser && loginUser && (
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
                <li className="nav-item">
                  <NavLink to="/watchList" className="nav-link">
                    My Watch List
                  </NavLink>
                </li>
                {isPremiumMember && (
                  <li className="nav-item">
                    <NavLink to="/premiumMovies" className="nav-link">
                      Premium Movies
                    </NavLink>
                  </li>
                )}
              </>
            )}
          </ul>

          <div className="d-flex">
            {currentUser && loginUser && (
              <>
                <div className="text-white">
                  {currentUser && currentUser.email} | {"\u00A0"}
                </div>

                <Link to="#" onClick={handleLogout}>
                  Log Out
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};
export default React.memo(Header);
