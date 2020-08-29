import React from 'react';
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

const useStyles = makeStyles((theme) => ({
    button: {
        margin: "25px",
        marginLeft: "29px",
        color: "black",
        fontSize: "26px",
        backgroundColor: "#F87053",
        minHeight: "175px",
        minWidth: "28%",
        borderRadius: "46px",
    },
    content: {
        paddingBottom: "15%",
        paddingTop: "15%",
    }
}));

function DialectTest() {
    const classes = useStyles();
    const { t, i18n } = useTranslation();

    return (
        <div className="container">
            <Nav />
            <div>
                <AppBar position="static" style={{ backgroundColor: "#F9B1B1", }}>
                    <Toolbar>

                        <Typography className={classes.title} variant="h6" noWrap style={{ paddingLeft: "10px", color: "black" }}>
                            Please tell me where you came from:
                         </Typography>
                    </Toolbar>
                </AppBar>
            </div>

            <div className={classes.content} style={{}}>

                <Link to="/wakayama"><Button className={classes.button} variant="contained" color="primary" disableElevation > {t('Wakayama')}</Button></Link>
                <Button className={classes.button} variant="contained" color="primary" disableElevation> {t('Oosaka')}</Button>
                <Button className={classes.button} variant="contained" color="primary" disableElevation> {t('Kyoto')}</Button>

            </div>
            <Footer />

        </div>
    );
}

export default DialectTest;


