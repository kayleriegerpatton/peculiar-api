// import resolver functions
const characters = require("./characters.js");
const charactersByBook = require("./charactersByBook");
const charactersByPeculiarity = require("./charactersByPeculiarity");
const character = require("./character");
const charactersByLoop = require("./charactersByLoop");

const resolvers = {
  Query: {
    characters,
    character,
    charactersByBook,
    charactersByPeculiarity,
    charactersByLoop,
  },
};

module.exports = resolvers;
