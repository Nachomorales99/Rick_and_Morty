import React from 'react';

const SearchBar = (props) => {
	return (
		<>
			<input type="search" />
			<button onClick={() => props.onSearch('Cuando haya Id seran los Id')}>
				Agregar
			</button>
		</>
	);
};

export default SearchBar;
