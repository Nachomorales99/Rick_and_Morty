import React from 'react';
import styles from './SearchBar.module.css';

const SearchBar = (props) => {
	return (
		<>
			<div className={styles.container}>
				<input className={styles.input} type="search" />
				<button
					className={styles.add}
					onClick={() => props.onSearch('Cuando haya Id seran los Id')}
				>
					Agregar
				</button>
			</div>
		</>
	);
};

export default SearchBar;
