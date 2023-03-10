const { Favorite } = require('../database/index');

let postFav = async (character) => {
	try {
		let { name, status, species, gender, origin, image } = character;

		if (!name || !status || !species || !gender || !origin || !image)
			throw new Error('Faltan datos obligatorios');

		let newFav = {
			name,
			status,
			species,
			gender,
			origin,
			image,
		};

		await Favorite.create(newFav);

		return newFav;
	} catch (error) {
		return { error: error.message };
	}
};

module.exports = postFav;
