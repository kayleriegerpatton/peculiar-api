// import resolver functions
// CHARACTER RESOLVERS
const characters = require("./character/characters");
const charactersByBook = require("./character/charactersByBook");
const charactersByPeculiarity = require("./character/charactersByPeculiarity");
const character = require("./character/character");
const charactersByLoop = require("./character/charactersByLoop");
const createCharacter = require("./character/createCharacter");

// PECULIARITY RESOLVERS
const peculiarities = require("./peculiarity/peculiarities");
const peculiarity = require("./peculiarity/peculiarity");
const createPeculiarity = require("./peculiarity/createPeculiarity");

// LOOP RESOLVERS
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
    createCharacter,
    createPeculiarity,
    createLoop,
  },
};

module.exports = resolvers;
