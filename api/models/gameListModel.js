'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var GameSchema = new Schema({
  name: {
    type: String,
    required: 'Kindly enter the name of the task'
  },
  BoardgameName: String   ,
  TemperatureLevel : Number,
  OxygenLevel : 
  {
    type:Number,
    default:0
  },
  NumberOceanTile : Number ,
  Generation : Number,
  players: 
    [{
      corporation : String,
      playerName: String,
      rank : Number,
      resouce :[],
      production :[]
      }]    
  ,
  status: {
    type:String,
    enum: ['open', 'completed'],
    default:"open"
  }
});

module.exports = mongoose.model('boardgame', GameSchema);