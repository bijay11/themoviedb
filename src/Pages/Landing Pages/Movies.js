import { useState } from "react";
import MediaObject from "../../components/MediaObject";
import useEntertainment from "./../../hooks/useEntertainment";
import Input from "../../components/Input";

const Movies = () => {
  const [inputVal, setInputVal] = useState("");
  const { movies, getMovies } = useEntertainment();

  return (
    <>
      <h4>Movies</h4>
      <Input
        value={inputVal}
        placeholder="Search Movies"
        onChange={({ target }) => setInputVal(target.value)}
      />
      {getMovies(movies, inputVal).map((movie) => (
        <MediaObject
          item={movie}
          key={movie.id}
          overview={movie.overview}
          isWatchList={false}
        />
      ))}
    </>
  );
};
export default Movies;
