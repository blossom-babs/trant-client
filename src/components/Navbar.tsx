import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faLinkedin,
	faInstagram,
	faYoutube,
	faGithub
} from '@fortawesome/free-brands-svg-icons';
import {
	faBars,
	faMicrophone,
	faSearch
} from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import Logo from '../assets/trant-black-bg.png';

const Navbar = () => {
	const [toggle, setToggle] = useState(false);
	return (
		<div className="navbar">
			<div className="navbar-container">
				{/* LOGO */}
				<div>
					<img className="navbar-logo" src={Logo} alt="Trant" />
				</div>
				{/* social media links - large screen */}
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
							href="https://github.com/blossom-babs/"
							target="_blank"
							rel="noreferrer">
							<FontAwesomeIcon icon={faGithub} />
						</a>
					</li>
					<li>
						<a href="https://anchor.fm/trant" target="_blank" rel="noreferrer">
							<FontAwesomeIcon icon={faMicrophone} />
						</a>
					</li>
					<li>
						<a
							href="https://www.youtube.com/channel/UCWqoKQfyZTTLUd4t8yBT57g"
							target="_blank"
							rel="noreferrer">
							<FontAwesomeIcon icon={faYoutube} />
						</a>
					</li>
					<li>
						<a
							href="https://www.instagram.com/b_tranting/"
							target="_blank"
							rel="noreferrer">
							<FontAwesomeIcon icon={faInstagram} />
						</a>
					</li>
					{/* footer */}
				</ul>
				<button onClick={() => setToggle(!toggle)} className="navbar-hamburger">
					<FontAwesomeIcon icon={faBars} />
				</button>
				<ul className="navbar-navigation">
					<li>
						<a href="/">Home</a>
					</li>
					<li>
						<a href="/blog">Blog</a>
					</li>
					<li>
						<a href="/about">About</a>
					</li>
					<li>
						<div className="navbar-inputField">
							<input
								type="text"
								name=""
								id=""
								placeholder="Press 's' to search "
							/>
							<FontAwesomeIcon icon={faSearch} />
						</div>
					</li>
				</ul>
				{/* replace socal media with names */}
				{toggle && (
					<div className="navbar-mobile">
						<ul>
							<li>
								<a href="/">Home</a>
							</li>
							<li>
								<a href="/blog">Blog</a>
							</li>
							<li>
								<a href="/about">About</a>
							</li>
							<li>
								<div className="navbar-inputField">
									<input
										type="text"
										name=""
										id=""
										placeholder="Press 's' to search "
									/>
									<FontAwesomeIcon icon={faSearch} />
								</div>
							</li>
						</ul>
					</div>
				)}
			</div>
		</div>
	);
};

export default Navbar;
