const express = require('express');
const _ourController = require('./controllers/_our-controller');

module.exports = function(app){

	const apiRoutes = express.Router();

	//define first router
	apiRoutes.get('/helloworld',_ourController.helloworld);
	
	//localhost:3000/api
	app.use('/api',apiRoutes);

}