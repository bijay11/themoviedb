import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "@popperjs/core";
import "bootstrap/dist/js/bootstrap.bundle";

import Entertainment from "./Pages/Entertainment/Entertainment";
import Header from "./Pages/Header";
import Movies from "./Pages/Landing Pages/Movies";
import TvSeries from "./Pages/Landing Pages/TvSeries";
import Trending from "./Pages/Landing Pages/Trending";
import useFormValidation from "./hooks/useFormValidation";
import { AuthProvider } from "./contexts/AuthContext";
import "./App.css";
import Signup from "./Pages/Non Secure Pages/Signup";
import Login from "./Pages/Non Secure Pages/Login";
import PrivateRoute from "./Pages/PrivateRoute";

function App() {
  const { isAuth } = useFormValidation();

  return (
    <>
      <BrowserRouter>
        <AuthProvider>
          <Header />
          <div className="container-fluid">
            <Routes>
              <Route exact path="/" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route element={<PrivateRoute />}>
                <Route
                  exact
                  path="/entertainment"
                  element={<Entertainment />}
                />
                <Route path="/movies" element={<Movies />} />
                <Route path="/tvSeries" element={<TvSeries />} />
                <Route path="/trending" element={<Trending />} />
              </Route>
            </Routes>
          </div>
        </AuthProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
