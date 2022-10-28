const { ApolloError } = require("apollo-server");

const { Character } = require("../../models");

const getYmbrynes = async () => {
  try {
    // get all characters, including peculiarity paths
    const characters = await Character.find({})
      .sort({ name: "asc" }).populate("peculiarity");
      
    // filter out only the characters who are ymbrynes
    const ymbrynes = characters.filter((character) => {
      return character.peculiarity.name == "Ymbryne"
    })

    return ymbrynes;
  } catch (error) {
    console.log(`[ERROR]: Failed to get ymbrynes | ${error.message}`);
    throw new ApolloError("Failed to get ymbrynes.");
  }
};

module.exports = getYmbrynes;
