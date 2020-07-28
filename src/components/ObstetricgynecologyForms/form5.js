import React, { useState, useContext } from 'react'
import { useForm } from "react-hook-form";
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
import FormLabel from '@material-ui/core/FormLabel';
import DateFnsUtils from '@date-io/date-fns';
import Button from '@material-ui/core/Button';
import {
    MuiPickersUtilsProvider,
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
    const { t, i18n } = useTranslation();
    const classes = useStyles();
    const [values, setValues] = useContext(ObstetricContext);
    const blankPregnancyInformation = { date: new Date(), delivery: '', hadMiscarriage: '', hadAbnomalPregnancy: '', weeksPregnancy: '' };
    
    const [indexes, setIndexes] = React.useState([
        { ...blankPregnancyInformation }
    ]);
    const [counter, setCounter] = React.useState(0);
    const { register, handleSubmit } = useForm();

    const addFriend = () => {
        setIndexes(prevIndexes => [...prevIndexes, counter]);
        setCounter(prevCounter => prevCounter + 1);
    };

    const removeFriend = index => () => {
        setIndexes(prevIndexes => [...prevIndexes.filter(item => item !== index)]);
        setCounter(prevCounter => prevCounter - 1);
    };

    const clearFriends = () => {
        setIndexes([]);
    };

    const [pregnancyInfo, setPregnancyInfo] = useState([
        { ...blankPregnancyInformation }
    ]);

    const onSubmit = data => {
        console.log(data);
      };

    const AddPregnancyInformation = () => {
        setPregnancyInfo([...pregnancyInfo, { ...blankPregnancyInformation }]);
    };
    

    const handleChange = (event) => {
        setValues({ ...values, [event.target.name]: event.target.value })
    };

    return (
        <div className={classes.root}>
            <Grid container spacing={3} style={{ padding: 20 }}>
                <Grid item xs={12}>
                    <Paper className={classes.paper}><strong ><h4 style={{ fontSize: 19, lineHeight: 1.5 }}>{t('obstetricGynecology.PregnantHistory')}<br />/妊娠歴についてお伺いします※過去の妊娠の時の母子手帳をお持ちの方は母子手帳を用意してください。</h4></strong></Paper>
                </Grid>
                <Grid item xs={12} style={{ textAlign: "center", paddingLeft: 16, marginLeft: 0, marginTop: -19 }}>
                    <FormControl component="fieldset">

                        <RadioGroup row aria-label="gender" name="PregnantHistory" value={values.PregnantHistory} onChange={handleChange}>
                            <FormControlLabel value="Have no history of pregnancy" control={<Radio />} label={t('obstetricGynecology.haveHistory') + " /妊娠したことがない"} />
                            <FormControlLabel value="Have a history of pregnancy" control={<Radio />} label={t('obstetricGynecology.doNotHaveHistory') + " /妊娠したことがある"} />
                        </RadioGroup>
                    </FormControl>
                </Grid>
                <div>
                    {values.PregnantHistory === 'Have a history of pregnancy' ? (
                        <div>
                            <FormLabel style={{ marginTop: -15, marginLeft: 65, fontSize: 14 }}><strong style={{ lineHeight: 2 }}>{t('obstetricGynecology.pregnancyHistory')} /「妊娠したことがある」に☑された方は下の妊娠歴をお書きください。</strong></FormLabel>
                            <Grid item xs={12} style={{ backgroundColor: "#ffff0047", paddingTop: 26, paddingLeft: 26, paddingBottom: 26, paddingRight: 26 }}>
                                <form onSubmit={handleSubmit(onSubmit)}>
                                    {indexes.map(index => {
                                        index = counter;
                                        const fieldName = `friends[${index}]`;
                                        //const dateId = `date-${idx}`;
                                        //const deliveryId = `delivery-${idx}`;
                                        //const hadMiscarriageId = `hadMiscarriage-${idx}`;
                                        //const hadAbnomalPregnancyId = `hadAbnomalPregnancy-${idx}`;
                                        //const weekpregnancyId = `weekpregnancy-${idx}`;
                                        return (
                                            <fieldset name={fieldName} key={fieldName}>
                                                <FormLabel style={{ marginTop: -15, marginLeft: 60, fontSize: 18 }}><strong style={{ lineHeight: 2 }}>{`friends[${index+1}]`} </strong></FormLabel>
                                                <Grid container spacing={3} style={{ padding: 20 }}>
                                                    <Grid item xs={6}>
                                                        <Grid >
                                                            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                                                <Grid container justify="space-around">

                                                                    <KeyboardDatePicker
                                                                        fullWidth
                                                                        margin="normal"
                                                                        name={`${fieldName}.date`}
                                                                        ref={register}
                                                                        label={t('obstetricGynecology.YearMonthDay')}
                                                                        format="yyyy/MM/dd"
                                                                        //value={values.DateOfBirth}
                                                                        //onChange={updateDate}
                                                                        KeyboardButtonProps={{
                                                                            'aria-label': 'change date',
                                                                        }}
                                                                    />

                                                                </Grid>

                                                            </MuiPickersUtilsProvider>
                                                        </Grid>

                                                        <Grid >
                                                            <strong><h4 style={{ fontSize: 19 }}>{t('obstetricGynecology.Delivery')} / 分娩</h4></strong>
                                                        </Grid>
                                                        <Grid style={{ textAlign: "left", marginLeft: 5, marginTop: -15 }}>
                                                            <FormControl component="fieldset">

                                                                <RadioGroup row aria-label="gender" name={`${fieldName}.delivery`}  ref={register}>
                                                                    <FormControlLabel value={true} control={<Radio />} label={t('obstetricGynecology.Vaginaldelivery') + " /経腟分娩"} />
                                                                    <FormControlLabel value={false} control={<Radio />} label={t('obstetricGynecology.Caesareansection') + " /帝王切開 "} />
                                                                </RadioGroup>
                                                            </FormControl>
                                                        </Grid>

                                                        <Grid >
                                                            <strong><h4 style={{ fontSize: 19 }}>{t('obstetricGynecology.Hadmiscarriageornot')} /流産の有無</h4></strong>
                                                        </Grid>
                                                        <Grid style={{ textAlign: "left", marginLeft: 5, marginTop: -15 }}>
                                                            <FormControl component="fieldset">

                                                                <RadioGroup row aria-label="gender" name={`${fieldName}.hadMiscarriage`} ref={register}>
                                                                    <FormControlLabel value={true} control={<Radio />} label={t('obstetricGynecology.Miscarriage') + " /自然流産"} />
                                                                    <FormControlLabel value={false} control={<Radio />} label={t('obstetricGynecology.Abortion') + " /人工流産 "} />
                                                                </RadioGroup>
                                                            </FormControl>
                                                        </Grid>
                                                    </Grid>

                                                    <Grid item xs={6}>
                                                        <Grid>
                                                            <strong><h4 style={{ fontSize: 19 }}>{t('obstetricGynecology.Hadabnormalpregnancyornot')} /異常妊娠の有無</h4></strong>
                                                        </Grid>
                                                        <Grid style={{ textAlign: "left", marginLeft: 5, marginTop: -15 }}>
                                                            <FormControl component="fieldset">

                                                                <RadioGroup row aria-label="gender" name={`${fieldName}.hadAbnomalPregnancy`} ref={register}>
                                                                    <FormControlLabel value={true} control={<Radio />} label={t('internalMedcine.yes') + " /自然流産"} />
                                                                    <FormControlLabel value={false} control={<Radio />} label={t('internalMedcine.No') + " /人工流産 "} />
                                                                </RadioGroup>
                                                            </FormControl>
                                                        </Grid>



                                                        <FormControl fullWidth className='' >
                                                            <InputLabel htmlFor="weeksPregnanncy">{t('obstetricGynecology.weekpregnancy')} /週数</InputLabel>
                                                            <Input
                                                                type="text"
                                                                name={`${fieldName}.weeksPregnanncy`}
                                                                ref={register}
                                                                id="weeksPregnanncy"
                                                                className="age"
                                                            />
                                                        </FormControl>

                                                    </Grid>


                                                </Grid>
                                                <Button
                                                    variant="contained"
                                                    color="primary"
                                                    onClick={removeFriend(index)}
                                                    className={classes.button}
                                                >
                                                    Remove
                                             </Button>
                                            </fieldset>

                                        );
                                    })

                                    }
                                    <br/>
                                    <Button
                                        variant="contained"
                                        color="primary"
                                        onClick={addFriend}
                                        className={classes.button}
                                    >
                                        ADD friend
                                             </Button>
                                    <Button
                                        variant="contained"
                                        color="primary"
                                        onClick={clearFriends}
                                        className={classes.button}
                                    >
                                        Clear friends
                                             </Button>
                                            
                                             <input type="submit" />   
                                </form>
                            </Grid>
                        </div>
                    ) : (
                            <nav> &apos; </nav>
                        )}
                </div>
            </Grid>
        </div>
    )
}
export default CenteredGrid;