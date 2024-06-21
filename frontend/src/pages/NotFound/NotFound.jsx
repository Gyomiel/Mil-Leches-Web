import BackHomepageButtom from "../../components/BackHomepageButton/BackHomepageButton"
import perreteNotFound from "../../assets/PetsImages/perrierror.png"
import chat from "../../assets/various/chat.svg"
import "./NotFound.css"

function NotFound() {
  return (
    <div className="mainContainerError">
      <div className="greyContainer">
        <h1 className="404">404</h1>
        <h2 className="errorMessage">
          It looks like this page has wandered off for a walk. Let's fetch you
          back on track!{" "}
        </h2>
        <BackHomepageButtom />
        <img className="perreteNotFound" src={perreteNotFound}></img>
        <img className="chat" src={chat}></img>
      </div>
    </div>
  );
}

export default NotFound