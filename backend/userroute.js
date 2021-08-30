const mongoose = require("mongoose");

// mongodb+srv://capgemini:capgemini@cluster0.wxqs3.mongodb.net/myFirstDatabase?retryWrites=true&w=majority

mongoose.connect('mongodb://localhost/task', { useFindAndModify: false }).then(e => {
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