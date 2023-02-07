import React from 'react';
const Card = (props) => {
	return (
		<>
			<button onClick={props.onClose}>X</button>
			<h2>{props.name}</h2>
			<h2>{props.species}</h2>
			<h2>{props.gender}</h2>
			<img src={props.image} alt={props.name} />
		</>
	);
};

export default Card;
