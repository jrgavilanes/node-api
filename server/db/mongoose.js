var mongoose = require('mongoose');

mongoose.Promise = global.Promise;

var URL_DB = process.env.DB_URL || "mongodb://127.0.0.1:27017/dev";

if (process.argv[2] && process.argv[2].endsWith(".test.js")) {
    URL_DB = "mongodb://127.0.0.1:27017/test";
}

console.log(`Connected to database -> ${URL_DB}`);

// mongoose.connect('mongodb://root:root@ds231315.mlab.com:31315/prueba', { useMongoClient: true });
mongoose.connect(URL_DB, { useMongoClient: true });

module.exports = { mongoose };
