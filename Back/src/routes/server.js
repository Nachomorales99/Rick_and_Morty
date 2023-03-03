const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());
app.use(express.json());

//Obtengo personaje por ID
app.get('/rickandmorty/character/:id', async (req, res) => {
	try {
		let { id } = req.params;

		let response = await fetch(
			`https://rickandmortyapi.com/api/character/${id}`,
		);
		let data = await response.json();

		let character = {
			id: data.id,
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
app.get('/rickandmorty/detail/:detailId', async (req, res) => {
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

//Obtengo los personajes fav
let fav = [];

app.get('/rickandmorty/fav', (req, res) => {
	res.status(200).json(fav);
});

//Posteo los personajes fav
app.post('/rickandmorty/fav', (req, res) => {
	fav.push(req.body);

	res.status(200).send('Se guardaron correctamente');
});

//Elimino personaje fav
app.delete('/rickandmorty/fav/:id', (req, res) => {
	let { id } = req.params;

	let favFilteres = fav.filter((character) => character.id !== Number(id));
	fav = favFilteres;

	res.status(200).send('Se elimino correctamente');
});

module.exports = app;
