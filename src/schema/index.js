const { gql } = require("apollo-server");

const typeDefs = gql`
  # RECORD TYPES

  type Loop {
    id: ID!
    location: String!
    date: String
    description: String
    ymbryne: Character
  }

  type Book {
    id: ID!
    title: String!
    author: String!
    releaseYear: Int!
    bookNumber: Int
  }

  type Character {
    id: ID!
    name: String!
    species: [String]
    peculiarity: Peculiarity
    imageUrl: String
    homeLoop: Loop
    books: [Book]
  }

  type Peculiarity {
    name: String!
    abilities: [String]
    knownPeculiars: Character
  }

  # QUERIES
`;

module.exports = typeDefs;
