import React from 'react';
import { Sidebar, SinglePost } from '../components';

const Single = () => {
	return (
		<div className="single">
			<Sidebar />
			<SinglePost />
		</div>
	);
};

export default Single;
