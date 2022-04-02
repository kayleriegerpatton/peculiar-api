const { Schema, model } = require("mongoose");

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
    // default: ''
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
      required: true,
    },
  ],
};

const schema = new Schema(characterSchema, {
  id: true,
});

const Character = model("Character", schema);

module.exports = Character;
