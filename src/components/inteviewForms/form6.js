import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import { Grid } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import { useTranslation } from 'react-i18next';
import Input from '@material-ui/core/Input';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import GridList from '@material-ui/core/GridList';
import FormLabel from '@material-ui/core/FormLabel';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';

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
    const [year, setYear] = useState('')
    const classes = useStyles();
    const [smokeregularly, setSmokeregularly] = React.useState('No');
    const [drinkregularly, setDrinkregularly] = React.useState('No');
    const [frequency, setFrequency] = React.useState('');
    const [frequencyDuration, setFrequencyDuration] = React.useState('');
    const [CheckDrink, setCheckDrink] = React.useState({
        checkedA: true,
        checkedB: true,
        checkedF: true,
        checkedG: true,
    });

    const handleChangeCheckDrink = (event) => {
        setCheckDrink({ ...CheckDrink, [event.target.name]: event.target.checked });
    };

    const handleChange = (event) => {
        setSmokeregularly(event.target.value);
    };

    const handleChangeDrink = (event) => {
        setDrinkregularly(event.target.value);
    };

    const updateFrequency = (event) => {
        setFrequency(event.target.value);
    };

    const updateFrequencyDuration = (event) => {
        setFrequencyDuration(event.target.value);
    };
    const updateYear = (e) => {
        setYear(e.target.value);
    }
    return (
        <div className={classes.root}>
            <Grid container spacing={3} style={{ padding: 20 }}>
                <Grid item xs={12}>
                    <Paper className={classes.paper}><strong><h5>{t('internalMedcine.smokeregularly')}? <br />/習慣的に、たばこを吸いますか。</h5></strong></Paper>
                </Grid>

                <Grid item xs={12}>
                    <FormControl component="fieldset">

                        <RadioGroup row aria-label="gender" name="gender1" value={smokeregularly} onChange={handleChange}>
                            <FormControlLabel value="Yes" control={<Radio />} label={t('internalMedcine.yes')} />
                            <FormControlLabel value="No" control={<Radio />} label={t('internalMedcine.No')} />
                            <FormControlLabel value="Yes1" control={<Radio />} label={t('internalMedcine.Usedtosmoke')} />
                        </RadioGroup>
                    </FormControl>
                </Grid>

                <Grid item xs={12} >

                    <div >
                        {(smokeregularly === 'Yes') || (smokeregularly === 'Yes1') ? (
                            <Grid container spacing={3} style={{ padding: 20 }} style={{ marginTop: -22, marginLeft: 18, marginRigh: 18, marginBottom: 18, paddingTop: 12, paddingBottom: 12, border: 'solid', borderTopWidth: 1, borderLeftWidth: 1, borderRightWidth: 1, borderBottomWidth: 1, backgroundColor: '#0000001a', borderRadius: 5, borderColor: 'black' }}>
                                <Grid item xs={6}>
                                    <FormControl fullWidth className={classes.formControl}>
                                        <InputLabel id="demo-simple-select-label">{t('internalMedcine.Cigaretteconsumption')} /喫煙量</InputLabel>
                                        <Select
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            value={frequency}
                                            onChange={updateFrequency}
                                        >
                                            <MenuItem value={1}>1</MenuItem>
                                            <MenuItem value={2}>2</MenuItem>
                                            <MenuItem value={3}>3</MenuItem>
                                            <MenuItem value={4}>4</MenuItem>
                                            <MenuItem value={5}>5</MenuItem>
                                        </Select>
                                        <nav>{t('internalMedcine.cigarettesDay')} 本/日</nav>
                                    </FormControl>
                                </Grid>

                                <Grid item xs={6}>
                                    <FormControl fullWidth className={classes.formControl}>
                                        <InputLabel id="demo-simple-select-label">{t('internalMedcine.Durationofsmoking')} /喫煙期間</InputLabel>
                                        <Select
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            value={frequencyDuration}
                                            onChange={updateFrequencyDuration}
                                        >
                                            <MenuItem value={1}>1</MenuItem>
                                            <MenuItem value={2}>2</MenuItem>
                                            <MenuItem value={3}>3</MenuItem>
                                            <MenuItem value={4}>4</MenuItem>
                                            <MenuItem value={5}>5</MenuItem>
                                        </Select>
                                        <nav>{t('internalMedcine.NoofYear')} /年</nav>
                                    </FormControl>
                                </Grid>
                                <Grid item xs={8}>
                                    <FormControl fullWidth className=''>
                                        <InputLabel htmlFor="name">{t('internalMedcine.yearStopSmooking')} /喫煙をやめた年</InputLabel>
                                        <Input
                                            id="name"
                                            type="text"
                                            values={year}
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

                        <RadioGroup row aria-label="gender" name="gender" value={drinkregularly} onChange={handleChangeDrink}>
                            <FormControlLabel value="Yes" control={<Radio />} label={t('internalMedcine.yes')} />
                            <FormControlLabel value="No" control={<Radio />} label={t('internalMedcine.No')} />
                            <FormControlLabel value="Yes1" control={<Radio />} label={t('internalMedcine.Usedtosmoke')} />
                        </RadioGroup>
                    </FormControl>
                </Grid>

                <Grid item xs={12} >

                    <div >
                        {(drinkregularly === 'Yes') || (drinkregularly === 'Yes1') ? (
                            <Grid container spacing={3} style={{ padding: 20 }} style={{ marginTop: -22, marginLeft: 18, marginRigh: 18, marginBottom: 18, paddingTop: 12, paddingBottom: 12, border: 'solid', borderTopWidth: 1, borderLeftWidth: 1, borderRightWidth: 1, borderBottomWidth: 1, backgroundColor: '#0000001a', borderRadius: 5, borderColor: 'black' }}>
                                <Grid item xs={6}>
                                    <FormControlLabel
                                        control={
                                            <Checkbox
                                                checked={CheckDrink.checkedB}
                                                onChange={handleChangeCheckDrink}
                                                name="checkedB"
                                                color="primary"
                                            />
                                        }
                                        label="Primary"
                                    />
                                </Grid>

                            </Grid>
                        ) : (
                                <nav> &apos; </nav>
                            )}
                    </div>

                </Grid>

            </Grid>
        </div>
    )
}
export default CenteredGrid;