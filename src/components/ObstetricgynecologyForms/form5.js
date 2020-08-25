import React, { useEffect, useState, useContext } from 'react'
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
import UserContext from '../context/UserContext';
import Axios from "axios";
import { useHistory } from "react-router-dom";

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
    const [fields, setFields] = useState([{
        date: new Date(),
        delivery: "",
        hadMiscarriage: null,
        hadAbnomalPregnancy: null,
        weeksPregnanncy: null
    }]);
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
            inteviewName: "Obstetric and Gynecology form 5",
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

    function handleChangeweeksPregnanncy(i, event) {
        const values1 = [...fields];
        values1[i].weeksPregnanncy = event.target.value;
        setFields(values1);
        setValues({...values, YesPregnancyHistory :values1})
        logFunction(t('obstetricGynecology.weekpregnancy'));
    }

    function handleChangeDate(i, date) {
        const values1 = [...fields];
        values1[i].date = date;
        setFields(values1);
        setValues({...values, YesPregnancyHistory :values1});
        logFunction(t('obstetricGynecology.YearMonthDay'));
    }

    function handleChangeRadio(i, event) {
        const values1 = [...fields];
        values1[i].delivery = event.target.value;
        setFields(values1);
        setValues({...values, YesPregnancyHistory :values1});
        logFunction(t('obstetricGynecology.Delivery'));
    }

    function handleChangehadMiscarriage(i, event) {
        const values1 = [...fields];
        values1[i].hadMiscarriage = event.target.value;
        setFields(values1);
        setValues({...values, YesPregnancyHistory :values1});
        logFunction(t('obstetricGynecology.Hadmiscarriageornot'));
    }

    /*function handleChangehadMiscarriage(i, event) {
        const values1 = [...fields];
        values1[i].hadMiscarriage = event.target.value;
        setFields(values1);
        setValues({...values, YesPregnancyHistory :values1})
    }*/

    function handleChangehadAbnomalPregnancy(i, event) {
        const values1 = [...fields];
        values1[i].hadAbnomalPregnancy = event.target.value;
        setFields(values1);
        setValues({...values, YesPregnancyHistory :values1});
        logFunction(t('obstetricGynecology.Hadabnormalpregnancyornot'));
    }

    function handleAdd() {
        const values1 = [...fields];
        values1.push({ 
            date: new Date(),
        delivery: "",
        hadMiscarriage: null,
        hadAbnomalPregnancy: null,
        weeksPregnanncy: null
         });
        setFields(values1);
        setValues({...values, YesPregnancyHistory :values1});
        
    }

    function handleRemove(i) {
        const values1 = [...fields];
        values1.splice(i, 1);
        setFields(values1);
        setValues({...values, YesPregnancyHistory :values1})
    }
   
    const handleChange = (event) => {
        setValues({ ...values, [event.target.name]: event.target.value });
        logFunction(t('obstetricGynecology.PregnantHistory'));
    };
    //console.log(values.YesPregnancyHistory);
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

                {values.YesPregnancyHistory.map((field, idx) => {
                    return (
                        <div key={`${field}-${idx}`}>
                            <hr style={{ height: 2, borderWidth: 0, color: "gray", backgroundColor: "gray" }} />
                            <FormLabel style={{ marginTop: -15, marginLeft: 60, fontSize: 20, color:"balck" }}><strong style={{ lineHeight: 2 }}>{"Baby No: "+idx} </strong></FormLabel>
                            <hr style={{ height: 2, borderWidth: 0, color: "gray", backgroundColor: "gray", marginTop: -6 }} />
                            <Grid container spacing={3} style={{ padding: 20 }}>
                                <Grid item xs={6}>
                                    <Grid >
                                        <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                            <Grid container justify="space-around">

                                                <KeyboardDatePicker
                                                    fullWidth
                                                    margin="normal"
                                                    name="date"
                                                    label={t('obstetricGynecology.YearMonthDay')}
                                                    format="yyyy/MM/dd"
                                                    value={field.date}
                                                    onChange={e => handleChangeDate(idx, e)}
                                                    KeyboardButtonProps={{
                                                        'aria-label': 'change date',
                                                    }}
                                                />

                                            </Grid>

                                        </MuiPickersUtilsProvider>
                                        <Grid >
                                            <strong><h4 style={{ fontSize: 19 }}>{t('obstetricGynecology.Delivery')} / 分娩</h4></strong>
                                        </Grid>
                                        <Grid style={{ textAlign: "left", marginLeft: 5, marginTop: -15 }}>
                                            <FormControl component="fieldset">

                                                <RadioGroup row aria-label="gender" name="delivery" value={field.delivery} onChange={e => handleChangeRadio(idx, e)}>
                                                    <FormControlLabel value="Vaginal delivery" control={<Radio />} label={t('obstetricGynecology.Vaginaldelivery') + " /経腟分娩"} />
                                                    <FormControlLabel value="Caesarean section" control={<Radio />} label={t('obstetricGynecology.Caesareansection') + " /帝王切開 "} />
                                                </RadioGroup>
                                            </FormControl>
                                        </Grid>

                                        <Grid >
                                            <strong><h4 style={{ fontSize: 19 }}>{t('obstetricGynecology.Hadmiscarriageornot')} /流産の有無</h4></strong>
                                        </Grid>
                                        <Grid style={{ textAlign: "left", marginLeft: 5, marginTop: -15 }}>
                                            <FormControl component="fieldset">

                                                <RadioGroup row aria-label="gender" name="hadMiscarriage" value={field.hadMiscarriage} onChange={e => handleChangehadMiscarriage(idx, e)}>
                                                    <FormControlLabel value="Miscarriage" control={<Radio />} label={t('obstetricGynecology.Miscarriage') + " /自然流産"} />
                                                    <FormControlLabel value="Abortion" control={<Radio />} label={t('obstetricGynecology.Abortion') + " /人工流産 "} />
                                                </RadioGroup>
                                            </FormControl>
                                        </Grid>
                                    </Grid>
                                </Grid>
                                <Grid item xs={6}>
                                    <Grid>
                                        <strong><h4 style={{ fontSize: 19 }}>{t('obstetricGynecology.Hadabnormalpregnancyornot')} /異常妊娠の有無</h4></strong>
                                    </Grid>
                                    <Grid style={{ textAlign: "left", marginLeft: 5, marginTop: -15 }}>
                                        <FormControl component="fieldset">

                                            <RadioGroup row aria-label="gender" name="hadAbnomalPregnancy" value={field.hadAbnomalPregnancy} onChange={e => handleChangehadAbnomalPregnancy(idx, e)}>
                                                <FormControlLabel value="true" control={<Radio />} label={t('internalMedcine.yes') + " /自然流産"} />
                                                <FormControlLabel value="false" control={<Radio />} label={t('internalMedcine.No') + " /人工流産 "} />
                                            </RadioGroup>
                                        </FormControl>
                                    </Grid>



                                    <FormControl fullWidth className='' >
                                        <InputLabel htmlFor="weeksPregnanncy">{t('obstetricGynecology.weekpregnancy')} /週数</InputLabel>
                                        <Input
                                            type="text"
                                            name="weeksPregnanncy"
                                            id={field.weeksPregnanncy}
                                            className="age"
                                            value={field.weeksPregnanncy}
                                            onChange={e => handleChangeweeksPregnanncy(idx, e)}
                                        />
                                    </FormControl>

                                </Grid>
                                <Button
                                    variant="contained"
                                    color="primary"
                                    onClick={() => handleRemove(idx)}
                                    className={classes.button}
                                >
                                    Remove
                                             </Button>

                            </Grid>
                        </div>
                    );
                })}
                <Button
                style={{fontSize: 20, backgroundColor: '#eb57577a', color:"white"}}
                    variant="contained"
                    onClick={() => handleAdd()}
                    className={classes.button}
                >
                    +
                                             </Button>
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