const express = require('express');
const jwt = require('jsonwebtoken');
const router = express.Router();
const DialectSentences = require('../models/diaLect/dialectSentences');

router.get('/', async (req, res) => {
    try {
        const dialectSentences = await DialectSentences.find();
        res.json(dialectSentences);
    } catch (err) {
        res.json({ message: err });
    }
});

router.post('/', async (req, res) =>{
    try {
        let dialectSentencesData = req.body
        let dialectSentences = new dialectSentences(dialectSentencesData)
        //res.send(internalMedcine);
        dialectSentences.save((error, registeredInfo) =>{
            if(error){
                console.log(error)
            } else {
                res.status(200).send(registeredInfo);
            }
        })
    } catch (error) {
        
    }
})

module.exports = router;