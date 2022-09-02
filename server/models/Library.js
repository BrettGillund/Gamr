const { Schema, model } = require('mongoose');

const librarySchema = new Schema({
  game: {
    type: String,
    required: true
  } 
  // User: {
  //   type: Schema.Types.ObjectId,
  //   ref: 'User'
  // }
});

const Library = model('Library', librarySchema);

module.exports = Library;