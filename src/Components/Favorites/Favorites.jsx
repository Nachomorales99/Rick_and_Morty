import React from 'react';
import Cards from '../Cards/Cards';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { filterCards, orderCards } from '../../Redux/actions';
import { useDispatch } from 'react-redux';

const Favorites = (props) => {
	let dispatch = useDispatch();

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

	return (
		<>
			<div>
				<div>
					<select onChange={handleDispatch}>
						<option value="Ascendente">Ascendente</option>
						<option value="Descendente">Descendente</option>
					</select>
					<select onChange={handleDispatch}>
						<option value="Male">Male</option>
						<option value="Female">Female</option>
						<option value="Genderless">Genderless</option>
						<option value="unknown">Unknown</option>
					</select>
				</div>
				<Cards characters={props.myFavorites} />
				<NavLink to={'/home'}>
					<button>Volver</button>
				</NavLink>
			</div>
		</>
	);
};

let mapStateToProps = (state) => {
	return { myFavorites: state.myFavorites };
};

export default connect(mapStateToProps, null)(Favorites);
