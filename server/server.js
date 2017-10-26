const express = require('express');

const PORT = process.env.PORT || 3000;

let app = new express();

console.log("pues: ", process.env.DB);

console.log("ea: ", process.env);

const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

const URL_DB = process.env.URL_DB || "mongodb://127.0.0.1:27017/prueba";

// mongoose.connect('mongodb://root:root@ds231315.mlab.com:31315/prueba', { useMongoClient: true });
mongoose.connect(URL_DB, { useMongoClient: true });

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
