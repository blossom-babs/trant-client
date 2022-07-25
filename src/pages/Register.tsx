const Register = () => {
	return (
		<div className="register">
			<h1 className="register-title">Register</h1>
			<p className="register-login">
				Already have an account? <a href="/login">Login</a>
			</p>
			<form>
				<div>
					<label htmlFor="username">Username</label>
					<input type="text" placeholder="Username" />
				</div>
				<div>
					<label htmlFor="Email">Email</label>
					<input type="text" placeholder="Email" />
				</div>
				<div>
					<label htmlFor="Password">Password</label>
					<input type="password" placeholder="Password" />
				</div>
				<button className="register-btn">Register</button>
			</form>
		</div>
	);
};

export default Register;
