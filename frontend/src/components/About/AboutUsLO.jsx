import './AboutUsLO.css';
import aboutUsIcon from '../../assets/aboutUsIcon.png'
import miBella from '../../assets/miBella.png'
import suBella from '../../assets/suBella.png'
import iDontEvenKnow from '../../assets/iDontEvenKnow.png'
import { Link } from 'react-router-dom';

const AboutUsLO = () => {
  return (
    <div>
      <section id="about-box">
        <div className="leftText">
          <h1 className="abtHeader">
            About <span className="mlSpan">Mil Leches</span> and our purpose
          </h1>
          <p className="abtDesc">
            In our current fast-paced world, life can be quite demanding for pet
            owners. Between work obligations, social engagements, and personal
            time, giving our pets undivided attention is not always feasible.{" "}
          </p>
          <p className="abtDesc">
            <span className="mlSpan2">
              Whether you are working late, traveling, or just need a respite,{" "}
              <span className="mlSpan3">Mil Leches</span> is your solution!
            </span>
          </p>
          <p className="abtDesc">
            We offer services such as home-sitting, boarding, dog walking, and
            grooming, connecting you with passionate pet lovers who treat your
            furry companions as their own in a paradise of cuddles and belly
            rubs.
          </p>
        </div>
        <div className="rightImg">
          <img className="aboutUsIcon" src={aboutUsIcon} alt="" />
        </div>
      </section>
      <h3 className="abtH3Header">Mil Leches Team</h3>
      <section id="members">
        <div className="memberCard">
          <img className="usTogether" src={miBella} />
          <h5 className="memberHeader">Marta</h5>
          <p className="memDesc">Head back-end designer and animal lover.</p>
        </div>
        <div className="memberCard">
          <img className="usTogether" src={suBella} />
          <h5 className="memberHeader">Diana</h5>
          <p className="memDesc">
            Head front-end designer and pet cuddles enthusiast.
          </p>
        </div>
        <div className="memberCard">
          <img className="usTogether" src={iDontEvenKnow} />
          <h5 className="memberHeader">Borja</h5>
          <p className="memDesc">Designer and dreaming of drawing full time.</p>
        </div>
      </section>
      <div className="abtBtn">
        <Link to="/signup">
          <button className="aboutButton">Get started</button>
        </Link>
      </div>
    </div>
  );
};

export default AboutUsLO;