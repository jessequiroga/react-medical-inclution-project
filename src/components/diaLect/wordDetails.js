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
         height: "250px",
         fontSize: "26px",
         backgroundColor: "#B4C0CB",
         margin: "20px",
         marginLeft: "20px",
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
    window.location.href = "/findDetails?find=" + findVal;
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
                                Word Detail
                         </Typography>
                        </Toolbar>
                    </AppBar>
                </div>
                <div className={classes.content}>
                    <TextField className={classes.textFiled} id="text1" variant="outlined" label="Input your word" style={{ width: "62%", marginTop: "20px", paddingLeft: "10px", borderRadius: "15px" }} />
                    <Button className={classes.button} variant="contained" color="primary" disableElevation style={{ marginTop: "20px" }}> {t('search')}</Button>
                    <Link to="/wakayama"><Button className={classes.button} variant="contained" color="primary" disableElevation style={{ backgroundColor: "#B4C0CB", marginRight: "20px", marginTop: "20px" }} > {t('back')}</Button></Link>
                    <div class={classes.div1}>
                        <p class={classes.p1} >意大利炮</p > 
                        <p class={classes.p2} >你他娘还真是个天才</p>
                    </div >
                    <div class={classes.div2}>
                        <p class={classes.p3} >详细</p >
                        <p class={classes.p4} >刘德华还没我帅<br></br>我帅的一批</p>
                    </div >
                </div>
                <Footer />

            </div>
        );
   }

export default Dictionary;
