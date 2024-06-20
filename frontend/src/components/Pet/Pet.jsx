import "./Pet.css"
import dogBuddy from "../../assets/PetsImages/Buddy.jpg"

function Pet() {
  return (
    <div>
       <div className="Pets">
        <img className="dogB" src={dogBuddy}></img>
       </div>
       

    </div>
  )
}

export default Pet