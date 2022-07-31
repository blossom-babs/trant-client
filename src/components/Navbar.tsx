import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faTwitter,
	faLinkedin,
	faInstagram
} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faBars, faMicrophone } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

const Navbar = () => {
	const [toggle, setToggle] = useState(false);
	return (
		<div className="navbar">
			<div className="navbar-container">
				<h1 className="navbar-title">
					T<span>-</span>rant
				</h1>
				<button onClick={() => setToggle(!toggle)} className="navbar-hamburger">
					<FontAwesomeIcon icon={faBars} />
				</button>
				<ul className="navbar-navigation">
					<li>
						<a href="/">Home</a>
					</li>
					<li>
						<a href="/about">About</a>
					</li>
					<li>
						<a href="/contact">Contact</a>
					</li>
				</ul>
				{/* replace socal media with names */}
				<ul className="navbar-sm">
					<li>
						<a
							href="https://www.linkedin.com/in/blossom-babalola/"
							target="_blank"
							rel="noreferrer">
							<FontAwesomeIcon icon={faLinkedin} />
						</a>
					</li>
					<li>
						<a
							href="https://twitter.com/BlossomBabalola"
							target="_blank"
							rel="noreferrer">
							<FontAwesomeIcon icon={faTwitter} />
						</a>
					</li>
					<li>
						<a
							href="https://www.instagram.com/techtalkwithblossom/"
							target="_blank"
							rel="noreferrer">
							<FontAwesomeIcon icon={faInstagram} />
						</a>
					</li>
					<li>
						<a href="https://" target="_blank" rel="noreferrer">
							<FontAwesomeIcon icon={faEnvelope} />
						</a>
					</li>
					<li>
						<a
							href="https://anchor.fm/techtalk-with-blossom"
							target="_blank"
							rel="noreferrer">
							<FontAwesomeIcon icon={faMicrophone} />
						</a>
					</li>
					{/* youtube */}
					{/* footer */}
				</ul>
				{toggle && (
					<div className="navbar-mobile">
						<ul className="navbar-mobile__icon">
							<li>
								<a
									href="https://www.linkedin.com/in/blossom-babalola/"
									target="_blank"
									rel="noreferrer">
									<FontAwesomeIcon icon={faLinkedin} />
								</a>
							</li>
							<li>
								<a
									href="https://twitter.com/BlossomBabalola"
									target="_blank"
									rel="noreferrer">
									<FontAwesomeIcon icon={faTwitter} />
								</a>
							</li>
							<li>
								<a
									href="https://www.instagram.com/techtalkwithblossom/"
									target="_blank"
									rel="noreferrer">
									<FontAwesomeIcon icon={faInstagram} />
								</a>
							</li>
							<li>
								<a href="https://" target="_blank" rel="noreferrer">
									<FontAwesomeIcon icon={faEnvelope} />
								</a>
							</li>
							<li>
								<a
									href="https://anchor.fm/techtalk-with-blossom"
									target="_blank"
									rel="noreferrer">
									<FontAwesomeIcon icon={faMicrophone} />
								</a>
							</li>
							{/* youtube */}
							{/* footer */}
						</ul>
						<ul>
							<li>
								<a href="/">Home</a>
							</li>
							<li>
								<a href="/about">About</a>
							</li>
							<li>
								<a href="/contact">Contact</a>
							</li>
						</ul>
					</div>
				)}
			</div>
		</div>
	);
};

export default Navbar;
