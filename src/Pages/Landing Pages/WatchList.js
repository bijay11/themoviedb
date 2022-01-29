import { useMovieWatchList } from "../../contexts/MovieWatchList";
import MediaObject from "./../../components/MediaObject";
const WatchList = () => {
  const { watchList } = useMovieWatchList();
  console.log(watchList);

  return (
    <>
      {watchList &&
        watchList.map((wl) => (
          <MediaObject
            key={wl.id}
            item={wl}
            overview={wl.overview}
            isWatchList={true}
          />
        ))}
    </>
  );
};
export default WatchList;
