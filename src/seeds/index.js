require("dotenv").config();
const mongoose = require("mongoose");

const { Character, Loop, Book } = require("../models");

// import data files
const books = require("./data/books.json");
const loops = require("./data/loops.json");
const characters = require("./data/characters.json");

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

    await Book.insertMany(books);
    console.log("[INFO]: Books seeded successfully.");

    //* currently seeding without ymbryne Character reference; TODO: after seeding characters, get ymbryne character, update loop record with character id

    await Loop.insertMany(loops);
    console.log("[INFO]: Loops seeded successfully.");

    // get loop
    const seededLoop = await Loop.find({});

    // iterate through characters, add the loop id to homeLoop path
    const charactersToSeed = characters.map((character) => {
      return {
        ...character,
        homeLoop: seededLoop[0]._id,
      };
    });

    //* seeding without Books references
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
