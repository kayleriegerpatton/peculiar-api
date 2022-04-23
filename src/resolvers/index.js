// import resolver functions
const characters = require("./character/characters");
const charactersByBook = require("./character/charactersByBook");
const charactersByPeculiarity = require("./character/charactersByPeculiarity");
const character = require("./character/character");
const charactersByLoop = require("./character/charactersByLoop");

const peculiarities = require("./peculiarity/peculiarities");
const peculiarity = require("./peculiarity/peculiarity");
const createPeculiarity = require("./peculiarity/createPeculiarity");

const loops = require("./loop/loops");
const loop = require("./loop/loop");
const createLoop = require("./loop/createLoop");

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
  Mutation: {
    createPeculiarity,
    createLoop,
  },
};

module.exports = resolvers;
