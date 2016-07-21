var mongoose = require('mongoose');
var mongooseDb = mongoose.model('Mongoosedb');

module.exports = (function() {
	return {
		getMongooses: function(req, res){
			mongooseDb.find({}, function(err, mongooses){
				if(err){
					console.log(err);
					console.log('getmongooses function mongooses controller');
				} else {
					res.json(mongooses);
				}
			})
		},
		createMongoose: function(req, res){
			mongoose = new mongooseDb(req.body);
			mongoose.save(function(err, result){
				if(err){
					console.log(err);
					console.log('error creating a new mongoose');
				} else {
					console.log('this is our new mongoose',result);
					res.json(result);

				}
			})
		},
		getMongoose: function(req, res){
			// this should probably be findOne isntead of find
			mongooseDb.find({_id: req.params.id}, function(err, result){
				if(err){
					console.log("this is teh mongoose you are looking for", result);
				} else {
					console.log('this is our mongoose',result);
					res.json(result);
				}
			})
		},
		updateMongoose: function(req, res){
			mongooseDb.findOne({_id: req.params.id}, function(err, result){
				if(err){
					console.log('coudlnt find mongoose', err);
				} else {
					result.name = req.body.name;
					result.weight = req.body.weight;
					result.color = req.body.color;
					result.save(function(err, result){
						if(err){
							console.log('couldnt save update mongoose', err);
						} else {
							console.log('foudn mongoose ', result);
							res.json(result);
						}
					})
				}
			})
		}
	}
})();