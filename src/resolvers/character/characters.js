const { ApolloError } = require("apollo-server");

const { Character } = require("../../models");

const getCharacters = async () => {
  try {
    const characters = await Character.find({})
      .sort({ name: "asc" })
      .populate("peculiarity")
      .populate("books")
      .populate({ path: "homeLoop", populate: "ymbryne" });
    return characters;
  } catch (error) {
    console.log(`[ERROR]: Failed to get characters | ${error.message}`);
    throw new ApolloError("Failed to get characters.");
  }
};

module.exports = getCharacters;
