var express = require('express');
var bodyParser = require('body-parser');


var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todo');
var {User} = require('./models/user');

const PORT = process.env.PORT || 3000;

var app = new express();

app.use(bodyParser.json());


app.post('/todos', (req, res) => {

  //console.dir(req);

  res.send(req.body);
  
  // var todo = new Todo({
  //   text: 'Desde Heroku'
  // });

  // todo.save().then((doc) => {
  //   res.send(doc);
  // }, (e) => {
  //   res.send("error: " + e);
  // });

});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
