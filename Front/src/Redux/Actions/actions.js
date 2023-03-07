import {
	ADD_CHARACTER,
	DELETE_CHARACTER,
	DELETE_ALLCHARACTER,
	ADD_CHARACTER_FAVOURITE,
	DELETE_CHARACTER_FAVOURITE,
	FILTER,
	ORDER,
} from './type';
import { toast } from 'react-toastify';

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

export let addCharacter = (id) => {
	return async (dispatch) => {
		await fetch(`http://localhost:3001/rickandmorty/character/${id}`)
			.then((response) => response.json())
			.then((data) => {
				if (!data.name) {
					alertadd('No hay personaje con ese ID');
				} else {
					dispatch({ type: ADD_CHARACTER, payload: data });
				}
			});
	};
};

export let deleteCharacter = (id) => {
	return { type: DELETE_CHARACTER, payload: id };
};

export let deleteAllCharacter = () => {
	return { type: DELETE_ALLCHARACTER };
};

export let addCharacterFavourite = (character) => {
	return { type: ADD_CHARACTER_FAVOURITE, payload: character };
};

export let deleteCharacterFavourite = (id) => {
	return { type: DELETE_CHARACTER_FAVOURITE, payload: id };
};

export let filterCards = (status) => {
	return { type: FILTER, payload: status };
};

export let orderCards = (id) => {
	return { type: ORDER, payload: id };
};
