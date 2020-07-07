const express = require('express');
const jwt = require('jsonwebtoken');
const router = express.Router();
const DialectSentences = require('../models/dialectSentences');

router.get('/', async (req, res) => {
    try {
        const dialectSentences = await DialectSentences.find();
        res.json(dialectSentences);
        console.log(dialectSentences)
    } catch (err) {
        res.json({ message: err });
    }
});

router.post('/', async (req, res) =>{
    try {
        let dialectSentencesData = req.body
        let dialectSentences = new DialectSentences(dialectSentencesData)
        //res.send(dialectSentences);
        //sconsole.log(dialectSentencesData);
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