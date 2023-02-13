import React from 'react';
import Nav from './Components/Nav/Nav';
import Cards from './Components/Cards/Cards';
import Detail from './Components/Detail/Detail';
import Form from './Components/Form/Form';
// import Eror404 from './Components/Error404/Error404';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

const App = () => {
	//State de personajes
	const [characters, setCharacters] = useState([]);

	//Buscar personaje en la API
	let onSearch = (id) => {
		fetch(`https://rickandmortyapi.com/api/character/${id}`)
			.then((response) => response.json())
			.then((data) => {
				data.name
					? characters.some((character) => character.id === data.id)
						? alertadd('Ya ingreso ese personaje')
						: setCharacters([...characters, data])
					: alertadd('No hay personaje con ese ID');
			});
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
	const [access, setAccess] = useState(false);
	const navigate = useNavigate();
	const username = 'nacho.morales5@gmail.com';
	const password = 'Nacho123';

	useEffect(() => {
		!access && navigate('/');
	}, [access, navigate]);

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
	const logout = (userData) => {
		setAccess(false);
		setCharacters([]);
		navigate('/');
	};

	return (
		<>
			<Nav onSearch={onSearch} logout={logout} />
			<Routes>
				<Route path="/" element={<Form login={login} />} />
				<Route
					path="/home"
					element={<Cards characters={characters} onClose={onClose} />}
				/>
				<Route path="/detail/:detailId" element={<Detail />} />
				{/* <Route path="*" element={<Eror404 />} /> */}
				<Route />
			</Routes>
			<ToastContainer />
		</>
	);
};

export default App;
