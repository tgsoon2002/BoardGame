var express = require('express'),
app = express(),
port = process.env.PORT || 3000,

mongoose = require('mongoose'),

Task = require('./api/models/todoListModel'), //created model loading here
Game = require('./api/models/gameListModel'),
bodyParser = require('body-parser');

// mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://tgsoon2002:admin@cluster0-shard-00-00-soco1.mongodb.net:27017,cluster0-shard-00-01-soco1.mongodb.net:27017,cluster0-shard-00-02-soco1.mongodb.net:27017/Cluster0?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin',{
  useMongoClient:true
}); 
// mongoose.connect('mongodb://localhost/TodoListDb',{
//   useMongoClient:true
// });

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


var routes = require('./api/routes/todoListRoutes'); //importing route
var routes = require('./api/routes/gameListRoutes'); //importing route
routes(app); //register the route

app.use(function(req, res) {
    res.status(404).send({url: req.originalUrl + ' not found'})
  });

app.listen(port);


console.log('todo list RESTful API server started on: ' + port);
