import "./SignUpForm.css";
import signUpPic from "../../assets/signUpPic.png";
import userSignUp from "../../assets/userSignUp.png";
import emailSignUp from "../../assets/emailSignUp.png";
import lockSignUp from "../../assets/lockSignUp.png";
import { signUp } from "../../services/auth";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const SignUpForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  const [terms, setTerms] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    checkForm();
  }, [name, email, password, role, terms]);
  const handleName = (e) => {
    setName(e.target.value);
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };
  const handleRole = (e) => {
    setRole(e.target.value);
  };
  const handleTerms = () => {
    setTerms(!terms);
  };

  const handleSignUp = async () => {
    if (isCompleted) {
      const data = { name: name, email: email, password: password, role: role };
      const { token } = await signUp(data);
      localStorage.setItem("token", token);
      localStorage.setItem("role", data.role);
      data.role === "owner"
        ? navigate("/ProfileOwner")
        : navigate("/ProfilePetsitter");
    }
  };

  const checkForm = () => {
    if (
      name.length === 0 ||
      email.length === 0 ||
      password.length === 0 ||
      role.length === 0 ||
      terms !== true
    ) {
      setIsCompleted(false);
    } else {
      setIsCompleted(true);
    }
  };

  return (
    <div id="centerForm">
      <form id="signUpForm" onSubmit={(e) => e.preventDefault()}>
        <h2>Create your free account now!</h2>
        <img className="signUpPic" src={signUpPic} />
        <div className="userWholeInput">
          <img src={userSignUp} className="userWholeInputImg" />
          <input
            id="nameInput"
            type="text"
            placeholder="Name"
            onChange={handleName}
          />
        </div>
        <div className="emailWholeInput">
          <img src={emailSignUp} />
          <input
            id="emailInput"
            type="text"
            placeholder="Email"
            onChange={handleEmail}
          />
        </div>
        <div className="passwordWholeInput">
          <img src={lockSignUp} />
          <input
            id="passInput"
            type="password"
            placeholder="Password"
            onChange={handlePassword}
          />
        </div>
        <div className="pleaseStop">
          <div className="letMeLive">
            <input
              id="owner"
              type="radio"
              value="owner"
              name="role"
              onClick={handleRole}
            />
            <label htmlFor="owner">I am a pet owner</label>
          </div>
          <div className="letMeLive2">
            <input
              id="petsitter"
              type="radio"
              value="petsitter"
              name="role"
              onClick={handleRole}
            />
            <label htmlFor="petsitter">I am a pet sitter</label>
          </div>
        </div>
        <div className="leaveMeAlone">
          <input name="terms" type="checkbox" onClick={handleTerms} />
          <p className="formP">
            I have read and agreed to the{" "}
            <a className="tspp" href="">
              Terms of Service
            </a>{" "}
            and{" "}
            <a className="tspp" href="">
              Privacy Policy
            </a>
            .
          </p>
        </div>
        <button
          className={isCompleted ? "signUpButton" : "disabledButton"}
          onClick={handleSignUp}
        >
          Sign up
        </button>
        <h4>
          Already have an account?{" "}
          <a className="login" href="">
            Log in!
          </a>
        </h4>
      </form>
    </div>
  );
};

export default SignUpForm;
