const { Schema, model } = require("mongoose");

const loopSchema = {
  location: {
    //   allow for wide range of location formats
    type: String,
    required: true,
  },

  date: {
    //   allow for wide range of date formats
    type: String,
  },

  ymbryne: {
    //   reference Character model
    type: Schema.Types.ObjectId,
    ref: "Character",
  },

  description: {
    type: String,
  },
};

const schema = new Schema(loopSchema, { id: true });

const Loop = model("Loop", schema);

module.exports = Loop;
