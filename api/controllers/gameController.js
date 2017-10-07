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
  var  info= {
    name: req.body.name,
  BoardgameName: req.body.BoardgameName,
  status: req.body.status,
  players: [ { 
    playerName: req.body.playerName, 
    rank: 20 ,
    mcRes : 32 ,
    mcPro : 0,
    stRes : 0,
    stPro : 1,
    tiRes : 0,
    tiPro : 1,
    plRes : 0,
    plPro : 1,
    enRes : 0,
    enPro : 1,
    htRes : 0,
    htPro : 1  
  } ]
}
var newGame  = new Game(info);
  console.log(req.body);
  newGame.save(function(err, gameInfo) {
    
    if (err)
      res.send(err);
    res.json({"status":"Welcome Back",gameInfo});
    
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
  var flag = false;
  console.log(req.body.playerName);
  Game.findById({_id: req.params.taskId}, function(err,gameInfo){
    if (err)
      res.send(err);
    gameInfo.players.forEach(function(element) {
        if(element.playerName == req.body.playerName){
            flag = true;
          }
        },this);
        
      if(gameInfo.players.length <5 && !flag){
      // set tag to see if player exist
        var newPlayer = 
        { 
          playerName: req.body.playerName, 
          rank: 20 ,
          mcRes : 32 ,
          mcPro : 0,
          stRes : 0,
          stPro : 1,
          tiRes : 0,
          tiPro : 1,
          plRes : 0,
          plPro : 1,
          enRes : 0,
          enPro : 1,
          htRes : 0,
          htPro : 1  
        }
        Game.findByIdAndUpdate({_id: req.params.taskId},{$push:{players:newPlayer}},function(err,task){
          if (err)
            res.send(err);
        });
        res.json({"status":"NewGame"});  
    }
    else if (!flag){
      res.json({"status":"full"});
    }
    else{
      res.json({"status":"Welcome Back",gameInfo});
    }
    
  });  
};