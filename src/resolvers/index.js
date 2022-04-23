// import resolver functions
const characters = require("./character/characters");
const charactersByBook = require("./character/charactersByBook");
const charactersByPeculiarity = require("./character/charactersByPeculiarity");
const character = require("./character/character");
const charactersByLoop = require("./character/charactersByLoop");

const peculiarities = require("./peculiarity/peculiarities");
const peculiarity = require("./peculiarity/peculiarity");

const loops = require("./loop/loops");
const loop = require("./loop/loop");

const resolvers = {
  Query: {
    characters,
    character,
    charactersByBook,
    charactersByPeculiarity,
    charactersByLoop,
    peculiarities,
    peculiarity,
    loops,
    loop,
  },
};

module.exports = resolvers;
