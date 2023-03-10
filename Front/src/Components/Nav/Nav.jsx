import React from 'react';
import SearchBar from '../SearchBar/SearchBar';
import { NavLink } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import './Nav.modules.css';
import {
	addCharacter,
	deleteAllCharacter,
	deleteAllCharacterFavourite,
} from '../../Redux/Actions/actions';

const Nav = (props) => {
	let location = useLocation().pathname;
	let characters = useSelector((state) => state.allCharacters);
	let dispatch = useDispatch();

	//Boton Random
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

	//Boton delete all characters
	let handleDelete = () => {
		dispatch(deleteAllCharacter());
	};

	//Boton delete all characters favourtites

	let handleDeleteFavourite = () => {
		dispatch(deleteAllCharacterFavourite());
	};

	return (
		<>
			{location !== '/' ? (
				<nav className="navbar navbar-expand-lg navbar-dark bg-primary">
					<div className="container-fluid">
						<NavLink to="/home" className="navbar-brand">
							<img
								className="navbarlogo"
								src="https://res.cloudinary.com/nacho-morales/image/upload/v1676213998/Code%20Img/Logo_vghjwu.png"
								alt="lgo"
							/>
						</NavLink>
						{location === '/home' ? (
							<button
								type="button"
								className="btn btn-light"
								onClick={handleRandom}
							>
								<i className="fa fa-shuffle"></i>
							</button>
						) : (
							''
						)}

						{location === '/home' ? (
							<button
								type="button"
								className="btn btn-danger"
								onClick={handleDelete}
							>
								<i class="fa-solid fa-trash"></i>
							</button>
						) : (
							''
						)}

						{location === '/favorites' ? (
							<button
								type="button"
								className="btn btn-warning"
								onClick={handleDeleteFavourite}
							>
								<i class="fa-solid fa-trash"></i>
							</button>
						) : (
							''
						)}

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
