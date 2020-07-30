import React, { useState, useContext } from 'react'
import { useForm } from "react-hook-form";
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { useTranslation } from 'react-i18next';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import { ObstetricContext } from '../ObstetricgynecologyContext';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import GridList from '@material-ui/core/GridList';
import FormLabel from '@material-ui/core/FormLabel';
import DateFnsUtils from '@date-io/date-fns';
import Button from '@material-ui/core/Button';
import {
    MuiPickersUtilsProvider,
    KeyboardTimePicker,
    KeyboardDatePicker,
} from '@material-ui/pickers';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
    },
    button: {
        marginRight: theme.spacing(1),
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

    const problem = [
        { name: 'Hypertension /高血圧', value: 'Hypertension' },
        { name: 'Diabetes mellitus /糖尿病', value: 'Diabetes mellitus' },
        { name: 'Swelling /むくみ', value: 'Swelling' },
        { name: 'Threatened prematuredelivery /切迫早産', value: 'Threatened prematuredelivery' },
        { name: 'Had a problem with blood clotting/出血が止まりにくかった', value: 'Had a problem with blood clotting' },
        { name: 'Convulsion /けいれん', value: 'Convulsion' },
        { name: 'Other(s)/その他', value: 'Other(s)' },
    ]

    const symptomLikeValue = [
        { name: 'Constant/絶え間なく、続いている', value: 'Constant' },
        { name: 'The symptom comes and goes./症状が出たり、消えたりしている', value: 'The symptom comes and goes' },
        { name: 'The symptom is gradually worsening./徐々にひどくなっている', value: 'The symptom is gradually worsening' },
        { name: 'Other(s)/その他', value: 'Other(s)' },
    ]

    const { t, i18n } = useTranslation();
    const classes = useStyles();
    const [values, setValues] = useContext(ObstetricContext);

    const handleChange = (event) => {
        setValues({ ...values, [event.target.name]: event.target.value })
    };

    const handleToggleProblem = (value) => () => {
        const currentIndex = values.problemDelivery.indexOf(value.value);
        const newChecked = [...values.problemDelivery];

        if (currentIndex === -1) {
            newChecked.push(value.value);
        } else {
            newChecked.splice(currentIndex, 1);
        }

        setValues({ ...values, problemDelivery: newChecked })
    };

    const handleToggleProblemSymptomLikeValue = (value) => () => {
        const currentIndex = values.symptomLikeValue.indexOf(value.value);
        const newChecked = [...values.symptomLikeValue];

        if (currentIndex === -1) {
            newChecked.push(value.value);
        } else {
            newChecked.splice(currentIndex, 1);
        }

        setValues({ ...values, symptomLikeValue: newChecked })
    };

    const updateDate = (date) => {
        //setDate(date)
        setValues({ ...values, symptomstartDate: date })
    }
    const updateTime = (time) => {
        //setTime(time)
        setValues({ ...values, symtomstarttime: time })
    }

    return (
        <div className={classes.root}>
            <Grid container spacing={3} style={{ padding: 20 }}>
                <Grid item xs={12}>
                    <Paper className={classes.paper}><strong ><h4 style={{ fontSize: 19, lineHeight: 1.5 }}>{t('obstetricGynecology.problemDuringDelivery')}<br />/過去に妊娠中・分娩時などの異常はありましたか。</h4></strong></Paper>
                </Grid>
                <Grid item xs={12} style={{ textAlign: "center", paddingLeft: 48, marginLeft: -18, marginTop: -19 }}>
                    <FormControl component="fieldset">

                        <RadioGroup row aria-label="gender" name="problemDuringDelivery" value={values.problemDuringDelivery} onChange={handleChange}>
                            <FormControlLabel value="true" control={<Radio />} label={t('internalMedcine.yes') + " /はい"} />
                            <FormControlLabel value="false" control={<Radio />} label={t('internalMedcine.No') + " /いいえ"} />
                        </RadioGroup>
                    </FormControl>
                </Grid>

                {values.problemDuringDelivery === 'true' ? (
                    <div>
                        <GridList container style={{ height: 155, padding: 20 }} cellHeight={10} className={classes.gridList} cols={3}>
                            {problem.map((value) => {
                                const labelId = `checkbox-list-label-${value.name}`;

                                return (
                                    <ListItem key={value.name} role={undefined} dense button onClick={handleToggleProblem(value)}>
                                        <ListItemIcon className={classes.ListItemIcon}>
                                            <Checkbox
                                                edge="start"
                                                checked={values.problemDelivery.indexOf(value.value) !== -1}
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
                    </div>

                ) : (
                        <nav> &apos; </nav>
                    )}
                <Grid item xs={12}>
                    <Paper className={classes.paper}><strong ><h4 style={{ fontSize: 19, lineHeight: 1.5 }}>{t('obstetricGynecology.haveBabyAtThisHuspital')}<br />/妊娠の方は当院での出産を希望されますか。</h4></strong></Paper>
                </Grid>
                <Grid item xs={12} style={{ textAlign: "center", paddingLeft: 48, marginLeft: -18, marginTop: -19 }}>
                    <FormControl component="fieldset">

                        <RadioGroup row aria-label="gender" name="haveBabyAtThisHuspital" value={values.haveBabyAtThisHuspital} onChange={handleChange}>
                            <FormControlLabel value="true" control={<Radio />} label={t('internalMedcine.yes') + " /はい"} />
                            <FormControlLabel value="false" control={<Radio />} label={t('internalMedcine.No') + " /いいえ"} />
                        </RadioGroup>
                    </FormControl>
                </Grid>
                <Grid item xs={12}>
                    <Paper className={classes.paper}><strong ><h4 style={{ fontSize: 19, lineHeight: 1.5 }}>{t('obstetricGynecology.symptomLike')}<br />/症状はどのような性質を持っていますか。</h4></strong></Paper>
                </Grid>
                <Grid item xs={12} style={{ textAlign: "center", paddingLeft: 48, marginLeft: -18, marginTop: -19 }}>
                    <FormControl component="fieldset">

                        <RadioGroup row aria-label="gender" name="symptomLike" value={values.symptomLike} onChange={handleChange}>
                            <FormControlLabel value="true" control={<Radio />} label={t('internalMedcine.yes') + " /はい"} />
                            <FormControlLabel value="false" control={<Radio />} label={t('internalMedcine.No') + " /いいえ"} />
                        </RadioGroup>
                    </FormControl>
                </Grid>

                {values.symptomLike === 'true' ? (
                    <div>
                        <GridList container style={{ height: 155, padding: 20 }} cellHeight={10} className={classes.gridList} cols={3}>
                            {symptomLikeValue.map((value) => {
                                const labelId = `checkbox-list-label-${value.name}`;

                                return (
                                    <ListItem key={value.name} role={undefined} dense button onClick={handleToggleProblemSymptomLikeValue(value)}>
                                        <ListItemIcon className={classes.ListItemIcon}>
                                            <Checkbox
                                                edge="start"
                                                checked={values.symptomLikeValue.indexOf(value.value) !== -1}
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
                    </div>

                ) : (
                        <nav> &apos; </nav>
                    )}

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
                                value={values.symptomstartDate}
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
    )
}
export default CenteredGrid;