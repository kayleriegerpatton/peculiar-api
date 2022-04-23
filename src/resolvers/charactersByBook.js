const { ApolloError } = require("apollo-server");

const { Character } = require("../models");

const charactersByBook = async (_, { bookId }) => {
  try {
    const characters = await Character.find({});
  } catch (error) {
    console.log(
      `[ERROR]: Failed to get characters by book id | ${error.message}`
    );
    throw new ApolloError("Failed to get characters by book id.");
  }
};

module.exports = charactersByBook;
