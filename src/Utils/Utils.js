let initialState = [];

fetch(`https://rickandmortyapi.com/api/character/${id}`)
	.then((response) => response.json())
	.then((data) => {
		data = characters;
	});

export default initialState;

let handleRandom = (newcharacters) => {
	if (characters.length < 4) handleRandom(characters);
	let flag = true;
	let random = 0;

	while (flag) {
		random = Math.floor(Math.random() * (1 - 826)) + 826;

		if (newcharacters.some((character) => character.id === random)) continue;
		else flag = false;
	}
	onSearch(random);
};
