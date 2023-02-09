import Cards from './components/Cards.jsx';
import Nav from './components/Nav/Nav';
import React, { useState, useEffect } from 'react';

function App() {
	const [characters, setCharacters] = useState([]);
	const [inputChar, setInputChar] = React.useState('');

	let onSearch = (id) => {
		fetch(`https://rickandmortyapi.com/api/character/${id}`)
			.then((response) => response.json())
			.then((data) => {
				data.name
					? setCharacters([...characters, data])
					: alert('No hay personajes con ese ID');
			});
	};

	let handleAddChar = () => {
		onSearch(inputChar);
	};

	let handleChange = (event) => {
		setInputChar(event.target.value);
	};

	return (
		<>
			<Nav handleAddChar={handleAddChar} handleChange={handleChange} />
			<Cards characters={characters} />
		</>
	);
}

export default App;
