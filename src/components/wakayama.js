import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Nav from "./nav.js";
import Footer from "./footer";
import '../App.css';
import Button from '@material-ui/core/Button';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
    button: {
        margin: "25px",
        marginLeft: "29px",
        color: "white",
        fontSize: "26px",
        backgroundColor: "#6CAFED",
        minHeight: "175px",
        minWidth: "28%",
        borderRadius: "46px",
    },
    content: {
        paddingBottom: "15%",
        paddingTop: "15%",
    }
}));

function Wakayama() {
    const classes = useStyles();
    const { t, i18n } = useTranslation();

    return (
        <div className="container">
            <Nav />
            <div>
                <AppBar position="static" style={{ backgroundColor: "#F9B1B1", }}>
                    <Toolbar>

                        <Typography className={classes.title} variant="h6" noWrap style={{ paddingLeft: "10px", color: "black" }}>
                            Wakayama dialect
                         </Typography>
                    </Toolbar>
                </AppBar>
            </div>

            <div className={classes.content} style={{}}>

                <Link to="/basicSentences"><Button className={classes.button} variant="contained" color="primary" disableElevation > {t('Basic sentences')}</Button></Link>
                <Button className={classes.button} variant="contained" color="primary" disableElevation> {t('dictionary')}</Button>
                <Button className={classes.button} variant="contained" color="primary" disableElevation> {t('translate')}</Button>

            </div>
            <Footer />

        </div>
    );
}

export default Wakayama;


