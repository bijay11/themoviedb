import React, { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "@popperjs/core";
import "bootstrap/dist/js/bootstrap.bundle";

import Entertainment from "./Pages/Entertainment/Entertainment";
import Header from "./Pages/Header";
import Movies from "./Pages/Landing Pages/Movies";
import TvSeries from "./Pages/Landing Pages/TvSeries";
import Trending from "./Pages/Landing Pages/Trending";
import { AuthProvider } from "./contexts/AuthContext";
import { MovieWatchListProvider } from "./contexts/MovieWatchList";
import "./App.css";
import Signup from "./Pages/Non Secure Pages/Signup";
import Login from "./Pages/Non Secure Pages/Login";
import PrivateRoute from "./Pages/PrivateRoute";

import WatchList from "./Pages/Landing Pages/WatchList";
const PremiumMovies = lazy(() => import("./Pages/Landing Pages/PremiumMovies"));

function App() {
  const isPremiumMember = false;

  return (
    <>
      <BrowserRouter>
        <AuthProvider>
          <Header isPremiumMember={isPremiumMember} />
          <div className="container-fluid">
            <Suspense fallback={<p> Loading...</p>}>
              <Routes>
                <Route exact path="/" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route
                  element={
                    <MovieWatchListProvider>
                      <PrivateRoute />
                    </MovieWatchListProvider>
                  }
                >
                  <Route
                    exact
                    path="/entertainment"
                    element={<Entertainment />}
                  />
                  <Route path="/movies" element={<Movies />} />
                  <Route path="/tvSeries" element={<TvSeries />} />
                  <Route path="/trending" element={<Trending />} />
                  <Route path="/watchList" element={<WatchList />} />

                  {isPremiumMember && (
                    <Route path="/premiumMovies" element={<PremiumMovies />} />
                  )}
                </Route>
              </Routes>
            </Suspense>
          </div>
        </AuthProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
