import petsitterImg from "../../assets/PeopleImages/PetsitterProfilePic.png";
import iconProfile from "../../assets/Icons/UploadPicIcon.svg";
import iconHouse from "../../assets/Icons/HouseIconBlue.svg"
import "./PetsitterProfile.css"



function PetsitterProfile() {
  return (
    <body>
      <div className="container">
        <img className="profilePic" src={petsitterImg}></img>
        <h3 className="name">Marcus</h3>
        <img src={iconProfile}></img>
        <img src={iconHouse}></img>
      </div>
    </body>
  );
}

export default PetsitterProfile;
