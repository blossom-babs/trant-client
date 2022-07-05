import { Navbar } from './components';
import { Home, Login, Register, Settings, Single, Write } from './pages';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
	return (
		<Router>
			<Navbar />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/login" element={<Login />} />
				<Route path="/register" element={<Register />} />
				<Route path="/settings" element={<Settings />} />
				<Route path="/post/:postId" element={<Single />} />
				<Route path="/post/write" element={<Write />} />
			</Routes>
		</Router>
	);
}

export default App;
