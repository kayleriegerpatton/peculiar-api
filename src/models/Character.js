const { Schema, model } = require("mongoose");

// TODO: Future additions?: quotes, movie
const characterSchema = {
  name: {
    type: String,
    required: true,
    unique: true,
  },

  // TODO: how to handle a change in species type? ie 'Peculiar(formerly)'
  species: [
    {
      type: String,
      required: true,
      enum: ["Peculiar", "Wight", "Hollowgast"],
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

  books: [
    {
      type: Schema.Types.ObjectId,
      ref: "Book",
    },
  ],
};

const schema = new Schema(characterSchema, {
  id: true,
});

const Character = model("Character", schema);

module.exports = Character;
