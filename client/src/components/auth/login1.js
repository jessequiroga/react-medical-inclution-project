import React, { useState, useContext } from 'react';
import { useHistory } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import Axios from 'axios';
import UserContext from '../context/UserContext';
import { useTranslation } from 'react-i18next';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import Grid from '@material-ui/core/Grid';
import Errormsg from './errormsg';
import Nav from "../nav";

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

export default function Login1() {
    const { t, i18n } = useTranslation();
    const classes = useStyles();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [error, setError] = useState("");

    const { setUserData } = useContext(UserContext);
    const history = useHistory();

    const BACK_SERVER_URL = "";
    const submit = async (e) =>{
        e.preventDefault();
        try{
        const loginUser = {email, password};
        const loginRes = await Axios.post(
          // `${BACK_SERVER_URL}/user/login`,
           'http://18.221.74.51:5000/user/login',
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
        <div className="container">
            <Nav />
      <br/>
           <Grid className={classes.labelAligne} item xs={12}>
               <h3 className="form" style={{ textAlign: "center", width:700, backgroundColor:"#f18888", color:"white", borderRadius:5, height:53 }}>{t('registration.login')}</h3>
               {error && (
                <Errormsg message={error} clearError={() => setError(undefined)} />
                )}
              <form className="form" onSubmit={submit}>
               <FormControl  className=''>
                   <InputLabel htmlFor="login-email">{t('registration.email')}</InputLabel>
                   <Input
                       id="login-email"
                       type="email"
                       onChange={(e) => setEmail(e.target.value)}
                   />
               </FormControl>
                <br/>
               <FormControl  className=''>
                   <InputLabel htmlFor="login-password">{t('registration.password')}</InputLabel>
                   <Input
                       id="login-password"
                       type="password"
                       onChange={(e) => setPassword(e.target.value)}
                   />
               </FormControl>
                <br/>
       <input type="submit" value="Submit" />
               </form>
           </Grid>
   </div>
    )
}

