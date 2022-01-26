const MediaObject = ({ item }) => {
  return (
    <div className="d-flex mb-3" style={{ border: "1px solid #ddd" }}>
      <div className="flex-shrink-0">
        <img
          src={`https://image.tmdb.org/t/p/w200${item.poster_path}`}
          alt="..."
        />
      </div>
      <div className="flex-grow-1 ms-3">
        This is some content from a media component. You can replace this with
        any content and adjust it as needed.
      </div>
    </div>
  );
};
export default MediaObject;
