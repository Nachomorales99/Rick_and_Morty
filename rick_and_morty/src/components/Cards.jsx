import React from 'react';
import Card from './Card';

const Cards = (props) => {
	const { characters } = props;

	return (
		<>
			{characters ? (
				characters.map((character, index) => (
					<div key={index}>
						<Card
							name={character.name}
							species={character.species}
							gender={character.gender}
							image={character.image}
							onClose={() => window.alert('Emulamos que se cierra la card')}
						/>
					</div>
				))
			) : (
				<h3>No hay persoanjes</h3>
			)}
		</>
	);
};

export default Cards;
