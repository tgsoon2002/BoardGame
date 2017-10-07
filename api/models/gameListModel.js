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
      rank : Number,
      mcRes : Number,
      mcPro : Number,
      stRes : Number,
      stPro : Number,
      tiRes : Number,
      tiPro : Number,
      plRes : Number,
      plPro : Number,
      enRes : Number,
      enPro : Number,
      htRes : Number,
      htPro : Number
      }]    
  ,
  status: {
    type:String,
    enum: ['open', 'completed'],
    default:"open"
  }
});

module.exports = mongoose.model('boardgame', GameSchema);