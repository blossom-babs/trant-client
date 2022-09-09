import Img from '../assets/postImg.jpg';
import { PostInterface } from './MainPosts';
interface Props {
	post: [];
}

const RecentPost = ({ post }: Props) => {
	return (
		<div className="recentPost">
			{post.length > 0 ? (
				post.map((post: PostInterface) => (
					<a key={post.id} href="google.com">
						<div className="recentPost-inner">
							<img src={Img} alt={post.title} />
							<div>
								<h1>{post.title}</h1>
								<p>{post.description}</p>
								<span>continue reading</span>
							</div>
						</div>
					</a>
				))
			) : (
				<h1>'Loading...'</h1>
			)}
		</div>
	);
};

export default RecentPost;
