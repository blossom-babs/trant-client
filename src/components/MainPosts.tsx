export interface PostInterface {
	title: string;
	id: string;
	description: string;
	author: string;
	categories: string[];
	photo?: string;
	createdAt: string;
}

interface Props {
	posts: [];
}

const MainPosts = ({ posts }: Props) => {
	return (
		<div className="mainPosts">
			<div className="mainPosts-inner">
				<div className="mainPosts-featured">
					<h1>Featured Posts</h1>
					<ul>
						{posts.length > 0 ? (
							posts
								.slice(posts.length - 4, posts.length - 1)
								.map((item: PostInterface) => (
									<li key={item.id}>
										<a href="google.com">
											<h2>{item.title}</h2>
											<p>{item.description}</p>
										</a>
									</li>
								))
						) : (
							<h1>Loading...</h1>
						)}
					</ul>
				</div>

				<div className="mainPosts-other">
					{posts.length > 0 ? (
						posts.slice(0, 3).map((item: PostInterface) => (
							<article key={item.id}>
								<h1>{item.title}</h1>
								<p>{item.description}</p>
								<a href="">read more</a>
							</article>
						))
					) : (
						<div>
							<h1>Loading...</h1>
						</div>
					)}
				</div>

				<div className="mainPosts-external">
					<h1>External Posts</h1>
					<ul>
						<li>
							<a href="google.com">
								<h2>Post title</h2>
								<p>Post content Lorem ipsum dolor sit amet.</p>
							</a>
						</li>
						<li>
							<a href="google.com">
								<h2>Post title</h2>
								<p>Post content Lorem ipsum dolor sit amet.</p>
							</a>
						</li>
						<li>
							<a href="google.com">
								<h2>Post title</h2>
								<p>Post content Lorem ipsum dolor sit amet.</p>
							</a>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default MainPosts;
