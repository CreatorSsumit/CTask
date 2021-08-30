const mongoose = require("mongoose");

var mongodburl = "mongodb+srv://capgemini:capgemini@cluster0.wxqs3.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
var localmongodburl = "mongodb://localhost/task";


mongoose.connect(mongodburl, { useFindAndModify: false }).then(e => {
    console.log('config connected')
}).catch(err => {
    console.log(err.message)
})

var plm = require("passport-local-mongoose");



var b = mongoose.Schema({

    username: String,

    password: String,

})

b.plugin(plm)

module.exports = mongoose.model("alluser", b);