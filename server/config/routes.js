var mongooses = require('./../controllers/mongooses.js');

module.exports = function(app){
	// app.post('/dummies/:test', function(req, res){
		
	// 	// I'm testing the info that I'm getting from my dummy Factory
	// 	// I console.log the body and the params just to make sure that it's
	// 	// going through 

	// 	console.log(req.body);
	// 	console.log(req.params.test)
	// 	// mongooseController.getMongooses(req, res);
	// })

	app.post('/mongoose', function(req, res){
		console.log('made it to my /mongoose route');
		mongooses.createMongoose(req, res);

	})
	app.get('/mongoose', function(req, res){
		console.log(' made it to my /mongoose get route');
		mongooses.getMongooses(req, res);
	})

	app.get('/mongoose/:id', function(req, res){
		console.log('made it to my /mongoose/:id get route');
		mongooses.getMongoose(req, res);
	})

	app.post('/mongoose/:id/update', function(req, res){
		console.log('made it to my /mongoose/:id/update post route');
		mongooses.updateMongoose(req, res);
	})
}