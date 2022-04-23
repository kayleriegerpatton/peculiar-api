const { gql } = require("apollo-server");

const typeDefs = gql`
  # RECORD TYPES

  type Loop {
    id: ID!
    city: String
    country: String!
    day: Int
    month: String
    year: String
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

  type Peculiarity {
    name: String!
    abilities: [String]
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

  # INPUT TYPES

  # QUERIES
  type Query {
    characters: [Character]
    character(characterId: ID!): Character
    charactersByBook(bookId: ID!): [Character]
    charactersByPeculiarity(peculiarityId: ID!): [Character]
    charactersByLoop(loopId: ID!): [Character]

    peculiarities: [Peculiarity]
  }
`;

module.exports = typeDefs;
