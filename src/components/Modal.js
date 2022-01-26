const Modal = ({ movieId, movieList, modalId }) => {
  const movie = movieList.filter((m) => m.id === movieId);

  return (
    <div
      className="modal  fade"
      id={modalId}
      tabIndex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered modal-xl">
        {movie &&
          movie.map((m) => (
            <div className="modal-content" key={m.id}>
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  {m.title || m.name}
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                <p>
                  <strong>Rating: </strong> {m.vote_average}
                </p>
                <p>
                  <strong>Release Date: </strong> {m.release_date}
                </p>
                <p>
                  <strong>Overview: </strong>
                  {m.overview}
                </p>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-danger">
                  Watch
                </button>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};
export default Modal;
