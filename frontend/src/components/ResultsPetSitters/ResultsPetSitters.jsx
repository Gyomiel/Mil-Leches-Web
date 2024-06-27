import PetsitterCard from "../PetsitterCard/PetsitterCard";
import "./ResultsPetSitters.css";

function ResultsPetSitters({ display, petsitters }) {
  return (
    <div style={{ display: display }} className={`mainContainerResults`}>
      <h1 className="petsittersIslandTitle">Pet sitters in Gran Canaria</h1>
      {petsitters?.map((petsitter) => {
        return <PetsitterCard key={petsitter.id} petsitter={petsitter} />;
      })}
    </div>
  );
}

export default ResultsPetSitters;
