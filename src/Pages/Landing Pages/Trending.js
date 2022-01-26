import MediaObject from "../../components/MediaObject";
import useEntertainment from "./../../hooks/useEntertainment";
const Trending = () => {
  const { trending } = useEntertainment();
  return (
    <>
      <h4>Trending</h4>

      {trending.map((tvSerie) => (
        <MediaObject item={tvSerie} key={tvSerie.id} />
      ))}
    </>
  );
};
export default Trending;
