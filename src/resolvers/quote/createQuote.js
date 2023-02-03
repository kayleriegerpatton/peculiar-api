const { ApolloError } = require("apollo-server");
const Character = require("../../models/Character");
const Quote = require("../../models/Quote")

const createQuote = async (_, { input }) => {
  try {
    // if (user) {
    const newQuote = await Quote.create({ ...input });

    // find character by id, push new quote to quotes array
    await Character.findByIdAndUpdate(
      newQuote.character,
      { $push: { quotes: newQuote._id } },
      { new: true }
    )
    const quote = await Quote.findById(newQuote._id).populate("book").populate("character")

    return quote;
    // } else {
    //   throw new AuthenticationError("You must be logged in to create a new quote.");
    // }
  } catch (error) {
    console.log(`[ERROR]: Failed to create quote | ${error.message}`);
    throw new ApolloError("Failed to create quote.");
  }
};

module.exports = createQuote;


