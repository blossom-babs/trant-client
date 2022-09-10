import axios from 'axios';
import { useEffect, useState } from 'react';
import Img from '../assets/postImg.jpg';
import { PostInterface } from './MainPosts';

const TechPosts = () => {
	const [posts, setPosts] = useState<[]>([]);
	const [error, setError] = useState({});

	useEffect(() => {
		const fetchPosts = async () => {
			try {
				const res = await axios.get('/posts');
				setPosts(res.data);
			} catch (error: any) {
				console.log(error);
				setError(error);
			}
		};
		fetchPosts();
	}, []);

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
				{posts.length > 0 &&
					posts.filter(
						(item: PostInterface) =>
							(
								<article>
									<a href="google.com">
										<img src={Img} alt="" />
										<h2>{item.title}</h2>
									</a>
								</article>
							)
					)}
			</div>

			<div className="techPosts-redirect">
				<a href="google.com">More Trant &rarr;</a>
			</div>
		</div>
	);
};

export default TechPosts;
