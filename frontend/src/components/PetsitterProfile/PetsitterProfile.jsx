//Imported images

import petsitterImg from "../../assets/PeopleImages/PetsitterProfilePic.png";
import iconProfile from "../../assets/Icons/UploadPicIcon.svg";
import iconHouse from "../../assets/Icons/HouseIconBlue.svg";
import iconEdit from "../../assets/Icons/EditIcon.svg";
import iconBoarding from "../../assets/Icons/iconBoarding.svg";
import iconHairdresser from "../../assets/Icons/HairdresserIconBlue.svg";
import iconWalking from "../../assets/Icons/PawIconBlue.svg";
import iconBulb from "../../assets/Icons/iconBulb.svg";

//CSS
import "./PetsitterProfile.css";

// COMPONENTS
import InputText from "../InputText/InputText";
import InputPassword from "../InputPassword/InputPassword";
import InputTextArea from "../InputTextArea/InputTextArea";

function PetsitterProfile() {
  return (
    <body>
      <div className="container">
        <div className="izqBox">
          <img className="profilePic" src={petsitterImg}></img>
          <section className="editProfile">
            <img className="profileIcon" src={iconProfile}></img>{" "}
            <h6 className="uploadPic">Upload picture</h6>
          </section>
          <div className="nameTitle">
            <h1 className="name">Marcus</h1>
            <img className="editIcon" src={iconEdit}></img>
          </div>
          <section className="fillData">
            <div className="emailBox">
              <h3 className="box1">Email</h3>
              <InputText placeholder="name@domain.com" />
              <img className="editIcon" src={iconEdit}></img>
            </div>
            <div className="password">
              <h3 className="box2">Password</h3>
              <InputPassword className="inputs" />
              <img className="editIcon" src={iconEdit}></img>
            </div>
            <div className="locationBox">
              <h3 className="box3">Location</h3>
              <InputText className="inputs" />
              <img className="editIcon" src={iconEdit}></img>
            </div>
          </section>
        </div>
        <section className="boxRight">
          <div className="area1">
            <h1 className="tittleprofile">My profile</h1>
            <h2 className="aboutme">About me</h2>
            <div>
              <InputTextArea className="textArea" />
              <img className="editIcon" src={iconEdit}></img>
            </div>
          </div>
          <h2>Services I offer</h2>

          <div className="services">
            <div className="housesitting">
              <img className="iconHouse" src={iconHouse}></img>
              <div className="texthouseavg">
                <h3 className="housetitle">House-sitting</h3>
                <h5 className="Avgh">Avg. 20€ Night</h5>
              </div>
              <input className="checkbox1" type="checkbox"></input>
            </div>
            <div className="boarding">
              <img className="iconBoarding" src={iconBoarding}></img>
              <div className="textboardingavg">
                <h3 className="boardingtitle">Boarding</h3>
                <h5 className="Avgb">Avg. 20€ Night</h5>
              </div>
              <input className="checkbox" type="checkbox"></input>
            </div>
            <div className="hairdresser">
              <img className="iconHairdresser" src={iconHairdresser}></img>
              <div className="texthairdresseravg">
                <h3 className="hairdressertitle">Hairdresser</h3>
                <h5 className="Avgh">Avg. 9€ Hour</h5>
              </div>
              <input className="checkbox" type="checkbox"></input>
              <div className="walking">
                <img className="iconWalking" src={iconWalking}></img>
                <div className="textwalkingavg">
                  <h3 className="walkingtitle">Walking</h3>
                  <h5 className="Avgw">Avg. 9€ Hour</h5>
                </div>
                <input className="checkbox" type="checkbox"></input>
              </div>
            </div>
          </div>
        </section>
      </div>
      <section className="tips">
        <div className="tipstitle">
          <img className="iconBulb" src={iconBulb}></img>
          <h3 className="tipstitle">Tips to write your profile</h3>
        </div>
        <ul>
          <li>
            Upload a nice picture of you and include an animal you have sited or
            owned previously
          </li>
          <li>
            Fill out your pet care experience and show the services you offer
          </li>
          <li>
            Be clear about your pet sitting preferences and size restrictions
          </li>
          <li>Keep your calendar and profile up to date</li>
        </ul>
      </section>
    </body>
  );
}

export default PetsitterProfile;
