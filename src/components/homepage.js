import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Nav from "./nav.js";
import Footer from "./footer";
import '../App.css';
import Button from '@material-ui/core/Button';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
    button: {
      margin: "14px", 
      color: "black",
      fontSize: "16px",
      backgroundColor:"#57EBEB", 
      minHeight:"75px", 
      minWidth: "200px !important", 
      borderRadius: "46px"
    },
    content: {
      paddingBottom: "600px", 
      paddingTop: "39px"
    }
}));

function Homepage() {
  const classes = useStyles();
  const {t, i18n} = useTranslation();
      
  return (
    <div className="container">
        <Nav />
        <div className={classes.content} style={{}}>
        
           <Link to="/internalMedcine"><Button  className={classes.button} variant="contained" color="primary" disableElevation > {t('InternalMedcine')}</Button></Link>
          <Button className={classes.button} variant="contained" color="primary" disableElevation> {t('Cardiology')}</Button>
          <Button className={classes.button} variant="contained" color="primary" disableElevation> {t('Gastroenterology')}</Button>
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
          <Link to="/dialect"><Button className={classes.button} variant="contained" color="primary" disableElevation> {t('dialect')}</Button></Link>
          
        </div>
        <Footer />
        
    </div>
  );
}

export default Homepage;
