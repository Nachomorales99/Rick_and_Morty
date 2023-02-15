import React, { useState, useEffect } from 'react';
import './Card.modules.css';
import { NavLink } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import {
	deleteCharacter,
	addCharacterFavourite,
	deleteCharacterFavourite,
} from '../../Redux/actions';
import { connect } from 'react-redux';

const Card = (props) => {
	const [isFav, setIsFav] = useState(false);

	useEffect(() => {
		props.myFavorites.forEach((fav) => {
			if (fav.id === props.id) {
				setIsFav(true);
			}
		});
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [props.myFavorites]);

	let handleFavorite = () => {
		if (isFav) {
			setIsFav(false);
			props.deleteCharacterFavourite(props.id);
		}

		if (!isFav) {
			setIsFav(true);
			props.addCharacterFavourite(props);
		}
	};

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

					{isFav ? (
						<button onClick={handleFavorite}>❤️</button>
					) : (
						<button onClick={handleFavorite}>🤍</button>
					)}

					{useLocation().pathname === '/home' ? (
						<button
							type="button"
							className="btn btn-danger"
							onClick={props.onClose}
							value={props.id}
						>
							Close
						</button>
					) : (
						''
					)}
				</div>
			</div>
		</>
	);
};

let mapStateToProps = (state) => {
	return { myFavorites: state.myFavorites };
};

let mapDispatchToProps = (dispatch) => {
	return {
		addCharacterFavourite: (character) =>
			dispatch(addCharacterFavourite(character)),
		deleteCharacterFavourite: (id) => dispatch(deleteCharacterFavourite(id)),
		deleteCharacter: (id) => dispatch(deleteCharacter(id)),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Card);
