const mongoose = require("mongoose");

var InternalMedcin = new mongoose.Schema({

    
        name : String,
        DateOfBirth : Date,
        height : Number,
        weight : Number,
        sex : String,
        allergis : {
            foods : [String],
            medcine : [String],
        },
 
        problemtoday : [String],
        stools : [String],
        stoolfrequency : String,
       
        symptomoccur : [String],
        symptomlike : [String],
        scale1to10 : Number,
        symptomstart : Date,
        symtomstarttime : String,
        onMedication : String,
        onmedications: [String],
        
        doctorcare: String,
        doctorCare : [String],

        hadsurgerys: [String],
        hadsurgery: String,
        
        
        smokeregularly : String,
        smokeday : {
            amount : Number,
            duration : Number,
            yearStop : Number,
        },
        drinkregularly: String,
        drinkeday: {
            beer : {type: Boolean},
            nobeer : Number,
            japsake : {type: Boolean},
            nojapsake : Number,
            wisky : {type: Boolean},
            nowisky : Number,
            wine : {type: Boolean},
            nowine : Number,
            other : Number,
        },
        pregnant : String,
        breastfeeding : {type: Boolean},
        medicalexpenses : {type: Boolean},
        haveinterpreter :{type: Boolean},
        otherssss : {type: Boolean},

        bodyPart : [String]
        
    });

module.exports = mongoose.model("internalMedcin", InternalMedcin)