const { Favorite } = require('../database/index');

let getAllFavorites = async () => {
	try {
		let allFavorites = await Favorite.findAll();

		if (!allFavorites) throw new Error('No hay favoritos');

		return allFavorites;
	} catch (error) {
		return { error: error.message };
	}
};

module.exports = getAllFavorites;
