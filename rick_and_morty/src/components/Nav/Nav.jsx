import React from 'react';
import styles from './Nav.module.css';
import SearchBar from '../SearchBar/SearchBar';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

const Nav = (props) => {
	return (
		<>
			{useLocation().pathname != '/' ? (
				<div className={styles.navBar}>
					<Link to="/home">HOME</Link>
					<Link to="/about">ABOUT</Link>
					<SearchBar
						onSearch={props.handleAddChar}
						handleChange={props.handleChange}
						handleKeyDown={props.handleKeyDown}
					/>
				</div>
			) : (
				''
			)}
		</>
	);
};

export default Nav;
