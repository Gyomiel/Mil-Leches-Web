//Images
import iconHelp from "../../assets/Icons/helpIcon.svg";
import iconMessages from "../../assets/Icons/messagesIcon.svg";
import calendar from "../../assets/various/Calendar.png";

import review1 from "../../assets/various/review1.svg";
import review2 from "../../assets/various/review2.svg";
//components
import PetsitterProfile from "../../components/PetsitterProfile/PetsitterProfile";
//CSS
import "./ProfilePetsitter.css";
import ReservationList from "../../components/reservelist/reservelist";
import FutureBoking from "../../components/FutureBoking/FutureBoking";
import PastBoking from "../../components/PastBoking/PastBoking";

const ProfilePetsitter = () => {






  return (
    <section className="mainContainerPage">
      <PetsitterProfile className="profile" />
      <section className="allright">
        <div className="messagesHelp">
          <div className="msg">
            <img className="iconMessages" src={iconMessages}></img>
            <button className="messages">My messages</button>
          </div>
          <div className="sos">
            <img className="iconHelp" src={iconHelp}></img>
            <button className="help">Need help?</button>
          </div>
        </div>
        <div className="calendarAndBookings">
          <img className="calendar" src={calendar}></img>
          <div className="bookingsection">
            <FutureBoking/>
            <PastBoking/>
             
          </div>
        </div>
        <div className="reviews">
          <h2 className="reviewTitle">My reviews from owners</h2>
          <img className="reviewsPic1" src={review1}></img>
          <img className="reviewsPic2" src={review2}></img>
          <ReservationList/>
        </div>
      </section>
    </section>
  );
};

export default ProfilePetsitter;
