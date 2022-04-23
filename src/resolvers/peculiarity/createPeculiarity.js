const { ApolloError } = require("apollo-server");

const { Peculiarity } = require("../../models");

const createPeculiarity = async (_, { input }) => {
  try {
    if (input) {
      const newPeculiarity = await Peculiarity.create({ ...input });

      const peculiarity = await Peculiarity.findById(newPeculiarity._id);

      return peculiarity;
    } else {
      throw new ApolloError("Peculiarity info not provided.");
    }
  } catch (error) {
    console.log(`[ERROR]: Failed to create peculiarity | ${error.message}`);
    throw new ApolloError("Failed to create peculiarity.");
  }
};

module.exports = createPeculiarity;
