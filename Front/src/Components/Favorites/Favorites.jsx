import React from 'react';
import Cards from '../Cards/Cards';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { filterCards, orderCards } from '../../Redux/actions';
import { useDispatch, useSelector } from 'react-redux';
import './Favorites.modules.css';

const Favorites = (props) => {
	let dispatch = useDispatch();
	let favorites = useSelector((state) => state.allCharactersFavourite);

	let handleDispatch = (event) => {
		if (
			event.target.value === 'Ascendente' ||
			event.target.value === 'Descendente'
		) {
			dispatch(orderCards(event.target.value));
		} else {
			dispatch(filterCards(event.target.value));
		}
	};
	console.log(props.state?.myFavorites.length);
	return (
		<>
			<h2 className="favoritesTitle">My favorites</h2>
			<div>
				<div className="filterOrder">
					<div className="filter">
						<h4>Order</h4>
						<div className="select">
							<select name="format" id="format" onChange={handleDispatch}>
								<option selected disabled>
									Choose order
								</option>
								<option value="Ascendente">Ascendente</option>
								<option value="Descendente">Descendente</option>
							</select>
						</div>
					</div>
					<div className="order">
						<h4>Filter</h4>
						<div className="select">
							<select name="format" id="format" onChange={handleDispatch}>
								<option selected disabled>
									Choose filter
								</option>
								<option value="all">All</option>
								<option value="Male">Male</option>
								<option value="Female">Female</option>
								<option value="Genderless">Genderless</option>
								<option value="unknown">unknown</option>
							</select>
						</div>
					</div>
				</div>

				{favorites.length === 0 ? (
					<div className="card border-warning mb-3">
						<div className="card-body">
							<h4 className="card-title">Sujetos de prueba</h4>
							<p className="card-text">
								Parece que Morty otra vez entro al laboratorio y rompio todos
								los frascos de los experimentos de Rick
							</p>
							<p className="card-text">Agregue aqui nuevos personajes</p>
						</div>
					</div>
				) : (
					<Cards characters={props.myFavorites} />
				)}

				<NavLink to={'/home'}>
					<button type="button" className="btn btn-light">
						Volver
					</button>
				</NavLink>
			</div>
		</>
	);
};

let mapStateToProps = (state) => {
	return { myFavorites: state.myFavorites };
};

export default connect(mapStateToProps, null)(Favorites);
