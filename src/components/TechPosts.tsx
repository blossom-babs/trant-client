import Img from '../assets/postImg.jpg';

const TechPosts = () => {
	return (
		<div>
			<div>
				<h1>
					<a href="">Read more Tech Related posts from trant</a>
				</h1>
				<button>Data structures and algorithm</button>
				<button>React</button>
				<button>Javascript</button>
				<button>Frontend</button>
				<button>CSS</button>
				<button>All</button>
				<select name="cars" id="cars">
					<option value="volvo">Volvo</option>
					<option value="saab">Saab</option>
					<option value="mercedes">Mercedes</option>
					<option value="audi">Audi</option>
				</select>
			</div>

			<div className='techPosts-posts'>
				<article>
					<img src={Img} alt="" />
					<h2>Post title</h2>
					<p>
						Post content Lorem ipsum dolor, sit amet consectetur adipisicing
						elit. Soluta aperiam porro dolorum omnis cupiditate quis minima quam
						ad ipsa unde assumenda, veniam eaque asperiores, rerum reprehenderit
						aliquid, culpa tenetur necessitatibus impedit est corporis tempora
						illum deleniti. Asperiores praesentium mollitia recusandae enim odio
						non quasi animi dignissimos neque nostrum! Amet, unde.
					</p>
				</article>
			</div>
		</div>
	);
};

export default TechPosts;
