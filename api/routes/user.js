const express = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require("bcryptjs");
const router = express.Router();
const User = require('../models/user');
const auth = require("../middleware/auth")

// midle ware

function verifytoken(req, res, next) {
    if (!req.headers.authorization) {
        return req.status(401).send('Unauthorized request')
    }
    let token = req.headers.authorization.split(' ')[1]
    if (token === 'null') {
        return res.status(401).send('Unauthorized request')
    }
    let payload = jwt.verify(token, 'securityKey')
    if (!payload) {
        return res.status(401).send('Unauthorized request')
    }
    req.userId = payload.subject
    next()
}

router.post('/register', async (req, res) => {
    try {
        let { email, password, passwordCheck, displayName } = req.body;

//validate
        if (!email || !password || !passwordCheck)
            return res.status(400).json({ msg: "Not all fields have been entered." });
        if (password.length < 5)
            return res
                .status(400)
                .json({ msg: "The password needs to be at least 5 characters long." });
        if (password !== passwordCheck)
            return res
                .status(400)
                .json({ msg: "Enter the same password twice for verification." });

        const existingUser = await User.findOne({ email: email })

        if (existingUser)
            return res
                .status(400)
                .json({ msg: "An account with this email already exists." });

        if (!displayName) displayName = email;
        const salt = await bcrypt.genSalt();
        const passwordHarsh = await bcrypt.hash(password, salt);

        const newUser = new User({
            email,
            password: passwordHarsh,
            displayName,
        });

        const savedUser = await newUser.save();
        res.json(savedUser);

    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

router.post("/login", async(req,res) => {
    try{
        const { email, password } =req.body;

        //validate
        if(!email || !password)
            return res.status(400).json({ msg: "Not all fields have been entered."})
        const user = await User.findOne({ email: email });
        console.log("ddddd");
        if (!user)
            return res
            .status(400)
            .json({msg: "No account with this email has been registered."});

        const isMatch = await bcrypt.compare(password, user.password);
        if(!isMatch) return res.status(400).json({msg: "Invalid credentials"});

        const token = await jwt.sign({id: user._id}, process.env.JWT_SECRET);
        res.json({
            token,
            user: {
                id: user._id,
                displayName: user.displayName,
            },
        });
       
       

    }catch (err){
        res.status(500).json({ error: err.message });
    }
})

router.delete("/delete", auth, async (req, res) => {
    try{
        const deletedUser = await User.findByIdAndDelete(req.user);
        res.json(deletedUser);
    }catch (err){
        res.status(500).json({ error: err.message });
    }
});

router.post("/tokenIsValid", async(req, res) => {
    try{
        const token = req.header("x-auth-token");
        if (!token) return res.json(false);

        const verified = jwt.verify(token, process.env.JWT_SECRET);
        if (!verified) return res.json(false);

        const user = await User.findById(verified.id);
        if (!user) return res.json(false);

        return res.json(true);
    }catch (err){
        res.status(500).json({ error: err.message });
    }
});

router.get("/", auth, async (req, res) => {
    const user = await User.findById(req.user);
    res.json({
        displayName: user.displayName,
        id: user._id,
    });
})

/*router.get('/', async (req, res) => {
    try {
        const newUser = await user.find();
        res.json(newUser);
    } catch (err) {
        res.json({ message: err });
    }
});

/*router.post('/', async (req, res) => {
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
});*/

/*router.post('/login', async (req, res) => {
    try {
        let userData = req.body

        user.findOne({ username: req.body.username }, (error, user) => {
            if (error) {
                console.log(error)
            } else {
                if (!user) {
                    res.status(401).send('Invalid username')
                } else if (user.pwd !== req.body.pwd) {
                    res.status(401).send('Invalid password')
                } else {
                    let payload = { subject: user._id }
                    let token = jwt.sign(payload, "secretKey");
                    res.status(200).send({ token })
                }
            }
        });
    } catch (error) {
        res.json({ message: err });
    }
})*/

module.exports = router;