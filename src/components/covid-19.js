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
import { Link } from 'react-router-dom'
import { Grid } from '@material-ui/core';

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
        color: 'black',
        backgroundColor: 'white',
    },
    content: {
        paddingBottom: "600px",
        paddingTop: "39px",

    }
}));

function Homepage() {
    const classes = useStyles();
    const { t, i18n } = useTranslation();
    const [values, setValues] = useContext(CovidContext);

    const handleChange = (event) => {
        setValues({ ...values, [event.target.name]: event.target.value })
    };

    
    const handleConfirm = () => {
        window.location = '/login';
    }

    return (
        <div className="container">
            <Nav />
            <div className="content" style={{ paddingRight: 30, paddingLeft: 30 }}>
                <br />
                <Grid className={classes.labelAligne} item xs={12}>
                    <strong><h3 style={{ textAlign: "center" }}>{t('covid-19.COVI-19Question')} <br />/新型コロナウイルス感染症に関する問診票</h3></strong>
                </Grid>
                <hr style={{ height: 2, borderWidth: 0, color: "gray", backgroundColor: "gray" }} />
                <Grid container spacing={3} style={{ padding: 5 }}>
                    <Grid className={classes.labelAligne} item xs={12}>
                        <Paper className={classes.paper}> <strong><h5>{t('covid-19.checkBoxApplicable')} /当てはまるものに○をつけてください（はい　いいえ）どちらかに〇印をつけてください）</h5></strong></Paper>
                    </Grid>

                    <Grid item xs={8} style={{ textAlign: "left"}}>
                        <strong><h4 style={{ fontSize: 19 }}>{t('covid-19.checkBoxApplicable1')}<br /> 2週間以内に、あなた、または、同居の家族が新型コロナウイルス感染者の⽅と⼀緒にいたことがありますか︖</h4></strong>
                    </Grid>
                    <Grid item xs={4} style={{ textAlign: "left"}}>
                        <FormControl component="fieldset">

                            <RadioGroup row aria-label="gender1" name="checkBoxApplicable1" value={values.checkBoxApplicable1} onChange={handleChange}>
                                <FormControlLabel value="true" control={<Radio />} label={t('internalMedcine.yes') + " /はい"} />
                                <FormControlLabel value="false" control={<Radio />} label={t('internalMedcine.No') + " /いいえ"} />
                            </RadioGroup>
                        </FormControl>
                    </Grid>

                    <Grid item xs={8} style={{ textAlign: "left"}}>
                        <strong><h4 style={{ fontSize: 19 }}>{t('covid-19.checkBoxApplicable2')}<br /> ２週間以内に、県外（海外含む）にいきましたか？</h4></strong>
                    </Grid>
                    <Grid item xs={4} style={{ textAlign: "left"}}>
                        <FormControl component="fieldset">

                            <RadioGroup row aria-label="gender" name="checkBoxApplicable2" value={values.checkBoxApplicable2} onChange={handleChange}>
                                <FormControlLabel value="true" control={<Radio />} label={t('internalMedcine.yes') + " /はい"} />
                                <FormControlLabel value="false" control={<Radio />} label={t('internalMedcine.No') + " /いいえ"} />
                            </RadioGroup>
                        </FormControl>
                    </Grid>

                    <Grid item xs={8} style={{ textAlign: "left"}}>
                        <strong><h4 style={{ fontSize: 19 }}>{t('covid-19.checkBoxApplicable3')}<br /> 2週間以内に、多⼈数が集まる換気の悪い密閉された場所（カラオケ、スナックなど）に⾏きましたか︖</h4></strong>
                    </Grid>
                    <Grid item xs={4} style={{ textAlign: "left"}}>
                        <FormControl component="fieldset">

                            <RadioGroup row aria-label="gender" name="checkBoxApplicable3" value={values.checkBoxApplicable3} onChange={handleChange}>
                                <FormControlLabel value="true" control={<Radio />} label={t('internalMedcine.yes') + " /はい"} />
                                <FormControlLabel value="false" control={<Radio />} label={t('internalMedcine.No') + " /いいえ"} />
                            </RadioGroup>
                        </FormControl>
                    </Grid>

                    <Grid className={classes.labelAligne} item xs={12}>
                        <Paper className={classes.paper}> <strong><h5>{t('covid-19.haveSymptoms')} /当てはまる症状がありますか？（はい　いいえ）どちらかに〇印をつけてください</h5></strong></Paper>
                    </Grid>

                    <Grid item xs={8} style={{ textAlign: "left"}}>
                        <strong><h4 style={{ fontSize: 19 }}>{t('covid-19.haveSymptoms1')}<br /> 発熱（37.5℃以上）</h4></strong>
                    </Grid>
                    <Grid item xs={4} style={{ textAlign: "left"}}>
                        <FormControl component="fieldset">

                            <RadioGroup row aria-label="gender" name="haveSymptoms1" value={values.haveSymptoms1} onChange={handleChange}>
                                <FormControlLabel value="true" control={<Radio />} label={t('internalMedcine.yes') + " /はい"} />
                                <FormControlLabel value="false" control={<Radio />} label={t('internalMedcine.No') + " /いいえ"} />
                            </RadioGroup>
                        </FormControl>
                    </Grid>

                    <Grid item xs={8} style={{ textAlign: "left"}}>
                        <strong><h4 style={{ fontSize: 19 }}>{t('covid-19.Cough')}<br /> /咳（せき)</h4></strong>
                    </Grid>
                    <Grid item xs={4} style={{ textAlign: "left"}}>
                        <FormControl component="fieldset">

                            <RadioGroup row aria-label="gender" name="Cough" value={values.Cough} onChange={handleChange}>
                                <FormControlLabel value="true" control={<Radio />} label={t('internalMedcine.yes') + " /はい"} />
                                <FormControlLabel value="false" control={<Radio />} label={t('internalMedcine.No') + " /いいえ"} />
                            </RadioGroup>
                        </FormControl>
                    </Grid>

                    <Grid item xs={8} style={{ textAlign: "left"}}>
                        <strong><h4 style={{ fontSize: 19 }}>{t('covid-19.Phlegm')}<br /> /痰（たん)</h4></strong>
                    </Grid>
                    <Grid item xs={4} style={{ textAlign: "left"}}>
                        <FormControl component="fieldset">

                            <RadioGroup row aria-label="gender" name="Phlegm" value={values.Phlegm} onChange={handleChange}>
                                <FormControlLabel value="true" control={<Radio />} label={t('internalMedcine.yes') + " /はい"} />
                                <FormControlLabel value="false" control={<Radio />} label={t('internalMedcine.No') + " /いいえ"} />
                            </RadioGroup>
                        </FormControl>
                    </Grid>
                    <Grid item xs={8} style={{ textAlign: "left"}}>
                        <strong><h4 style={{ fontSize: 19 }}>{t('covid-19.Shortnessofbreath')}<br /> /息苦しい</h4></strong>
                    </Grid>
                    <Grid item xs={4} style={{ textAlign: "left"}}>
                        <FormControl component="fieldset">

                            <RadioGroup row aria-label="gender" name="Shortnessofbreath" value={values.Shortnessofbreath} onChange={handleChange}>
                                <FormControlLabel value="true" control={<Radio />} label={t('internalMedcine.yes') + " /はい"} />
                                <FormControlLabel value="false" control={<Radio />} label={t('internalMedcine.No') + " /いいえ"} />
                            </RadioGroup>
                        </FormControl>
                    </Grid>

                    <Grid item xs={8} style={{ textAlign: "left"}}>
                        <strong><h4 style={{ fontSize: 19 }}>{t('covid-19.Senseoffatigue')}<br /> /倦怠感（強いだるさ）</h4></strong>
                    </Grid>
                    <Grid item xs={4} style={{ textAlign: "left"}}>
                        <FormControl component="fieldset">

                            <RadioGroup row aria-label="gender" name="Senseoffatigue" value={values.Senseoffatigue} onChange={handleChange}>
                                <FormControlLabel value="true" control={<Radio />} label={t('internalMedcine.yes') + " /はい"} />
                                <FormControlLabel value="false" control={<Radio />} label={t('internalMedcine.No') + " /いいえ"} />
                            </RadioGroup>
                        </FormControl>
                    </Grid>

                    <Grid item xs={8} style={{ textAlign: "left"}}>
                        <strong><h4 style={{ fontSize: 19 }}>{t('covid-19.Abnormalityinthesenseofsmell')}<br /> /臭いがわかりにくい</h4></strong>
                    </Grid>
                    <Grid item xs={4} style={{ textAlign: "left"}}>
                        <FormControl component="fieldset">

                            <RadioGroup row aria-label="gender" name="Abnormalityinthesenseofsmell" value={values.Abnormalityinthesenseofsmell} onChange={handleChange}>
                                <FormControlLabel value="true" control={<Radio />} label={t('internalMedcine.yes') + " /はい"} />
                                <FormControlLabel value="false" control={<Radio />} label={t('internalMedcine.No') + " /いいえ"} />
                            </RadioGroup>
                        </FormControl>
                    </Grid>

                    <Grid item xs={8} style={{ textAlign: "left"}}>
                        <strong><h4 style={{ fontSize: 19 }}>{t('covid-19.Unabletoappreciatetaste')}<br /> / 食べ物や飲み物の味がわからない</h4></strong>
                    </Grid>
                    <Grid item xs={4} style={{ textAlign: "left"}}>
                        <FormControl component="fieldset">

                            <RadioGroup row aria-label="gender" name="Unabletoappreciatetaste" value={values.Unabletoappreciatetaste} onChange={handleChange}>
                                <FormControlLabel value="true" control={<Radio />} label={t('internalMedcine.yes') + " /はい"} />
                                <FormControlLabel value="false" control={<Radio />} label={t('internalMedcine.No') + " /いいえ"} />
                            </RadioGroup>
                        </FormControl>
                    </Grid>

                    <Grid item xs={8} style={{ textAlign: "left"}}>
                        <strong><h4 style={{ fontSize: 19 }}>{t('covid-19.VomitingNausea')}<br /> / 吐き気・嘔吐</h4></strong>
                    </Grid>
                    <Grid item xs={4} style={{ textAlign: "left"}}>
                        <FormControl component="fieldset">

                            <RadioGroup row aria-label="gender" name="VomitingNausea" value={values.VomitingNausea} onChange={handleChange}>
                                <FormControlLabel value="true" control={<Radio />} label={t('internalMedcine.yes') + " /はい"} />
                                <FormControlLabel value="false" control={<Radio />} label={t('internalMedcine.No') + " /いいえ"} />
                            </RadioGroup>
                        </FormControl>
                    </Grid>

                    <Grid item xs={8} style={{ textAlign: "left"}}>
                        <strong><h4 style={{ fontSize: 19 }}>{t('covid-19.Diarrhea')}<br /> / 下痢</h4></strong>
                    </Grid>
                    <Grid item xs={4} style={{ textAlign: "left"}}>
                        <FormControl component="fieldset">

                            <RadioGroup row aria-label="gender" name="Diarrhea" value={values.Diarrhea} onChange={handleChange}>
                                <FormControlLabel value="true" control={<Radio />} label={t('internalMedcine.yes') + " /はい"} />
                                <FormControlLabel value="false" control={<Radio />} label={t('internalMedcine.No') + " /いいえ"} />
                            </RadioGroup>
                        </FormControl>
                    </Grid>

                    <Grid item xs={8} style={{ textAlign: "left"}}>
                        <strong><h4 style={{ fontSize: 19 }}>{t('covid-19.Noappetite')}<br /> / 食欲がない</h4></strong>
                    </Grid>
                    <Grid item xs={4} style={{ textAlign: "left"}}>
                        <FormControl component="fieldset">

                            <RadioGroup row aria-label="gender" name="Noappetite" value={values.Noappetite} onChange={handleChange}>
                                <FormControlLabel value="true" control={<Radio />} label={t('internalMedcine.yes') + " /はい"} />
                                <FormControlLabel value="false" control={<Radio />} label={t('internalMedcine.No') + " /いいえ"} />
                            </RadioGroup>
                        </FormControl>
                    </Grid>
                    <Grid item xs={12} style={{ textAlign: "right"}}>
                        <Button color="primary" variant="contained" style={{ width: 150 }} onClick={handleConfirm}>
                            Confirm
                    </Button>
                    </Grid>
                </Grid>
            </div>
            <Footer />

        </div>
    );
}

export default Homepage;
