const express = require("express");
const morgan = require('morgan');
const app = express();
const mongoose = require("mongoose");
require('dotenv-extended').load();
const bodyParser = require('body-parser');
const cors = require('cors')
const config = require('./config/key');
const path = require("path");


mongoose.connect(config.mongoURI,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true 
    })
    .then(() => console.log('MongoDB Connected...'))
    .catch(err => console.error(err));

    // Logger Middleware
    app.use(morgan('dev'));

    app.use(cors());

    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(bodyParser.json());
    app.use(express.static(path.join(__dirname, "client/build")))


app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
       next();
    });
// Import Routes
const internalmedRoute = require('./routes/internalMedcin');
const userRoute = require('./routes/user');
const logfile = require('./routes/logRouter');
const dialectSentRoute = require('./routes/diaLect/dialectSentence');
const wakayamaPhRoute = require('./routes/diaLect/wakayamaPhrase');
const wakayamaWdRoute = require('./routes/diaLect/wakayamaWord');


app.use('/internaMedcine', internalmedRoute);
app.use('/user', userRoute);
app.use('/logfile', logfile);
app.use('/dialectSentence', dialectSentRoute);
app.use('/wakayamaPhrase', wakayamaPhRoute);
app.use('/wakayamaWord', wakayamaWdRoute);



//Routes
app.get('/', async(req,res) => {
    res.send('We are on home')
})

// Connection to DB


//mongoose.connect(process.env.DB_CONNECTIONcluster, { useNewUrlParser: true, useUnifiedTopology: true }, ()=>
  //  console.log(process.env.DB_CONNECTIONcluster)
    
//);

app.use('/uploads', express.static('uploads'));

/*if (process.env.NODE_ENV === "production") {

    // Set static folder
    // All the javascript and css files will be read and served from this folder
    app.use(express.static("client/build"));
  
    // index.html for all page routes  html or routing and naviagtion
    app.get("*", (req, res) => {
      res.sendFile(path.resolve(__dirname, "../client", "build", "index.html"));
    });
  }*/



  const port = process.env.PORT || 5000;

  app.listen(port, () => {
    console.log(`Server Running at ${port}`)
  });