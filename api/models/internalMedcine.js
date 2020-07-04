const mongoose = require("mongoose");

var InternalMedcin = new mongoose.Schema({

    
        name : String,
        DateOfBirth : Date,
        height : Number,
        weight : Number,
        sex : String,
        allergis : {
            foods : [],
            medcine : [],
        },
 
        problemtoday : [],
        stools : [],
        stoolfrequency : String,
       
        symptomoccur : [],
        symptomlike : [],
        scale1to10 : Number,
        symptomstart : Date,
        symtomstarttime : String,
        onMedication : String,
        onmedications: [],
        
        doctorcare: String,
        doctorCare : [],

        hadsurgerys: [],
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
            other : {type: Boolean},
            noOther : Number
        },
        pregnant : String,
        breastfeeding : {type: Boolean},
        medicalexpenses : {type: Boolean},
        haveinterpreter :{type: Boolean},
        otherssss : {type: Boolean},

        bodyPart : []
        
    });

module.exports = mongoose.model("internalMedcin", InternalMedcin)