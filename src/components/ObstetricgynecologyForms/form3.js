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

    const handleChangeCheckSpecialRequest = (event) => {
        setValues({...values, menstrualPeriod:{...values.menstrualPeriod, [event.target.name]:event.target.checked} });
        logFunction("irregular period");
    };

    const update = (e) => {
        setValues({...values, menstrualPeriod:{...values.menstrualPeriod, [e.target.name]:e.target.value} });
        if ( [e.target.name] == "ageStart"){
            logFunction(t('obstetricGynecology.Howoldwereyouwhenyoustartedhavingyourperiod')); 
        }
        if ( [e.target.name] == "ageLast"){
            logFunction(t('obstetricGynecology.Howoldwereyouwhenyouhadyourlastperiod')); 
        }
        if ( [e.target.name] == "daysCycle"){
            logFunction(t('obstetricGynecology.Howmanydayslongisyourmenstrualcycle')); 
        }
        if ( [e.target.name] == "painkiller"){
            logFunction(t('obstetricGynecology.painduringyourperiods')); 
        }
       }

       const handleChange = (event) => {
        setValues({...values, menstrualPeriod :{...values.menstrualPeriod, [event.target.name]:event.target.value}})
        if ([event.target.name] == "usualFlow")
            logFunction(t('obstetricGynecology.Whatisyourusualflow'));
        if ([event.target.name] == "painduringyourperiods")
            logFunction(t('obstetricGynecology.painduringyourperiods'));
        if ([event.target.name] == "Painkiller")
            logFunction(t('obstetricGynecology.Painkiller'));
    };

    const updateDate = (date) => {
        setValues({...values, menstrualPeriod :{...values.menstrualPeriod, dateLastPeriod:date}})
        logFunction(t('obstetricGynecology.dateLastPeriod'));
    }

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
                <Grid item xs={12} style={{textAlign: "left", paddingLeft: 48, marginLeft: -18, marginTop: -19}}>
                    <FormControl component="fieldset">

                        <RadioGroup row aria-label="gender" name="usualFlow" value={values.menstrualPeriod.usualFlow} onChange={handleChange}>
                            <FormControlLabel value="Light" control={<Radio />} label={t('obstetricGynecology.Light')+" /少ない"}/>
                            <FormControlLabel value="Normal" control={<Radio />} label={t('obstetricGynecology.Normal')+" /普通"} />
                            <FormControlLabel value="Heavy" control={<Radio />} label={t('obstetricGynecology.Heavy')+"/多い"} />
                        </RadioGroup>
                    </FormControl>
                </Grid>

                <Grid className={classes.labelAligne} item xs={12}>
                    <h5>{t('obstetricGynecology.painduringyourperiods')} /月経痛はありますか。</h5>
                </Grid>
                <Grid item xs={12} style={{textAlign: "left", paddingLeft: 48, marginLeft: -18, marginTop: -19}}>
                    <FormControl component="fieldset">

                        <RadioGroup row aria-label="gender" name="painduringyourperiods" value={values.menstrualPeriod.painduringyourperiods} onChange={handleChange}>
                            <FormControlLabel value="No" control={<Radio />} label={t('internalMedcine.No')+" /いいえ"}/>
                            <FormControlLabel value="Yes" control={<Radio />} label={t('internalMedcine.yes')+" /はい"} />
                        </RadioGroup>
                    </FormControl>
                </Grid>

                <div>
                    {values.menstrualPeriod.painduringyourperiods === 'Yes' ? (
                        <div>
                        <FormLabel style={{marginTop: -15, marginLeft:65, fontSize:18}}><strong style={{lineHeight: 2}}>{t('obstetricGynecology.answeredYesandtakeapainkiller')} <br/> /「はい」と答えた方で鎮痛剤を使用されている方は、鎮痛剤も書いてください。</strong></FormLabel>
                        <Grid item xs={10}>
                        <FormControl fullWidth className='' style={{marginLeft: 86, marginBottom: 17, marginTop: -20}}>
                        <InputLabel htmlFor="name">{t('obstetricGynecology.Painkiller')} /鎮痛剤：</InputLabel>
                        <Input
                            id="name"
                            type="text"
                            name="painkiller"
                            values={values.menstrualPeriod.painkiller}
                            defaultValue={values.menstrualPeriod.painkiller}
                            onChange={handleChange}
                        />
                    </FormControl>
                    </Grid>
                        </div>
                    ) : (
                            <nav> &apos; </nav>
                        )}
                </div>
                        <Grid item xs={12} style={{marginTop: -29}}>
                <MuiPickersUtilsProvider utils={DateFnsUtils} >
                        <Grid container justify="space-around" item xs={6} className={classes.labelAligne} >

                            <KeyboardDatePicker
                                fullWidth
                                margin="normal"
                                id="date-picker-dialog"
                                label={t('obstetricGynecology.dateLastPeriod')+" /最終月経はいつですか。"}
                                format="yyyy/MM/dd"
                                value={values.menstrualPeriod.dateLastPeriod}
                                onChange={updateDate}
                                KeyboardButtonProps={{
                                    'aria-label': 'change date',
                                }}
                            />

                        </Grid>

                    </MuiPickersUtilsProvider>
                    </Grid>

            </Grid>

        </div>
    )
}
export default CenteredGrid;