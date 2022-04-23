const { Schema, model } = require("mongoose");

const loopSchema = {
  city: {
    type: String,
    default: "Unknown",
  },

  state: {
    type: String,
  },

  country: {
    type: String,
    default: "Unknown",
  },

  day: {
    //   3
    type: String,
    default: "Unknown",
  },

  month: {
    //   September
    type: String,
    enum: [
      "Unknown",
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ],
    default: "Unknown",
  },

  year: {
    // ex. 500 B.C.E, 1940 C.E.
    type: String,
    default: "Unknown",
  },

  ymbryne: {
    //   reference Character model
    type: Schema.Types.ObjectId,
    ref: "Character",
  },

  description: {
    type: String,
    required: true,
  },

  active: {
    type: Boolean,
    required: true,
  },
};

const schema = new Schema(loopSchema, { id: true });

const Loop = model("Loop", schema);

module.exports = Loop;
