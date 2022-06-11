const mongoose = require("mongoose");

const articleSchema = mongoose.Schema({
  creator: {
    type: String,
  },
  title: {
    type: String,
  },
  message: {
    type: String,
  },
  tags: {
    type: [String],
  },
  selectedFile: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Article", articleSchema);
