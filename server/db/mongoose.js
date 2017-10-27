var mongoose = require('mongoose');

mongoose.Promise = global.Promise;

const URL_DB = process.env.DB_URL || "mongodb://127.0.0.1:27017/prueba";

// mongoose.connect('mongodb://root:root@ds231315.mlab.com:31315/prueba', { useMongoClient: true });
mongoose.connect(URL_DB, { useMongoClient: true });

module.exports = {mongoose};
