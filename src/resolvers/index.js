// import resolver functions
const characters = require("./characters.js");
const charactersByBook = require("./charactersByBook");

const resolvers = {
  Query: {
    characters,
    charactersByBook,
  },
};

module.exports = resolvers;
