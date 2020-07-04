import React, { useState, useContext } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { useTranslation } from 'react-i18next';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import { ObstetricContext } from '../ObstetricgynecologyContext'

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
    },
    labelAligne: {
        textAlign: "left",
        marginLeft: 16
    },
    gridList: {
        width: 1000,

        textAlign: 'center',
        margin: 10,
        padding: 3
    },
    button: {
        marginRight: theme.spacing(1),
    },
    instructions: {
        marginTop: theme.spacing(1),
        marginBottom: theme.spacing(1),
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: 'black',
        backgroundColor: 'white',
    },
}));



const CenteredGrid = () => {
    const { t, i18n } = useTranslation();
    const [values, setValues] = useContext(ObstetricContext);
    const classes = useStyles();

    const handleChangeCheckSpecialRequest = (event) => {
        setValues({...values, menstrualPeriod:{...values.menstrualPeriod, [event.target.name]:event.target.checked} })
    };

    const update = (e) => {
        setValues({...values, menstrualPeriod:{...values.menstrualPeriod, [e.target.name]:e.target.value} })
       }

       const handleChange = (event) => {
        setValues({...values, menstrualPeriod :{...values.menstrualPeriod, usualFlow:event.target.value}})
    };

    return (
        <div className={classes.root}>
            <Grid container spacing={3} style={{ padding: 20 }}>
                <Grid item xs={12}>
                    <Paper className={classes.paper}><strong><h4>{t('obstetricGynecology.menstrualperiods')}<br />/月経についてお伺いします。</h4></strong></Paper>
                </Grid>
                <Grid className={classes.labelAligne} item xs={12}>
                    <h5>{t('obstetricGynecology.Howoldwereyouwhenyoustartedhavingyourperiod')} /月経がはじまったのはいつですか。</h5>
                </Grid>
                <Grid container item xs={6} style={{ marginLeft: 17, marginRight: 41 }}>
                    <FormControl fullWidth className='' style={{ marginTop: -30 }}>
                        <InputLabel htmlFor="ageStart">{t('obstetricGynecology.Whenyouwerearound')} /歳ごろ</InputLabel>
                        <Input
                            id="ageStart"
                            type="number"
                            values={values.menstrualPeriod.ageStart}
                            defaultValue={values.menstrualPeriod.ageStart}
                            onChange={update}
                            name="ageStart"
                        />
                    </FormControl>
                </Grid>

                <Grid className={classes.labelAligne} item xs={12}>
                    <h5>{t('obstetricGynecology.Howoldwereyouwhenyouhadyourlastperiod')} /月経が終わったのはいつですか。</h5>
                </Grid>
                <Grid container item xs={6} style={{ marginLeft: 17, marginRight: 41 }}>
                    <FormControl fullWidth className='' style={{ marginTop: -30 }}>
                        <InputLabel htmlFor="ageLast">{t('obstetricGynecology.Whenyouwerearound')} /歳ごろ</InputLabel>
                        <Input
                            id="ageLast"
                            type="number"
                            values={values.menstrualPeriod.ageLast}
                            defaultValue={values.menstrualPeriod.ageLast}
                            onChange={update}
                            name="ageLast"
                        />
                    </FormControl>
                </Grid>

                <Grid className={classes.labelAligne} item xs={12}>
                    <h5>{t('obstetricGynecology.Howmanydayslongisyourmenstrualcycle')} /月経周期は何日ですか。</h5>
                </Grid>
                <Grid item xs={6}>
                    <Grid container style={{ marginLeft: 17, marginRight: 41 }}>
                        <FormControl fullWidth className='' style={{ marginTop: -30 }}>
                            <InputLabel htmlFor="daysCycle">{t('obstetricGynecology.Daymenstrualcycle')} /日型</InputLabel>
                            <Input
                                id="daysCycle"
                                type="number"
                                values={values.menstrualPeriod.daysCycle}
                                defaultValue={values.menstrualPeriod.daysCycle}
                                onChange={update}
                                name="daysCycle"
                            />
                        </FormControl>
                    </Grid>
                    </Grid>

                    <Grid item xs={6}>
                    <FormControlLabel style={{ marginTop: -15 }}
                        control={
                            <Checkbox
                                checked={values.menstrualPeriod.irregular}
                                onChange={handleChangeCheckSpecialRequest}
                                name="irregular"
                            />
                        }
                        label={t('obstetricGynecology.Irregular')+'/不定期で不順'}
                    />
                </Grid>
                
                <Grid className={classes.labelAligne} item xs={12}>
                    <h5>{t('obstetricGynecology.Howmanydaysdoperiodslastonaverage')} /平均月経持続日数は何日ですか。</h5>
                </Grid>
                <Grid container item xs={6} style={{ marginLeft: 17, marginRight: 41 }}>
                    <FormControl fullWidth className='' style={{ marginTop: -30 }}>
                        <InputLabel htmlFor="periodsLast">{t('obstetricGynecology.Daylengthofyourmenstrualperiod')} /日間</InputLabel>
                        <Input
                            id="periodsLast"
                            type="number"
                            values={values.menstrualPeriod.periodsLast}
                            defaultValue={values.menstrualPeriod.periodsLast}
                            onChange={update}
                            name="periodsLast"
                        />
                    </FormControl>
                </Grid>

                <Grid className={classes.labelAligne} item xs={12}>
                    <h5>{t('obstetricGynecology.Whatisyourusualflow')} /月経の量はどのぐらいですか。</h5>
                </Grid>
                <Grid item xs={12}>
                    <FormControl component="fieldset" >

                        <RadioGroup style={{textAlign: "left", paddingLeft: 29, marginLeft: -18}} row aria-label="gender" name="gender1" value={values.menstrualPeriod.usualFlow} onChange={handleChange}>
                            <FormControlLabel value="Light" control={<Radio />} label={t('obstetricGynecology.Light')+" /少ない"}/>
                            <FormControlLabel value="Normal" control={<Radio />} label={t('obstetricGynecology.Normal')+" /普通"} />
                            <FormControlLabel value="Heavy" control={<Radio />} label={t('obstetricGynecology.Heavy')+"/多い"} />
                        </RadioGroup>
                    </FormControl>
                </Grid>
            </Grid>

        </div>
    )
}
export default CenteredGrid;