import "./OwnerProfile.css";
import ownerPic from "../../assets/PeopleImages/ownerPic.png";
import petPic from "../../assets/PetsImages/petPic.svg";
import iconProfile from "../../assets/Icons/UploadPicIcon.svg";
import iconEdit from "../../assets/Icons/EditIcon.svg";
import iconHelp from "../../assets/Icons/helpIcon.svg";
import iconMessages from "../../assets/Icons/messagesIcon.svg";
import iconPlus from "../../assets/Icons/plusIcon.svg";
import iconHouseBlue from "../../assets/Icons/HouseIconBlue.svg"
import iconBoardingBlue from "../../assets/Icons/iconBoarding.svg"
import iconWalkingBlue from "../../assets/Icons/PawIconBlue.svg";
import iconHairdresserBlue from "../../assets/Icons/HairdresserIconBlue.svg";
import islands from "../../assets/various/islasmenosGran.svg"
import gC from "../../assets/various/GranCanaria.svg";

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
          <div className="findPetSitterSection">
            <div className="findPetSitterContainer">
              <h2 className="lookingFor">I am looking for</h2>
              <div className="servicesO">
                <div className="housesittingO">
                  <img className="iconHouseO" src={iconHouseBlue}></img>
                  <div className="texthouseavgO">
                    <h3 className="housetitleO">House-sitting</h3>
                    <h5 className="AvghO">Avg. 20€ Night</h5>
                  </div>
                  <input className="checkbox1O" type="checkbox"></input>
                </div>
                <div className="boardingO">
                  <img className="iconBoardingO" src={iconBoardingBlue}></img>
                  <div className="textboardingavgO">
                    <h3 className="boardingtitleO">Boarding</h3>
                    <h5 className="AvgbO">Avg. 20€ Night</h5>
                  </div>
                  <input className="checkboxO" type="checkbox"></input>
                </div>
                <div className="hairdresserO">
                  <img
                    className="iconHairdresserO"
                    src={iconHairdresserBlue}
                  ></img>
                  <div className="texthairdresseravgO">
                    <h3 className="hairdressertitleO">Hairdresser</h3>
                    <h5 className="AvghO">Avg. 9€ Hour</h5>
                  </div>
                  <input className="checkboxO" type="checkbox"></input>
                  <div className="walkingO">
                    <img className="iconWalkingO" src={iconWalkingBlue}></img>
                    <div className="textwalkingavgO">
                      <h3 className="walkingtitleO">Walking</h3>
                      <h5 className="AvgwO">Avg. 9€ Hour</h5>
                    </div>
                    <input className="checkboxO" type="checkbox"></input>
                  </div>
                </div>
              </div>
              <h2 className="selectIsland">Select your island</h2>
              <img className="islandsO" src={islands}></img>
              <img className="gC" src={gC}></img>
              <h2 className="findIt">Find me a pett sitter</h2>
            </div>
            <div className="bookingsectionO">
              <div className="futureBookingsO">
                <h2 className="pastBookO">My future bookings</h2>
                <button className="futureBooking1O">
                  03/07/2024 - 05/07/2024
                </button>
                <img className="plus1O" src={iconPlus}></img>
              </div>
              <div className="pastBookingsO">
                <h2 className="pastBookO">Past bookings</h2>
                <button className="pastBookingO1">
                  12/06/2024 - 13/06/2024
                </button>
                <br></br>
                <br></br>
                <button className="pastBookingO2">
                  01/04/2024 - 01/04/2024
                </button>
                <img className="plus2O" src={iconPlus}></img>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default OwnerProfile;
