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
    // image in aws s3 bucket
    default:
      "https://peculiar-project-images.s3.amazonaws.com/default-character.png",
  },

  // TODO: update to array to handle when a character has lived in more than one loop?
  homeLoop: {
    //   reference Loop model
    type: Schema.Types.ObjectId,
    ref: "Loop",
  },

  books: [
    //  reference Book model
    {
      type: Schema.Types.ObjectId,
      ref: "Book",
    },
  ],

  status: {
    type: String,
    required: true,
    enum: ["Alive", "Dead", "Unknown"],
  },
};

const schema = new Schema(characterSchema, {
  id: true,
  toJSON: { getters: true, virtuals: true },
  toObject: { virtuals: true },
});

// virtual for use by MUI autocomplete ymbrynes list
schema.virtual("label").get(function () {
  return this?.name;
});

const Character = model("Character", schema);

module.exports = Character;
