import { Footer, Navbar } from './components';
import {
	Home,
	Login,
	Register,
	Settings,
	Single,
	Write,
	NotFound,
	About
} from './pages';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
	return (
		<Router>
			<Navbar />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/about" element={<About />} />
				<Route path="/login" element={<Login />} />
				<Route path="/register" element={<Register />} />
				<Route path="/settings" element={<Settings />} />
				<Route path="/post/:postId" element={<Single />} />
				<Route path="/write" element={<Write />} />
				<Route path="*" element={<NotFound />} />
			</Routes>
			<Footer />
		</Router>
	);
}

export default App;
