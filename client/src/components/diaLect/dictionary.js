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
        paddingBottom: "14%",
        paddingTop: "10%"
    },
    div1: {
        width: "40%",
        fontSize: "26px",
        float:"left"
    },

     div2: {
        width: "45%",
        fontSize: "26px",
        float: "right"
    },

    a: {
        padding: "3px",
        marginTop: "5px",
        textDecoration: "underline",
        display:"inline"
    },

    p: {
        textAlign: "center",
        fontSize: "22px",
        display: "inline"
    }

}));


function find() {
    var findVal = document.getElementById("text1").value;
    //alert(findVal);
    window.location.href = "/wordDetails?find=" + findVal;
}

function Dictionary() {

    const classes = useStyles();
    const { t, i18n } = useTranslation();
    const [values, setValues] = useState({
    letter : '',
    count : '',
    remark : ''
});
     const [letter, setLetter] = useState('');

    axios.get('http://localhost:3001/dialectSentence').then((response) => {
        const list = response.data.length;
        //javascript:return false;
        //console.log(list);
        console.log(response.data);
        //console.log(response.data[0].letter);
        for (var i = 0; i< list; i++) {
            if (response.data[i].count == 0) {
                //document.getElementById(response.data[0].letter).href = "javascript:return false";
                document.getElementById(response.data[0].letter).style = "color: #B4C0CB; text-decoration: none;pointer-events: none;";
            }
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
                                Wakayama Dialect Dictionary 
                         </Typography>
                        </Toolbar>
                    </AppBar>
                </div>
                <div className={classes.content}>
                    <TextField className={classes.textFiled} id="text1" variant="outlined" label="Input your word" style={{ width: "82%", marginTop: "80px", paddingLeft: "10px", borderRadius: "15px" }} />
                    <Button className={classes.button} variant="contained" color="primary" disableElevation style={{ marginTop: "80px" }} onClick={find}> {t('search')}</Button>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                <p className={classes.p}>No words you want? Try:</p>
                <Button className={classes.button} variant="contained" color="primary" disableElevation> {t('translate')}</Button>
                <p className={classes.p}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;or &nbsp;&nbsp;</p>
                <Link to="/wakayama"><Button className={classes.button} variant="contained" color="primary" disableElevation style={{ backgroundColor: "#B4C0CB", marginRight: "20px" }} > {t('back')}</Button></Link>
                </div>
                <Footer />
            </div>
        );
   }

export default Dictionary;
