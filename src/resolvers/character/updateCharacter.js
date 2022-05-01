const { ApolloError } = require("apollo-server");

const { Character } = require("../../models");

const updateCharacter = async (_, { input }) => {
  try {
    const characterInfo = input.characterInfo;

    const updatedCharacter = await Character.findByIdAndUpdate(
      input.characterId,
      { ...characterInfo },
      { new: true }
    )
      .populate("peculiarity")
      .populate("books")
      .populate({ path: "homeLoop", populate: "ymbryne" });

    return updatedCharacter;
  } catch (error) {
    console.log(`[ERROR]: Failed to update character | ${error.message}`);
    throw new ApolloError("Failed to update character.");
  }
};

module.exports = updateCharacter;
