const { ApolloError } = require("apollo-server");

const { Peculiarity } = require("../../models");

const peculiarity = async (_, { peculiarityId }) => {
  try {
    const peculiarity = await Peculiarity.findById(peculiarityId);

    return peculiarity;
  } catch (error) {
    console.log(`[ERROR]: Failed to get peculiarity | ${error.message}`);
    throw new ApolloError("Failed to get peculiarity.");
  }
};

module.exports = peculiarity;
