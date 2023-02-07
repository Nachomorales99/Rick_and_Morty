import React from 'react';

const SearchBar = (props) => {
	return (
		<>
			<input type="search" />
			<button onClick={() => props.onSearch('Cuanto Id seran los id')}>
				Agregar
			</button>
		</>
	);
};

export default SearchBar;
