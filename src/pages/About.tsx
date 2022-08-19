import Logo from '../assets/trant-logo.png';
import Blossom from '../assets/me.png';
import {
	faLinkedin,
	faInstagram,
	faYoutube,
	faGithub,
	faTiktok
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMicrophone } from '@fortawesome/free-solid-svg-icons';

const About = () => {
	return (
		<div className="about">
			<div>
				<div className="about-trant">
					<h1>About Trant</h1>
					<div>
						<img src={Logo} alt="Trant Brand" />
						<p>
							Trant is a{' '}
							<em>
								<a
									href="https://www.britannica.com/topic/portmanteau-word"
									target="_blank"
									rel="noreferrer">
									portmanteau, 
								</a>
							</em>
							 coined from two words Tech and Rant. Trant is a public
							documentation of a developer journey in tech - career, fails,
							wins, community, public learnings and giving back to the
							ecosystem.
						</p>
					</div>
				</div>
				<div className="about-me">
					<h1>The Author</h1>
					<div>
						<img src={Blossom} alt="Blossom" />
						<p>
							Hi, my name is Blossom. I am a software developer based out of
							Ibadan, Nigeria. I write python, full stack Javascript and
							typsecript.
							<br />
							<br />
							My core strength is in building web applications that have a
							seamless user experience with emphasis on web accessibility,
							responsiveness and security.
							<br />
							<br />I love to learn, travel, and immerse myself in different
							cultures. I am currently studying
							<a rel="noreferrer" href='https://github.com/blossom-babs/Data-structures-and-algorithm' target='_blank'> data structures and algorithms, </a> building trant and
							<a rel="noreferrer" href='https://github.com/blossom-babs/' target='_blank'> my own software. </a> You can find me in the pages of a book or
							any of my social media accounts:
						</p>
					</div>

					<div className="about-icons">
						<a
							href="https://twitter.com/BlossomBabalola"
							target="_blank"
							rel="noreferrer">
							<FontAwesomeIcon size="3x" icon={faLinkedin} />
						</a>
						<a
							href="https://anchor.fm/techtalk-with-blossom"
							target="_blank"
							rel="noreferrer">
							<FontAwesomeIcon size="3x" icon={faGithub} />
						</a>
						<a
							href="https://anchor.fm/techtalk-with-blossom"
							target="_blank"
							rel="noreferrer">
							<FontAwesomeIcon size="3x" icon={faMicrophone} />
						</a>
						<a
						href="https://anchor.fm/techtalk-with-blossom"
							target="_blank"
							rel="noreferrer">
							<FontAwesomeIcon size="3x" icon={faYoutube} />
						</a>	
						<a
							href="https://twitter.com/BlossomBabalola"
							target="_blank"
							rel="noreferrer">
							<FontAwesomeIcon size="3x" icon={faInstagram} />
						</a>
						<a
							href="https://twitter.com/BlossomBabalola"
							target="_blank"
							rel="noreferrer">
							<FontAwesomeIcon size="3x" icon={faTiktok} />
						</a>
					</div>
				</div>

				<b> For all business inquiries, please email me 🤝</b>
				<p> blossombabalola@gmail.com</p>
				{/* press kit */}
			</div>
		</div>
	);
};

export default About;
