import React, { useState } from 'react';
import './SearchBar.modules.css';
import { useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addCharacter } from '../../Redux/Actions/actions';
import { toast } from 'react-toastify';

const SearchBar = () => {
	let dispatch = useDispatch();
	let allCharacters = useSelector((state) => state.allCharacters);

	let handleDispatch = () => {
		let flag = true;
		allCharacters.forEach((character) => {
			if (character.id === Number(characterId)) {
				flag = false;
				alertadd('Ya ingreso ese personaje');
			}
		});

		flag && dispatch(addCharacter(Number(characterId)));
	};

	//Alert error
	let alertadd = (mensaje) => {
		toast.error(mensaje, {
			position: 'top-center',
			autoClose: 2000,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: false,
			draggable: true,
			progress: undefined,
			theme: 'colored',
		});
	};

	//State del id de los personajes
	let [characterId, setCharacterId] = useState();

	//Controlador del input
	let handleChange = (event) => {
		setCharacterId(event.target.value);
	};

	//Add al hacer enter
	let handleKeyDown = (event) => {
		if (event.key === 'Enter') {
			handleDispatch();
			setCharacterId((event.target.value = ''));
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
						value={characterId}
						onChange={handleChange}
						onKeyDown={handleKeyDown}
					/>

					<button
						className="btn btn-secondary my-2 my-sm-0"
						onClick={handleDispatch}
						type="button"
					>
						Add Character
					</button>
				</div>
			) : (
				''
			)}
		</>
	);
};

export default SearchBar;
