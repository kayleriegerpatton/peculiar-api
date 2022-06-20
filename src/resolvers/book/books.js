const { ApolloError } = require("apollo-server");

const { Book } = require("../../models");

const getBooks = async () => {
  try {
    const books = await Book.find({});
    return books;
  } catch (error) {
    console.log(`[ERROR]: Failed to get books | ${error.message}`);
    throw new ApolloError("Failed to get books.");
  }
};

module.exports = getBooks;
