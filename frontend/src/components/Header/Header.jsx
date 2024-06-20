import "./Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <header>
        <div>
          <Link to="/aboutus">About Us</Link>
        </div>
        <div>
          <Link to="/services">Services</Link>
        </div>
        <div>
          <Link to="/help">Help</Link>
        </div>
        <div>
          <Link to="/signup">
            <button>Sign Up</button>
          </Link>
        </div>
        <div>
          <Link to="/login">
            <button>Log in</button>
          </Link>
        </div>
      </header>
    </div>
  );
};

export default Header;
