import axios from 'axios';
import React, { useState } from 'react';

const errors = {
	email: 'invalid username',
	pwd: 'invalid password'
};

const Login = () => {
	const [errorMsg, setErrorMsg] = useState('');
	const [isSubmitted, setIsSubmitted] = useState(false);
	const [loginResp, setLoginResp] = useState('');

	const renderErrorMsg = (name: string) => {
		return errorMsg && <div className="error">{errorMsg}</div>;
	};

	const handleSubmit = (evt: React.BaseSyntheticEvent) => {
		evt.preventDefault();
		const data = new FormData(evt.target);

		axios
			.post('http://localhost:8050/api/v1/login', {
				email: data.get('email'),
				pwd: data.get('pwd')
			})
			.then((response) => {
				setLoginResp(response.data);
			})
			.catch((err) => setErrorMsg(err.data));
			
			console.log(errorMsg, loginResp);
	};


	return (
		<div className="register">
			<h1 className="register-title">Login</h1>
			<p className="register-login">
				Don't have an account? <a href="/register">Register</a>
			</p>
			<form onSubmit={handleSubmit}>
				<div>
					<label htmlFor="Email">Email</label>
					<input name="email" type="text" placeholder="Email" />
					{renderErrorMsg('email')}
				</div>
				<div>
					<label htmlFor="Password">Password</label>
					<input name="pwd" type="password" placeholder="Password" />
					{renderErrorMsg('pwd')}
				</div>
				<button className="register-btn">Login</button>
			</form>
		</div>
	);
};

export default Login;
