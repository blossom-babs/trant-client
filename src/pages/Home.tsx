import { RecentPost, MainPosts, TechPosts, RandomPosts } from '../components';
import { useEffect, useState } from 'react';
import axios from 'axios';

const Home = () => {
	const [mainPosts, setMainPosts] = useState<[]>([]);
	const [recentPost, setRecentPost] = useState<[]>([]);
	const [error, setError] = useState({})

	useEffect(() => {
		const fetchPosts = async () => {
			try {
				const res = await axios.get('/posts');
				setMainPosts(res.data);
				setRecentPost(res.data.slice(res.data.length - 1));
			} catch (error) {
				console.log(error);
				setError(error)
			}
		};
		fetchPosts();
	}, []);

	return (
		<div className="home">
			<div className="home__inner">
				<RecentPost post={recentPost} />
				<MainPosts posts={mainPosts} />
				<TechPosts />
				<RandomPosts />
			</div>
		</div>
	);
};

export default Home;
