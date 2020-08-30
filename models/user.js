const mongoose = require("mongoose");

var User = new mongoose.Schema({
    displayName : String,
    email : String,
    password : String,
    passwordCheck : String
    

});
module.exports = mongoose.model("user", User)