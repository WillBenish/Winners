
var mongoose = require("mongoose");

var player = mongoose.Schema({
    id: Int,
    name: String,
    email: String
});

var gameType = mongoose.Schema({
    name: String

});

var game = mongoose.Schema({
    id: Number,
    name: String,
    datetime: Date,
    playerIds: [Number]
});

 
module.exports = {
    player: player,
    gameType: gameType,
    game: game,
    group: group
};
