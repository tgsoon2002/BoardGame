'use strict';


var mongoose = require('mongoose'),
  Game = mongoose.model('boardgame');

exports.list_all_game = function(req, res) {
  console.log("show all game");
  Game.find({}, function(err, task) {
    if (err)
      res.send(err);
    res.json(task);
  });
};

exports.list_all_open_game = function(req, res) {
  console.log("show open game");
  Game.find({status:"open"}, function(err, task) {
    if (err)
      res.send(err);
    res.json(task);
  });
};



exports.create_a_game = function(req, res) {
  console.log("Create a game");
  var new_task = new Game(req.body);
  console.log(new_task);
  new_task.save(function(err, task) {
    
    if (err)
      res.send(err);
    res.json(task);
  });
};

exports.read_a_game = function(req, res) {
  console.log(req.params.taskId);
  console.log("Read a game");
  Game.findById(req.params.taskId, function(err, task) {
    if (err)
      res.send(err);
    res.json(task);
  });
};

exports.close_game = function(req, res) {
  console.log("close a game");
  Game.findOneAndUpdate({_id: req.params.taskId},{$set:req.body}, function(err, task) {
    if (err)
      res.send(err);
    res.json(task);
  });
};
exports.add_player = function(req, res) {
  Game.findById({_id: req.params.taskId}, function(err,result){
    if(result.players.length <5){
      resul.players.forEach(function(element) {
        console.log(element.playerName);
      }, this);
      Game.findByIdAndUpdate({_id: req.params.taskId},{$push:{players:req.body}},function(err,task){
        if (err)
        res.send(err);
      });
    }
    else{
      res.json({status:"full"});
    }
    if (err)
      res.send(err);
    res.json(result);
  });  
};