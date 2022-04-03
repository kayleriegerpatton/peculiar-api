const { Schema, model } = require("mongoose");

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

const Book = model("Book", schema);

module.exports = Book;
