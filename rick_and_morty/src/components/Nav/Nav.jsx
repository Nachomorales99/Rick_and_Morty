import React from 'react';
import styles from './Nav.module.css';
import SearchBar from '../SearchBar/SearchBar';

const Nav = () => {
	return (
		<>
			<div className={styles.navBar}>
				<SearchBar onSearch={onSearch} />
			</div>
		</>
	);
};

export default Nav;
