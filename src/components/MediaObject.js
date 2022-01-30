import { useMovieWatchList } from "../contexts/MovieWatchList";

const MediaObject = ({ item, overview, isWatchList = false }) => {
  const { addToWatchList, removeWatchList } = useMovieWatchList();

  return (
    <div className="d-flex mb-3" style={{ border: "1px solid #ddd" }}>
      <div className="flex-shrink-0">
        <img
          src={`https://image.tmdb.org/t/p/w200${item.poster_path}`}
          alt="..."
        />
      </div>
      <div className="p-2 flex-grow-1">
        <div className=" ms-3 moviePnl">
          <p>{overview}</p>
          <div className="text-end">
            {!isWatchList ? (
              <button
                type="button"
                className="btn btn-outline-primary "
                onClick={() => addToWatchList(item)}
              >
                Add To Watch List
              </button>
            ) : (
              <button
                type="button"
                className="btn btn-outline-danger "
                onClick={() => removeWatchList(item.id)}
              >
                Remove
              </button>
            )}

            <button type="button" className="btn btn-danger ms-2">
              Play
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default MediaObject;
