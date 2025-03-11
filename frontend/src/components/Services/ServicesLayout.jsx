import "./ServicesLayout.css";
import iconBoardingGreen from "../../assets/Icons/iconBoardingGreen.svg";
import iconHairdresserGreen from "../../assets/Icons/iconHairdresserGreen.svg";
import iconWalkingGreen from "../../assets/Icons/iconWalkingGreen.svg";
import iconHouseGreen from "../../assets/Icons/iconHouseGreen.svg";
import { Link } from "react-router-dom";

const ServicesLayout = () => {
  return (
    <div>
      <section id="services-boxSe">
        <h4 className="servHeaderO">What do our pet sitters offer?</h4>
        <div className="servicesCards">
          <div className="houseSitting">
            <img className="imgIcon1" src={iconHouseGreen} />
            <h3 className="hSHeader">House sitting</h3>
            <p className="servDesc">
              Our sitters care for both your pets and home, ensuring your pets
              receive all the love and attention they need while staying in
              environment.
            </p>
          </div>
          <div className="boardingS">
            <img className="imgIcon2" src={iconBoardingGreen} />
            <h3 className="hSHeader">Boarding</h3>
            <p className="servDesc">
              Your pets will stay overnight at the home of the sitter of your
              choice, where they will be treated like family in a cozy and
              inviting setting.
            </p>
          </div>
          <div className="dogWalking">
            <img className="imgIcon3" src={iconWalkingGreen} />
            <h3 className="hSHeader">Dog walking</h3>
            <p className="servDesc">
              Your dog will enjoy a walk around your neighborhood, perfect for
              busy days and for dogs with lots of energy to burn.
            </p>
          </div>
          <div className="grooming">
            <img className="imgIcon4" src={iconHairdresserGreen} />
            <h3 className="hSHeader">Grooming</h3>
            <p className="servDesc">
              Our pet sitters provide grooming services to pamper your pet,
              ensuring they look and feel their best, happy, and healthy.
            </p>
          </div>
        </div>
        <Link to="/signup">
          <button className="createFreeO">Create your free account</button>
        </Link>
      </section>
    </div>
  );
};

export default ServicesLayout;
