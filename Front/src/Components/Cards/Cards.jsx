import React from 'react';
import Card from '../Card/Card.jsx';
import styled from 'styled-components';
import './Cards.modules.css';

const Contenedor = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: space-around;
	margin: 0;
`;

const Cards = (props) => {
	const { characters } = props;

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
							onClose={props.onClose}
						/>
					))
				) : (
					<div className="card mb-3">
						<div className="card-header">Start!</div>
						<div className="card-body">
							<h4 className="card-title">
								Pulsar el logo de la nav para comenzar
							</h4>
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
