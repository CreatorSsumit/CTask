const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const user = new mongoose.Schema({
  name: String,
  email: String,
  username: String,
  test: [],
  htmlquiz: {},
  jsquiz: {},
  cplusplusquiz: {},
  pythonquiz: {},
  date: Date

});

module.exports = mongoose.model("User", user);
