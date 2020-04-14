const mongoose = require("mongoose");

var User = new mongoose.Schema({
    username : String,
    sex :String,
    phone : Number,
    medicalInstitude : String,
    speciality : String,
    email : String,
    pwd : String,
    rull: String

});
module.exports = mongoose.model("user", User)