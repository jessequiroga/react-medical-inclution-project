import React, { useEffect, useContext } from 'react'
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
import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker,
} from '@material-ui/pickers';
import UserContext from '../context/UserContext';
import Axios from "axios";
import { useHistory } from "react-router-dom";

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

      const logFunction = async (question) =>{
        const loginfo = {
            inteviewName: "Obstetric and Gynecology form 4",
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

    const handleChange = (event) => {
        setValues({ ...values, [event.target.name]: event.target.value })
        if ( [event.target.name] == "haveSexualIntercourse"){
            logFunction(t('obstetricGynecology.haveSexualIntercourse')); 
        }
        if ( [event.target.name] == "hadUterineCancerTest"){
            logFunction(t('obstetricGynecology.hadUterineCancerTest')); 
        }
        if ( [event.target.name] == "takenBirthControlPills"){
            logFunction(t('obstetricGynecology.takenBirthControlPills')); 
        }
        if ( [event.target.name] == "pregnantOrPossiblyPregnant"){
            logFunction(t('obstetricGynecology.pregnantOrPossiblyPregnant')); 
        }
        if ( [event.target.name] == "Areyoubreastfeeding"){
            logFunction(t('obstetricGynecology.Areyoubreastfeeding')); 
        }
        
    };

    const updateDate = (date) => {
        setValues({ ...values, dateHadUterineCancerTest: date });
        logFunction(t('obstetricGynecology.dateLastPeriod'));
    }

    const update = (e) => {
        setValues({ ...values.menstrualPeriod, [e.target.name]: e.target.value });
        logFunction(t('obstetricGynecology.noWeeks'));
    }

    const handleChangeCheckSpecialRequest = (event) => {
        setValues({ ...values, [event.target.name]: event.target.checked });
        logFunction(t('obstetricGynecology.doNotKnow'));
    };

    return (
        <div className={classes.root}>
            <Grid container spacing={3} style={{ padding: 20 }}>
                <Grid item xs={12}>
                    <Paper className={classes.paper}><strong><h4 style={{ fontSize: 19 }}>{t('obstetricGynecology.haveSexualIntercourse')}<br />/今までに性交渉の経験がありますか。</h4></strong></Paper>
                </Grid>
                <Grid item xs={12} style={{ textAlign: "center", paddingLeft: 48, marginLeft: -18, marginTop: -19 }}>
                    <FormControl component="fieldset">

                        <RadioGroup row aria-label="gender" name="haveSexualIntercourse" value={values.haveSexualIntercourse} onChange={handleChange}>
                            <FormControlLabel value={true} control={<Radio />} label={t('internalMedcine.yes') + " /はい"} />
                            <FormControlLabel value={false} control={<Radio />} label={t('internalMedcine.No') + " /いいえ"} />
                        </RadioGroup>
                    </FormControl>
                </Grid>

                <Grid item xs={12}>
                    <Paper className={classes.paper}><strong><h4 style={{ fontSize: 19 }}>{t('obstetricGynecology.hadUterineCancerTest')}<br /> /子宮がん検診を受けたことがありますか。</h4></strong></Paper>
                </Grid>
                <Grid item xs={12} style={{ textAlign: "center", paddingLeft: 48, marginLeft: -18, marginTop: -19 }}>
                    <FormControl component="fieldset">

                        <RadioGroup row aria-label="gender" name="hadUterineCancerTest" value={values.hadUterineCancerTest} onChange={handleChange}>
                            <FormControlLabel value={true} control={<Radio />} label={t('internalMedcine.yes') + " /はい"} />
                            <FormControlLabel value={false} control={<Radio />} label={t('internalMedcine.No') + " /いいえ"} />
                        </RadioGroup>
                    </FormControl>
                </Grid>

                <div>
                    {values.hadUterineCancerTest === 'true' ? (
                        <div>
                            <FormLabel style={{ marginTop: -15, marginLeft: 65, fontSize: 18 }}><strong style={{ lineHeight: 2 }}>{t('obstetricGynecology.hadsurgerybefore')} /受けたことがある方は日付を書いてください。</strong></FormLabel>
                            <Grid item xs={12} style={{ marginTop: -22, paddingLeft: 57 }}>
                                <MuiPickersUtilsProvider utils={DateFnsUtils} >
                                    <Grid container justify="space-around" item xs={8} className={classes.labelAligne} >

                                        <KeyboardDatePicker
                                            fullWidth
                                            margin="normal"
                                            id="date-picker-dialog"
                                            label={t('obstetricGynecology.dateLastPeriod') + " /最終月経はいつですか。"}
                                            format="yyyy/MM/dd"
                                            value={values.dateHadUterineCancerTest}
                                            onChange={updateDate}
                                            KeyboardButtonProps={{
                                                'aria-label': 'change date',
                                            }}
                                        />

                                    </Grid>

                                </MuiPickersUtilsProvider>
                            </Grid>
                        </div>
                    ) : (
                            <nav> &apos; </nav>
                        )}
                </div>

                <Grid item xs={12}>
                    <Paper className={classes.paper}><strong><h4 style={{ fontSize: 19 }}>{t('obstetricGynecology.takenBirthControlPills')}<br />/ピル（避妊薬）を飲んでいたことがありますか。</h4></strong></Paper>
                </Grid>
                <Grid item xs={12} style={{ textAlign: "center", paddingLeft: 48, marginLeft: -18, marginTop: -19 }}>
                    <FormControl component="fieldset">

                        <RadioGroup row aria-label="gender" name="takenBirthControlPills" value={values.takenBirthControlPills} onChange={handleChange}>
                            <FormControlLabel value={true} control={<Radio />} label={t('internalMedcine.yes') + " /はい"} />
                            <FormControlLabel value={false} control={<Radio />} label={t('internalMedcine.No') + " /いいえ"} />
                        </RadioGroup>
                    </FormControl>
                </Grid>

                <Grid item xs={12}>
                    <Paper className={classes.paper}><strong><h4 style={{ fontSize: 19 }}>{t('obstetricGynecology.pregnantOrPossiblyPregnant')}<br />/妊娠していますか、またその可能性はありますか。</h4></strong></Paper>
                </Grid>
                <Grid item xs={12} style={{ textAlign: "center", paddingLeft: 48, marginLeft: -18, marginTop: -19 }}>
                    <FormControl component="fieldset">

                        <RadioGroup row aria-label="gender" name="pregnantOrPossiblyPregnant" value={values.pregnantOrPossiblyPregnant} onChange={handleChange}>
                            <FormControlLabel value={true} control={<Radio />} label={t('internalMedcine.yes') + " /はい"} />
                            <FormControlLabel value={false} control={<Radio />} label={t('internalMedcine.No') + " /いいえ"} />
                        </RadioGroup>
                    </FormControl>
                </Grid>

                {values.pregnantOrPossiblyPregnant === 'true' ? (
                    <Grid container spacing={3}>

                        <Grid item xs={4} container style={{ marginLeft: 77, marginRight: 3 }}>
                            <FormControl fullWidth className='' style={{ marginTop: -30 }}>
                                <InputLabel htmlFor="daysCycle">{t('obstetricGynecology.noWeeks')} /週</InputLabel>
                                <Input
                                    id="daysCycle"
                                    type="number"
                                    values={values.noWeeks}
                                    defaultValue={values.noWeeks}
                                    onChange={update}
                                    name="noWeeks"
                                />
                            </FormControl>
                        </Grid>


                        <Grid item xs={6}>
                            <FormControlLabel style={{ marginTop: -15 }}
                                control={
                                    <Checkbox
                                        checked={values.doNotKnow}
                                        onChange={handleChangeCheckSpecialRequest}
                                        name="doNotKnow"
                                    />
                                }
                                label={t('obstetricGynecology.doNotKnow') + '/わからない'}
                            />
                        </Grid>
                    </Grid>
                ) : (
                        <nav> &apos; </nav>
                    )}

                <Grid item xs={12}>
                    <Paper className={classes.paper}><strong><h4 style={{ fontSize: 19 }}>{t('obstetricGynecology.Areyoubreastfeeding')}<br />/現在、授乳中ですか？</h4></strong></Paper>
                </Grid>
                <Grid item xs={12} style={{ textAlign: "center", paddingLeft: 48, marginLeft: -18, marginTop: -19 }}>
                    <FormControl component="fieldset">

                        <RadioGroup row aria-label="gender" name="Areyoubreastfeeding" value={values.Areyoubreastfeeding} onChange={handleChange}>
                            <FormControlLabel value={true} control={<Radio />} label={t('internalMedcine.yes') + " /はい"} />
                            <FormControlLabel value={false} control={<Radio />} label={t('internalMedcine.No') + " /いいえ"} />
                        </RadioGroup>
                    </FormControl>
                </Grid>

            </Grid>
        </div>
    )
}
export default CenteredGrid;