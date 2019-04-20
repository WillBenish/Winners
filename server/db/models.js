
var mongoose = require("mongoose");

var player = mongoose.Schema({
    id: Number,
    name: String,
    email: String
});

var game = mongoose.Schema({
    name: String,
    //numTeams: Number,


});

var match = mongoose.Schema({
    id: Number,
    name: String,
    datetime: Date,
    playerIds: [Number]
});


var group = mongoose.Schema({
    id: Number,
    name: String,
    playerIds: [Number]
});

 
module.exports = {
    player: player,
    game: game,
    match: match,
    group: group
};
