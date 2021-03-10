const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  first: {
    type: String,
    required: true,
    lowercase: true,
    required: [true, "can't be blank"],
    match: [/^[a-zA-Z0-9]+$/, "is invalid"],
    index: true,
  },
  last: {
    type: String,
    required: true,
    lowercase: true,
    required: [true, "can't be blank"],
    match: [/^[a-zA-Z0-9]+$/, "is invalid"],
    index: true,
  },
  email: { type: String, required: true },
  password: { type: String, required: true },
  created: { type: Date, default: Date.now },
  goalweight: {
    type: Number,
    required: false,
  },
});

const User = mongoose.model("User", userSchema);

module.exports = User;
