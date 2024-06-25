import "./BackHomepageButton.css"
import { Link } from "react-router-dom"

function BackHomepageButtom() {
  return (
    <div>
    <Link to="/">
    <button className="buttonHomepage">Back to Homepage</button>
    </Link>
    </div>
  )
}

export default BackHomepageButtom