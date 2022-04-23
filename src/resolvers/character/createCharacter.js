const { ApolloError, AuthenticationError } = require("apollo-server");

const { Character } = require("../../models");

// TODO: restrict to authenticated users

// TODO: How to create new character and peculiarity or loop simultaneously? 2 DB mutations from FE? Or 2 mutations in 1 resolver? How does that impact schema?
const createCharacter = async (_, { input }) => {
  try {
    // if (user) {
    const newCharacter = await Character.create({ ...input });

    const character = await Character.findById(newCharacter._id)
      .populate("books")
      .populate("peculiarity");

    return character;
    // } else {
    //   throw new AuthenticationError("Only the admin can create a new loop.");
    // }
  } catch (error) {
    console.log(`[ERROR]: Failed to create character | ${error.message}`);
    throw new ApolloError("Failed to create character.");
  }
};

module.exports = createCharacter;
