import { Posts, RecentPost, MainPosts, TechPosts, RandomPosts } from '../components';
import { useEffect, useState } from 'react';
import axios from 'axios';

const Home = () => {
	const [posts, setPosts] = useState<object[]>([]);

	useEffect(() => {
		const fetchPosts = async () => {
			try {
				const res = await axios.get('/posts');
				setPosts(res.data);
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
				<MainPosts />
				<TechPosts />
				<RandomPosts/>
				{/* <Posts posts={posts} /> */}
			</div>
		</div>
	);
};

export default Home;
