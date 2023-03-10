const express = require('express');
const server = express();
const cors = require('cors');
const morgan = require('morgan');
const getAllChars = require('../controllers/getAllChars');
const getAllFavorites = require('../controllers/getAllFavorites');
const deleteFavoriteById = require('../controllers/deleteFavoriteById');
const postFav = require('../controllers/postFav');

server.use(express.json()); // para que funcinoe mi sv con formato JSON
server.use(cors()); // habilito a todos a hacer solicitudes a mi servidor
server.use(morgan('dev'));

//Obtengo personaje por ID
server.get('/rickandmorty/character/:id', async (req, res) => {
	try {
		let { id } = req.params;

		let response = await fetch(
			`https://rickandmortyapi.com/api/character/${id}`,
		);
		let data = await response.json();

		let character = {
			id: data.id,
			status: data.status,
			name: data.name,
			species: data.species,
			gender: data.gender,
			image: data.image,
		};

		res.status(200).json(character);
	} catch (error) {
		res.status(404).send(error.message);
	}
});

//Obtengo el detalle del personaje por ID
server.get('/rickandmorty/detail/:detailId', async (req, res) => {
	try {
		let { detailId } = req.params;

		let response = await fetch(
			`https://rickandmortyapi.com/api/character/${detailId}`,
		);
		let data = await response.json();

		let characterDetail = {
			id: data.id,
			name: data.name,
			species: data.species,
			status: data.status,
			gender: data.gender,
			image: data.image,
			origin: data.origin.name,
			location: data.location.name,
			episode: data.episode.length,
		};

		res.status(200).json(characterDetail);
	} catch (error) {
		res.status(404).send(error.message);
	}
});

//Obtengo 100 personajes cargados en la DB
server.get('/rickandmorty/allCharacters', async (req, res) => {
	try {
		let allCharacters = await getAllChars();
		res.status(200).json(allCharacters);
	} catch (error) {
		res.status(404).send('Error al traer personjes');
	}
});

//Obtengo los personajes fav de la db

server.get('/rickandmorty/fav', async (req, res) => {
	try {
		let allFavorites = await getAllFavorites();

		if (allFavorites.error) throw new Error(allFavorites.error);

		res.status(200).json(allFavorites);
	} catch (error) {
		res.status(404).send(error.message);
	}
});

//Posteo los personajes fav a la db
server.post('/rickandmorty/fav', async (req, res) => {
	try {
		let characterFav = await postFav(req.body);

		if (characterFav.error) throw new Error(characterFav.error);

		res.status(200).json(characterFav);
	} catch (error) {
		res.status(404).send(error.message);
	}
});

//Elimino personaje fav de la db
server.delete('/rickandmorty/fav/:id', async (req, res) => {
	try {
		let { id } = req.params;

		let deleteFavorite = await deleteFavoriteById(Number(id));

		if (deleteFavorite.error) throw new Error(deleteFavorite.error);

		res.status(200).send(deleteFavorite);
	} catch (error) {
		res.status(404).send(error.message);
	}
});

module.exports = { server };
