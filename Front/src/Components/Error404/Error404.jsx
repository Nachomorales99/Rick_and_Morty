import React from 'react';
import './Error404.modules.css';
import { NavLink } from 'react-router-dom';

const Error404 = () => {
	return (
		<>
			<div class="background-img">
				<div class="space"></div>
				<div class="wrapper">
					<div class="img-wrapper">
						<span>44</span>
					</div>
					<p>
						Has en entrado en una dimensión, realidad o planeta que no existe.{' '}
						<br />
						Toca el portal para volver a la Tierra (C-137)
					</p>
					<NavLink to={'/home'}>
						<button type="button">Portal a la Tierra (C-137)</button>
					</NavLink>
				</div>
			</div>
		</>
	);
};

export default Error404;
