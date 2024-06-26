import "./PetsitterCard.css";
import petsitPic from "../../assets/PeopleImages/PetsitterProfilePic.png";
import locationIcon from "../../assets/Icons/locationIcon.svg";

function PetsitterCard() {
  return (
    <div>
      <div className="petsitterCard">
        <div className="topPartCard">
          <section className="petsitPic">
            <img className="petsitPic" src={petsitPic}></img>
          </section>
          <section className="petsitName">
            <h3 className="petsitNameC">Marcus</h3>
          </section>
          <section className="petsitLocation">
            <div>
              <img className="locationIcon" src={locationIcon}></img>
            </div>
            <div>
              <h3 className="petsitLocationName">Gran Canaria</h3>
            </div>
          </section>
          </div>
          <div className="bottomCard">
          <section className="contactButton">
            <button className="bookNow">Book now</button>
          </section>
          <section className="commentBio">
            <div className="bioRe">
                <h3 className="bioHere">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla, praesentium quia nam dolore illo nostrum sit voluptatibus, cumque nemo quis expedita id fugiat. Quibusdam hic vitae ratione similique dolorem accusantium?</h3>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default PetsitterCard;
