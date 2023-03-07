import React from 'react';
import SearchBar from '../SearchBar/SearchBar';
import { NavLink } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import './Nav.modules.css';
import { addCharacter } from '../../Redux/Actions/actions';

const Nav = (props) => {
	let location = useLocation().pathname;
	let characters = useSelector((state) => state.allCharacters);
	let dispatch = useDispatch();

	//Boton random
	let handleRandom = () => {
		let flag = true;
		let random = 0;

		while (flag) {
			random = Math.floor(Math.random() * (1 - 826)) + 826;

			if (
				characters.length === 0 ||
				// eslint-disable-next-line
				characters.some((character) => character.id !== random)
			) {
				flag = false;
			}
		}

		dispatch(addCharacter(random));
	};

	return (
		<>
			{location !== '/' ? (
				<nav className="navbar navbar-expand-lg navbar-dark bg-primary">
					<div className="container-fluid">
						<NavLink className="navbar-brand" onClick={handleRandom}>
							<img
								className="navbarlogo"
								src="https://res.cloudinary.com/nacho-morales/image/upload/v1676213998/Code%20Img/Logo_vghjwu.png"
								alt="lgo"
							/>
						</NavLink>
						<li className="nav-item" onClick={props.logout}>
							<NavLink className="nav-link">Logout</NavLink>
						</li>
						<li className="nav-item">
							<NavLink className="nav-link" to="/home">
								Home
							</NavLink>
						</li>
						<li className="nav-item">
							<NavLink className="nav-link" to="/favorites">
								Favorites
							</NavLink>
						</li>
						<SearchBar />
					</div>
				</nav>
			) : (
				''
			)}
		</>
	);
};

export default Nav;
