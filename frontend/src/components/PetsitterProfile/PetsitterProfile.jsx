import petsitterImg from "../../assets/PeopleImages/PetsitterProfilePic.png";
import iconProfile from "../../assets/Icons/UploadPicIcon.svg";
import iconHouse from "../../assets/Icons/HouseIconBlue.svg";
import iconEdit from "../../assets/Icons/EditIcon.svg";
import "./PetsitterProfile.css";
import InputText from "../InputText/InputText";
import InputPassword from "../InputPassword/InputPassword";

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
          <section className="fillData">
            <h1 className="name">Marcus</h1>
            <h3 className="box1">Email</h3>
            <div className="emailBox">
              <InputText placeholder="name@domain.com" />
              <img className="editIcon" src={iconEdit}></img>
            </div>
            <br></br>
            <div className="password">
              <h3 className="box2">Password</h3>
              <InputPassword className="inputs" />
              <img className="editIcon" src={iconEdit}></img>
            </div>
            <br></br>
            <div className="locationBox">
              <h3 className="box3">Location</h3>
              <InputText className="inputs" />
              <img className="editIcon" src={iconEdit}></img>
            </div>
          </section>
        </div>
      </div>
      <img src={iconHouse}></img>
    </body>
  );
}

export default PetsitterProfile;
