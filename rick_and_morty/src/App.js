import './App.css';
import Card from './components/Card/Card.jsx';
import Cards from './components/Cards.jsx';
import SearchBar from './components/SearchBar/SearchBar.jsx';
import characters, { Rick } from './data.js';
import styled from 'styled-components';

const Contenedor = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: space-around;
`;

function App() {
	return (
		<>
			<div>
				<SearchBar onSearch={(characterID) => window.alert(characterID)} />
			</div>
			<Contenedor key={Rick.id}>
				<Card
					name={Rick.name}
					species={Rick.species}
					gender={Rick.gender}
					image={Rick.image}
					status={Rick.status}
					onClose={() => window.alert('Emulamos que se cierra la card')}
				/>
			</Contenedor>
			<div>
				<Cards characters={characters} />
			</div>
		</>
	);
}

export default App;
