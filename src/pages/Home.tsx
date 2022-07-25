import { Posts, Sidebar } from '../components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';
import axios from 'axios';

const Home = () => {
	const [posts, setPosts] = useState([]);

	useEffect(() => {
		const fetchPosts = async() => {
			const res = await axios.get('/posts')
			setPosts(res.data)
		}
		fetchPosts()
	}, []);

	return (
		<div className="home">
			<div className="home__searchbar">
				<input type="text" name="" id="" placeholder="Press l to search" />
				<FontAwesomeIcon icon={faMagnifyingGlass} />
			</div>
			<div className="home__inner">
				<Sidebar />
				<Posts posts={posts}/>
			</div>
		</div>
	);
};

export default Home;
