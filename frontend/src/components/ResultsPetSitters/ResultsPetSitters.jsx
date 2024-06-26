import PetsitterCard from "../PetsitterCard/PetsitterCard";
import "./ResultsPetSitters.css";

function ResultsPetSitters({ display }) {
  return (
    <div
      style={{ display: display }}
      className={`${display}, mainContainerResults`}
    >
      <h1 className="petsittersIslandTitle">Pet sitters in Gran Canaria</h1>
      <PetsitterCard />
    </div>
  );
}

export default ResultsPetSitters;
