import MediaObject from "../../components/MediaObject";
import useEntertainment from "./../../hooks/useEntertainment";
const Movies = () => {
  const { movies } = useEntertainment();

  return (
    <>
      <h4>Movies</h4>

      {movies.map((movie) => (
        <MediaObject item={movie} key={movie.id} />
      ))}
    </>
  );
};
export default Movies;
