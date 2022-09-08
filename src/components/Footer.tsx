const Footer = () => {
	const date = () => {
		const date = new Date();
		let year = date.getFullYear();
		return year;
	};
	return (
		<div className="footer">
			<p className="footer-body">
				Copyright &copy; <span>{date()} </span> Trant
			</p>
		</div>
	);
};

export default Footer;
