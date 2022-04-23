const { ApolloError } = require("apollo-server");

const { Character } = require("../models");

// TODO: Figure out how to populate ymbryne Character reference
const getCharacters = async () => {
  try {
    const characters = await Character.find({})
      .populate("peculiarity")
      .populate("books")
      .populate("homeLoop");
    return characters;
  } catch (error) {
    console.log(`[ERROR]: Failed to get characters | ${error.message}`);
    throw new ApolloError("Failed to get characters.");
  }
};

module.exports = getCharacters;
