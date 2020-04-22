import React from 'react';
import Nav from "./nav.js";
import '../App.css';
import Button from '@material-ui/core/Button';
import { useTranslation } from 'react-i18next';

function Welcome() {
  const {t, i18n} = useTranslation();
    return (
      <div className="container">
          <Nav />
          <div className="">
          <Button style={{margin: "14px", backgroundColor:"skyblue", minHeight:"90px"}} variant="contained" color="primary" disableElevation> {t('InternalMedcine')}</Button>
          <Button style={{margin: "14px", backgroundColor:"skyblue", minHeight:"90px"}} variant="contained" color="primary" disableElevation> {t('Cardiology')}</Button>
          <Button style={{margin: "14px", backgroundColor:"skyblue", minHeight:"90px"}} variant="contained" color="primary" disableElevation> {t('Gastroenterology')}</Button>
          <Button style={{margin: "14px", backgroundColor:"skyblue", minHeight:"90px"}} variant="contained" color="primary" disableElevation> {t('Psychiatry')}</Button>
          <Button style={{margin: "14px", backgroundColor:"skyblue", minHeight:"90px"}} variant="contained" color="primary" disableElevation> {t('Pediatrics')}</Button>
          <Button style={{margin: "14px", backgroundColor:"skyblue", minHeight:"90px"}} variant="contained" color="primary" disableElevation> {t('Surgery')}</Button>
          <Button style={{margin: "14px", backgroundColor:"skyblue", minHeight:"90px"}} variant="contained" color="primary" disableElevation> {t('VascularSurgery')}</Button>
          <Button style={{margin: "14px", backgroundColor:"skyblue", minHeight:"90px"}} variant="contained" color="primary" disableElevation> {t('Neurosugery')}</Button>
          <Button style={{margin: "14px", backgroundColor:"skyblue", minHeight:"90px"}} variant="contained" color="primary" disableElevation> {t('Orthopedicsurgery')}</Button>
          <Button style={{margin: "14px", backgroundColor:"skyblue", minHeight:"90px"}} variant="contained" color="primary" disableElevation> {t('Opthalmology')}</Button>
          <Button style={{margin: "14px", backgroundColor:"skyblue", minHeight:"90px"}} variant="contained" color="primary" disableElevation> {t('Otolaryngology')}</Button>
          <Button style={{margin: "14px", backgroundColor:"skyblue", minHeight:"90px"}} variant="contained" color="primary" disableElevation> {t('Dentistery')}</Button>
          <Button style={{margin: "14px", backgroundColor:"skyblue", minHeight:"90px"}} variant="contained" color="primary" disableElevation> {t('Urology')}</Button>
          <Button style={{margin: "14px", backgroundColor:"skyblue", minHeight:"90px"}} variant="contained" color="primary" disableElevation> {t('Dermatology')}</Button>
          <Button style={{margin: "14px", backgroundColor:"skyblue", minHeight:"90px"}} variant="contained" color="primary" disableElevation> {t('Obstetricgynecology')}</Button>
          
          </div>
      </div>
    );
  }
  
  export default Welcome;