let getCharById = (res, id) => {
	fetch(`https://rickandmortyapi.com/api/character/${id}`)
		.then((response) => response.json())
		.then((data) => {
			let character = {
				id: data.id,
				image: data.image,
				name: data.name,
				gender: data.gender,
				species: data.species,
			};
			res
				.writeHead(200, { 'Content-type': 'application/json' })
				.end(JSON.stringify(character));
		})
		.catch((err) =>
			res
				.writeHead(500, { 'Contente-type': 'text/plain' })
				.end(`El personaje con id ${id}, no fue encontrado`),
		);
};

module.exports = getCharById;