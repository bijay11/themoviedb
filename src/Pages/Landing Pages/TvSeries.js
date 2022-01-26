import MediaObject from "../../components/MediaObject";
import useEntertainment from "./../../hooks/useEntertainment";
const TvSeries = () => {
  const { tvSeries } = useEntertainment();
  return (
    <>
      <h4>TV Series</h4>

      {tvSeries.map((tvSerie) => (
        <MediaObject item={tvSerie} key={tvSerie.id} />
      ))}
    </>
  );
};
export default TvSeries;
