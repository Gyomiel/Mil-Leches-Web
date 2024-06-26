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
import { useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { getProfile, updateProfile } from "../../services/user";

function PetsitterProfile() {
    const uploadedImage = React.useRef(null);
    const imageUploader = React.useRef(null);

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
  const navigate = useNavigate();

  useEffect(() => {
    const profile = async () => {
      const { data } = await getProfile();
      setName(data.name);
      setEmail(data.email);
      // setPassword(data.password);
      setLocation(data.location);
      setAbout(data.bio);
    };
    profile();
  }, []);

  const handlePicture = (e) => {
    setPicture(e.target.value);
  };
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
  const handleHousesitting = (e) => {
    setHousesitting(e.target.value);
  };
  const handleHairdresser = (e) => {
    setHairdresser(e.target.value);
  };
  const handleBoarding = (e) => {
    setBoarding(e.target.value);
  };
  const handleWalking = (e) => {
    setWalking(e.target.value);
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
    console.log(data.bio);
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
              onChange={handleImageUpload}
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
          <h2 className="servicestext">Services I offer</h2>

          <div className="services">
            <div className="housesitting">
              <img className="iconHouse" src={iconHouse}></img>
              <div className="texthouseavg">
                <h3 className="housetitle">House-sitting</h3>
                <h5 className="Avgh">Avg. 20€ Night</h5>
              </div>
              <input
                className="checkbox1"
                type="checkbox"
                value="patata"
                onClick={handleHousesitting}
              ></input>
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
    </div>
  );
}

export default PetsitterProfile;
