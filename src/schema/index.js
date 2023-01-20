const { gql } = require("apollo-server");

const typeDefs = gql`
  ## RECORD TYPES ## -----------------------------

  type Loop {
    id: ID!
    city: String
    state: String
    country: String
    day: String
    month: String
    year: String
    description: String!
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
    id: ID!
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
    label: String
  }

  type User {
    id: ID!
    firstName: String!
    lastName: String!
    username: String!
    email: String!
    profileImage: String
    savedCharacters: [Character]
    createdCharacters: [Character]
  }

  type CreateUserSuccess {
    success: Boolean!
    user: User
  }

  type UserAuth {
    token: ID!
    user: User
  }

  ## INPUT TYPES ## -----------------------------

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

  input CreateUserInput {
    firstName: String!
    lastName: String!
    username: String!
    email: String!
    password: String!
    profileImage: String
  }

  input LoginInput {
    email: String!
    password: String!
  }

  input UpdateUserInput {
    firstName: String!
    lastName: String!
    username: String!
    email: String!
    profileImage: String!
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

  ## QUERIES ## -----------------------------
  type Query {
    characters: [Character]
    character(characterId: ID!): Character
    charactersByBook(bookId: ID!): [Character]
    charactersByPeculiarity(peculiarityId: ID!): [Character]
    charactersByLoop(loopId: ID!): [Character]
    ymbrynes: [Character]

    peculiarities: [Peculiarity]
    peculiarity(peculiarityId: ID!): Peculiarity

    loops: [Loop]
    loop(loopId: ID!): Loop

    books: [Book]
  }

  ## MUTATIONS ##
  type Mutation {
    signupUser(input: CreateUserInput!): CreateUserSuccess!
    loginUser(input: LoginInput!): UserAuth!
    updateUser(input: UpdateUserInput!): User!

    createPeculiarity(input: PeculiarityInput!): Peculiarity!
    updatePeculiarity(input: PeculiarityUpdateInput!): Peculiarity!

    createLoop(input: LoopInput!): Loop!
    updateLoop(input: LoopUpdateInput!): Loop!

    createCharacter(input: CharacterInput!): Character!
    updateCharacter(input: CharacterUpdateInput!): Character!
  }
`;

module.exports = typeDefs;
