const { gql } = require("apollo-server");

const typeDefs = gql`
  # RECORD TYPES

  type Loop {
    id: ID!
    city: String
    state: String
    country: String!
    day: String
    month: String
    year: String
    description: String
    ymbryne: Character
    active: Boolean!
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
  input PeculiarityInput {
    name: String!
    abilities: [String]
  }

  input LoopInput {
    city: String
    state: String
    country: String
    day: String
    month: String
    year: String
    description: String!
    ymbryne: ID
    active: Boolean!
  }

  # QUERIES
  type Query {
    characters: [Character]
    character(characterId: ID!): Character
    charactersByBook(bookId: ID!): [Character]
    charactersByPeculiarity(peculiarityId: ID!): [Character]
    charactersByLoop(loopId: ID!): [Character]

    peculiarities: [Peculiarity]
    peculiarity(peculiarityId: ID!): Peculiarity

    loops: [Loop]
    loop(loopId: ID!): Loop
  }

  # MUTATIONS
  type Mutation {
    createPeculiarity(input: PeculiarityInput!): Peculiarity!
    createLoop(input: LoopInput!): Loop!
  }
`;

module.exports = typeDefs;
