import React, { useState, useContext } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { useTranslation } from 'react-i18next';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import GridList from '@material-ui/core/GridList';
import FormControl from '@material-ui/core/FormControl';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import {
    MuiPickersUtilsProvider,
    KeyboardTimePicker,
    KeyboardDatePicker,
} from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import { MedContext } from '../internalMedContext'

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
    const symptomoccurs = [
        { name: t('internalMedcine.Morning') + "/ 朝", value: "Morning" },
        { name: t('internalMedcine.Daytime') + "/ 昼", value: "Daytime" },
        { name: t('internalMedcine.Evening') + "/ 夕方", value: "Evening" },
        { name: t('internalMedcine.Whileinbed') + "/ 就寝中", value: "Whileinbed" },
        { name: t('internalMedcine.Whenwakingup') + "/ 朝", value: "Whenwakingup" },
        { name: t('internalMedcine.Irregular') + "/ 朝", value: "Irregular" },
        { name: t('internalMedcine.Other') + "/ 朝", value: "Other" },
    ]

    const symptomlikes = [
        { name: t('internalMedcine.Constant') + "/ 絶え間なく、続いている", value: "Constant" },
        { name: t('internalMedcine.symptomcomesgoes') + "/ 症状が出たり消えたりしている", value: "symptomcomesgoes" },
        { name: t('internalMedcine.symptomgraduallyworsening') + "/ 絶え間なく、続いている", value: "symptomgraduallyworsening" },
        { name: t('internalMedcine.Other') + "/ その他", value: "Other" },
    ]

    const [values, setValues] = useContext(MedContext);
    const classes = useStyles();
    const [checkedSymptomoccurs, setCheckedSymptomoccurs] = React.useState([]);
    const [checkedSymptomlikes, setCheckedSymptomlikes] = React.useState([]);
    const [frequency, setFrequency] = React.useState('');
    const [date, setDate] = useState(new Date())
    const [time, setTime] = useState(new Date())

    const handleToggleSymptomlikes = (object) => () => {
        const currentIndex = values.symptomlike.indexOf(object.value);
        const newChecked = [...values.symptomlike];

        if (currentIndex === -1) {
            newChecked.push(object.value);
        } else {
            newChecked.splice(currentIndex, 1);
        }

        setCheckedSymptomlikes(newChecked);
        setValues({...values, symptomlike:newChecked})
    };

    const handleToggleSymptomoccurs = (object) => () => {
        const currentIndex = values.symptomoccur.indexOf(object.value);
        const newChecked = [...values.symptomoccur];

        if (currentIndex === -1) {
            newChecked.push(object.value);
        } else {
            newChecked.splice(currentIndex, 1);
        }

        setCheckedSymptomoccurs(newChecked);
        setValues({...values, symptomoccur:newChecked})
    };
    const updateFrequency = (event) => {
        setFrequency(event.target.value);
        setValues({...values, scale1to10:event.target.value});
    };

    const updateDate = (date) => {
        setDate(date)
        setValues({...values, symptomstart:date})
    }
    const updateTime = (time) => {
        setTime(time)
        setValues({...values, symtomstarttime:time})
    }

    return (
        <div>
            <div className={classes.root}>
                <Grid container spacing={3} style={{ padding: 20 }}>

                    <Grid item xs={12}>
                        <Paper className={classes.paper}><strong><h5>{t('internalMedcine.symptomoccur')}? <br />/症状はいつ頃起こりますか？</h5></strong></Paper>
                    </Grid>

                    <GridList style={{ height: 120, padding: 20 }} cellHeight={10} className={classes.gridList} cols={3}>
                        {symptomoccurs.map((value) => {
                            const labelId = `checkbox-list-label-${value.name}`;

                            return (
                                <ListItem key={value.name} role={undefined} dense button onClick={handleToggleSymptomoccurs(value)}>
                                    <ListItemIcon>
                                        <Checkbox
                                            edge="start"
                                            checked={values.symptomoccur.indexOf(value.value) !== -1}
                                            tabIndex={-1}
                                            disableRipple
                                            inputProps={{ 'aria-labelledby': labelId }}
                                        />
                                    </ListItemIcon>
                                    <ListItemText id={labelId} primary={`${value.name}`} />

                                </ListItem>
                            );
                        })}
                    </GridList>

                    <Grid item xs={12}>
                        <Paper className={classes.paper}><strong><h5>{t('internalMedcine.symptomlike')}? <br />/症状はどのような性質を持っていますか</h5></strong></Paper>
                    </Grid>

                    <GridList style={{ height: 90, padding: 20 }} cellHeight={10} className={classes.gridList} cols={3}>
                        {symptomlikes.map((value) => {
                            const labelId = `checkbox-list-label-${value.name}`;

                            return (
                                <ListItem key={value.name} role={undefined} dense button onClick={handleToggleSymptomlikes(value)}>
                                    <ListItemIcon>
                                        <Checkbox
                                            edge="start"
                                            checked={values.symptomlike.indexOf(value.value) !== -1}
                                            tabIndex={-1}
                                            disableRipple
                                            inputProps={{ 'aria-labelledby': labelId }}
                                        />
                                    </ListItemIcon>
                                    <ListItemText id={labelId} primary={`${value.name}`} />

                                </ListItem>
                            );
                        })}
                    </GridList>

                    <Grid item xs={12}>
                        <Paper className={classes.paper}><strong><h5>{t('internalMedcine.scale1to10')}<br />/その症状の程度を数字で表すと、どのぐらいですか？下の数字から選びなさい。</h5></strong></Paper>
                    </Grid>

                    <Grid item xs={6}>
                        <FormControl fullWidth xs={8} className={classes.formControl}>
                            <InputLabel id="demo-simple-select-label">Select</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={values.scale1to10}
                                onChange={updateFrequency}
                            >
                                <MenuItem value={1}>1</MenuItem>
                                <MenuItem value={2}>2</MenuItem>
                                <MenuItem value={3}>3</MenuItem>
                                <MenuItem value={4}>4</MenuItem>
                                <MenuItem value={5}>5</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>



                    <Grid item xs={12}>
                        <Paper className={classes.paper}><strong><h5>{t('internalMedcine.symptomstart')}?<br /> /この症状はいつからありますか</h5></strong></Paper>
                    </Grid>
                    <Grid item xs={6}>
                        <MuiPickersUtilsProvider utils={DateFnsUtils} >
                            <Grid container justify="space-around">

                                <KeyboardDatePicker
                                    xs={8}
                                    fullWidth
                                    margin="normal"
                                    id="date-picker-dialog"
                                    label={t('internalMedcine.Dateofbirth')}
                                    format="MM/dd/yyyy"
                                    value={values.symptomstart}
                                    onChange={updateDate}
                                    KeyboardButtonProps={{
                                        'aria-label': 'change date',
                                    }}
                                />
                                <KeyboardTimePicker
                                    xs={8}
                                    fullWidth
                                    margin="normal"
                                    id="time-picker"
                                    label="Time picker"
                                    value={values.symtomstarttime}
                                    onChange={updateTime}
                                    KeyboardButtonProps={{
                                        'aria-label': 'change time',
                                    }} />
                            </Grid>

                        </MuiPickersUtilsProvider>
                    </Grid>
                </Grid>

            </div>
        </div>
    );
}
export default CenteredGrid;