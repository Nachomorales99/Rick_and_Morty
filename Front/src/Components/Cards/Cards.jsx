import React from 'react';
import Card from '../Card/Card.jsx';
import styled from 'styled-components';
import './Cards.modules.css';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addCharacter } from '../../Redux/Actions/actions.js';

const Contenedor = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: space-around;
	margin: 0;
`;

const Cards = (props) => {
	let { characters } = props;
	let dispatch = useDispatch();
	let allCharacters = useSelector((state) => state.allCharacters);

	useEffect(() => {
		if (!allCharacters.length) {
			dispatch(addCharacter(1));
			dispatch(addCharacter(2));
			dispatch(addCharacter(3));
			dispatch(addCharacter(4));
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<>
			<Contenedor>
				{characters.length !== 0 ? (
					characters.map((character) => (
						<Card
							key={character.id}
							id={character.id}
							name={character.name}
							species={character.species}
							gender={character.gender}
							image={character.image}
							status={character.status}
						/>
					))
				) : (
					<div className="card mb-3">
						<div className="card-header">
							Muy bien Morty... no hay nadie aqui
						</div>
						<div className="card-body">
							<h4 className="card-title"> Inivitemos algunos amigos</h4>
							<img
								className="fotito"
								src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/c50a4a55883023.5996f8afa3f5c.gif"
								alt="rick-and-morty-gif"
							/>
						</div>
					</div>
				)}
			</Contenedor>
		</>
	);
};

export default Cards;
