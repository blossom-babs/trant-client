interface Post {
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
						<li>
							<a href="google.com">
								<h2>Post title</h2>
								<p>
									Post content Lorem ipsum dolor sit amet. Lorem ipsum dolor sit
									amet consectetur, adipisicing elit. Esse, optio, libero illum
									quas sed, consectetur earum quia debitis ex ducimus ad vitae
									neque cumque sint rerum nisi nulla perferendis repellat
									officia! Reprehenderit laudantium non doloribus aperiam, nemo
									dolor. Aliquid, cumque architecto. Necessitatibus nihil libero
									possimus sed amet facere ducimus eos?{' '}
								</p>
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

				<div className="mainPosts-other">
					{posts.length > 0 ? (
						posts.map((item: Post) => (
							<article key={item.id}>
								<h2>{item.title}</h2>
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
