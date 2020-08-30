const express = require('express');
const router = express.Router();
const InternalMedcine = require('../models/internalMedcine');

router.get('/', async (req, res) => {
    try {
        const internalMedcine = await InternalMedcine.find();
        res.json(internalMedcine);
    } catch (err) {
        res.json({ message: err });
    }
});

router.post('/', async (req, res) =>{
    try {
        let internalMedcineData = req.body
       let internalMedcine = new InternalMedcine(internalMedcineData)
        //res.send(internalMedcine);
       internalMedcine.save((error, registeredInfo) =>{
            if(error){
                console.log(error)
            } else {
                res.status(200).send(registeredInfo);
            }
        })
    } catch (error) {
        
    }
})

/*router.post('/', async (req, res) => {
    const newinternalMedcine = new InternalMedcine({
        name: req.body.name,
        DateOfBirth: req.body.DateOfBirth,
        height: req.body.height,
        weight: req.body.weight,
        allergis:{
        foods: req.body.foods,
        medcine: req.body.medcine,
                 },
        sex: req.body.sex,
        problemtoday: req.body.problemtoday,
        stools: req.body.stools,
        stoolfrequency: req.body.stoolfrequency,
        symptomoccur: req.body.symptomoccur,
        symptomlike: req.body.symptomlike,
        scale1to10: req.body.scale1to10,
        symptomstart: req.body.symptomstart,
        symtomstarttime: req.body.symtomstarttime,
        onMedication: req.body.onMedication,
        onmedications: req.body.onmedications,
        doctorcare: req.body.doctorcare,
        doctorCare: req.body.doctorCare,
        hadsurgerys: req.body.hadsurgerys,
        hadsurgery: req.body.hadsurgery,
        smokeregularly: req.body.smokeregularly,
        smokeday: {
        amount: req.body.amount,
        duration: req.body.duration,
        yearStop: req.body.yearStop,
                   },
        drinkregularly: req.body.drinkregularly,
        drinkeday:{
        beer: req.body.beer,
        nobeer: req.body.nobeer,
        japsake: req.body.japsake,
        nojapsake: req.body.nojapsake,
        wisky: req.body.wisky,
        nowisky: req.body.nowisky,
        wine: req.body.wine,
        nowine: req.body.nowine,
        other: req.body.other,
                    },
        pregnant: req.body.pregnant,
        breastfeeding: req.body.breastfeeding,
        medicalexpenses: req.body.medicalexpenses,
        haveinterpreter: req.body.haveinterpreter,
        otherssss: req.body.otherssss,
        bodyPart: req.body.bodyPart


    });
    try {
        const saveinternalMedcine = await newinternalMedcine.save();
        res.json(saveinternalMedcine);
    } catch (err) {
        res.json({ message: err });
    }
})*/



module.exports = router;