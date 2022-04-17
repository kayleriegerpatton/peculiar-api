require("dotenv").config();
const mongoose = require("mongoose");

const { Character, Loop, Book, Peculiarity } = require("../models");

// import data files
const books = require("./data/books.json");
const loops = require("./data/loops.json");
const characters = require("./data/characters.json");
const peculiarities = require("./data/peculiarities.json");

const seed = async () => {
  try {
    await mongoose.connect(
      process.env.MONGODB_URI ||
        `mongodb://localhost:27017/${process.env.DB_NAME}`,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );

    console.log("[INFO]: Database connected successfully.");

    await Character.deleteMany({});
    await Loop.deleteMany({});
    await Book.deleteMany({});
    await Peculiarity.deleteMany({});

    await Book.insertMany(books);
    console.log("[INFO]: Books seeded successfully.");

    await Peculiarity.insertMany(peculiarities);
    console.log("[INFO]: Peculiarities seeded successfully.");

    //* currently seeding LOOPS without ymbryne Character reference; TODO: after seeding characters, get ymbryne character, update loop record with the character id
    await Loop.insertMany(loops);
    console.log("[INFO]: Loops seeded successfully.");

    // get loop, books, peculiarities
    const seededLoop = await Loop.find({});
    const seededBooks = await Book.find({});
    const seededPeculiarities = await Peculiarity.find({});

    const peculiarityByCharacter = {
      EmmaBloom: seededPeculiarities[0]._id,
      JacobPortman: seededPeculiarities[1]._id,
      EnochOConnor: seededPeculiarities[2]._id,
    };

    // lookup to match peculiarity based on character name
    const getCharacterPeculiarity = (character) =>
      peculiarityByCharacter[character.replace(/[^a-z]/gi, "")];

    // iterate through characters, add loop id to homeLoop path, books reference, and peculiarities reference
    const charactersToSeed = characters.map((character) => {
      // if Fiona, don't add book #6
      if (character.name === "Fiona Frauenfeld") {
        return {
          ...character,
          peculiarity: seededPeculiarities[9]._id,
          homeLoop: seededLoop[0]._id,
          books: seededBooks.splice(5, 1),
        };
      }

      // if victor, only add book #1
      if (character.name === "Victor Bruntley") {
        return {
          ...character,
          peculiarity: seededPeculiarities[6]._id,
          homeLoop: seededLoop[0]._id,
          books: seededBooks[0]._id,
        };
      }

      // else add all 7 books
      return {
        ...character,
        peculiarity: getCharacterPeculiarity(character.name),
        homeLoop: seededLoop[0]._id,
        books: seededBooks.map((book) => {
          return book._id;
        }),
      };
    });

    const characterPromises = charactersToSeed.map((character) => {
      return Character.create(character);
    });

    await Promise.all(characterPromises);
    console.log("[INFO]: Characters seeded successfully.");
  } catch (error) {
    console.log(`[ERROR]: Database connection failed | ${error.message}`);
  }

  process.exit(0);
};

seed();
