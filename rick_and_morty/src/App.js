import Cards from './components/Cards.jsx';
import Nav from './components/Nav/Nav';
import Detail from './components/DetailCharacter/Detail.jsx';
import About from './components/About/About.jsx';
import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import WebStart from './components/WebStart/WebStart.jsx';

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
			setInputChar((event.target.value = ''));
		}
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
			<WebStart />
			<Nav
				handleAddChar={handleAddChar}
				handleChange={handleChange}
				handleKeyDown={handleKeyDown}
			/>
			<Routes>
				<Route
					path="/home"
					element={<Cards characters={characters} onClose={onClose} />}
				/>
				<Route path="/detail/:detailId" element={<Detail />} />
				<Route path="/about" element={<About />} />
			</Routes>
		</>
	);
}

export default App;
