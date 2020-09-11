import React, { useState, useContext } from 'react';
import { useHistory } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import Axios from 'axios';
import UserContext from '../context/UserContext';
import { useTranslation } from 'react-i18next';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import Avatar from '@material-ui/core/Avatar';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Errormsg from './errormsg';
import Nav from "../nav";
import { Button } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },


}));

function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="https://material-ui.com/">
                MIP
        </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

export default function Login1() {
    const { t, i18n } = useTranslation();
    const classes = useStyles();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [error, setError] = useState("");

    const { setUserData } = useContext(UserContext);
    const history = useHistory();

    const submit = async (e) => {
        e.preventDefault();
        try {
            const loginUser = { email, password };
            const loginRes = await Axios.post(
                'http://localhost:5000/user/login',
                //  'http://18.221.74.51:5000/user/login',
                loginUser
            );

            setUserData({
                token: loginRes.data.token,
                user: loginRes.data.user,
            });
            localStorage.setItem("auth-token", loginRes.data.token);
            history.push("/homepage");
            //window.location = '/homepage';
        } catch (err) {
            err.response.data.msg && setError(err.response.data.msg);
        }

    }
    return (
        <div>
            <Nav />
            <Container component="main" maxWidth="xs">

                <CssBaseline />
                <div className={classes.paper}>
                    <Avatar className={classes.avatar}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Sign in
                    </Typography>
                    {error && (
                        <Errormsg message={error} clearError={() => setError(undefined)} />
                    )}
                    <form className={classes.form} noValidate onSubmit={submit}>
                        <FormControl fullWidth className=''>
                            <InputLabel htmlFor="login-email">{t('registration.email')}</InputLabel>
                            <Input
                               fullWidth
                               required
                                id="login-email"
                                type="email"
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </FormControl>
                        <br />
                        <FormControl fullWidth className=''>
                            <InputLabel htmlFor="login-password">{t('registration.password')}</InputLabel>
                            <Input
                               fullWidth
                               required
                                id="login-password"
                                type="password"
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </FormControl>
                        <br />
                        <Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit}>
                            Sign In
       </Button>
                        <Grid container>
                            <Grid item xs>
                                <Link href="#" variant="body2">
                                    Forgot password?
              </Link>
                            </Grid>
                            <Grid item>
                                <Link href="#" variant="body2">
                                    {"Don't have an account? Sign Up"}
                                </Link>
                            </Grid>
                        </Grid>
                    </form>

                </div>

            </Container>
            <Box mt={8}>
                <Copyright />
            </Box>
        </div>
    )
}

