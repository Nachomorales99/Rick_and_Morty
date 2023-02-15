import React from 'react';
import validation from './validation';
import { useState } from 'react';
import './Form.modules.css';

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
			<div className="container">
				<div className="boxlogin">
					<div className="img">
						<img
							className="img1"
							alt="welcome3"
							src="https://i.pinimg.com/564x/31/04/c4/3104c4074e7ae230468119d27218859e.jpg"
						/>
						<img
							className="img2"
							alt="welcome1"
							src="https://doitbeforeme.com/wp-content/uploads/2023/01/lockscreen-rick-and-morty-wallpaper.webp"
						/>
						<img
							className="img3"
							alt="welcome2"
							src="https://r1.ilikewallpaper.net/iphone-12-pro-max-wallpapers/download-109168/Rick-And-Morty-Hd-In-Resolution.jpg"
						/>
					</div>
					<form
						className="formulario"
						onSubmit={handleSubmit}
						autoComplete="off"
					>
						<legend className="welcome">Bienvenido a Rick and Morty App</legend>

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
				</div>
			</div>
		</>
	);
};

export default Form;
