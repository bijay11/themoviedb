import MovieCard from "../../components/MovieCard";

const Movies = ({ movies, settings }) => {
  return (
    <>
      <h4>Movies</h4>
      <MovieCard settings={settings} movieList={movies} modalId="movieModal" />
    </>
  );
};
export default Movies;
