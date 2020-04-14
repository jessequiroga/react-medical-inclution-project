const express = require('express');
const jwt = require('jsonwebtoken');
const router = express.Router();
const user = require('../models/user');

// midle ware

function verifytoken(req, res, next){
    if (!req.headers.authorization){
        return req.status(401).send('Unauthorized request')
    }
    let token = req.headers.authorization.split(' ')[1]
    if (token === 'null') {
        return res.status(401).send('Unauthorized request')
    }
    let payload = jwt.verify(token, 'securityKey')
    if(!payload) {
        return res.status(401).send('Unauthorized request')
    }
    req.userId = payload.subject
    next()
}


router.get('/', async (req, res) => {
    try {
        const newUser = await user.find();
        res.json(newUser);
    } catch (err) {
        res.json({ message: err });
    }
});

router.post('/', async (req, res) => {
    const newUser = await user({
        username: req.body.username,
        sex: req.body.sex,
        phone: req.body.phone,
        medicalInstitude: req.body.medicalInstitude,
        speciality: req.body.speciality,
        email: req.body.email,
        pwd: req.body.pwd,
        rull: req.body.rull
    });
     try {
         const saveUser = await newUser.save();
         res.json(saveUser);
     } catch (err) {
        res.json({ message: err });
     }
});

router.post('/login',  async (req, res) => {
    try {
        let userData = req.body
        
        user.findOne({username: req.body.username}, (error, user) => {
            if(error){
                console.log(error)
            } else {
                if (!user) {
                    res.status(401).send('Invalid username')
                } else if(user.pwd !== req.body.pwd){
                    res.status(401).send('Invalid password')
                } else {
                    let payload = { subject: user._id}
                    let token = jwt.sign(payload, "secretKey");
                    res.status(200).send({token})
                }
            }
        });
    } catch (error) {
        res.json({ message: err });
    }
})

module.exports = router;