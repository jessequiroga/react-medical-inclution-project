const mongoose = require("mongoose");

var LogFile = new mongoose.Schema({
    inteviewName: {type:String},
    userName: {type:String},
    language: {type:String},
    contentSentence: {type:String},
    date: {type: Date},
    userId: {type:String},
 });
 module.exports = mongoose.model("logfile", LogFile);