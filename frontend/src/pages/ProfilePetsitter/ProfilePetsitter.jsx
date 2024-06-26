//Images
import iconHelp from "../../assets/Icons/helpIcon.svg";
import iconMessages from "../../assets/Icons/messagesIcon.svg";
import calendar from "../../assets/various/Calendar.png";
import iconPlus from "../../assets/Icons/plusIcon.svg";
import review1 from "../../assets/various/review1.svg";
import review2 from "../../assets/various/review2.svg";
//components
import PetsitterProfile from "../../components/PetsitterProfile/PetsitterProfile";
//CSS
import "./ProfilePetsitter.css";
import ReservationList from "../../components/reservelist/reservelist";

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
            <div className="futureBookings">
              <h2 className="myFutureB">My future bookings</h2>
              <button className="futureBooking1">
              <ReservationList/>
              </button>
              <img className="plus1" src={iconPlus}></img>
            </div>
            <div className="pastBookings">
              <h2 className="myPastB">Past bookings</h2>
              <button className="pastBooking1">12/06/2024 - 13/06/2024</button>
              <br></br>
              <br></br>
              <button className="pastBooking2">01/04/2024 - 01/04/2024</button>
              <img className="plus2" src={iconPlus}></img>
            </div>
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
