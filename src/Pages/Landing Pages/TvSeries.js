import { useState } from "react";
import MediaObject from "../../components/MediaObject";
import useEntertainment from "./../../hooks/useEntertainment";
import Input from "../../components/Input";

const TvSeries = () => {
  const [inputVal, setInputVal] = useState("");
  const { tvSeries, getMovies } = useEntertainment();
  return (
    <>
      <h4>TV Series</h4>
      <Input
        value={inputVal}
        placeholder="Search Movies"
        onChange={({ target }) => setInputVal(target.value)}
      />
      {getMovies(tvSeries, inputVal).map((tvSerie) => (
        <MediaObject
          item={tvSerie}
          key={tvSerie.id}
          overview={tvSerie.overview}
        />
      ))}
    </>
  );
};
export default TvSeries;
