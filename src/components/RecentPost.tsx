import Img from '../assets/postImg.jpg';

const RecentPost = () => {
	return (
		<div className="recentPost">
			<a href="">
				<div className="recentPost-inner">
					<img src={Img} alt="" />
					<div>
						<h1>Post title</h1>
						<p>
							Post body Lorem ipsum dolor sit amet consectetur adipisicing elit.
							Quo vero quia labore, temporibus necessitatibus, voluptatem nobis
							rerum enim quae sed fuga ab nisi debitis consequatur, libero qui
							dolore. Labore, ullam quasi dignissimos voluptas vitae nulla?
							Animi debitis, ullam facilis reiciendis accusamus voluptas alias
							iste fugit laborum cupiditate, incidunt distinctio quas.
						</p>
					</div>
				</div>
			</a>
		</div>
	);
};

export default RecentPost;
