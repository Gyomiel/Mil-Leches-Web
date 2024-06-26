import "./OwnerProfile.css";
import ownerPic from "../../assets/PeopleImages/ownerPic.png";
import petPic from "../../assets/PetsImages/petPic.svg";
import iconProfile from "../../assets/Icons/UploadPicIcon.svg";
import iconEdit from "../../assets/Icons/EditIcon.svg";
import iconHelp from "../../assets/Icons/helpIcon.svg";
import iconMessages from "../../assets/Icons/messagesIcon.svg";
import iconPlus from "../../assets/Icons/plusIcon.svg";
import iconHouseBlue from "../../assets/Icons/HouseIconBlue.svg";
import iconBoardingBlue from "../../assets/Icons/iconBoarding.svg";
import iconWalkingBlue from "../../assets/Icons/PawIconBlue.svg";
import iconHairdresserBlue from "../../assets/Icons/HairdresserIconBlue.svg";
import islands from "../../assets/various/islasmenosGran.svg";
import gC from "../../assets/various/GranCanaria.svg";

import InputText from "../../components/InputText/InputText";
import InputPassword from "../../components/InputPassword/InputPassword";

import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import {
  getProfile,
  updateProfile,
  getPetsitterServices,
} from "../../services/user";
import { getPetProfile, updatePetProfile, createPet } from "../../services/pet";
import DateInput from "../../components/DateInput/DateInput";
import ResultsPetSitters from "../../components/ResultsPetSitters/ResultsPetSitters";

