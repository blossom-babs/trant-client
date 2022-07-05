import { Posts, Sidebar } from '../components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

const Home = () => {
	return (
		<div className="home">
			<div className="home__searchbar">
				<input type="text" name="" id="" placeholder="Press l to search" />
				<FontAwesomeIcon icon={faMagnifyingGlass} />
			</div>
			<div className="home__inner">
				<Sidebar />
				<Posts />
			</div>
		</div>
	);
};

export default Home;
