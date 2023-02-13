import React from 'react';
import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './Detail.modules.css';

const Detail = () => {
	const { detailId } = useParams();
	const navigate = useNavigate();
	const [character, setCharacter] = useState({});

	useEffect(() => {
		fetch(`https://rickandmortyapi.com/api/character/${detailId}`)
			.then((response) => response.json())
			.then((data) => {
				if (data.name) {
					setCharacter(data);
				} else {
					alert('No hay personajes con ese ID');
				}
			})
			.catch((error) => {
				alert('No hay personajes con ese ID');
			});
		return setCharacter({});
	}, [detailId]);

	let backToHome = () => {
		setCharacter({});
		navigate('/home');
	};
	return (
		<>
			<div>
				<div className="card mb-3" key={character.id} id={character.id}>
					<h3 className="card-header">{character.name}</h3>
					<div className="card-body">
						<h5 className="card-title">{character.origin?.name}</h5>
						<h6 className="card-subtitle text-muted">
							{character.location?.name}
						</h6>
					</div>
					<img
						className="detailimg"
						src={character.image}
						alt={character.name}
					/>

					<div className="card-body">
						<p className="card-text">
							Este personaje sale en {character.episode?.length} episodios
						</p>
					</div>
					<ul className="list-group list-group-flush">
						<li className="list-group-item" id="pisar">
							Especie: {character.species}
						</li>
						<li className="list-group-item" id="pisar">
							Genero: {character.gender}
						</li>
						<li className="list-group-item" id="pisar">
							Estado: {character.status}
						</li>
					</ul>
					<div className="card-body">
						<button
							type="button"
							className="btn btn-light"
							onClick={backToHome}
						>
							Volver
						</button>
					</div>
				</div>
			</div>
		</>
	);
};

export default Detail;
