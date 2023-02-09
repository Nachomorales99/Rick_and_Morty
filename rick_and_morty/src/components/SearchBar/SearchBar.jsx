import React from 'react';
import styles from './SearchBar.module.css';

const SearchBar = (props) => {
	return (
		<>
			<div className={styles.container}>
				<input
					className={styles.input}
					type="search"
					// onKeyUpCapture={props.onSearch} //Preguntar a Hernan
					keydown={props.onSearch}
					onChange={props.handleChange}
				/>
				<button className={styles.add} onClick={props.onSearch}>
					Agregar
				</button>
			</div>
		</>
	);
};

export default SearchBar;
