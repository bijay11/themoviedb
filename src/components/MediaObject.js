const MediaObject = ({ item, overview }) => {
  return (
    <div className="d-flex mb-3" style={{ border: "1px solid #ddd" }}>
      <div className="flex-shrink-0">
        <img
          src={`https://image.tmdb.org/t/p/w200${item.poster_path}`}
          alt="..."
        />
      </div>
      <div className="flex-grow-1 ms-3">{overview}</div>
    </div>
  );
};
export default MediaObject;
