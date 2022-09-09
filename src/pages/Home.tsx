import { RecentPost, MainPosts, TechPosts, RandomPosts } from '../components';
import { useEffect, useState } from 'react';
import axios from 'axios';

const Home = () => {
	const [mainPosts, setMainPosts] = useState<[]>([]);

	useEffect(() => {
		const fetchPosts = async () => {
			try {
				const res = await axios.get('/posts');
				console.log(res.data)
				setMainPosts(res.data.slice(0, 3));
			} catch (error) {
				console.log(error);
			}
		};
		fetchPosts();
	}, []);

	return (
		<div className="home">
			<div className="home__inner">
				<RecentPost />
				<MainPosts posts={mainPosts} />
				<TechPosts />
				<RandomPosts/>
			</div>
		</div>
	);
};

export default Home;
