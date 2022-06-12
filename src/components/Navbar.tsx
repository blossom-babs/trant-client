import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTwitter, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from "@fortawesome/free-regular-svg-icons"
import { faMicrophone } from "@fortawesome/free-solid-svg-icons"

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-container">
      <h1 className="navbar-container title">Tech Trant</h1>
      <ul className="navbar-navigation">
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      {/* replace socal media with names */}
      <ul>
        <li><a href="http://"><FontAwesomeIcon icon={faLinkedin} /></a></li>
        <li><a href="http://"><FontAwesomeIcon icon={faTwitter} /></a></li>
        <li><a href="http://"><FontAwesomeIcon icon={faInstagram} /></a></li>
        <li><a href="http://"><FontAwesomeIcon icon={faEnvelope} /></a></li>
        <li><a href="http://"><FontAwesomeIcon icon={faMicrophone} /></a></li>
      </ul>
        </div>
    </div>
  )
}

export default Navbar

