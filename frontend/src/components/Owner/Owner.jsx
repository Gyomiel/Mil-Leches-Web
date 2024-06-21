import "./Owner.css"
import Buddy from "../../assets/PetsImages/Buddy.jpg"
import Avatar from "../../assets/PeopleImages/PetsitterProfilePic.png"

const Owner = () => {
  return (
    <div id="Ownerdiv">
        <div className="box1">
          <img className="avatar" src={Avatar}></img>
        </div>
        <div className="box2">
          <img className="imgdog" src={Buddy}></img>
        </div>
        <div className="box3"></div>
    </div>
  )
}

export default Owner