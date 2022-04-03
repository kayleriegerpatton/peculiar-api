const { Schema, model } = require("mongoose");

const loopSchema = {
  city: {
    type: String,
    default: "Unknown",
  },

  country: {
    type: String,
    required: true,
    default: "Unknown",
  },

  day: {
    //   3
    type: Number,
    default: "Unknown",
  },

  month: {
    //   September
    type: String,
    enum: [
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
    //  500 B.C.E, 1940 C.E.
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
  },
};

const schema = new Schema(loopSchema, { id: true });

const Loop = model("Loop", schema);

module.exports = Loop;
