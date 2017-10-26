const express = require('express');

const PORT = process.env.PORT || 3000;

let app = new express();



const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://root:root@ds231315.mlab.com:31315/prueba', { useMongoClient: true });

let Todo = mongoose.model('Todo', {
  titulo: {
    type: String,
    required: true,
    unique: false,
    minlength: 5,
    trim: true
  },
  completado: {
    type: Boolean,
    default: false
  },
  modificado: {
    type: Number,
    default: null
  }
});






app.get('/', (req, res) => {

  let newTodo = new Todo({
    titulo: 'Desde Heroku'
  });

  newTodo.save().then((doc) => {
    res.send(doc);
  }, (e) => {
    res.send("error: " + e);
  });

});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
