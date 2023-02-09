import React from 'react';
import styles from './Nav.module.css';
import SearchBar from '../SearchBar/SearchBar';

const Nav = (props) => {
	return (
		<>
			<div className={styles.navBar}>
				<SearchBar
					onSearch={props.handleAddChar}
					handleChange={props.handleChange}
				/>
			</div>
		</>
	);
};

export default Nav;
