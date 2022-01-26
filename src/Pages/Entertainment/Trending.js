import MovieCard from "../../components/MovieCard";

const Trending = ({ trending, settings }) => {
  return (
    <div className="mb-3">
      <h4>Trending</h4>
      <MovieCard
        settings={settings}
        movieList={trending}
        modalId="TrendingModal"
      />
    </div>
  );
};
export default Trending;
