import React from 'react';
import './Card.modules.css';
import { NavLink } from 'react-router-dom';
const Card = (props) => {
	return (
		<>
			<div className="blogcard">
				<div className="meta">
					<div
						className="photo"
						style={{
							backgroundImage: `url(${props.image})`,
						}}
					/>
					<ul className="details">
						<li>Gender: {props.gender}</li>
						<li>Specie: {props.species}</li>
						<li>Estatus: {props.status}</li>
					</ul>
				</div>
				<div className="description">
					<NavLink to={`/detail/${props.id}`}>
						<h1>{props.name}</h1>
					</NavLink>
					<p>
						Personaje de ficcion creado por Justin Roiland y Dan Harmon para la
						brillante serie de animacion adulta "Rick and Morty". La serie sigue
						las desventuras del científico alcohólico Rick y su nervioso nieto
						Morty, quienes dividen su tiempo entre la vida familiar doméstica y
						los viajes intergalácticos.
					</p>

					<button
						type="button"
						className="btn btn-danger"
						onClick={props.onClose}
						value={props.id}
					>
						Close
					</button>
				</div>
			</div>
		</>
	);
};

export default Card;
