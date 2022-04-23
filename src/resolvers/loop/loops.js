const { ApolloError } = require("apollo-server");

const { Loop } = require("../../models");

const getLoops = async () => {
  try {
    const loops = await Loop.find({}).populate("ymbryne");
    return loops;
  } catch (error) {
    console.log(`[ERROR]: Failed to get loops | ${error.message}`);
    throw new ApolloError("Failed to get loops.");
  }
};

module.exports = getLoops;
