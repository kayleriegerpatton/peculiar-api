require("dotenv").config();
const mongoose = require("mongoose");

const { Character, Loop, Book, Peculiarity } = require("../models");

// import seed files
const books = require("./data/books.json");
const loops = require("./data/loops.json");
const characters = require("./data/characters.json");
const peculiarities = require("./data/peculiarities.json");

const seed = async () => {
  try {
    // connect to database instance
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

    await Loop.insertMany(loops);
    console.log("[INFO]: Loops seeded successfully.");

    // get loop, books, peculiarities
    const seededLoop = await Loop.find({});
    const seededBooks = await Book.find({});
    const seededPeculiarities = await Peculiarity.find({});

    // lookup table = { character name: peculiarity id }
    const peculiarityByCharacter = {
      EmmaBloom: seededPeculiarities[0]._id,
      JacobPortman: seededPeculiarities[1]._id,
      EnochOConnor: seededPeculiarities[2]._id,
      AlmaLeFayPeregrine: seededPeculiarities[3]._id,
      HughApiston: seededPeculiarities[4]._id,
      HoraceSomnusson: seededPeculiarities[5]._id,
      BronwynBruntley: seededPeculiarities[6]._id,
      OliveAbroholosElephanta: seededPeculiarities[7]._id,
      ClaireDensmore: seededPeculiarities[8]._id,
      MillardNullings: seededPeculiarities[10]._id,
    };

    const getCharacterPeculiarity = (character) =>
      // remove non-alpha characters from names in order to match the lookup keys^
      peculiarityByCharacter[character.replace(/[^a-z]/gi, "")];

    // iterate through characters, add loop id, books, and peculiarity refs
    const charactersToSeed = characters.map((character) => {
      // if Fiona, don't add book #6
      if (character.name === "Fiona Frauenfeld") {
        return {
          ...character,
          peculiarity: seededPeculiarities[9]._id,
          homeLoop: seededLoop[0]._id,
          books: seededBooks.filter((el, i) => i != 5),
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

      // else add books 1-7
      // TODO: update based on which characters are in books 7 and 8
      return {
        ...character,
        // use lookup table to match peculiarity id to character name
        peculiarity: getCharacterPeculiarity(character.name),
        homeLoop: seededLoop[0]._id,
        books: seededBooks.filter((el, i) => i != 7),
      };
    });

    const characterPromises = charactersToSeed.map((character) => {
      return Character.create(character);
    });

    await Promise.all(characterPromises);
    console.log("[INFO]: Characters seeded successfully.");

    // get ymbryne character id
    const ymbryne = await Character.aggregate([
      {
        // join peculiarity data to character data
        $lookup: {
          from: "peculiarities",
          localField: "peculiarity",
          foreignField: "_id",
          as: "peculiarity_name",
        },
      },
      { $unwind: { path: "$peculiarity_name" } },
      { $match: { "peculiarity_name.name": "Ymbryne" } },
    ]);

    // add ymbryne id ref to loop record
    await Loop.findOneAndUpdate(
      { city: "Cairnholm" },
      { $set: { ymbryne: ymbryne[0]._id } }
    );
  } catch (error) {
    console.log(`[ERROR]: Database connection failed | ${error.message}`);
  }

  process.exit(0);
};

seed();
