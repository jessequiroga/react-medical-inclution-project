const mongoose = require("mongoose");

var DialectSentences = new mongoose.Schema({
    letter : String,
    count : Number,
    remark: String

});
module.exports = mongoose.model("dialectSentences", DialectSentences)