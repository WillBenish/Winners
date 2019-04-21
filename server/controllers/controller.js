var mongoose = require("mongoose");
var Player = require("../db/models");
var _ = require("underscore");
var fs = require("fs");
var path = require('path');



mongoose.Promise = global.Promise;

var router = require("express").Router();
router.route("/player/:id?").get(returnPlayers).post(returnDefaultResponse).delete(returnDefaultResponse).put(returnDefaultResponse);
router.route("/game/:id?").get(returnDefaultResponse).post(returnDefaultResponse).delete(returnDefaultResponse).put(returnDefaultResponse);
router.route("/gameType/:id?").get(returnDefaultResponse).post(returnDefaultResponse).delete(returnDefaultResponse).put(returnDefaultResponse);


function returnPlayers(req,res){
		let rawdata = fs.readFileSync(__dirname + '/samplePlayers.json');  
		let players = JSON.parse(rawdata); 
console.log('boob');
			console.log('player endpoint get: ');
			console.log(req.params);
		if(req.params.id===undefined){
			res.json(players.samplePlayers); 
		} else {
			var objectFound = players.samplePlayers.filter(k => k.id == req.params.id);//map(function(x) {return x.id; }).indexOf('2');
			res.json(objectFound);


		};

}


function returnDefaultResponse(req, res){
	var response = {text:"default response"};
	res.json(response);
};



module.exports = router;