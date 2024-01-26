const mongoose = require("mongoose");

const url =
  "Enter your mongo url";

mongoose.connect(url);

const todoScheme = mongoose.Schema({
  title: String,
  description: String,
  completed: {
    type: Boolean,
    default: false,
  },
});

const todo = mongoose.model("todos", todoScheme);

module.exports = { todo };
