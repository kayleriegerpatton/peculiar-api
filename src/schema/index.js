const { gql } = require("apollo-server");

const typeDefs = gql`
  ## RECORD TYPES ##

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
    status: String!
    label: String
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
    status: String!
  }

  ## INPUT TYPES ##

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
    status: String!
  }

  input CharacterInput {
    name: String!
    species: [String]
    peculiarity: ID
    imageUrl: String
    homeLoop: ID
    books: [ID]
    status: String!
  }

  input PeculiarityUpdateInput {
    id: ID!
    name: String
    abilities: [String]
  }

  input LoopUpdateInput {
    loopId: ID!
    loopInfo: LoopInput!
  }

  input CharacterUpdateInput {
    characterId: ID!
    characterInfo: CharacterInput!
  }

  ## QUERIES ##
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

    books: [Book]
  }

  ## MUTATIONS ##
  type Mutation {
    createPeculiarity(input: PeculiarityInput!): Peculiarity!
    updatePeculiarity(input: PeculiarityUpdateInput!): Peculiarity!

    createLoop(input: LoopInput!): Loop!
    updateLoop(input: LoopUpdateInput!): Loop!

    createCharacter(input: CharacterInput!): Character!
    updateCharacter(input: CharacterUpdateInput!): Character!
  }
`;

module.exports = typeDefs;
