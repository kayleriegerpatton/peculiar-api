const { Schema, model } = require("mongoose");

const peculiaritySchema = {
  name: {
    type: String,
    required: true,
    unique: true,
  },

  abilities: [
    {
      type: String,
    },
  ],

  knownPeculiars: {
    //   reference Character model
    type: Schema.Types.ObjectId,
    ref: "Character",
  },
};

const schema = new Schema(peculiaritySchema, {
  id: true,
});

const Peculiarity = model("Peculiarity", schema);

module.exports = Peculiarity;
