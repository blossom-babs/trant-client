import { Posts, Sidebar } from '../components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
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
			<div className="home__searchbar">
				<input type="text" name="" id="" placeholder="Press l to search" />
				<FontAwesomeIcon icon={faMagnifyingGlass} />
			</div>
			<div className="home__inner">
				{/* <Sidebar /> */}
				<Posts posts={posts} />
			</div>
		</div>
	);
};

export default Home;
