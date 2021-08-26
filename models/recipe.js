const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Recipe = new Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    image: { type: String, required: true },
    cooking_duration: {
      type: Map,
      of: Number,
      required: true
    },
    ingredients: [{ type: String, required: true }],
    steps: { type: String, required: true },
    authorName: { type: String, required: true }
  },
  { timestamps: true }
)

module.export = mongoose.model('recipes', Recipe)
