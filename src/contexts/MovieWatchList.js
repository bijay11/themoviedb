import { createContext, useContext, useState, useEffect } from "react";

const MovieWatchListContext = createContext();
export const useMovieWatchList = () => useContext(MovieWatchListContext);

export const MovieWatchListProvider = ({ children }) => {
  const [watchList, setWatchList] = useState([]);

  const addToWatchList = (item) => {
    setWatchList([...watchList, item]);
  };
  console.log(watchList);
  return (
    <MovieWatchListContext.Provider
      value={{ addToWatchList, watchList, setWatchList }}
    >
      {children}
    </MovieWatchListContext.Provider>
  );
};
