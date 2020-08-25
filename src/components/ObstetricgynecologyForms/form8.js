import React, { useEffect, useState, useContext } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import { Grid } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import { useTranslation } from 'react-i18next';
import Input from '@material-ui/core/Input';
import Checkbox from '@material-ui/core/Checkbox';
import FormHelperText from '@material-ui/core/FormHelperText';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import { ObstetricContext } from '../ObstetricgynecologyContext';
import UserContext from '../context/UserContext';
import Axios from "axios";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
    },
    gridList: {
        width: 1000,

        textAlign: 'center',
        margin: 10,
        padding: 5
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
    },
}));

const CenteredGrid = () => {
    const { t, i18n } = useTranslation();
    const [values, setValues] = useContext(ObstetricContext);
    const [year, setYear] = useState('')
    const classes = useStyles();
    const [smokeregularly, setSmokeregularly] = React.useState('No');
    const [drinkregularly, setDrinkregularly] = React.useState('No');
    const [frequency, setFrequency] = React.useState('');
    const [frequencyDuration, setFrequencyDuration] = React.useState('');
    const [CheckDrink, setCheckDrink] = React.useState({
        beer: false,
        wisky: false,
        japsake: false,
        wine: false,
        others: false
    });
    const [beerfrequency, setBeerFrequency] = React.useState('');
    const [wiskyfrequency, setWiskyFrequency] = React.useState('');
    const [japsakefrequency, setJapsakeFrequency] = React.useState('');
    const [winefrequency, setWineFrequency] = React.useState('');
    const [othersfrequency, setOthersFrequency] = React.useState('');
    const { userData } = useContext(UserContext);
    const history = useHistory();

    useEffect(() => {
        if (!userData.user) history.push("/login1");
    });

    const authAxios = Axios.create({
        baseURL: "http://localhost:3001",
        headers: {
            'x-auth-token': userData.token,
        },
    });

    const logFunction = async (question) => {
        const loginfo = {
            inteviewName: "Obstetric and Gynecology form 3",
            //userName: userData.user.userName,
            language: i18n.language,
            contentSentence: question,
            date: new Date,
            userId: userData.user.id,
        };
        const loginInput = await authAxios.post(
            "/logfile/insert",
            loginfo
        );
    }

    const handleChangeCheckDrink = (event) => {
        const variable = event.target.name;
        //setCheckDrink({ ...CheckDrink, [event.target.name]: event.target.checked });
        setValues({ ...values, drinkeday: { ...values.drinkeday, [event.target.name]: event.target.checked } })
        // console.log([event.target.name])
        if ([event.target.name] == "beer") {
            logFunction(t('internalMedcine.Beer'));
        }
        if ([event.target.name] == "wisky") {
            logFunction(t('internalMedcine.Whisky'));
        }
        if ([event.target.name] == "japsake") {
            logFunction(t('internalMedcine.Japanesesake'));
        }
        if ([event.target.name] == "wine") {
            logFunction(t('internalMedcine.Wine'));
        }
        if ([event.target.name] == "other") {
            logFunction(t('internalMedcine.Other'));
        }
    };

    const updateBeerFrequency = (event) => {
        setBeerFrequency(event.target.value);
        setValues({ ...values, drinkeday: { ...values.drinkeday, nobeer: event.target.value } });
        logFunction("Quantity of beer");
    };

    const updateWiskyFrequency = (event) => {
        setWiskyFrequency(event.target.value);
        setValues({ ...values, drinkeday: { ...values.drinkeday, nowisky: event.target.value } });
        logFunction("Quantity of wisky");
    };

    const updateJapsakeFrequency = (event) => {
        setJapsakeFrequency(event.target.value);
        setValues({ ...values, drinkeday: { ...values.drinkeday, nojapsake: event.target.value } });
        logFunction("Quantity of Japanese sake");
    };

    const updateWineFrequency = (event) => {
        setWineFrequency(event.target.value);
        setValues({ ...values, drinkeday: { ...values.drinkeday, nowine: event.target.value } });
        logFunction("Quantity of Japanese sake");
    };

    const updateOthersFrequency = (event) => {
        setOthersFrequency(event.target.value);
        setValues({ ...values, drinkeday: { ...values.drinkeday, noOther: event.target.value } });
        logFunction("Quantity of Japanese sake");
    };

    const handleChange = (event) => {
        setSmokeregularly(event.target.value);
        setValues({ ...values, smokeregularly: event.target.value });
        logFunction(t('internalMedcine.smokeregularly'));
    };

    const handleChangeDrink = (event) => {
        setDrinkregularly(event.target.value);
        setValues({ ...values, drinkregularly: event.target.value });
        logFunction(t('internalMedcine.drinkregularly'));
    };

    const updateFrequency = (event) => {
        setFrequency(event.target.value);
        setValues({ ...values, smokeday: { ...values.smokeday, amount: event.target.value } });
        logFunction(t('internalMedcine.cigarettesDay'));
    };

    const updateFrequencyDuration = (event) => {
        setFrequencyDuration(event.target.value);
        setValues({ ...values, smokeday: { ...values.smokeday, duration: event.target.value } });
        logFunction(t('internalMedcine.Cigaretteconsumption'));
    };
    const updateYear = (event) => {
        setYear(event.target.value);
        setValues({ ...values, smokeday: { ...values.smokeday, yearStop: event.target.value } });
        logFunction(t('internalMedcine.yearStopSmooking'));
    }

    const handleChangeCheckSpecialRequest = (event) => {
        //setSpecialRequest({ ...SpecialRequest, [event.target.name]: event.target.checked });
        setValues({ ...values, [event.target.name]: event.target.checked });
        if ([event.target.name] == "medicalexpenses") {
            logFunction(t('internalMedcine.informedonestimatedexpenses'));
        }
        if ([event.target.name] == "haveinterpreter") {
            logFunction(t('internalMedcine.interpreterinterpreterservice'));
        }
        if ([event.target.name] == "otherssss") {
            logFunction(t('internalMedcine.Other'));
        }
    };
    console.log(values)

    return (
        <div className={classes.root}>
            <Grid container spacing={3} style={{ padding: 20 }}>
                <Grid item xs={12}>
                    <Paper className={classes.paper}><strong><h5>{t('internalMedcine.smokeregularly')}? <br />/習慣的に、たばこを吸いますか。</h5></strong></Paper>
                </Grid>

                <Grid item xs={12}>
                    <FormControl component="fieldset">

                        <RadioGroup row aria-label="gender" name="gender1" value={values.smokeregularly} onChange={handleChange}>
                            <FormControlLabel value="Yes" control={<Radio />} label={t('internalMedcine.yes')} />
                            <FormControlLabel value="No" control={<Radio />} label={t('internalMedcine.No')} />
                            <FormControlLabel value="YesUseTo" control={<Radio />} label={t('internalMedcine.Usedtosmoke')} />
                        </RadioGroup>
                    </FormControl>
                </Grid>

                <Grid item xs={12} >

                    <div >
                        {(values.smokeregularly === 'Yes') || (values.smokeregularly === 'YesUseTo') ? (
                            <Grid className="shadow" container spacing={3} style={{ padding: 20 }} style={{ paddingLeft: 16, marginTop: -22, marginRigh: 18, marginBottom: 18, paddingTop: 12, paddingBottom: 12, border: 'solid', borderTopWidth: 1, borderLeftWidth: 1, borderRightWidth: 1, borderBottomWidth: 1, backgroundColor: '#0000001a', borderRadius: 5, borderColor: 'black' }}>
                                <Grid item xs={6}>
                                    <FormControl fullWidth className={classes.formControl}>
                                        <InputLabel id="demo-simple-select-label">{t('internalMedcine.Cigaretteconsumption')} /喫煙量</InputLabel>
                                        <Select
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            value={values.smokeday.amount}
                                            onChange={updateFrequency}
                                        >
                                            <MenuItem value={1}>1</MenuItem>
                                            <MenuItem value={2}>2</MenuItem>
                                            <MenuItem value={3}>3</MenuItem>
                                            <MenuItem value={4}>4</MenuItem>
                                            <MenuItem value={5}>5</MenuItem>
                                        </Select>
                                        <FormHelperText>{t('internalMedcine.cigarettesDay')} 本/日</FormHelperText>

                                    </FormControl>
                                </Grid>

                                <Grid item xs={6}>
                                    <FormControl fullWidth className={classes.formControl}>
                                        <InputLabel id="demo-simple-select-label">{t('internalMedcine.Durationofsmoking')} /喫煙期間</InputLabel>
                                        <Select
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            value={values.smokeday.duration}
                                            onChange={updateFrequencyDuration}
                                        >
                                            <MenuItem value={1}>1</MenuItem>
                                            <MenuItem value={2}>2</MenuItem>
                                            <MenuItem value={3}>3</MenuItem>
                                            <MenuItem value={4}>4</MenuItem>
                                            <MenuItem value={5}>5</MenuItem>
                                        </Select>
                                        <FormHelperText>{t('internalMedcine.NoofYear')} /年</FormHelperText>
                                    </FormControl>
                                </Grid>
                                <Grid item xs={8}>
                                    <FormControl fullWidth className=''>
                                        <InputLabel htmlFor="name">{t('internalMedcine.yearStopSmooking')} /喫煙をやめた年</InputLabel>
                                        <Input
                                            id="name"
                                            type="number"
                                            values={values.smokeday.yearStop}
                                            defaultValue={values.smokeday.yearStop}
                                            onChange={updateYear}
                                        />
                                    </FormControl>
                                </Grid>


                            </Grid>
                        ) : (
                                <nav> &apos; </nav>
                            )}
                    </div>

                </Grid>

                <Grid item xs={12}>
                    <Paper className={classes.paper}><strong><h5>{t('internalMedcine.drinkregularly')}? <br />/習慣的にお酒を飲みますか</h5></strong></Paper>
                </Grid>

                <Grid item xs={12}>
                    <FormControl component="fieldset">

                        <RadioGroup row aria-label="gender" name="gender" value={values.drinkregularly} onChange={handleChangeDrink}>
                            <FormControlLabel value="Yes" control={<Radio />} label={t('internalMedcine.yes')} />
                            <FormControlLabel value="No" control={<Radio />} label={t('internalMedcine.No')} />
                            <FormControlLabel value="YesUseToSmook" control={<Radio />} label={t('internalMedcine.Usedtosmoke')} />
                        </RadioGroup>
                    </FormControl>
                </Grid>

                <Grid item xs={12} >

                    <div >
                        {(values.drinkregularly === 'Yes') || (values.drinkregularly === 'YesUseToSmook') ? (
                            <Grid className="shadow" container spacing={3} style={{ padding: 20 }} style={{ paddingLeft: 16, marginTop: -22, marginRigh: 18, marginBottom: 18, paddingTop: 12, paddingBottom: 12, border: 'solid', borderTopWidth: 1, borderLeftWidth: 1, borderRightWidth: 1, borderBottomWidth: 1, backgroundColor: '#0000001a', borderRadius: 5, borderColor: 'black' }}>

                                <Grid container item xs={3}>
                                    <FormControlLabel
                                        control={
                                            <Checkbox
                                                checked={values.drinkeday.beer}
                                                onChange={handleChangeCheckDrink}
                                                name="beer"
                                            />
                                        }
                                        label={t('internalMedcine.Beer')}
                                    />
                                </Grid>
                                <Grid container item xs={3}>
                                    <FormControl fullWidth className={classes.formControl} style={{ marginTop: -13, marginLeft: -146 }}>
                                        <InputLabel id="demo-simple-select-label">ml /Day/日</InputLabel>
                                        <Select
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            value={values.drinkeday.nobeer}
                                            onChange={updateBeerFrequency}
                                        >
                                            <MenuItem value={1}>1</MenuItem>
                                            <MenuItem value={2}>2</MenuItem>
                                            <MenuItem value={3}>3</MenuItem>
                                            <MenuItem value={4}>4</MenuItem>
                                            <MenuItem value={5}>5</MenuItem>
                                        </Select>
                                    </FormControl>
                                </Grid>



                                <Grid container item xs={3}>
                                    <FormControlLabel
                                        control={
                                            <Checkbox
                                                checked={values.drinkeday.wisky}
                                                onChange={handleChangeCheckDrink}
                                                name="wisky"
                                            />
                                        }
                                        label={t('internalMedcine.Whisky')}
                                    />
                                </Grid>
                                <Grid container item xs={3}>
                                    <FormControl fullWidth className={classes.formControl} style={{ marginTop: -13, marginLeft: -130 }}>
                                        <InputLabel id="demo-simple-select-label">ml /Day/日</InputLabel>
                                        <Select
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            value={values.drinkeday.nowisky}
                                            onChange={updateWiskyFrequency}
                                        >
                                            <MenuItem value={1}>1</MenuItem>
                                            <MenuItem value={2}>2</MenuItem>
                                            <MenuItem value={3}>3</MenuItem>
                                            <MenuItem value={4}>4</MenuItem>
                                            <MenuItem value={5}>5</MenuItem>
                                        </Select>
                                    </FormControl>
                                </Grid>

                                <Grid container item xs={3}>
                                    <FormControlLabel
                                        control={
                                            <Checkbox
                                                checked={values.drinkeday.japsake}
                                                onChange={handleChangeCheckDrink}
                                                name="japsake"
                                            />
                                        }
                                        label={t('internalMedcine.Japanesesake')}
                                    />
                                </Grid>
                                <Grid container item xs={3}>
                                    <FormControl fullWidth className={classes.formControl} style={{ marginTop: -13, marginLeft: -68 }}>
                                        <InputLabel id="demo-simple-select-label">ml /Day/日</InputLabel>
                                        <Select
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            value={values.drinkeday.nojapsake}
                                            onChange={updateJapsakeFrequency}
                                        >
                                            <MenuItem value={1}>1</MenuItem>
                                            <MenuItem value={2}>2</MenuItem>
                                            <MenuItem value={3}>3</MenuItem>
                                            <MenuItem value={4}>4</MenuItem>
                                            <MenuItem value={5}>5</MenuItem>
                                        </Select>
                                    </FormControl>
                                </Grid>

                                <Grid container item xs={3}>
                                    <FormControlLabel
                                        control={
                                            <Checkbox
                                                checked={values.drinkeday.wine}
                                                onChange={handleChangeCheckDrink}
                                                name="wine"
                                            />
                                        }
                                        label={t('internalMedcine.Wine')}
                                    />
                                </Grid>
                                <Grid container item xs={3}>
                                    <FormControl fullWidth className={classes.formControl} style={{ marginTop: -13, marginLeft: -146 }}>
                                        <InputLabel id="demo-simple-select-label">ml /Day/日</InputLabel>
                                        <Select
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            value={values.drinkeday.nowine}
                                            onChange={updateWineFrequency}
                                        >
                                            <MenuItem value={1}>1</MenuItem>
                                            <MenuItem value={2}>2</MenuItem>
                                            <MenuItem value={3}>3</MenuItem>
                                            <MenuItem value={4}>4</MenuItem>
                                            <MenuItem value={5}>5</MenuItem>
                                        </Select>
                                    </FormControl>
                                </Grid>

                                <Grid container item xs={3}>
                                    <FormControlLabel
                                        control={
                                            <Checkbox
                                                checked={values.drinkeday.other}
                                                onChange={handleChangeCheckDrink}
                                                name="other"
                                            />
                                        }
                                        label={t('internalMedcine.Other')}
                                    />
                                </Grid>
                                <Grid container item xs={3}>
                                    <FormControl fullWidth className={classes.formControl} style={{ marginTop: -13, marginLeft: -146 }}>
                                        <InputLabel id="demo-simple-select-label">ml /Day/日</InputLabel>
                                        <Select
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            value={values.drinkeday.noOther}
                                            onChange={updateOthersFrequency}
                                        >
                                            <MenuItem value={1}>1</MenuItem>
                                            <MenuItem value={2}>2</MenuItem>
                                            <MenuItem value={3}>3</MenuItem>
                                            <MenuItem value={4}>4</MenuItem>
                                            <MenuItem value={5}>5</MenuItem>
                                        </Select>
                                    </FormControl>
                                </Grid>

                            </Grid>
                        ) : (
                                <nav> &apos; </nav>
                            )}
                    </div>

                </Grid>

                <Grid item xs={12}>
                    <Paper className={classes.paper}><strong><h5>{t('internalMedcine.specialrequestconcerningconsultation')}? <br />/診察でのご希望がある場合は、☑をしてください。</h5></strong></Paper>
                </Grid>

                <Grid container item xs={12}>
                    <FormControlLabel
                        control={
                            <Checkbox
                                checked={values.medicalexpenses}
                                onChange={handleChangeCheckSpecialRequest}
                                name="medicalexpenses"
                            />
                        }
                        label={t('internalMedcine.informedonestimatedexpenses')}
                    />
                </Grid>

                <Grid container item xs={12}>
                    <FormControlLabel
                        control={
                            <Checkbox
                                checked={values.haveinterpreter}
                                onChange={handleChangeCheckSpecialRequest}
                                name="haveinterpreter"
                            />
                        }
                        label={t('internalMedcine.interpreterinterpreterservice')}
                    />
                </Grid>

                <Grid container item xs={12}>
                    <FormControlLabel
                        control={
                            <Checkbox
                                checked={values.otherssss}
                                onChange={handleChangeCheckSpecialRequest}
                                name="otherssss"
                            />
                        }
                        label={t('internalMedcine.Other') + '(s)/その他'}
                    />
                </Grid>
            </Grid>
        </div>
    )
}
export default CenteredGrid;