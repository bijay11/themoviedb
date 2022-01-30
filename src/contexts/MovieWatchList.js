import { createContext, useContext, useState, useEffect } from "react";

const MovieWatchListContext = createContext();
export const useMovieWatchList = () => useContext(MovieWatchListContext);

export const MovieWatchListProvider = ({ children }) => {
  const [watchList, setWatchList] = useState([]);

  const addToWatchList = (item) => {
    setWatchList([...watchList, item]);
  };
  const removeWatchList = (id) => {
    // setWatchList([...watchList, item]);
    const updatedWatchList = watchList.filter((wl) => wl.id !== id);
    setWatchList(updatedWatchList);
  };
  return (
    <MovieWatchListContext.Provider
      value={{ addToWatchList, watchList, setWatchList, removeWatchList }}
    >
      {children}
    </MovieWatchListContext.Provider>
  );
};
