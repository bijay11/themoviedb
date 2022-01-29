import { useState } from "react";
import MediaObject from "../../components/MediaObject";
import useEntertainment from "./../../hooks/useEntertainment";
import Input from "../../components/Input";

const Trending = () => {
  const [inputVal, setInputVal] = useState("");
  const { trending, getMovies } = useEntertainment();
  return (
    <>
      <h4>Trending</h4>
      <Input
        value={inputVal}
        placeholder="Search Movies"
        onChange={({ target }) => setInputVal(target.value)}
      />
      {getMovies(trending, inputVal).map((tvSerie) => (
        <MediaObject item={tvSerie} key={tvSerie.id} />
      ))}
    </>
  );
};
export default Trending;
