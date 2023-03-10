const { server } = require('../routes/server');
const { sequelize } = require('../database/index');
const saveApiData = require('../controllers/saveApiData');
const PORT = 3001;

sequelize.sync({ force: false }).then(async () => {
	await saveApiData();
	server.listen(PORT, () => {
		console.log(`Server raised in port ${3001}, and DB SYNC`);
	});
});
