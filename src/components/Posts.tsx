import Post from './Post';

interface HomeProps {
	posts: object[];
}
const Posts = ({ posts }: HomeProps) => {
	return (
		<div className="posts">
			{posts.length > 1 ? (
				posts.map((post: object) => <Post {...post} />)
			) : (
				<ErrorNoPost />
			)}
		</div>
	);
};

export const ErrorNoPost = () => {
	return (
		<div>
			<h1>No post to display.</h1>
		</div>
	);
};

export default Posts;
