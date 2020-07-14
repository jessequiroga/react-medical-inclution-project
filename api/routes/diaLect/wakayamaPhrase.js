const express = require('express');
const jwt = require('jsonwebtoken');
const router = express.Router();
const WakayamaPhrases = require('../../models/diaLect/wakayamaPhrases');

router.get('/', async (req, res) => {
    try {
        const wakayamaPhrases = await WakayamaPhrases.find();
        res.json(wakayamaPhrases);
        //console.log(wakayamaPhrases)
    } catch (err) {
        res.json({ message: err });
    }
});

router.post('/', async (req, res) =>{
    try {
        let wakayamaPhrasesData = req.body
        let wakayamaPhrases = new wakayamaPhrases(wakayamaPhrasesData)
        //res.send(dialectSentences);
        //sconsole.log(dialectSentencesData);
        wakayamaPhrases.save((error, registeredInfo) =>{
            if(error){
                console.log(error)
            } else {
                res.status(200).send(registeredInfo);
            }
        })
    } catch (error) {
        
    }
})

router.post('/find', async (req, res) => {
    try {
        //console.log(req.body);
        const wakayamaPhrases = await WakayamaPhrases.find({ letter: req.body.letter });
        res.json(wakayamaPhrases);
    } catch (error) {
        res.json({ message: err });
    }
})

module.exports = router;