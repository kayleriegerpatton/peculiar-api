const { ApolloError } = require("apollo-server");

const { Character } = require("../models");

const charactersByPeculiarity = async (_, { peculiarityId }) => {
  try {
    const characters = await Character.find({ peculiarity: peculiarityId });

    return characters;
  } catch (error) {
    console.log(
      `[ERROR]: Failed to get characters by peculiarity id | ${error.message}`
    );
    throw new ApolloError("Failed to get characters by peculiarity id.");
  }
};

module.exports = charactersByPeculiarity;
