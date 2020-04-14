const express = require("express");

const app = express();
const mongoose = require("mongoose");
require('dotenv-extended').load();
const bodyParser = require('body-parser');
const cors = require('cors')

app.use(cors());
app.use(bodyParser.json());


app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
       next();
    });
// Import Routes
const internalmedRoute = require('./routes/internalMedcin');
const userRoute = require('./routes/user');

app.use('/internaMedcine', internalmedRoute);
app.use('/user', userRoute);

//Routes
app.get('/', async(req,res) => {
    res.send('We are on home')
})

// Connection to DB
mongoose.connect(process.env.DB_CONNECTIONcluster, { useNewUrlParser: true, useUnifiedTopology: true }, ()=>
    console.log("connected to DB")
);



app.listen(3000);