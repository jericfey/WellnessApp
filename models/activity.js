const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const activitySchema = new Schema({
  name: { type: String, required: true },
  last: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
});

const Activity = mongoose.model("User", userSchema);

module.exports = Activity;
