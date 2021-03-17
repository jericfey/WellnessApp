const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const weightSchema = new Schema({
  name: {
    type: String,
    trim: true,
    required: "Enter Weight",
  },
  value: {
    type: Number,
    required: "Lbs",
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

const Weight = mongoose.model("Weight", weightSchema);

module.exports = Weight;
