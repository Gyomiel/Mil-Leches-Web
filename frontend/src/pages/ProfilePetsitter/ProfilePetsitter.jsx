//Images
import iconHelp from "../../assets/Icons/helpIcon.svg";
import iconMessages from "../../assets/Icons/messagesIcon.svg";
import calendar from "../../assets/various/Calendar.png";
import iconPlus from "../../assets/Icons/plusIcon.svg";
import reviews from "../../assets/various/comments.svg";
//components
import PetsitterProfile from "../../components/PetsitterProfile/PetsitterProfile";
//CSS
import "./ProfilePetsitter.css";

const ProfilePetsitter = () => {
  return (
    <section className="mainContainerPage">
      <PetsitterProfile className="profile" />
      <section className="allright">
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
        <div className="calendarAndBookings">
          <img className="calendar" src={calendar}></img>
          <div className="bookingsection">
            <div className="futureBookings">
              <h2>My future bookings</h2>
              <button className="futureBooking1">
                03/07/2024 - 05/07/2024
              </button>
              <img className="plus1" src={iconPlus}></img>
            </div>
            <div className="pastBookings">
              <h2>Past bookings</h2>
              <button className="pastBooking1">12/06/2024 - 13/06/2024</button>
              <br></br>
              <br></br>
              <button className="pastBooking2">01/04/2024 - 01/04/2024</button>
              <img className="plus2" src={iconPlus}></img>
            </div>
          </div>
        </div>
        <div className="reviews">
          <img className="reviewsPic" src={reviews}></img>
        </div>
      </section>
    </section>
  );
};

export default ProfilePetsitter;
