import React, { useState, useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Nav from "../nav.js";
import InputLabel from '@material-ui/core/InputLabel';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import Footer from "../footer";
import '../../App.css';
import Avatar from '@material-ui/core/Avatar';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import Errormsg from './errormsg';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import { useTranslation } from 'react-i18next';
import { Link, useHistory } from 'react-router-dom'
import { Grid } from '@material-ui/core';
import Axios from 'axios';
import Typography from '@material-ui/core/Typography';
import UserContext from '../context/UserContext';
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

const Register = () => {
    const { t, i18n } = useTranslation();
    const classes = useStyles();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [passwordCheck, setPasswordCheck] = useState();
    const [displayName, setDisplayName] = useState();
    const [error, setError] = useState("");

    const { setUserData } = useContext(UserContext);
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
        <div style={{ paddingRight: 30, paddingLeft: 30 }}>
            <Nav />
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                        <PersonAddIcon />
                    </Avatar>
                
                <Typography component="h1" variant="h5">
                {t('registration.userRegistration')}
                    </Typography>
                    
                    {error && (
                        <Errormsg message={error} clearError={() => setError(undefined)} />
                    )}
                    <Grid className={classes.labelAligne} item xs={12}>
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
                            <InputLabel htmlFor="register-passwordCheck">{t('registration.verifypassword')}</InputLabel>
                            <Input
                                labelAligne={t('registration.verifypassword')}
                                id="register-passwordCheck"
                                type="password"
                                onChange={(e) => setPasswordCheck(e.target.value)}
                            />
                        </FormControl>

                        <FormControl fullWidth className=''>
                            <InputLabel htmlFor="register-displayName">{t('registration.name')}</InputLabel>
                            <Input
                                id="register-displayName"
                                type="text"
                                onChange={(e) => setDisplayName(e.target.value)}
                            />
                        </FormControl>
                        <Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit}>
                            Register
       </Button>
                        <Grid container>
                            <Grid item>
                                <Link to="/login1" variant="body2">
                                    {"Have an account? Sign In"}
                                </Link>
                            </Grid>
                        </Grid>
                    </form>
                </Grid>
                </div>
            </Container>
            <Footer />
        </div>
    )
}
export default Register;
