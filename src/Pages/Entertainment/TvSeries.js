import MovieCard from "../../components/MovieCard";

const TvSeries = ({ tvSeries, settings }) => {
  return (
    <>
      <h4>Tv Series</h4>
      <MovieCard
        settings={settings}
        movieList={tvSeries}
        modalId="tvSeriesModal"
      />
    </>
  );
};
export default TvSeries;