const OwnerProfile = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [location, setLocation] = useState("");
  const [about, setAbout] = useState("");
  // const [housesitting, setHousesitting] = useState(false);
  // const [hairdresser, setHairdresser] = useState(false);
  // const [boarding, setBoarding] = useState(false);
  // const [walking, setWalking] = useState(false);
  const [petName, setPetName] = useState("");
  const [petBreed, setPetBreed] = useState("");
  const [petAge, setPetAge] = useState("");
  const [petSickness, setPetSickness] = useState("");
  const [petVet, setPetVet] = useState("");
  const [petBehaviour, setPetBehaviour] = useState("");
  const [dates, setDates] = useState();
  const [island, setIsland] = useState("");
  const [blockResults, setBlockResults] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const profile = async () => {
      const { data } = await getProfile();
      setName(data.name);
      setEmail(data.email);
      setLocation(data.location);
      setAbout(data.bio);
      setPetName(data.pets[0]?.name);
      setPetBreed(data.pets[0]?.breed);
      setPetAge(data.pets[0]?.age);
      setPetSickness(data.pets[0]?.sickness);
      setPetVet(data.pets[0]?.vet);
      setPetBehaviour(data.pets[0]?.behaviour);
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

  const handlePetName = (e) => {
    setPetName(e.target.value);
  };
  const handlePetBreed = (e) => {
    setPetBreed(e.target.value);
  };
  const handlePetAge = (e) => {
    setPetAge(e.target.value);
  };
  const handlePetVet = (e) => {
    setPetVet(e.target.value);
  };

  const handlePetSickness = (e) => {
    setPetSickness(e.target.value);
  };
  const handlePetBehaviour = (e) => {
    setPetBehaviour(e.target.value);
  };
  const handleIsland = () => {
    setIsland("Gran Canaria");
  };
  const handleBlockResults = () => {
    setBlockResults(!blockResults);
  };

  const handleDates = (dates) => {
    setDates(dates);
  };
  const handleChanges = async () => {
    const data = {
      name: name,
      email: email,
      password: password,
      location: location,
      bio: about,
    };
    if (petName.length !== 0) {
      const petData = {
        name: petName,
        breed: petBreed,
        age: petAge,
        sickness: petSickness,
        vet: petVet,
        behaviour: petBehaviour,
      };
      await createPet(petData);
      await updateProfile(data);
    } else {
      return;
    }

    await updateProfile(data);
  };
  const handlePetsitters = async () => {
    const { data } = await getPetsitterServices();
    setBlockResults(!blockResults);
  };
  return (
    <>
      <div className="wholeContainerOwner">
        <ResultsPetSitters display={blockResults ? "flex" : "none"} />
        <section
          style={{ display: blockResults ? "none" : "flex" }}
          className="ownerProfileLeft"
        >
          <div className="ownerProfPicArea">
            <img className="ownerPic" src={ownerPic}></img>
            <img className="profileIcon" src={iconProfile}></img>
          </div>
          <div className="ownerNameBox">
            <h1 className="ownerName">{name}</h1>
            <img className="editIconName" src={iconEdit}></img>
          </div>
          <div className="textProfileBox">
            <div className="emailBoxO">
              <h3 className="box11O">Email</h3>
              <InputText value={email} onFunc={handleEmail} />
              <img className="editIcon" src={iconEdit}></img>
            </div>
            <div className="passwordBox10">
              <h3 className="box11O">Password</h3>
              <InputPassword value={password} onFunc={handlePassword} />
              <img className="editIcon" src={iconEdit}></img>
            </div>
            <div className="locationBoxO">
              <h3 className="box11O">Location</h3>
              <InputText value={location} onFunc={handleLocation} />
              <img className="editIcon" src={iconEdit}></img>
            </div>
            <div className="textAreaO">
              <h3 className="box11O">About me</h3>
              <textarea
                className="textAreaObox"
                value={about}
                onChange={handleAbout}
                required
              ></textarea>
              <img className="editIcon" src={iconEdit}></img>
            </div>
          </div>
        </section>
        <section
          className="petProfileO"
          style={{ display: blockResults ? "none" : "flex" }}
        >
          <div className="petProfPicArea">
            <img className="petPic" src={petPic}></img>
            <img className="profileIconP" src={iconProfile}></img>
          </div>
          <div className="textProfileBoxPet">
            <div className="breedBox">
              <h3 className="box11O">Name</h3>
              <div className="petTextInputB">
                <InputText value={petName} onFunc={handlePetName} />
                <img className="editIcon" src={iconEdit}></img>
              </div>
            </div>
            <div className="breedBox">
              <h3 className="box11O">Breed</h3>
              <div className="petTextInputB">
                <InputText value={petBreed} onFunc={handlePetBreed} />
                <img className="editIcon" src={iconEdit}></img>
              </div>
            </div>
            <div className="ageBox">
              <h3 className="box11O">Age</h3>
              <InputText value={petAge} onFunc={handlePetAge} />
              <img className="editIcon" src={iconEdit}></img>
            </div>
            <div className="afflictionsBox">
              <h3 className="box11O">Afflictions</h3>
              <InputText value={petSickness} onFunc={handlePetSickness} />
              <img className="editIcon" src={iconEdit}></img>
            </div>
            <div className="vetBox">
              <h3 className="box11O">Trusted Vet</h3>
              <InputText value={petVet} onFunc={handlePetVet} />
              <img className="editIcon" src={iconEdit}></img>
            </div>
            <div className="characterBox">
              <h3 className="box11O">Character</h3>
              <InputText value={petBehaviour} onFunc={handlePetBehaviour} />
              <img className="editIcon" src={iconEdit}></img>
            </div>
            <div className="buttonS">
              <button className="saveO" onClick={handleChanges}>
                Save changes
              </button>
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
                    <h3 className="housetitleO">House sitting</h3>
                    <h5 className="AvghO">Avg. 20€ Night</h5>
                  </div>
                  <input
                    className="checkbox1O"
                    type="checkbox"
                    onClick={handleHousesitting}
                  ></input>
                </div>
                <div className="boardingO">
                  <img className="iconBoardingO" src={iconBoardingBlue}></img>
                  <div className="textboardingavgO">
                    <h3 className="boardingtitleO">Boarding</h3>
                    <h5 className="AvgbO">Avg. 20€ Night</h5>
                  </div>
                  <input
                    className="checkboxO"
                    type="checkbox"
                    onClick={handleBoarding}
                  ></input>
                </div>
                <div className="hairdresserO">
                  <img
                    className="iconHairdresserO"
                    src={iconHairdresserBlue}
                  ></img>
                  <div className="texthairdresseravgO">
                    <h3 className="hairdressertitleO">Grooming</h3>
                    <h5 className="AvghO">Avg. 9€ Hour</h5>
                  </div>
                  <input
                    className="checkboxO"
                    type="checkbox"
                    onClick={handleHairdresser}
                  ></input>
                  <div className="walkingO">
                    <img className="iconWalkingO" src={iconWalkingBlue}></img>
                    <div className="textwalkingavgO">
                      <h3 className="walkingtitleO">Walking</h3>
                      <h5 className="AvgwO">Avg. 9€ Hour</h5>
                    </div>
                    <input
                      className="checkboxOW"
                      type="checkbox"
                      onClick={handleWalking}
                    ></input>
                  </div>
                </div>
              </div>
              <h2 className="selectIsland">Select your island</h2>
              <img className="islandsO" src={islands}></img>
              <img className="gC" src={gC} onClick={handleIsland}></img>
              <DateInput dateFunc={handleDates}></DateInput>
              <button className="findIt" onClick={handlePetsitters}>
                Find me a pet sitter
              </button>
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
