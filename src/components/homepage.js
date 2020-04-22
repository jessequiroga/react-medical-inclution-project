import React from 'react';
import Nav from "./nav.js";
import '../App.css';
import Button from '@material-ui/core/Button';
import { useTranslation } from 'react-i18next';

function Homepage() {
  const {t, i18n} = useTranslation();
  return (
    <div className="container">
        <Nav />
        <div className="">
        <Button style={{margin: "14px", backgroundColor:"skyblue", minHeight:"90px"}} variant="contained" color="primary" disableElevation> {t('InternalMedcine')}</Button>
        <Button style={{margin: "14px", backgroundColor:"skyblue", minHeight:"90px"}} variant="contained" color="primary" disableElevation> Disable </Button>
        <Button style={{margin: "14px", backgroundColor:"skyblue", minHeight:"90px"}} variant="contained" color="primary" disableElevation> Disable elevation</Button>
        <Button style={{margin: "14px", backgroundColor:"skyblue", minHeight:"90px"}} variant="contained" color="primary" disableElevation> Disable elevation</Button>
        <Button style={{margin: "14px", backgroundColor:"skyblue", minHeight:"90px"}} variant="contained" color="primary" disableElevation> Disable elevation</Button>
        <Button style={{margin: "14px", backgroundColor:"skyblue", minHeight:"90px"}} variant="contained" color="primary" disableElevation> Disable elevation</Button>
        <Button style={{margin: "14px", backgroundColor:"skyblue", minHeight:"90px"}} variant="contained" color="primary" disableElevation> Disable elevation</Button>
        </div>
    </div>
  );
}

export default Homepage;
