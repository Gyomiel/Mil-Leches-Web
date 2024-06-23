import "./OwnerProfile.css";
import ownerPic from "../../assets/PeopleImages/ownerPic.png";
import petPic from "../../assets/PetsImages/petPic.svg";
import iconProfile from "../../assets/Icons/UploadPicIcon.svg";
import iconEdit from "../../assets/Icons/EditIcon.svg";
import iconHelp from "../../assets/Icons/helpIcon.svg";
import iconMessages from "../../assets/Icons/messagesIcon.svg";
import iconPlus from "../../assets/Icons/plusIcon.svg";

import InputText from "../../components/InputText/InputText";
import InputPassword from "../../components/InputPassword/InputPassword";

const OwnerProfile = () => {
  return (
    <>
      <div className="wholeContainerOwner">
        <section className="ownerProfileLeft">
          <div className="ownerProfPicArea">
            <img className="ownerPic" src={ownerPic}></img>
            <img className="profileIcon" src={iconProfile}></img>
          </div>
          <h1 className="ownerName">Sarah</h1>
          <div className="textProfileBox">
            <div className="emailBoxO">
              <h3 className="box1O">Email</h3>
              <InputText placeholder="name@domain.com" />
              <img className="editIcon" src={iconEdit}></img>
            </div>
            <div className="passwordBox10">
              <h3 className="box2O">Password</h3>
              <InputPassword className="inputs" />
              <img className="editIcon" src={iconEdit}></img>
            </div>
            <div className="locationBoxO">
              <h3 className="box3O">Location</h3>
              <InputText className="inputs" />
              <img className="editIcon" src={iconEdit}></img>
            </div>
            <div className="textAreaO">
              <h3 className="aboutmeO">About me</h3>
              <textarea className="textAreaObox" required></textarea>
              <img className="editIcon" src={iconEdit}></img>
            </div>
          </div>
        </section>
        <section className="petProfileO">
          <div className="petProfPicArea">
            <img className="petPic" src={petPic}></img>
            <img className="profileIcon" src={iconProfile}></img>
          </div>
          <h1 className="petName">Max</h1>
          <div className="textProfileBoxPet">
            <div className="breedBox">
              <h3 className="breedText">Breed</h3>
              <InputText placeholder="name@domain.com" />
              <img className="editIcon" src={iconEdit}></img>
            </div>
            <div className="ageBox">
              <h3 className="ageText">Age</h3>
              <InputText placeholder="name@domain.com" />
              <img className="editIcon" src={iconEdit}></img>
            </div>
            <div className="afflictionsBox">
              <h3 className="afflictionsText">Afflictions</h3>
              <InputText placeholder="name@domain.com" />
              <img className="editIcon" src={iconEdit}></img>
            </div>
            <div className="vetBox">
              <h3 className="vetText">Trusted Vet</h3>
              <InputText placeholder="name@domain.com" />
              <img className="editIcon" src={iconEdit}></img>
            </div>
            <div className="characterBox">
              <h3 className="characterText">Character</h3>
              <InputText placeholder="name@domain.com" />
              <img className="editIcon" src={iconEdit}></img>
            </div>
          </div>
        </section>
        <section className="rightSectionOwner">
          <div className="messagesHelp">
            <div className="msg">
              <img className="iconMessages" src={iconMessages}></img>
              <h2 className="messages">My messages</h2>
            </div>
            <div className="sos">
              <img className="iconHelp" src={iconHelp}></img>
              <h2 className="help">Need help?</h2>
            </div>
          </div>
          <div className="bookingsection">
            <div className="futureBookings">
              <h2>My future bookings</h2>
              <button className="futureBooking1">
                03/07/2024 - 05/07/2024
              </button>
              <img className="plus1" src={iconPlus}></img>
            </div>
            <div className="pastBookings">
              <h2>Past bookings</h2>
              <button className="pastBooking1">12/06/2024 - 13/06/2024</button>
              <br></br>
              <br></br>
              <button className="pastBooking2">01/04/2024 - 01/04/2024</button>
              <img className="plus2" src={iconPlus}></img>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default OwnerProfile;
