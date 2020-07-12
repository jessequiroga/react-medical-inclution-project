import React, { useState, useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Nav from "../nav.js";
import Footer from "../footer";
import '../../App.css';
import Button from '@material-ui/core/Button';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import axios from "axios"
import zIndex from '@material-ui/core/styles/zIndex';

const useStyles = makeStyles((theme) => ({
    button: {
        margin: "8px",
        marginLeft: "25px",
        marginTop:"18px",
        color: "white",
        fontSize: "16px",
        backgroundColor: "#6CAFED",
        minHeight: "60px",
        minWidth: "160px !important", 
        borderRadius: "10px",
    },
    content: {
        paddingBottom: "10%",
        //paddingTop: "15%",
    },
    div1: {
        width: "95%",
        height:"100px",
        fontSize: "26px",
        backgroundColor: "#F2F2F2",
        margin: "20px",
        marginLeft:"20px"
    },

    a: {
        padding: "3px",
        marginTop: "5px",
        textDecoration: "underline",
        display:"inline"
    },

    p1: {
        marginLeft:"-800px"
    },
    p2: {
        marginLeft: "-800px",
        color:"#6CAFED"
    }

}));

function getQueryVariable(variable) {
    const query = window.location.search.substring(1);
    const vars = query.split("&");
    for (const i = 0; i < vars.length; i++) {
        const pair = vars[i].split("=");
        if (pair[0] == variable) { return pair[1]; }
    }
    return (false);
}

function BasicSentences() {

    axios.get('http://localhost:3001/wakayamaPhrase').then((response) => {
        console.log(response.data);
}) .catch((error) => {
        console.log(error);
});

    const classes = useStyles();
    const { t, i18n } = useTranslation();
    const [values, setValues] = useState({
        letter: '',
        count: '',
        remark: ''
    });
    const letter=(decodeURI(getQueryVariable("letter")));
        return (
            <div className="container">
                <Nav />
                <div>
                    <AppBar position="static" style={{ backgroundColor: "#F9B1B1", }}>
                        <Toolbar>
                            <Typography className={classes.title} variant="h6" noWrap style={{ paddingLeft: "10px", color: "white", fontSize: "30px", fontWeight: "bold" }}>
                                {letter}
                         </Typography>
                        </Toolbar>
                    </AppBar>
                </div>
                <div className={classes.content}>
                    <div className={classes.div1}>
                        <p className={classes.p1}>我爱中华</p>
                        <p className={classes.p2}>我爱成都</p>
                    </div>
                    <div className={classes.div1}>
                        <p className={classes.p1}>我爱中华</p>
                        <p className={classes.p2}>我爱成都</p>
                    </div>
                    <div className={classes.div1}>
                        <p className={classes.p1}>我爱中华</p>
                        <p className={classes.p2}>我爱成都</p>
                    </div>
                    <div className={classes.div1}>
                        <p className={classes.p1}>我爱中华</p>
                        <p className={classes.p2}>我爱成都</p>
                    </div>
                    <Button className={classes.button} variant="contained" color="primary" disableElevation style={{ float: "right", backgroundColor: "#6CAFED", marginRight: "20px" }} > {t('次に')}</Button>
                    <Link to="/basicSentences"><Button className={classes.button} variant="contained" color="primary" disableElevation style={{ float: "right", backgroundColor: "#B4C0CB", marginRight: "20px" }} > {t('戻る')}</Button></Link>
                </div>
                <Footer />

            </div>
        );
   }

export default BasicSentences;
