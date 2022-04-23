const { ApolloError } = require("apollo-server");

const { Character } = require("../../models");

const character = async (_, { characterId }) => {
  try {
    const character = await Character.findById(characterId)
      .populate("peculiarity")
      .populate("books")
      .populate({ path: "homeLoop", populate: "ymbryne" });

    return character;
  } catch (error) {
    console.log(`[ERROR]: Failed to get character | ${error.message}`);
    throw new ApolloError("Failed to get character.");
  }
};

module.exports = character;
