var express = require('express');
var bodyParser = require('body-parser');
var {ObjectID} = require('mongodb');


var { mongoose } = require('./db/mongoose');
var { Todo } = require('./models/todo');
var { User } = require('./models/user');

var app = new express();
app.use(bodyParser.json());

const PORT = process.env.PORT || 3000;

app.post('/todos', (req, res) => {
  var { text } = req.body;
  var todo = new Todo({
    text
  });
  todo.save().then((doc) => {
    res.send(doc);
  }, (e) => {
    res.status(400).send(e);
  });
});

app.get('/todos', (req, res) => {
  Todo.find().then((todos) => {
    res.send({ todos });
  }, (e) => {
    res.status(400).send(e);
  })
})

app.get('/todos/:id', (req, res) => {
  var _id = req.params.id;
  
  if (!ObjectID.isValid(_id)) {
    return res.status(404).send();
  }
  
  Todo.findById(_id).then((todo) => {
    if (!todo) {
      res.status(404).send();
    }
    else {
      res.send({ todo });
    }
  }, (e) => {
    res.status(400).send(e);
  })

});

app.get('*', (req, res) => {
  res.status(404).send('Page not found');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

module.exports = { app };
