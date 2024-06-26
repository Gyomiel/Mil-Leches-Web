import "./Home.css";
import petsImage from "../../assets/PetsImages/Graphic.png";
import iconBoardingGreen from "../../assets/Icons/iconBoardingGreen.svg";
import iconHairdresserGreen from "../../assets/Icons/iconHairdresserGreen.svg";
import iconWalkingGreen from "../../assets/Icons/iconWalkingGreen.svg";
import iconHouseGreen from "../../assets/Icons/iconHouseGreen.svg";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div className="mainHome">
        <div className="leftHome">
          <h2 className="titleHome">A vacation for your furry friends</h2>
          <h3 className="find">
            Find trusted pet sitters in the Canary Islands and unwind while you
            are away
          </h3>
          <Link to="/signup">
            <button className="createFree">Create your free account</button>
          </Link>
          <Link to="/signup">
            <h4 className="wantToBe">I want to be a petsitter</h4>
          </Link>
        </div>
        <div className="rightHome">
          <img className="petsImage" src={petsImage}></img>
        </div>
      </div>
      <div className="sitAndRelax">
        Sit back and relax! Your pet is in safe hands with their loving and
        experienced pet sitter
      </div>
      <h1 className="servicesTitleHome">OUR PET SITTERS SERVICES</h1>
      <div className="servicesHome">
        <div className="houseHome">
          <img className="iconHouseHome" src={iconHouseGreen}></img>
          <h3 className="textHouseHome">House sitting</h3>
        </div>
        <div className="boardingHome">
          <img className="iconBoardingHome" src={iconBoardingGreen}></img>
          <h3 className="textBoardingHome">Boarding</h3>
        </div>
        <div className="walkingHome">
          <img className="iconWalkingHome" src={iconWalkingGreen}></img>
          <h3 className="textWalkingHome">Dog walking</h3>
        </div>
        <div className="hairdresserHome">
          <img className="iconHairdresserHome" src={iconHairdresserGreen}></img>
          <h3 className="textHairdresserHome">Grooming</h3>
        </div>
      </div>
    </>
  );
};

export default Home;
