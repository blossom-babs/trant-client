import Post from './Post';

const Posts = (props: { posts: object[]; }) => {
	return (
		<div className="posts">
			{props.posts.map((p: object) => (
				<Post />
			))}
		</div>
	);
};

export default Posts;
