'use strict';
module.exports = function(app) {
  var gameController = require('../controllers/gameController');

  // todoList Routes
  app.route('/boardgame')
    .get(gameController.list_all_game)
    .post(gameController.create_a_game);

  app.route('/boardgame/open')
    .get(gameController.list_all_open_game);

  app.route('/boardgame/close/:taskId')
    .get(gameController.read_a_game)
    .post(gameController.close_game);

  app.route('/boardgame/player/:taskId')
    .post(gameController.add_player);

};