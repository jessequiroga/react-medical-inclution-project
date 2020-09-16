import React, { useState, useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from "react-router-dom";
import Nav from "./nav.js";
import Paper from '@material-ui/core/Paper';
import Footer from "./footer";
import '../App.css';
import { CovidContext } from "./context/covid19Context"
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';
import { useTranslation } from 'react-i18next';
import { Grid } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
    table: {
        minWidth: 650,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: 'black',
        marginBottom: 10,
        marginTop: 10,
        fontSize: 20,

    },
    h4: {
        fontSize: 20,
        textAlign: "center"
    }
}));

function Homepage() {
    const classes = useStyles();
    const { t, i18n } = useTranslation();
    const [values, setValues] = useContext(CovidContext);
    const history = useHistory();
    

    const handleChange = (event) => {
        setValues({ ...values, [event.target.name]: event.target.value })
        console.log(values)
    };

    const blue = (text) =>{
        return(
        <span style={{color:"blue"}}>{text}</span>
        );
      
    }
    
    const handleConfirm = () => {
        history.push("/covid19Result");
        //window.location = '/covid19Result';
    }

    return (
        <div className="container">
            <Nav />
            <div className="content" style={{ paddingRight: 30, paddingLeft: 30 }}>
                <br />
                <Grid className={classes.labelAligne} item xs={12}>
                    <strong><h3 style={{ textAlign: "center" }}>{t('covid-19.COVI-19Question')} <br /><span style={{color:"blue"}}>/新型コロナウイルス感染症に関する問診票.</span></h3></strong>
                </Grid>
                <hr style={{ height: 2, borderWidth: 0, color: "gray", backgroundColor: "gray" }} />
                <Grid container spacing={3} style={{ padding: 5 }}>
                    <Grid className={classes.labelAligne} item xs={12}>
                        <Paper className={classes.paper}> <strong><h5>{t('covid-19.checkBoxApplicable')} <br /><span style={{color:"blue"}}>/当てはまるものに○をつけてください（はい　いいえ）どちらかに〇印をつけてください）.</span></h5></strong></Paper>
                    </Grid>

                    <Grid item xs={8} style={{ textAlign: "left"}}>
                        <strong><h4 style={{ fontSize: 19 }}>{t('covid-19.checkBoxApplicable1')}<br /> <span style={{color:"blue"}}>2週間以内に、あなた、または、同居の家族が新型コロナウイルス感染者の⽅と⼀緒にいたことがありますか︖</span></h4></strong>
                    </Grid>
                    <Grid item xs={4} style={{ textAlign: "left"}}>
                        <FormControl component="fieldset">

                            <RadioGroup row aria-label="gender1" name="checkBoxApplicable1" value={values.checkBoxApplicable1} onChange={handleChange}>
                                <FormControlLabel value="true" control={<Radio />} label={t('internalMedcine.yes')} /><nav className="navCheckbox">{blue('/はい')}</nav>
                                <FormControlLabel value="false" control={<Radio />} label={t('internalMedcine.No') } /><nav className="navCheckbox">{blue(" /いいえ")}</nav>
                            </RadioGroup>
                        </FormControl>
                    </Grid>

                    <Grid item xs={8} style={{ textAlign: "left"}}>
                        <strong><h4 style={{ fontSize: 19 }}>{t('covid-19.checkBoxApplicable2')}<br /> <span style={{color:"blue"}}>２週間以内に、県外（海外含む）にいきましたか？</span></h4></strong>
                    </Grid>
                    <Grid item xs={4} style={{ textAlign: "left"}}>
                        <FormControl component="fieldset">

                            <RadioGroup row aria-label="gender" name="checkBoxApplicable2" value={values.checkBoxApplicable2} onChange={handleChange}>
                                <FormControlLabel value="true" control={<Radio />} label={t('internalMedcine.yes') } /><nav className="navCheckbox">{blue('/はい')}</nav>
                                <FormControlLabel value="false" control={<Radio />} label={t('internalMedcine.No') } /><nav className="navCheckbox">{blue(" /いいえ")}</nav>
                            </RadioGroup>
                        </FormControl>
                    </Grid>

                    <Grid item xs={8} style={{ textAlign: "left"}}>
                        <strong><h4 style={{ fontSize: 19 }}>{t('covid-19.checkBoxApplicable3')}<br /> <span style={{color:"blue"}}>2週間以内に、多⼈数が集まる換気の悪い密閉された場所（カラオケ、スナックなど）に⾏きましたか︖</span></h4></strong>
                    </Grid>
                    <Grid item xs={4} style={{ textAlign: "left"}}>
                        <FormControl component="fieldset">

                            <RadioGroup row aria-label="gender2" name="checkBoxApplicable3" value={values.checkBoxApplicable3} onChange={handleChange}>
                                <FormControlLabel value="true" control={<Radio />} label={t('internalMedcine.yes') } /><nav className="navCheckbox">{blue('/はい')}</nav>
                                <FormControlLabel value="false" control={<Radio />} label={t('internalMedcine.No') } /><nav className="navCheckbox">{blue(" /いいえ")}</nav>
                            </RadioGroup>
                        </FormControl>
                    </Grid>

                    <Grid className={classes.labelAligne} item xs={12}>
                        <Paper className={classes.paper}> <strong><h5>{t('covid-19.haveSymptoms')} <br /><span style={{color:"blue"}}>/当てはまる症状がありますか？（はい　いいえ）どちらかに〇印をつけてください</span></h5></strong></Paper>
                    </Grid>

                    <Grid item xs={8} style={{ textAlign: "left"}}>
                        <strong><h4 style={{ fontSize: 19 }}>{t('covid-19.haveSymptoms1')}<br /> <span style={{color:"blue"}}>/発熱（37.5℃以上）</span></h4></strong>
                    </Grid>
                    <Grid item xs={4} style={{ textAlign: "left"}}>
                        <FormControl component="fieldset">

                            <RadioGroup row aria-label="gender3" name="haveSymptoms1" value={values.haveSymptoms1} onChange={handleChange}>
                                <FormControlLabel value="true" control={<Radio />} label={t('internalMedcine.yes')} /><nav className="navCheckbox">{blue('/はい')}</nav>
                                <FormControlLabel value="false" control={<Radio />} label={t('internalMedcine.No')} /><nav className="navCheckbox">{blue(" /いいえ")}</nav>
                            </RadioGroup>
                        </FormControl>
                    </Grid>

                    <Grid item xs={8} style={{ textAlign: "left"}}>
                        <strong><h4 style={{ fontSize: 19 }}>{t('covid-19.Cough')}<br /> <span style={{color:"blue"}}>/咳（せき)</span></h4></strong>
                    </Grid>
                    <Grid item xs={4} style={{ textAlign: "left"}}>
                        <FormControl component="fieldset">

                            <RadioGroup row aria-label="gender4" name="Cough" value={values.Cough} onChange={handleChange}>
                                <FormControlLabel value="true" control={<Radio />} label={t('internalMedcine.yes')} /><nav className="navCheckbox">{blue('/はい')}</nav>
                                <FormControlLabel value="false" control={<Radio />} label={t('internalMedcine.No')} /><nav className="navCheckbox">{blue(" /いいえ")}</nav>
                            </RadioGroup>
                        </FormControl>
                    </Grid>

                    <Grid item xs={8} style={{ textAlign: "left"}}>
                        <strong><h4 style={{ fontSize: 19 }}>{t('covid-19.Phlegm')}<br /> <span style={{color:"blue"}}>/痰（たん)</span></h4></strong>
                    </Grid>
                    <Grid item xs={4} style={{ textAlign: "left"}}>
                        <FormControl component="fieldset">

                            <RadioGroup row aria-label="gender5" name="Phlegm" value={values.Phlegm} onChange={handleChange}>
                                <FormControlLabel value="true" control={<Radio />} label={t('internalMedcine.yes') } /><nav className="navCheckbox">{blue(' /はい')}</nav>
                                <FormControlLabel value="false" control={<Radio />} label={t('internalMedcine.No') } /><nav className="navCheckbox">{blue(" /いいえ")}</nav>
                            </RadioGroup>
                        </FormControl>
                    </Grid>
                    <Grid item xs={8} style={{ textAlign: "left"}}>
                        <strong><h4 style={{ fontSize: 19 }}>{t('covid-19.Shortnessofbreath')}<br /> <span style={{color:"blue"}}>/息苦しい</span></h4></strong>
                    </Grid>
                    <Grid item xs={4} style={{ textAlign: "left"}}>
                        <FormControl component="fieldset">

                            <RadioGroup row aria-label="gender6" name="Shortnessofbreath" value={values.Shortnessofbreath} onChange={handleChange}>
                                <FormControlLabel value="true" control={<Radio />} label={t('internalMedcine.yes') } /><nav className="navCheckbox">{blue(' /はい')}</nav>
                                <FormControlLabel value="false" control={<Radio />} label={t('internalMedcine.No') } /><nav className="navCheckbox">{blue(" /いいえ")}</nav>
                            </RadioGroup>
                        </FormControl>
                    </Grid>

                    <Grid item xs={8} style={{ textAlign: "left"}}>
                        <strong><h4 style={{ fontSize: 19 }}>{t('covid-19.Senseoffatigue')}<br /> <span style={{color:"blue"}}>/倦怠感（強いだるさ）</span></h4></strong>
                    </Grid>
                    <Grid item xs={4} style={{ textAlign: "left"}}>
                        <FormControl component="fieldset">

                            <RadioGroup row aria-label="gender7" name="Senseoffatigue" value={values.Senseoffatigue} onChange={handleChange}>
                                <FormControlLabel value="true" control={<Radio />} label={t('internalMedcine.yes') } /><nav className="navCheckbox">{blue(' /はい')}</nav>
                                <FormControlLabel value="false" control={<Radio />} label={t('internalMedcine.No') } /><nav className="navCheckbox">{blue(" /いいえ")}</nav>
                            </RadioGroup>
                        </FormControl>
                    </Grid>

                    <Grid item xs={8} style={{ textAlign: "left"}}>
                        <strong><h4 style={{ fontSize: 19 }}>{t('covid-19.Abnormalityinthesenseofsmell')}<br /> <span style={{color:"blue"}}>/臭いがわかりにくい</span></h4></strong>
                    </Grid>
                    <Grid item xs={4} style={{ textAlign: "left"}}>
                        <FormControl component="fieldset">

                            <RadioGroup row aria-label="gender8" name="Abnormalityinthesenseofsmell" value={values.Abnormalityinthesenseofsmell} onChange={handleChange}>
                                <FormControlLabel value="true" control={<Radio />} label={t('internalMedcine.yes') } /><nav className="navCheckbox">{blue(' /はい')}</nav>
                                <FormControlLabel value="false" control={<Radio />} label={t('internalMedcine.No') } /><nav className="navCheckbox">{blue(" /いいえ")}</nav>
                            </RadioGroup>
                        </FormControl>
                    </Grid>

                    <Grid item xs={8} style={{ textAlign: "left"}}>
                        <strong><h4 style={{ fontSize: 19 }}>{t('covid-19.Unabletoappreciatetaste')}<br /> <span style={{color:"blue"}}>/ 食べ物や飲み物の味がわからない</span></h4></strong>
                    </Grid>
                    <Grid item xs={4} style={{ textAlign: "left"}}>
                        <FormControl component="fieldset">

                            <RadioGroup row aria-label="gender9" name="Unabletoappreciatetaste" value={values.Unabletoappreciatetaste} onChange={handleChange}>
                                <FormControlLabel value="true" control={<Radio />} label={t('internalMedcine.yes') } /><nav className="navCheckbox">{blue(' /はい')}</nav>
                                <FormControlLabel value="false" control={<Radio />} label={t('internalMedcine.No') } /><nav className="navCheckbox">{blue(" /いいえ")}</nav>
                            </RadioGroup>
                        </FormControl>
                    </Grid>

                    <Grid item xs={8} style={{ textAlign: "left"}}>
                        <strong><h4 style={{ fontSize: 19 }}>{t('covid-19.VomitingNausea')}<br /> <span style={{color:"blue"}}>/ 吐き気・嘔吐</span></h4></strong>
                    </Grid>
                    <Grid item xs={4} style={{ textAlign: "left"}}>
                        <FormControl component="fieldset">

                            <RadioGroup row aria-label="gender0" name="VomitingNausea" value={values.VomitingNausea} onChange={handleChange}>
                                <FormControlLabel value="true" control={<Radio />} label={t('internalMedcine.yes') } /><nav className="navCheckbox">{blue(' /はい')}</nav>
                                <FormControlLabel value="false" control={<Radio />} label={t('internalMedcine.No') } /><nav className="navCheckbox">{blue(" /いいえ")}</nav>
                            </RadioGroup>
                        </FormControl>
                    </Grid>

                    <Grid item xs={8} style={{ textAlign: "left"}}>
                        <strong><h4 style={{ fontSize: 19 }}>{t('covid-19.Diarrhea')}<br /> <span style={{color:"blue"}}>/ 下痢</span></h4></strong>
                    </Grid>
                    <Grid item xs={4} style={{ textAlign: "left"}}>
                        <FormControl component="fieldset">

                            <RadioGroup row aria-label="gender11" name="Diarrhea" value={values.Diarrhea} onChange={handleChange}>
                                <FormControlLabel value="true" control={<Radio />} label={t('internalMedcine.yes') } /><nav className="navCheckbox">{blue(' /はい')}</nav>
                                <FormControlLabel value="false" control={<Radio />} label={t('internalMedcine.No') } /><nav className="navCheckbox">{blue(" /いいえ")}</nav>
                            </RadioGroup>
                        </FormControl>
                    </Grid>

                    <Grid item xs={8} style={{ textAlign: "left"}}>
                        <strong><h4 style={{ fontSize: 19 }}>{t('covid-19.Noappetite')}<br /> <span style={{color:"blue"}}>/ 食欲がない</span></h4></strong>
                    </Grid>
                    <Grid item xs={4} style={{ textAlign: "left"}}>
                        <FormControl component="fieldset">

                            <RadioGroup row aria-label="gender12" name="Noappetite" value={values.Noappetite} onChange={handleChange}>
                                <FormControlLabel value="true" control={<Radio />} label={t('internalMedcine.yes') } /><nav className="navCheckbox">{blue(' /はい')}</nav>
                                <FormControlLabel value="false" control={<Radio />} label={t('internalMedcine.No') } /><nav className="navCheckbox">{blue(" /いいえ")}</nav>
                            </RadioGroup>
                        </FormControl>
                    </Grid>
                    <Grid item xs={12} style={{ textAlign: "right"}}>
                        <Button color="primary" variant="contained" style={{ width: 150 }} onClick={handleConfirm}>
                        {t('internalMedcine.confirm') }
                    </Button>
                    </Grid>
                </Grid>
            </div>
            <Footer />

        </div>
    );
}

export default Homepage;
