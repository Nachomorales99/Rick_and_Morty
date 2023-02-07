import React from 'react';
import Card from './Card';

const Cards = (props) => {
	const { characters } = props;

	return (
		<>
			{characters.map((character, index) => {
				return (
					<div>
						<Card
							key={index}
							name={character.name}
							species={character.species}
							gender={character.gender}
							image={character.image}
							onClose={() => window.alert('Emulamos que se cierra la card')}
						/>
					</div>
				);
			})}
		</>
	);
};

export default Cards;
