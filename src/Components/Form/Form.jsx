import React from 'react';
import validation from './validation';
import { useState } from 'react';

const Form = (props) => {
	const [userData, setUserData] = useState({
		username: '',
		password: '',
	});

	const [userErrors, setUserErrors] = useState({
		username: '',
		password: '',
	});

	const handleInputChange = (event) => {
		setUserData({ ...userData, [event.target.name]: event.target.value });
		setUserErrors(
			validation({ ...userData, [event.target.name]: event.target.value }),
		);
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		props.login(userData);
	};
	return (
		<>
			<form onSubmit={handleSubmit}>
				<legend>Bienvenido a Rick and Morty App</legend>

				<div className="form-group">
					<label htmlFor="username" className="form-label mt-4">
						Username
					</label>
					<input
						className="form-control"
						aria-describedby="emailHelp"
						placeholder="Enter email"
						type="text"
						value={userData.username}
						name="username"
						onChange={handleInputChange}
					/>
					{userErrors.username && <span>{userErrors.username}</span>}
					<br />
				</div>
				<div className="form-group">
					<label htmlFor="password" className="form-label mt-4">
						Password
					</label>
					<input
						type="password"
						className="form-control"
						placeholder="Enter password"
						value={userData.password}
						name="password"
						onChange={handleInputChange}
					/>
					{userErrors.password && <span>{userErrors.password}</span>}
					<br />
				</div>
				<button type="submit" className="btn btn-primary">
					Login
				</button>
			</form>
		</>
	);
};

export default Form;
