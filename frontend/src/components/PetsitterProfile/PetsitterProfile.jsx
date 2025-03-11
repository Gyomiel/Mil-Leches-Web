//Imported images

import React from "react";
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

//THINGYS
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  getProfile,
  updateProfile,
  addPetsitterServices,
  uploadImage,
} from "../../services/user";

function PetsitterProfile() {
  const uploadedImage = React.useRef(null);
  const imageUploader = React.useRef(null);

  const uploadUserImage = async (e) => {
    const [file] = e.target.files;
    await uploadImage(file);
    setImageChanged(true);
  };
  const handleImageUpload = (e) => {
    const [file] = e.target.files;
    if (file) {
      const reader = new FileReader();
      const { current } = uploadedImage;
      current.file = file;
      reader.onload = (e) => {
        current.src = e.target.result;
      };
      reader.readAsDataURL(file);
    }
  };
  const [picture, setPicture] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [location, setLocation] = useState("");
  const [about, setAbout] = useState("");
  const [housesitting, setHousesitting] = useState(false);
  const [hairdresser, setHairdresser] = useState(false);
  const [boarding, setBoarding] = useState(false);
  const [walking, setWalking] = useState(false);
  const [editName, setEditName] = useState(false);
  const [imageChanged, setImageChanged] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const profile = async () => {
      const { data } = await getProfile();
      setName(data.name);
      setEmail(data.email);
      // setPassword(data.password);
      setLocation(data.location);
      setAbout(data.bio);
      setPicture(`http://localhost:3000/uploads//${data.image}`);
    };
    profile();
    setImageChanged(false);
  }, [imageChanged]);

  const handleName = (e) => {
    setName(e.target.value);
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };
  const handleLocation = (e) => {
    setLocation(e.target.value);
  };
  const handleAbout = (e) => {
    setAbout(e.target.value);
  };
  const handleHousesitting = () => {
    setHousesitting(!housesitting);
  };
  const handleHairdresser = () => {
    setHairdresser(!hairdresser);
  };
  const handleBoarding = () => {
    setBoarding(!boarding);
  };
  const handleWalking = () => {
    setWalking(!walking);
  };
  const handleEditName = () => {
    setEditName(!editName);
  };

  const handleChanges = async () => {
    const data = {
      name: name,
      email: email,
      password: password,
      location: location,
      bio: about,
    };
    await updateProfile(data);
    const services = {
      atHome: housesitting,
      visits: boarding,
      walking: walking,
      hairdresser: hairdresser,
    };
    await addPetsitterServices(services);
  };
  return (
    <div className="mainContainer">
      <div className="container">
        <div className="izqBox">
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <input
              type="file"
              accept="image/*"
              onChange={uploadUserImage}
              ref={imageUploader}
              style={{
                display: "none",
              }}
            />
            <div
              style={{
                className: "uploadPic",
                height: "220px",
                width: "340px",
                margin: 60,
                backgroundImage: `url(${picture})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
              }}
              onClick={() => imageUploader.current.click()}
            >
              <img ref={uploadedImage} style={{}} />
            </div>
          </div>
          <section className="editProfile">
            <h6 className="uploadPic">Upload picture</h6>
            <img
              className="profileIcon"
              src={iconProfile}
              onClick={() => imageUploader.current.click()}
            ></img>{" "}
          </section>
          <div className="nameTitle">
            {editName ? (
              <InputText value={name} onFunc={handleName} />
            ) : (
              <h1 className="name">{name}</h1>
            )}
            <img
              className="editIcon"
              src={iconEdit}
              onClick={handleEditName}
            ></img>
          </div>
          <section className="fillData">
            <div className="emailBox">
              <h3 className="box1">Email</h3>
              <InputText value={email} onFunc={handleEmail} />
              <img className="editIcon" src={iconEdit}></img>
            </div>
            <div className="password">
              <h3 className="box2">Password</h3>
              <InputPassword value={password} onFunc={handlePassword} />
              <img className="editIcon" src={iconEdit}></img>
            </div>
            <div className="locationBox">
              <h3 className="box3">Location</h3>
              <InputText value={location} onFunc={handleLocation} />
              <img className="editIcon" src={iconEdit}></img>
            </div>
          </section>
        </div>
        <section className="boxRight">
          <div className="area1">
            <h1 className="tittleprofile">My profile</h1>
            <button className="save" onClick={handleChanges}>
              Save changes
            </button>
            <h2 className="aboutme">About me</h2>
            <div>
              <InputTextArea
                value={about}
                className="textArea"
                onFunc={handleAbout}
              />
              <img className="editIcon" src={iconEdit}></img>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default PetsitterProfile;
