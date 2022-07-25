const Login = () => {
	return (
		<div className="register">
			<h1 className="register-title">Login</h1>
			<p className="register-login">
				Don't have an account? <a href="/register">Register</a>
			</p>
			<form>
				<div>
					<label htmlFor="Email">Email</label>
					<input type="text" placeholder="Email" />
				</div>
				<div>
					<label htmlFor="Password">Password</label>
					<input type="password" placeholder="Password" />
				</div>
				<button className="register-btn">Login</button>
			</form>
		</div>
	);
};

export default Login;
