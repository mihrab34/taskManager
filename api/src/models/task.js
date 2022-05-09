require("./connection");

const mongoose = require("mongoose");

const Schema = new mongoose.Schema({
  task: {type: String},
  task_date: {type: Date},
  note: { type: String },
  completed: { type: Boolean, default: false}
});

module.exports = mongoose.model('Task', Schema)
