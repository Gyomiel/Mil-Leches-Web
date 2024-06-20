import "./Header.css";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div id="container">
      <header>
        <section id="headerLogo">
          <img src={logo} />
        </section>
        <div className="divider"></div>
        <section id="links">
          <div>
            <Link to="/aboutus">About</Link>
          </div>
          <div>
            <Link to="/services">Services</Link>
          </div>
          <div>
            <Link to="/help">Help</Link>
          </div>
          <div>
            <Link to="/signup">
              <button className="subtn">Sign Up</button>
            </Link>
          </div>
          <div>
            <Link to="/login">
              <button className="libtn">Log in</button>
            </Link>
          </div>
        </section>
      </header>
    </div>
  );
};

export default Header;
