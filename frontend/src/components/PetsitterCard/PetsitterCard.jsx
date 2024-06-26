import "./PetsitterCard.css";
import petsitPic from "../../assets/PeopleImages/PetsitterProfilePic.png";
import locationIcon from "../../assets/Icons/locationIcon.svg";

function PetsitterCard({ petsitter }) {
  return (
    <div>
      <div className="petsitterCard">
        <div className="topPartCard">
          <section className="petsitPic">
            <img className="petsitPic" src={petsitPic}></img>
          </section>
          <section className="petsitName">
            <h3 className="petsitNameC">{petsitter.name}</h3>
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
              <h3 className="bioHere">{petsitter.bio}</h3>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default PetsitterCard;
