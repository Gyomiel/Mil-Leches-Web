import "./Header.css";
import logo from "../../assets/logo.png";
import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

const Header = () => {
  const { pathname } = useLocation();
  const [isAuth, setIsAuth] = useState(false);
  useEffect(() => {
    showButtons();
  }, [pathname]);
  const showButtons = () => {
    if (pathname === "/signup" || pathname === "/login") {
      return setIsAuth(true);
    } else {
      setIsAuth(false);
    }
  };
  return (
    <div id="container">
      <header>
        <section id="headerLogo">
          <Link to="/">
            <img src={logo} />
          </Link>
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
          <div className={isAuth ? "hideButton" : "showButton"}>
            <Link to="/signup">
              <button className="subtn">Sign Up</button>
            </Link>
          </div>
          <div className={isAuth ? "hideButton" : "showButton"}>
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
