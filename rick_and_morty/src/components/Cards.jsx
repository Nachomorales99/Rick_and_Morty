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
					characters.map((character, index) => (
						<Card
							key={index}
							name={character.name}
							species={character.species}
							gender={character.gender}
							image={character.image}
							status={character.status}
							onClose={() => window.alert('Emulamos que se cierra la card')}
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
