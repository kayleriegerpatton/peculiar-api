// import resolver functions

// USER resolvers
const signupUser = require('./user/signupUser')
const loginUser = require('./user/loginUser')
const updateUser = require('./user/updateUser')

// CHARACTER RESOLVERS
const characters = require("./character/characters");
const charactersByBook = require("./character/charactersByBook");
const charactersByPeculiarity = require("./character/charactersByPeculiarity");
const character = require("./character/character");
const charactersByLoop = require("./character/charactersByLoop");
const createCharacter = require("./character/createCharacter");
const updateCharacter = require("./character/updateCharacter");
const ymbrynes = require("./character/ymbrynes")

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

// QUOTE RESOLVERS
const createQuote = require("./quote/createQuote")

const resolvers = {
  Query: {
    characters,
    character,
    charactersByBook,
    charactersByPeculiarity,
    charactersByLoop,
    ymbrynes,
    peculiarities,
    peculiarity,
    loops,
    loop,
    books,
  },
  Mutation: {
    signupUser,
    loginUser,
    updateUser,
    createCharacter,
    updateCharacter,
    createPeculiarity,
    updatePeculiarity,
    createLoop,
    updateLoop,
    createQuote,
  },
};

module.exports = resolvers;
