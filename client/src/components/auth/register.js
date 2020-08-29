import React, { useState, useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Nav from "./nav.js";
import Paper from '@material-ui/core/Paper';
import Footer from "./footer";
import '../App.css';
import { CovidContext } from "./context/covid19Context"
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';
import { useTranslation } from 'react-i18next';
import { Link, useHistory } from 'react-router-dom'
import { Grid } from '@material-ui/core';
import Axios from 'axios';
import UserContext from '../context/UserContext.js';


const useStyles = makeStyles((theme) => ({
    button: {
        margin: "14px",
        color: "black",
        fontSize: "16px",
        backgroundColor: "#57EBEB",
        minHeight: "75px",
        minWidth: "200px !important",
        borderRadius: "46px"
    },
    labelAligne: {
        textAlign: "left",
        marginLeft: 16
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: 'white',
        backgroundColor: '#eb57577a',
    },
    content: {
        paddingBottom: "600px",
        paddingTop: "39px",

    }
}));

export default function register() {
    const classes = useStyles();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [passwordCheck, setPasswordCheck] = useState();
    const [displayName, setDisplayName] = useState();
    const [error, setError] = useState("");

    const { setUserData } = UserContext(UserContext);
    const history = useHistory();

    const submit = async (e) => {
        e.preventDefault();
        try {
            const newUser = { email, password, passwordCheck, displayName };
            const registerRes = await Axios.post(
                "http://localhost:5000/user/register",
                newUser
            );
            const loginRes = await Axios.post("http://localhost:5000/user/login", {
                email,
                password,
            });
            setUserData({
                token: loginRes.data.token,
                user: loginRes.data.user,
            });
            localStorage.setItem("auth-token", loginRes.data.token);
            history.push("/homepage")
        } catch (err) {
            err.response.data.msg && setError(err.response.data.msg);
        }
    }
    return (
        <div className="container" style={{ paddingRight: 30, paddingLeft: 30 }}>
            <br />
            <Grid className={classes.labelAligne} item xs={12}>
                <strong><h3 style={{ textAlign: "center" }}>{t('registration.userRegistration')}</h3></strong>
                {error && (
                <ErrorNotice message={error} clearError={() => setError(undefined)} />
                )}
                <form onSubmit={submit}>
                    <FormControl fullWidth className=''>
                        <InputLabel htmlFor="register-email">{t('registration.email')}</InputLabel>
                        <Input
                            id="register-email"
                            type="email"
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </FormControl>

                    <FormControl fullWidth className=''>
                        <InputLabel htmlFor="register-password">{t('registration.password')}</InputLabel>
                        <Input
                            id="register-password"
                            type="password"
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </FormControl>

                    <FormControl fullWidth className=''>

                        <Input
                            labelAligne={t('registration.verifypassword')}
                            id="register-passwordCheck"
                            type="password"
                            onChange={(e) => setPasswordCheck(e.target.value)}
                        />
                    </FormControl>

                    <FormControl fullWidth className=''>
                        <InputLabel htmlFor="register-displayName">{t('registration.email')}</InputLabel>
                        <Input
                            id="register-displayName"
                            type="text"
                            onChange={(e) => setDisplayName(e.target.value)}
                        />
                    </FormControl>

                    <input type="submit" value="Register" />
                </form>
            </Grid>
        </div>
    )
}
