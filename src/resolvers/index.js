// import resolver functions
const characters = require("./character/characters");
const charactersByBook = require("./character/charactersByBook");
const charactersByPeculiarity = require("./character/charactersByPeculiarity");
const character = require("./character/character");
const charactersByLoop = require("./character/charactersByLoop");
const peculiarities = require("./peculiarity/peculiarities");

const resolvers = {
  Query: {
    characters,
    character,
    charactersByBook,
    charactersByPeculiarity,
    charactersByLoop,
    peculiarities,
  },
};

module.exports = resolvers;
