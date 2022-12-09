const { ApolloError } = require("apollo-server");

const { Peculiarity } = require("../../models");

const getPeculiarities = async () => {
  try {
    const peculiarities = await Peculiarity.find({})
    .sort({ name: "asc" })

    return peculiarities;
  } catch (error) {
    console.log(`[ERROR]: Failed to get peculiarities | ${error.message}`);
    throw new ApolloError("Failed to get peculiarities.");
  }
};

module.exports = getPeculiarities;
