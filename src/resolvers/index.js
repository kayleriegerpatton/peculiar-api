const characters = require("./characters.js");

const resolvers = {
  Query: {
    characters,
  },
};

module.exports = resolvers;
