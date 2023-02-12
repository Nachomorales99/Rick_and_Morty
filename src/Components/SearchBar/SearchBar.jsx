import React, { useState } from 'react';
import './SearchBar.modules.css';
import { useLocation } from 'react-router-dom';

const SearchBar = (props) => {
	//State del id de los personajes
	const [inputChar, setInputChar] = useState('');

	//Controlador del input
	let handleChange = (event) => {
		setInputChar(event.target.value);
	};

	//Add al hacer enter
	let handleKeyDown = (event) => {
		if (event.key === 'Enter') {
			props.onSearch(inputChar);
			setInputChar((event.target.value = ''));
		}
	};
	return (
		<>
			{useLocation().pathname === '/home' ? (
				<div className="d-flex">
					<input
						className="form-control me-sm-2"
						type="search"
						placeholder="Search"
						value={inputChar}
						onChange={handleChange}
						onKeyDown={handleKeyDown}
					/>

					<button
						className="btn btn-secondary my-2 my-sm-0"
						onClick={() => props.onSearch(inputChar)}
						type="button"
					>
						Add character
					</button>
				</div>
			) : (
				''
			)}
		</>
	);
};

export default SearchBar;
