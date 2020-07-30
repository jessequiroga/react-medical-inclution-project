import React, { useState, useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Nav from "../nav.js";
import Footer from "../footer";
import '../../App.css';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
//import { SentContext } from './basicSentContext';
import axios from "axios"

const useStyles = makeStyles((theme) => ({
    button: {
        margin: "8px",
        marginLeft: "25px",
        color: "white",
        fontSize: "16px",
        backgroundColor: "#6CAFED",
        minHeight: "60px",
        minWidth: "160px !important", 
        borderRadius: "10px"
    },
    content: {
        //paddingBottom: "10%",
        //paddingTop: "15%",
    },

    foot:{
        bottom: 0
    },

    div1: {
        width: "95%",
        height: "150px",
        fontSize: "26px",
        backgroundColor: "#6CAFED",
        margin: "20px",
        marginLeft: "20px",
        borderRadius:"10px"
    },

     div2: {
        width: "95%",
         height: "fit-content",
         fontSize: "26px",
         backgroundColor: "#B4C0CB",
         margin: "20px",
         marginLeft: "20px",
         paddingBottom:"20px",
         borderRadius: "10px"
    },

    a: {
        padding: "3px",
        marginTop: "5px",
        textDecoration: "underline",
        display:"inline"
    },

    p1: {
        textAlign: "left",
        marginLeft: "20px",
        marginTop: "20px",
        fontSize: "44px",
        fontWeight:"bold",
        color: "white"
    },
    p2: {
        textAlign: "left",
        marginLeft: "20px",
        color: "white"
    },
    p3: {
        textAlign: "left",
        marginTop: "20px",
        marginLeft: "20px",
        fontWeight: "bold"
    },
    p4: {
        textAlign: "left",
        marginLeft: "80px"
    }
}));


function find() {
    var findVal = document.getElementById("text1").value;
    //alert(findVal);
    window.location.href = "/wordDetails?find=" + findVal;
}

function getQueryVariable(variable) {
    const query = window.location.search.substring(1);
    const vars = query.split("&");
    for (var i = 0; i < vars.length; i++) {
        const pair = vars[i].split("=");
        if (pair[0] == variable) { return pair[1]; }
    }
    return (false);
}

function WordDetails() {

    const classes = useStyles();
    const { t, i18n } = useTranslation();
    const words = (decodeURI(getQueryVariable("find")));
    const request = {       
        words: words
    }
    
    axios.post('http://localhost:3001/wakayamaWord/findWords', request).then((response) => {
        const list = response.data.length;
        const data = response.data;
        const div1 = document.getElementById('div1');
        const div2 = document.getElementById('div2');
        if (list > 0) {
            div1.innerHTML =
                '<p class="makeStyles-p1-6" >' + data[0].words + '</p >' +
                '<p class="makeStyles-p2-7" >' + data[0].explain + '</p>';
            div2.innerHTML =
                '<p class="makeStyles-p3-8" >詳細</p >' +
                '<p class="makeStyles-p4-9" >' + data[0].detail + '</p>';
        } else {
            div1.innerHTML =
                '<p class="makeStyles-p1-6" >Sorry, we can\'t find the word</p >';
            div2.hidden="hidden";
        }
}) .catch((error) => {
        console.log(error);
    });

        return (
            <div className="container">
                <Nav />
                <div>
                    <AppBar position="static" style={{ backgroundColor: "#F9B1B1", }}>
                        <Toolbar>
                            <Typography className={classes.title} variant="h6" noWrap style={{ paddingLeft: "10px", color: "black" }}>
                                Word Detail
                         </Typography>
                        </Toolbar>
                    </AppBar>
                </div>
                <div className={classes.content}>
                    <TextField className={classes.textFiled} id="text1" variant="outlined" label="Input your word" style={{ width: "62%", marginTop: "20px", paddingLeft: "10px", borderRadius: "15px" }} />
                    <Button className={classes.button} variant="contained" color="primary" disableElevation style={{ marginTop: "20px" }} onClick={find}> {t('search')}</Button>
                    <Link to="/wakayama"><Button className={classes.button} variant="contained" color="primary" disableElevation style={{ backgroundColor: "#B4C0CB", marginRight: "20px", marginTop: "20px" }} > {t('back')}</Button></Link>
                    <div className={classes.div1} id="div1">                 
                    </div >
                    <div className={classes.div2} id="div2">                     
                    </div >
                </div>
                <div className={classes.foot}>
                    <AppBar position="static" style={{ backgroundColor: "#eb5757b5", }}>
                        <Toolbar>
                            <Typography className={classes.title} variant="h6" noWrap style={{ paddingLeft: "133px" }}>
                                Copyright 2019 ETL (Eiko Takaoka Laboratory, Sophia University)
                            </Typography>
                        </Toolbar>
                    </AppBar>
                </div>
            </div>
        );
   }

export default WordDetails;
