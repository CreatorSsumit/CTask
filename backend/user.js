const mongoose = require("mongoose");
const user = new mongoose.Schema({
  name: String,
  email: String,
  username: String,
  password: String,
  test: []
});

module.exports = mongoose.model("User", user);
