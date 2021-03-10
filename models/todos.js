const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const todosSchema = new Schema({
  weight: {
    type: Number,
    required: false,
  },
  calories: {
    type: Number,
    required: false,
  },
  date: { type: Date, default: Date.now },
});

const Todos = mongoose.model("Todos", todosSchema);

module.exports = Todos;
