const axios = require('axios');
const { Character } = require('../database/index');
let URL = 'https://rickandmortyapi.com/api/character';

let getApiData = async () => {
	try {
		let characters = [];

		for (let i = 0; i < 5; i++) {
			let result = await axios(URL);
			let personajes = result.data.results;
			characters.push(...personajes);
			URL = result.data.info.next;
		}

		let allCharacters = characters.map((character) => {
			return {
				id: character.id,
				name: character.name,
				species: character.species,
				origin: character.origin.name,
				gender: character.gender,
				image: character.image,
				status: character.status,
			};
		});

		return allCharacters;
	} catch (error) {
		return { error: error.message };
	}
};

let saveApiData = async () => {
	try {
		let allCharacters = await getApiData();
		await Character.bulkCreate(allCharacters);

		return allCharacters;
	} catch (error) {
		return { error: error.message };
	}
};

module.exports = saveApiData;
