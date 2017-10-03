'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var GameSchema = new Schema({
  name: {
    type: String,
    required: 'Kindly enter the name of the task'
  },
  BoardgameName: {
    type: String      
  },
  players: 
    [{
      playerName: String,
      rank:Number
    }]    
  ,
  status: {
    type:String,
    enum: ['open', 'completed']
  }
});

module.exports = mongoose.model('boardgame', GameSchema);