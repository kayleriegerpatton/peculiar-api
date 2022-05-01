const { ApolloError } = require("apollo-server");

const { Peculiarity } = require("../../models");

const updatePeculiarity = async (_, { input }) => {
  // will reset name if provided
  // pushes additional abilities without validation for repeats
  // TODO: handle deleting an ability within the Peculiarity record
  try {
    console.log(input);

    const updatedPeculiarity = await Peculiarity.findByIdAndUpdate(
      input.id,
      { $set: { name: input.name }, $push: { abilities: input.abilities } },
      { new: true }
    );
    console.log(updatedPeculiarity);
    return updatedPeculiarity;
  } catch (error) {
    console.log(`[ERROR]: Failed to update peculiarity | ${error.message}`);
    throw new ApolloError("Failed to update peculiarity.");
  }
};

module.exports = updatePeculiarity;
