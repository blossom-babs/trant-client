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
      <ul className="navbar-sm">
        <li><a href="https://www.linkedin.com/in/blossom-babalola/" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faLinkedin} /></a></li>
        <li><a href="https://twitter.com/BlossomBabalola" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faTwitter} /></a></li>
        <li><a href="https://www.instagram.com/techtalkwithblossom/" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faInstagram} /></a></li>
        <li><a href="https://" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faEnvelope} /></a></li>
        <li><a href="https://anchor.fm/techtalk-with-blossom" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faMicrophone} /></a></li>
        {/* youtube */}
        {/* footer */}
      </ul>
        </div>
    </div>
  )
}

export default Navbar

