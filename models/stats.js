const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const statsSchema = new Schema({
  weight: {
    type: Number,
    required: false,
  },
  calories: {
    type: Number,
    required: false,
  },
  water: {
    type: String,
    required: false,
  },
  day: {
    type: Date,
    default: Date.now,
  },
});

const Stats = mongoose.model("Stats", statsSchema);

module.exports = Stats;
