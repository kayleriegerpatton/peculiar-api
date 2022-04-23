// import resolver functions
const characters = require("./characters.js");
const charactersByBook = require("./charactersByBook");
const charactersByPeculiarity = require("./charactersByPeculiarity");

const resolvers = {
  Query: {
    characters,
    charactersByBook,
    charactersByPeculiarity,
  },
};

module.exports = resolvers;
