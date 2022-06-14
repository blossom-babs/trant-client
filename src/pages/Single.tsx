import React from 'react';
import { Sidebar, SinglePost } from '../components';

const Single = () => {
	return (
		<div className="singlePost">
			<Sidebar />
			<SinglePost />
		</div>
	);
};

export default Single;
