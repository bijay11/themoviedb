import axios from "axios";
import { useState, useEffect } from "react";
const movieKey = process.env.REACT_APP_MOVIE_API_KEY;

const useEntertainment = () => {
  const [movies, setMovies] = useState([]);
  const [trending, setTrending] = useState([]);
  const [tvSeries, setTvSeries] = useState([]);

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 6,
  };

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/trending/all/day?api_key=${movieKey}`)
      .then((res) => res.json())
      .then(({ results }) => setTrending(results));
    fetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=${movieKey}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate`
    )
      .then((res) => res.json())
      .then(({ results }) => setMovies(results));
    fetch(
      `https://api.themoviedb.org/3/discover/tv?api_key=${movieKey}&language=en-US&sort_by=popularity.desc&page=1&timezone=America%2FNew_York&include_null_first_air_dates=false&with_watch_monetization_types=flatrate&with_status=0&with_type=0`
    )
      .then((res) => res.json())
      .then(({ results }) => setTvSeries(results));
  }, []);

  // useEffect(() => {
  //   fetch(
  //     `https://api.themoviedb.org/3/discover/movie?api_key=${movieKey}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate`
  //   )
  //     .then((res) => res.json())
  //     .then(({ results }) => setMovies(results));
  // }, []);

  // useEffect(() => {
  //   fetch(
  //     `https://api.themoviedb.org/3/discover/tv?api_key=${movieKey}&language=en-US&sort_by=popularity.desc&page=1&timezone=America%2FNew_York&include_null_first_air_dates=false&with_watch_monetization_types=flatrate&with_status=0&with_type=0`
  //   )
  //     .then((res) => res.json())
  //     .then(({ results }) => setTvSeries(results));
  // }, []);

  return {
    movies,
    trending,
    tvSeries,
    settings,
  };
};
export default useEntertainment;
