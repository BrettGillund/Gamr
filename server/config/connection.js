const mongoose = require('mongoose');

// this line needs to be changed when pushing to heroku.
mongoose.connect('mongodb://localhost:27017/test');


module.exports = mongoose.connection;

