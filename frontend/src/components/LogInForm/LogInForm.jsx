import "./LogInForm.css";
import userSignUp from "../../assets/Icons/emaiIconL.svg";
import lockSignUp from "../../assets/Icons/lockICon.svg";
import logInDog from "../../assets/logInDog.png";
import { logIn } from "../../services/auth";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const LogInForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };
  const handleLogIn = async () => {
    const data = {
      email: email,
      password: password,
    };
    const key = await logIn(data);
    console.log(key.token);
    localStorage.setItem("token", key.token);
    localStorage.setItem("role", key.role);
    key.role === "owner"
      ? navigate("/ProfileOwner")
      : navigate("/ProfilePetsitter");
  };
  return (
    <div id="centerForm">
      <img className="logInDog" src={logInDog} />
      <form id="logInForm" onSubmit={(e) => e.preventDefault()}>
        <h2 className="loginh2">Log in</h2>
        <div className="userWholeInput">
          <div className="emailImgLi">
            <img src={userSignUp} className="userWholeInputImgLi" />
          </div>
          <div className="emailInputLi">
            <input
              className="nameInput"
              type="text"
              placeholder="Email"
              onChange={handleEmail}
            />
          </div>
        </div>
        <div className="passwordWholeInput">
          <div className="passwImgLi">
            <img className="lockLi" src={lockSignUp} />
          </div>
          <div className="passwInpLi">
            <input
              className="passInput"
              type="password"
              placeholder="Password"
              onChange={handlePassword}
            />
          </div>
        </div>
        <p className="trouble">
          <a className="troubleLink" href="">
            Trouble logging in?
          </a>
        </p>
        <div className="pleaseStopLi">
          <p className="letMeLive2Li">
            <input type="checkbox" />
            <label htmlFor="">Remember me</label>
          </p>
        </div>
        <div>
        <button className="logInButton" onClick={handleLogIn}>
          Log In
        </button>
        </div>
        <h4 className="loginh4">
          Do not have an account?
          <Link to="/signup">
            <a className="login" href="">
              {" "}
              Sign up!
            </a>
          </Link>
        </h4>
      </form>
    </div>
  );
};

export default LogInForm;
