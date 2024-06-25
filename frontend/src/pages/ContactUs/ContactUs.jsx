import "./ContactUs.css";
import mrEars from "../../assets/PetsImages/mrEars.png";
import chatIcon from "../../assets/chatHelp.png"
const ContactUs = () => {
  return (
    <div className="mainContainerContactUs">
      <div className="leftAreaContactUs">
        <h1 className="allEars">WE ARE ALL EARS!</h1>
        <img className="mrEars" src={mrEars}></img>
      </div>
      <div className="containerRightContactUs">
        <div className="contactUsTextIcon">
        <h1 className="contactUsTitle">Contact Us</h1>
        <img className="chatIcon" src={chatIcon}></img>
        </div>
        <div className="textAreaContactUs">
        <h1 className="contactUsTitlesSmall">Name</h1>
        <input type="text" className="input1and2"></input>
        <h1 className="contactUsTitlesSmall">Email</h1>
        <input type="text" className="input1and2"></input>
        <h1 className="contactUsTitlesSmall">Message</h1>
        <textarea className="input3"></textarea>
        </div>
        <button className="sendMessage">Send message</button>
      </div>
    </div>
  );
};

export default ContactUs;
