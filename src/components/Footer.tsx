const date = () => {
	const date = new Date();
	let year = date.getFullYear();
	return year;
};

const Footer = () => {
	return (
		<p className="footer">
			Copyright &copy; <span>{date()}</span> Trant
		</p>
	);
};

export default Footer;
