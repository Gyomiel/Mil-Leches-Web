import "./PetsitterCard.css";
import petsitPic from "../../assets/PeopleImages/PetsitterProfilePic.png";
import locationIcon from "../../assets/Icons/locationIcon.svg";
import { useState } from "react";

function PetsitterCard({ petsitter }) {
  const [alert, setAlert] = useState(false); 
  const handleBookingAlert = () => {
     setAlert(!alert);
   };
  return (
    <div>
      <div
        className="petsitterCard"
        style={{ display: alert ? "none" : "flex" }}
      >
        <div className="topPartCard">
          <section className="petsitPic">
            <div
              className="petsitPic"
              style={{
                backgroundImage: `url(${`http://localhost:3000/uploads/${petsitter.image}`})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
              }}
            ></div>
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
          <section className="contactButton" onClick={handleBookingAlert}>
            <button className="bookNow">Book now</button>
          </section>
          <section className="commentBio">
            <div className="bioRe">
              <p className="bioHere">{petsitter.bio}</p>
            </div>
          </section>
        </div>
      </div>
      <h1 className="Jonathan" style={{ display: alert ? "flex" : "none" }}> Jonathan has been booked!</h1>
    </div>
  );
}

export default PetsitterCard;
