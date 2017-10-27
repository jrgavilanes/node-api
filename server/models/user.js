var mongoose = require('mongoose');

var User = mongoose.model('User', {
  email: {
    type: String,
    required: true,
    unique: true,
    minlength: 6,
    trim: true
  }
}, 'users');

module.exports = {User};
