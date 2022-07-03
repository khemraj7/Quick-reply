let mongoose = require('mongoose')
var BookSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    size: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
)

module.exports = mongoose.model('Book', BookSchema)
