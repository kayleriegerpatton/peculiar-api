const { Schema, model } = require("mongoose")

const quoteSchema = {
  text: {
    type: String,
    required: true,
    unique: true,
  },

  book: {
    // reference Book model
    type: Schema.Types.ObjectId,
    ref: "Book",
    required: true,
  },

  chapter: {
    type: Number,
    required: true,
    min: 0,
    max: 24
  },

  character: {
    // reference Character model
    type: Schema.Types.ObjectId,
    ref: "Character",
    required: true
  }
}

const schema = new Schema(quoteSchema, {
  id: true
})

const Quote = model("Quote", schema)

module.exports = Quote