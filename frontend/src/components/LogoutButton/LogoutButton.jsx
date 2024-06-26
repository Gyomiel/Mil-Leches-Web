import { useNavigate } from "react-router-dom";
import "./LogoutButton.css";

const LogoutButton = () => {
  const navigate = useNavigate();
  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    navigate("/");
  };
  return (
    <>
      <button className="logOutButton" onClick={logout}>
        Log out
      </button>
    </>
  );
};

export default LogoutButton;
