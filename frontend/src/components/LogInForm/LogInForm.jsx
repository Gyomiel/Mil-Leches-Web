import "./LogInForm.css";
import userSignUp from "../../assets/userSignUp.png";
import lockSignUp from "../../assets/lockSignUp.png";
import logInCat from "../../assets/logInCat.png";
import { logIn } from "../../services/auth";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

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
    await logIn(data);
    navigate("/");
  };
  return (
    <div id="centerForm">
      <img className="logInCat" src={logInCat} />
      <form id="logInForm" onSubmit={(e) => e.preventDefault()}>
        <h2 className="loginh2">Log in!</h2>
        <div className="userWholeInput">
          <img src={userSignUp} className="userWholeInputImg" />
          <input className="nameInput" type="text" placeholder="Email" onChange={handleEmail} />
        </div>
        <div className="passwordWholeInput">
          <img src={lockSignUp} />
          <input className="passInput" type="password" placeholder="Password" onChange={handlePassword} />
        </div>
        <p className="trouble">
          <a href="">Trouble logging in?</a>
        </p>
        <div className="pleaseStop">
          <p className="letMeLive2">
            <input type="checkbox" />
            <label htmlFor="">Remember me</label>
          </p>
        </div>
        <button className="logInButton" onClick={handleLogIn}>Log In</button>
        <h4 className="loginh4">
          Don't have an account?
          <a className="login" href="">
            {" "}
            Sign up!
          </a>
        </h4>
      </form>
    </div>
  );
};

export default LogInForm;
