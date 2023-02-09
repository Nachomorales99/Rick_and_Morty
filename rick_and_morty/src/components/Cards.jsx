import React from 'react';
import Card from './Card/Card';
import styled from 'styled-components';

const Contenedor = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: space-around;
`;

const Cards = (props) => {
	const { characters } = props;

	return (
		<>
			<Contenedor>
				{characters ? (
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
					<h3>No hay persoanjes</h3>
				)}
			</Contenedor>
		</>
	);
};

export default Cards;
