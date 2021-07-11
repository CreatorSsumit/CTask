const mongoose = require("mongoose");
const admin = new mongoose.Schema({
    name: String,
    email: String,
    username: String,
    password: String,
});

module.exports = mongoose.model("Admin", admin);
