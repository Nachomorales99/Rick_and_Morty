import Cards from './components/Cards.jsx';
import Nav from './components/Nav/Nav';
import React, { useState } from 'react';

function App() {
	const [characters, setCharacters] = useState([]);
	const [inputChar, setInputChar] = React.useState('');

	let onSearch = (id) => {
		fetch(`https://rickandmortyapi.com/api/character/${id}`)
			.then((response) => response.json())
			.then((data) => {
				data.name
					? characters.some((character) => character.id === data.id)
						? alert('Ya existe ese personaje, ingrese otro')
						: setCharacters([...characters, data])
					: alert('No hay personaje con ese ID');
			});
	};

	let handleAddChar = () => {
		onSearch(inputChar);
	};

	let handleChange = (event) => {
		setInputChar(event.target.value);
	};

	let handleKeyDown = (event) => {
		if (event.key === 'Enter') {
			handleAddChar();
		}
		setInputChar((event.target.value = ''));
	};

	let onClose = (event) => {
		setCharacters(
			characters.filter(
				(character) => character.id != event.currentTarget.value,
			),
		);
	};

	return (
		<>
			<Nav
				handleAddChar={handleAddChar}
				handleChange={handleChange}
				handleKeyDown={handleKeyDown}
			/>
			<Cards characters={characters} onClose={onClose} />
		</>
	);
}

export default App;
