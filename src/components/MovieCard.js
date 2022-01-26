import { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Modal from "./Modal";
const MovieCard = ({ settings, movieList, modalId }) => {
  const [movieId, setMovieId] = useState(null);
  const showMovieDetails = (id) => {
    setMovieId(id);
  };

  return (
    <>
      <Slider {...settings}>
        {movieList.map((movie) => (
          <div key={movie.id} className="movie-card">
            <div className="m-1" style={{ position: "relative" }}>
              <img
                src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                className="card-img-top"
                alt="..."
              />

              <div className="movie-description" style={{ display: "none" }}>
                <span
                  className={` custom-rating badge ${
                    movie.vote_average > 8 ? "bg-success" : "bg-danger"
                  }`}
                >
                  {movie.vote_average}
                </span>
                <div>
                  <h5 className="card-title">{movie.title || movie.name}</h5>
                  {/* <p>
                    <strong>Type: </strong>
                    {movie.media_type}
                  </p> */}
                  <p>
                    <strong>Release Date: </strong>
                    {movie.release_date}
                  </p>
                  <button
                    type="button"
                    className="btn btn-danger"
                    data-bs-toggle="modal"
                    data-bs-target={`#${modalId}`}
                    onClick={() => showMovieDetails(movie.id)}
                  >
                    Details
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
      <Modal
        movieList={movieList}
        showMovieDetails={showMovieDetails}
        movieId={movieId}
        modalId={modalId}
      />
    </>
  );
};
export default MovieCard;
