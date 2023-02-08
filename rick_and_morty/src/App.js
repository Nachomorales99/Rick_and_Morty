import Cards from './components/Cards.jsx';
import Nav from './components/Nav/Nav';
import React, { useState, useEffect } from 'react';

function App() {
	const [characters, setCharacters] = useState([
		{
			id: 1,
			name: 'Rick Sanchez',
			status: 'Alive',
			species: 'Human',
			gender: 'Male',
			image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
		},
		{
			id: 2,
			name: 'Morty Smith',
			status: 'Alive',
			species: 'Human',
			gender: 'Male',
			image: 'https://rickandmortyapi.com/api/character/avatar/2.jpeg',
		},
		{
			id: 3,
			name: 'Summer Smith',
			status: 'Alive',
			species: 'Human',
			gender: 'Female',
			image: 'https://rickandmortyapi.com/api/character/avatar/3.jpeg',
		},
		{
			id: 4,
			name: 'Beth Smith',
			status: 'Alive',
			species: 'Human',
			gender: 'Female',
			image: 'https://rickandmortyapi.com/api/character/avatar/4.jpeg',
		},
	]);

	let onSearch = (event) => {
		setCharacters([
			...characters,
			characters.filter((character) => character.id === event.target.value),
		]);
	};

	return (
		<>
			<Nav onSearch={onSearch} />
			<Cards characters={characters} />
		</>
	);
}

export default App;
