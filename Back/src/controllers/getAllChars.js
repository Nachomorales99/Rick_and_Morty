const { Character } = require('../database/index');

let getAllChars = async () => {
	try {
		let allCharacters = await Character.findAll();
		return allCharacters;
	} catch (error) {
		return { error: error.message };
	}
};

module.exports = getAllChars;
