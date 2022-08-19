import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Blog = () => {
	return (
		// implement pagination when page is about 30 posts
		<div className="blog">
			<div className="blog-inner">
				<div className="blog-action">
					<div className='blog-btn'>
						<button>Trant</button>
						<button>Random</button>
					</div>

					<div>
						<input type="text" placeholder="Press 's' to search" />
						<FontAwesomeIcon icon={faSearch} />
					</div>
				</div>

				<div className="blog-post">
					<article>
						<a href="google.com">
							<img src="" alt="" />
							<h2>Post title</h2>
							<p></p>
						</a>
					</article>
				</div>
			</div>
		</div>
	);
};

export default Blog;
