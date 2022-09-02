const { Schema, model } = require("mongoose");

// TODO: Future additions?: ISBN, pages, summary
const bookSchema = {
  title: {
    type: String,
    enum: [
      "Miss Peregrine's Home for Peculiar Children",
      "Hollow City",
      "Library of Souls",
      "Tales of the Peculiar",
      "A Map of Days",
      "The Conference of the Birds",
      "The Desolation of Devil's Acre",
      "Miss Peregrine's Museum of Wonders: An Indispensable Guide to the Dangers and Delights of the Peculiar World for the Instruction of New Arrivals"
    ]
  },

  author: {
    type: String,
    default: "Ransom Riggs"
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
