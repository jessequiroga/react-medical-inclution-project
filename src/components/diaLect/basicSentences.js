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
        borderRadius: "10px",
    },
    content: {
        paddingBottom: "15%",
        //paddingTop: "15%",
    },
    div1: {
        width: "40%",
        fontSize: "26px",
        float:"left"
    },

     div2: {
        width: "40%",
        fontSize: "26px",
        paddingRight: "20px",
        float: "right"
    }
}));


function BasicSentences() {

    const classes = useStyles();
    const { t, i18n } = useTranslation();
    const [values, setValues] = useState({
    letter : '',
    count : '',
    remark : ''
});
     const [letter, setLetter] = useState('');

axios.get('http://localhost:3001/dialectSentences').then((response) => {
    console.log(response);
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
                                Basic sentences
                         </Typography>
                        </Toolbar>
                    </AppBar>
                </div>
                <div className={classes.content}>
                    <TextField className={classes.textFiled} id="outlined-basic" variant="outlined" defaultValue="Hello World" style={{ width: "80%", paddingTop: "10px", paddingLeft: "10px", borderRadius: "15px" }} />
                    <Button className={classes.button} variant="contained" color="primary" disableElevation> {t('search')}</Button>
                    <div style={{ border: "1px solid #6CAFED", width: "95%", height: "311px", margin: "26px" }}>
                        <AppBar position="static" style={{ backgroundColor: "#6CAFED", height: "50px", }}>
                            <Toolbar>
                                <Typography className={classes.title} variant="h6" noWrap style={{ marginTop: "-15px", color: "white" }}>
                                    Index of phrases
                            </Typography>
                            </Toolbar>
                        </AppBar>
                        <div>
                            <div className={classes.div1}>
                                <a href="https://www.weblio.jp/category/dialect/wkybj/aa">a</a>&nbsp;
                            <a href="https://www.weblio.jp/category/dialect/wkybj/aa">あ</a>&nbsp;
                            <a href="https://www.weblio.jp/category/dialect/wkybj/aa">a</a>&nbsp;
                            <a href="https://www.weblio.jp/category/dialect/wkybj/aa">a</a>&nbsp;
                            <a href="https://www.weblio.jp/category/dialect/wkybj/aa">a</a>&nbsp;&nbsp;
                            <a href="https://www.weblio.jp/category/dialect/wkybj/aa">b</a>&nbsp;
                            <a href="https://www.weblio.jp/category/dialect/wkybj/aa">b</a>&nbsp;
                            <a href="https://www.weblio.jp/category/dialect/wkybj/aa">b</a>&nbsp;
                            <a href="https://www.weblio.jp/category/dialect/wkybj/aa">b</a>&nbsp;
                            <a href="https://www.weblio.jp/category/dialect/wkybj/aa">b</a>&nbsp;<br></br>
                                <a href="https://www.weblio.jp/category/dialect/wkybj/aa">c</a>&nbsp;
                        </div>
                            <div className={classes.div2}>
                                <a href="https://www.weblio.jp/category/dialect/wkybj/aa">a</a>&nbsp;
                            <a href="https://www.weblio.jp/category/dialect/wkybj/aa">a</a>&nbsp;
                            <a href="https://www.weblio.jp/category/dialect/wkybj/aa">a</a>&nbsp;
                            <a href="https://www.weblio.jp/category/dialect/wkybj/aa">a</a>&nbsp;
                            <a href="https://www.weblio.jp/category/dialect/wkybj/aa">a</a>&nbsp;<br></br>
                                <a href="https://www.weblio.jp/category/dialect/wkybj/aa">b</a>&nbsp;
                        </div>
                        </div>
                    </div>
                    <Link to="/wakayama"><Button className={classes.button} variant="contained" color="primary" disableElevation style={{ float: "right", backgroundColor: "#B4C0CB", marginRight: "20px" }} > {t('back')}</Button></Link>
                </div>
                <Footer />

            </div>
        );
   }

export default BasicSentences;
