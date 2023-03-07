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
import { useSelector, useDispatch } from 'react-redux';
import { deleteAllCharacter } from './Redux/Actions/actions';

const App = () => {
	//State de personajes
	let characters = useSelector((state) => state.allCharacters);
	let dispatch = useDispatch();

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
		dispatch(deleteAllCharacter());
		navigate('/');
	};

	useEffect(() => {
		!access && navigate('/');
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [access]);

	return (
		<>
			<Nav logout={logout} />
			<Routes>
				<Route path="*" element={<Error404 />} />
				<Route path="/" element={<Form login={login} />} />
				<Route path="/home" element={<Cards characters={characters} />} />
				<Route path="/detail/:detailId" element={<Detail />} />
				<Route path="/favorites" element={<Favorites />} />
			</Routes>
			<Footer logout={logout} />
			<ToastContainer />
		</>
	);
};

export default App;
