import { useMovieWatchList } from "../../contexts/MovieWatchList";
import MediaObject from "./../../components/MediaObject";
const WatchList = () => {
  const { watchList } = useMovieWatchList();

  return (
    <>
      {watchList.length ? (
        watchList.map((wl) => (
          <MediaObject
            key={wl.id}
            item={wl}
            overview={wl.overview}
            isWatchList={true}
          />
        ))
      ) : (
        <p
          className="d-flex align-items-center justify-content-center"
          style={{ minHeight: "100vh" }}
        >
          No Watch list to display.
        </p>
      )}
    </>
  );
};
export default WatchList;
