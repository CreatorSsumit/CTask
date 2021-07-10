const mongoose = require("mongoose");

// mongoose.connect("mongodb://localhost/homes");



var plm = require("passport-local-mongoose");



var user = mongoose.Schema({
  name: String,
  username: String,
  email: String,
  password: String,
  date: Date

})

user.plugin(plm)

module.exports = mongoose.model("User", user);