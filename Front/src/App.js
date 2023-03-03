import React from 'react';
import Nav from './Components/Nav/Nav';
import Cards from './Components/Cards/Cards';
import Detail from './Components/Detail/Detail';
import Form from './Components/Form/Form';
import Footer from './Components/Footer/Footer';
import Favorites from './Components/Favorites/Favorites';
import Error404 from './Components/Error404/Error404';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

const App = () => {
	//State de personajes
	const [characters, setCharacters] = useState([]);

	//Buscar personaje en la API
	let onSearch = (id) => {
		fetch(`http://localhost:3001/rickandmorty/character/${id}`)
			.then((response) => response.json())
			.then((data) => {
				data.name
					? characters.some((character) => character.id === data.id)
						? alertadd('Ya ingreso ese personaje')
						: setCharacters([...characters, data])
					: alertadd('No hay personaje con ese ID');
			});
	};

	//Boton random
	let handleRandom = () => {
		let flag = true;
		let random = 0;

		while (flag) {
			random = Math.floor(Math.random() * (1 - 826)) + 826;

			if (
				characters.length === 0 ||
				// eslint-disable-next-line
				characters.some((character) => character.id !== random)
			) {
				flag = false;
			}
		}

		onSearch(random);
	};

	//Alert error
	let alertadd = (mensaje) => {
		toast.error(mensaje, {
			position: 'top-center',
			autoClose: 2000,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: false,
			draggable: true,
			progress: undefined,
			theme: 'colored',
		});
	};
	//Eliminar card
	let onClose = (event) => {
		setCharacters(
			characters.filter(
				(character) => character.id !== Number(event.currentTarget.value),
			),
		);
	};

	//Login
	const [access, setAccess] = useState(true);
	const navigate = useNavigate();
	const username = 'hola@gmail.com';
	const password = '123456';

	//Validacion de usuario
	const login = (userData) => {
		if (userData.username === username && userData.password === password) {
			setAccess(true);
			navigate('/home');
		} else {
			alertadd('UserName y/o Password incorrectos');
		}
	};
	//Logout
	const logout = () => {
		setAccess(false);
		setCharacters([]);
		navigate('/');
	};

	useEffect(() => {
		!access && navigate('/');
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [access]);

	return (
		<>
			<Nav onSearch={onSearch} logout={logout} handleRandom={handleRandom} />
			<Routes>
				<Route path="*" element={<Error404 />} />
				<Route path="/" element={<Form login={login} />} />
				<Route
					path="/home"
					element={<Cards characters={characters} onClose={onClose} />}
				/>
				<Route path="/detail/:detailId" element={<Detail />} />
				<Route path="/favorites" element={<Favorites />} />
			</Routes>
			<Footer logout={logout} />
			<ToastContainer />
		</>
	);
};

export default App;
