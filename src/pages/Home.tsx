import { Posts, Sidebar } from '../components';

const Home = () => {
	return (
		<div className="home">
			<Sidebar />
			<Posts />
		</div>
	);
};

export default Home;
