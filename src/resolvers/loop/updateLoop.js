const { ApolloError } = require("apollo-server");

const { Loop } = require("../../models");

const updateLoop = async (_, { input }) => {
  try {
    const loopInfo = input.loopInfo;

    const updatedLoop = await Loop.findByIdAndUpdate(
      input.loopId,
      { ...loopInfo },
      { new: true }
    ).populate("ymbryne", "name");

    return updatedLoop;
  } catch (error) {
    console.log(`[ERROR]: Failed to update loop | ${error.message}`);
    throw new ApolloError("Failed to update loop.");
  }
};

module.exports = updateLoop;
