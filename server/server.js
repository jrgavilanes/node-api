var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todo');
var {User} = require('./models/user');

const PORT = process.env.PORT || 3000;

const express = require('express');
var app = new express();


app.get('/', (req, res) => {

  var todo = new Todo({
    text: 'Desde Heroku'
  });

  todo.save().then((doc) => {
    res.send(doc);
  }, (e) => {
    res.send("error: " + e);
  });

});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
