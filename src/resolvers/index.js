// import resolver functions
// CHARACTER RESOLVERS
const characters = require("./character/characters");
const charactersByBook = require("./character/charactersByBook");
const charactersByPeculiarity = require("./character/charactersByPeculiarity");
const character = require("./character/character");
const charactersByLoop = require("./character/charactersByLoop");
const createCharacter = require("./character/createCharacter");
const updateCharacter = require("./character/updateCharacter");

// PECULIARITY RESOLVERS
const peculiarities = require("./peculiarity/peculiarities");
const peculiarity = require("./peculiarity/peculiarity");
const createPeculiarity = require("./peculiarity/createPeculiarity");
const updatePeculiarity = require("./peculiarity/updatePeculiarity");

// LOOP RESOLVERS
const loops = require("./loop/loops");
const loop = require("./loop/loop");
const createLoop = require("./loop/createLoop");
const updateLoop = require("./loop/updateLoop");

// BOOK RESOLVERS
const books = require("./book/books");

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
    books,
  },
  Mutation: {
    createCharacter,
    updateCharacter,
    createPeculiarity,
    updatePeculiarity,
    createLoop,
    updateLoop,
  },
};

module.exports = resolvers;
