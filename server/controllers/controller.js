var mongoose = require("mongoose");
var Player = require("../db/models");
var _ = require("underscore");



mongoose.Promise = global.Promise;

var router = require("express").Router();
router.route("/player/:id?").get(returnDefaultResponse).post(returnDefaultResponse).delete(returnDefaultResponse).put(returnDefaultResponse);
router.route("/game/:id?").get(returnDefaultResponse).post(returnDefaultResponse).delete(returnDefaultResponse).put(returnDefaultResponse);
router.route("/gameType/:id?").get(returnDefaultResponse).post(returnDefaultResponse).delete(returnDefaultResponse).put(returnDefaultResponse);



function returnDefaultResponse(req, res){
	var response = {text:"default response"};
	res.json(response);
};



module.exports = router;