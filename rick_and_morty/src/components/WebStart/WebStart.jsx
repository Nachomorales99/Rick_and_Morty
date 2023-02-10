import React from 'react';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

const WebStart = () => {
	return (
		<>
			{useLocation().pathname == '/' ? (
				<div>
					<h1>Welcome to Rick and Morty App by Nacho Morales</h1>
					<Link to="/home">
						<button>Start</button>
					</Link>
				</div>
			) : (
				''
			)}
		</>
	);
};

export default WebStart;
