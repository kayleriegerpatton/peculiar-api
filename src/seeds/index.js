require("dotenv").config();
const mongoose = require("mongoose");

const { Character, Loop, Peculiarity, Book } = require("../models");

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

    console.log("[INFO]: Database connection successful.");

    await Character.deleteMany({});
    await Loop.deleteMany({});
    // await Peculiarity.deleteMany({});
    await Book.deleteMany({});

    await Book.insertMany(books);
    console.log("[INFO]: Books seeded successfully.");

    // currently seeding without ymbryne Character reference
    await Loop.insertMany(loops);
    console.log("[INFO]: Loops seeded successfully.");

    await Character.insertMany(characters);
    console.log("[INFO]: Characters seeded successfully.");
  } catch (error) {
    console.log(`[ERROR]: Database connection failed | ${error.message}`);
  }

  process.exit(0);
};

seed();
