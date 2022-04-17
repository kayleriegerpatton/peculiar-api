const { ApolloError } = require("apollo-server");

const { Character } = require("../models");

const getCharacters = async () => {
  try {
    const characters = await Character.find({})
      .populate("peculiarity")
      .populate("homeLoop")
      .populate("books");

    return characters;
  } catch (error) {
    console.log(`[ERROR]: Failed to get characters | ${error.message}`);
    throw new ApolloError("Failed to get characters.");
  }
};

module.exports = getCharacters;
