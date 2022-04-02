const { Schema, model } = require("mongoose");

const book = require("./Book");

const characterSchema = {
  name: {
    type: String,
    required: true,
    unique: true,
  },

  species: [
    {
      type: String,
      required: true,
      enum: ["Peculiar/Syndrigast", "Wight", "Hollowgast"],
    },
  ],

  peculiarity: {
    //   reference Peculiarity model
    type: Schema.Types.ObjectId,
    ref: "Peculiarity",
  },

  imageUrl: {
    type: String,
    default:
      "https://www.ransomriggs.com/wp-content/uploads/2018/02/book_cover_img1.jpg",
  },

  homeLoop: {
    //   reference Loop model
    type: Schema.Types.ObjectId,
    ref: "Loop",
  },

  //   array of book schemas
  books: [book],
};

const schema = new Schema(characterSchema, {
  id: true,
});

const Character = model("Character", schema);

module.exports = Character;
