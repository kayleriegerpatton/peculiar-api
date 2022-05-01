const { ApolloError } = require("apollo-server");

const { Loop } = require("../../models");

const updateLoop = async (_, { input }) => {
  try {
    console.log(input);

    const updatedLoop = await Loop.findByIdAndUpdate(
      input.id,
      { $set: { name: input.name }, $push: { abilities: input.abilities } },
      { new: true }
    );
    console.log(updatedLoop);
    return updatedLoop;
  } catch (error) {
    console.log(`[ERROR]: Failed to update loop | ${error.message}`);
    throw new ApolloError("Failed to update loop.");
  }
};

module.exports = updateLoop;
