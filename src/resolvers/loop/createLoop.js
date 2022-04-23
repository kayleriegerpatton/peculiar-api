const { ApolloError, AuthenticationError } = require("apollo-server");

const { Loop } = require("../../models");

// TODO: restrict to admin user type
const createLoop = async (_, { input }) => {
  try {
    // if (user) {
    const newLoop = await Loop.create({ ...input });

    const loop = await Loop.findById(newLoop._id).populate("ymbryne");

    return loop;
    // } else {
    //   throw new AuthenticationError("Only the admin can create a new loop.");
    // }
  } catch (error) {
    console.log(`[ERROR]: Failed to create loop | ${error.message}`);
    throw new ApolloError("Failed to create loop.");
  }
};

module.exports = createLoop;
