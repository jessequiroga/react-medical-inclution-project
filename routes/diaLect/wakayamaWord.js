const express = require('express');
const jwt = require('jsonwebtoken');
const router = express.Router();
const WakayamaWords = require('../../models/diaLect/wakayamaWords');

router.get('/', async (req, res) => {
    try {
        const wakayamaWords = await WakayamaWords.find();
        res.json(wakayamaWords);
        //console.log(wakayamaPhrases)
    } catch (err) {
        res.json({ message: err });
    }
});

router.post('/', async (req, res) => {
    try {
        let wakayamaWordsData = req.body
        let wakayamaWords = new wakayamaWords(wakayamaWordsData)
        //res.send(dialectSentences);
        //sconsole.log(dialectSentencesData);
        wakayamaPhrases.save((error, registeredInfo) => {
            if (error) {
                console.log(error)
            } else {
                res.status(200).send(registeredInfo);
            }
        })
    } catch (error) {

    }
})

router.post('/findWords', async (req, res) => {
    try {
        //console.log(req.body);
        const wakayamaWords = await WakayamaWords.find({ words: req.body.words });
        res.json(wakayamaWords);
    } catch (error) {
        res.json({ message: error });
    }
})

module.exports = router;