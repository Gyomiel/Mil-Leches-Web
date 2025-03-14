import "./HelpLayout.css";
import searchHelp from "../../assets/searchHelp.png";
import chatHelp from "../../assets/chatHelp.png";
import hatHelp from "../../assets/hatHelp.png";
import { Link } from "react-router-dom";

const HelpLayout = () => {
  return (
    <div>
      <section id='services-box'>
        <h1 className='servHeader'>Find your perfect pet sitter on <span className='mlSpan'>Mil Leches</span></h1>
          <div className='servicesCards'>
            <div className='findSitter'>
              <img className="findO"src={searchHelp} />
              <h3 className='hSHeader'>Find your pet sitter</h3>
              <p className='servDesc'>Use the search bar in your profile page to locate all the available pet sitters on your preferred island.</p>
            </div>
            <div className='getInTouch'>
              <img className="chatH"src={chatHelp} />
              <h3 className='hSHeader'>Get in touch</h3>
              <p className='servDesc'>Start chatting with the pet sitter to finalize all the important details, including the starting time, rate, and any special needs your pet may have.</p>
            </div>
            <div className='enjoyYourTime'>
              <img className="sun"src={hatHelp} />
              <h3 className='hSHeader'>Enjoy your time</h3>
              <p className='servDesc'>The pet sitter takes care of your pet, ensuring they receive ample love and companionship throughout their stay.</p>
            </div>
          </div>
        <Link to="/contactus">
          <button className="helpButton">Contact us for assistance!</button>
        </Link>
      </section>
    </div>
  );
};

export default HelpLayout;
