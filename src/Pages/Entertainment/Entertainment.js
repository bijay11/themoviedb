//import { Movies, TvSeries, Trending } from "./index";
import Movies from "./Movies";
import Trending from "./Trending";
import TvSeries from "./TvSeries";
import useEntertainment from "../../hooks/useEntertainment";

const Entertainment = () => {
  const { movies, trending, tvSeries, settings } = useEntertainment();

  if (movies.length <= 0 || trending.length <= 0 || tvSeries.length <= 0)
    return <h1>Loading...</h1>;
  return (
    <>
      <Movies movies={movies} settings={settings} />
      <Trending trending={trending} settings={settings} />
      <TvSeries tvSeries={tvSeries} settings={settings} />
    </>
  );
};
export default Entertainment;
