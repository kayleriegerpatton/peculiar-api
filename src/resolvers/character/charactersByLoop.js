const { ApolloError } = require("apollo-server");

const { Character } = require("../../models");

const charactersByLoop = async (_, { loopId }) => {
  try {
    const characters = await Character.find({ homeLoop: loopId });

    return characters;
  } catch (error) {
    console.log(
      `[ERROR]: Failed to get characters by loop id | ${error.message}`
    );
    throw new ApolloError("Failed to get characters by loop id.");
  }
};

module.exports = charactersByLoop;
