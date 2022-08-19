import Img from '../assets/postImg.jpg';

const TechPosts = () => {
	return (
		<div className="techPosts">
			<div className="techPosts-categories">
				<button>All</button>
				<button>DSA</button>
				<button>React</button>
				<button>Javascript</button>
				<button>Frontend</button>
				<button>CSS</button>
				<select name="cars" id="cars">
					<option value="volvo">Volvo</option>
					<option value="saab">Saab</option>
					<option value="mercedes">Mercedes</option>
					<option value="audi">Audi</option>
				</select>
			</div>

			<div className="techPosts-posts">
				<article>
					<a href="google.com" >
						<img src={Img} alt="" />
						<h2>Post title</h2>
					</a>
				</article>
				<article>
					<a href="google.com" >
						<img src={Img} alt="" />
						<h2>Post title</h2>
					</a>
				</article>
				<article>
					<a href="google.com" >
						<img src={Img} alt="" />
						<h2>Post title</h2>
					</a>
				</article>
				<article>
					<a href="google.com" >
						<img src={Img} alt="" />
						<h2>Post title</h2>
					</a>
				</article>
				<article>
					<a href="google.com" >
						<img src={Img} alt="" />
						<h2>Post title</h2>
					</a>
				</article>
				<article>
					<a href="google.com" >
						<img src={Img} alt="" />
						<h2>Post title</h2>
					</a>
				</article>
			</div>

			<div className="techPosts-redirect">
				<a href="google.com" >More Trant &rarr;</a>
			</div>
		</div>
	);
};

export default TechPosts;
