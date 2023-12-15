// models/user.js
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  id: { type: Number, unique: true, required: true },
  name: { type: String, unique: false, required: true },
});

const User = mongoose.model("User", userSchema);

module.exports = User;
