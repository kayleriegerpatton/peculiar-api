const { Schema } = require("mongoose");

// Subdocument schema used as schema for Character model's books array
const bookSchema = {
  title: {
    type: String,
    required: true,
  },

  author: {
    type: String,
    required: true,
  },

  releaseYear: {
    type: Number,
    required: true,
  },

  bookNumber: {
    type: Number,
  },
};

const schema = new Schema(bookSchema, {
  id: true,
});

module.exports = schema;
