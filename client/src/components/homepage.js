import React, { useEffect, useContext } from 'react';
import { useHistory } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import Nav from "./nav.js";
import Footer from "./footer";
import '../App.css';
import Axios from "axios";
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom'
import UserContext from './context/UserContext.js';

const useStyles = makeStyles((theme) => ({
  button: {
    margin: "14px",
    color: "black",
    fontSize: "12px",
    backgroundColor: "#57EBEB",
    minHeight: "50px",
    minWidth: "200px !important",
    borderRadius: "46px",
    "&:hover": {
      background: "#efefef",
      textDecoration: "none"
      
    },
  },
  link: {
    "&:hover": {
    textDecoration: "none"
    }
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
    textAlign:"center"
},
  paper: {
    marginTop: theme.spacing(8),
    alignItems: 'center',
  },
  content: {
    paddingBottom: "600px",
    paddingTop: "39px"
  }
}));

function Homepage() {
  const classes = useStyles();
  const { t, i18n } = useTranslation();
  const { userData } = useContext(UserContext);
  const history = useHistory();

  const authAxios = Axios.create({
    baseURL: "http://localhost:5000",
    headers: {
      'x-auth-token': userData.token,
    },
  });

  useEffect(() => {
    if (!userData.user) history.push("/login1");
console.log(userData);
    if (userData.user) {
      try{
        const logFunction = async () => {
          const loginfo = {
            inteviewName: "Home page",
            userName: userData.user.userName,
            language: i18n.language,
            contentSentence: '',
            date: new Date,
            userId: userData.user.id,
          };
          const loginInput = await authAxios.post(
            "/logfile/insert",
            loginfo
          );
        }
        logFunction();
      } catch (err) {
       console.log(err);
       
      }
    }
   
  });

  return (
    <div >
      <Nav />
      <Container component="main" maxWidth="lg">
      <CssBaseline />
      <div className={classes.paper} style={{}}>
        <div className={classes.form}>
        <Link to="/internalMedcine" className={classes.link}><Button className={classes.button} variant="contained" color="primary" disableElevation > {t('InternalMedcine')}</Button></Link>
        <Link to="/obstetricgynecology" className={classes.link}><Button className={classes.button} variant="contained" color="primary" disableElevation> {t('Obstetricgynecology')}</Button></Link>
        <Link to="/cardiology" className={classes.link}><Button className={classes.button} variant="contained" color="primary" disableElevation> {t('Cardiology')}</Button></Link>
        <Link to="/gastrology" className={classes.link}><Button className={classes.button} variant="contained" color="primary" disableElevation> {t('Gastroenterology')}</Button></Link>
        <Button className={classes.button} variant="contained" color="primary" disableElevation> {t('Psychiatry')}</Button>
        <Button className={classes.button} variant="contained" color="primary" disableElevation> {t('Pediatrics')}</Button>
        <Button className={classes.button} variant="contained" color="primary" disableElevation> {t('Surgery')}</Button>
        <Button className={classes.button} variant="contained" color="primary" disableElevation> {t('VascularSurgery')}</Button>
        <Button className={classes.button} variant="contained" color="primary" disableElevation> {t('Neurosugery')}</Button>
        <Button className={classes.button} variant="contained" color="primary" disableElevation> {t('Orthopedicsurgery')}</Button>
        <Button className={classes.button} variant="contained" color="primary" disableElevation> {t('Opthalmology')}</Button>
        <Button className={classes.button} variant="contained" color="primary" disableElevation> {t('Otolaryngology')}</Button>
        <Button className={classes.button} variant="contained" color="primary" disableElevation> {t('Dentistery')}</Button>
        <Button className={classes.button} variant="contained" color="primary" disableElevation> {t('Urology')}</Button>
        <Button className={classes.button} variant="contained" color="primary" disableElevation> {t('Dermatology')}</Button>
        <Button className={classes.button} variant="contained" color="primary" disableElevation> {t('Obstetricgynecology')}</Button>
        <Link to="../diaLect/dialect" className={classes.link}><Button className={classes.button} variant="contained" color="primary" disableElevation> {t('dialect')}</Button></Link>
        </div>
      </div>
      </Container>
      <Footer />
      
    </div>
  );
}

export default Homepage;
