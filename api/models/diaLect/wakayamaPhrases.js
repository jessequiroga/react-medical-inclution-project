const mongoose = require("mongoose");

var WakayamaPhrases = new mongoose.Schema({
    letter : String,
    phraseOri: String,
    phraseAft: String,
    remark: String

});
module.exports = mongoose.model("wakayamaPhrase", WakayamaPhrases)