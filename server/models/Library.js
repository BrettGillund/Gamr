const { Schema, model } = require('mongoose');

const librarySchema = new Schema({
  game: {
    type: String,
    required: true
  }
});

const Library = model('Library', librarySchema);

module.exports = Library;