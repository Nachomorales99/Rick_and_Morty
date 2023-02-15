import React from 'react';
import SearchBar from '../SearchBar/SearchBar';
import { NavLink } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import './Nav.modules.css';

const Nav = (props) => {
	return (
		<>
			{useLocation().pathname !== '/' ? (
				<nav className="navbar navbar-expand-lg navbar-dark bg-primary">
					<div className="container-fluid">
						<NavLink className="navbar-brand" to="/home">
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
						<li className="nav-item">
							<NavLink className="nav-link" to="/about">
								About
							</NavLink>
						</li>
						<SearchBar onSearch={props.onSearch} />
					</div>
				</nav>
			) : (
				''
			)}
		</>
	);
};

export default Nav;
