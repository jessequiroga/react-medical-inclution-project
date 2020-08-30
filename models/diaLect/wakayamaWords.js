const mongoose = require("mongoose");

var WakayamaWords = new mongoose.Schema({
    words : String,
    explain: String,
    detail: String,
    remark: String

});
module.exports = mongoose.model("wakayamaWord", WakayamaWords)