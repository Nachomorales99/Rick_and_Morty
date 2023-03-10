const { Favorite } = require('../database/index');

let deleteFavoriteById = async (id) => {
	try {
		let favoriteFinded = await Favorite.findByPk(id);

		if (!favoriteFinded) throw new Error('No se encontro el personaje');

		favoriteFinded.destroy();

		return 'Personaje eliminado correctamente';
	} catch (error) {
		return { error: error.message };
	}
};

module.exports = deleteFavoriteById;
