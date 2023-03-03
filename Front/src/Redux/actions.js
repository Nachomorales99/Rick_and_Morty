import axios from 'axios';

// export const ADD_CHARACTER = 'ADD_CHARACTER';
export const DELETE_CHARACTER = 'DELETE_CHARACTER';
export const ADD_CHARACTER_FAVOURITE = 'ADD_CHARACTER_FAVOURITE';
export const DELETE_CHARACTER_FAVOURITE = 'DELETE_CHARACTER_FAVOURITE';
export const DELETE_ALLCHARACTER_FAVOURITE = 'DELETE_ALLCHARACTER_FAVOURITE';
export const FILTER = 'FILTER';
export const ORDER = 'ORDER';

// export let addCharacter = (id) => {
// 	return async (dispatch) => {
// 		await fetch(`https://rickandmortyapi.com/api/character/${id}`)
// 			.then((response) => response.json())
// 			.then((data) => {
// 				if (data.error) {
// 					alert(data.error);
// 				} else {
// 					dispatch({ type: ADD_CHARACTER, payload: data });
// 				}
// 			});
// 	};
// };

export let deleteCharacter = (id) => {
	return { type: DELETE_CHARACTER, payload: id };
};

export let addCharacterFavourite = (character) => {
	return async (dispatch) => {
		let response = await axios.post(
			'http://localhost:3001/rickandmorty/fav',
			character,
		);

		let data = response.data;

		return dispatch({ type: ADD_CHARACTER_FAVOURITE, payload: data });
	};
};

export let deleteCharacterFavourite = (id) => {
	return async (dispatch) => {
		let response = await axios.delete(
			`http://localhost:3001/rickandmorty/fav/${id}`,
		);

		let data = response.data;

		return dispatch({
			type: DELETE_CHARACTER_FAVOURITE,
			payload: data,
		});
	};
};

export let deleteAllCharacterFavourite = () => {
	return { type: DELETE_ALLCHARACTER_FAVOURITE };
};

export let filterCards = (status) => {
	return { type: FILTER, payload: status };
};

export let orderCards = (id) => {
	return { type: ORDER, payload: id };
};
