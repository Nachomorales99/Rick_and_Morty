import {
	ADD_CHARACTER,
	DELETE_CHARACTER,
	DELETE_ALLCHARACTER,
	ADD_CHARACTER_FAVOURITE,
	DELETE_CHARACTER_FAVOURITE,
	DELETE_ALL_CHARACTER_FAVOURITE,
	FILTER,
	ORDER,
} from './Actions/type';

const initialState = {
	myFavorites: [],
	allCharacters: [],
	allCharactersFavourite: [],
};

function reducer(state = initialState, action) {
	switch (action.type) {
		case ADD_CHARACTER:
			return {
				...state,
				allCharacters: [...state.allCharacters, action.payload],
			};

		case DELETE_CHARACTER:
			let newAllCharacters = state.allCharacters.filter(
				(character) => character.id !== action.payload,
			);

			let newAllCharactersFavourite = state.allCharactersFavourite.filter(
				(character) => character.id !== action.payload,
			);

			let newMyFavoritesA = state.myFavorites.filter(
				(chracter) => chracter.id !== action.payload,
			);

			return {
				...state,
				allCharacters: [...newAllCharacters],
				allCharactersFavourite: [...newAllCharactersFavourite],
				myFavorites: [...newMyFavoritesA],
			};

		case DELETE_ALLCHARACTER:
			return {
				...state,
				allCharacters: [],
				myFavorites: [],
				allCharactersFavourite: [],
			};

		case ADD_CHARACTER_FAVOURITE:
			return {
				...state,
				myFavorites: [...state.allCharactersFavourite, action.payload],
				allCharactersFavourite: [
					...state.allCharactersFavourite,
					action.payload,
				],
			};

		case DELETE_CHARACTER_FAVOURITE:
			let newMyFavoritesB = state.myFavorites.filter(
				(character) => character.id !== action.payload,
			);

			return {
				...state,
				myFavorites: [...newMyFavoritesB],
				allCharactersFavourite: [...newMyFavoritesB],
			};

		case DELETE_ALL_CHARACTER_FAVOURITE:
			return {
				...state,
				myFavorites: [],
				allCharactersFavourite: [],
			};

		case FILTER:
			if (action.payload === 'all') {
				return {
					...state,
					myFavorites: [...state.allCharactersFavourite],
				};
			} else {
				let copyAllCharactersFavouriteFilter = [
					...state.allCharactersFavourite,
				];

				return {
					...state,
					myFavorites: copyAllCharactersFavouriteFilter.filter(
						(character) => character.gender === action.payload,
					),
				};
			}

		case ORDER:
			let copyAllCharactersFavouriteOrder = [...state.allCharactersFavourite];

			if (action.payload === 'Ascendente') {
				return {
					...state,
					myFavorites: copyAllCharactersFavouriteOrder.sort(
						(characterA, characterB) => characterA.id - characterB.id,
					),
				};
			} else if (action.payload === 'Descendente') {
				return {
					...state,
					myFavorites: copyAllCharactersFavouriteOrder.sort(
						(characterA, characterB) => characterB.id - characterA.id,
					),
				};
			} else {
				break;
			}

		default:
			return { ...state };
	}
}

export default reducer;
