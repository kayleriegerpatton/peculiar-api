const { ApolloError } = require("apollo-server");

const { Loop } = require("../../models");

const loop = async (_, { loopId }) => {
  try {
    const loop = await Loop.findById(loopId).populate("ymbryne");

    return loop;
  } catch (error) {
    console.log(`[ERROR]: Failed to get loop | ${error.message}`);
    throw new ApolloError("Failed to get loop.");
  }
};

module.exports = loop;
