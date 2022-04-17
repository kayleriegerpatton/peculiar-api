const { Schema, model } = require("mongoose");

const peculiaritySchema = {
  name: {
    type: String,
    required: true,
  },

  abilities: [
    {
      type: String,
    },
  ],
};

const schema = new Schema(peculiaritySchema, {
  id: true,
});

const Peculiarity = model("Peculiarity", schema);

module.exports = Peculiarity;
