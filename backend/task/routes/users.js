const mongoose = require("mongoose");

// mongoose.connect("mongodb://localhost/homes");

mongoose.connect('mongodb://localhost/cap').then(() => {
  console.log('connected')
}).catch(err => { console.log('server error') })

var plm = require("passport-local-mongoose");



var b = mongoose.Schema({
  name: String,
  username: String,
  email: String,
  password: String,
  date: Date

})

b.plugin(plm)

module.exports = mongoose.model("user", b);