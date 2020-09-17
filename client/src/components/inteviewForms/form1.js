import React, { useEffect, useState, useContext }  from 'react';
import { useHistory } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { useTranslation } from 'react-i18next';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import GridList from '@material-ui/core/GridList';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import { MedContext } from '../internalMedContext';
import UserContext from '../context/UserContext';
import Axios from "axios";

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
    },
    gridList: {
        width: 1000,
       
        textAlign: 'center',
        margin:10,
        padding:3
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
    const problemtodays = [
        {name: t('internalMedcine.Fever'), text:'/発熱', value:"Fever"},
        {name: t('internalMedcine.Cough'), text:'/咳', value:"Cough"},
        {name: t('internalMedcine.Runnynose'), text:'/鼻水', value:"Runnynose"},
        {name: t('internalMedcine.Phlegm'), text:'/痰', value:"Phlegm"},
        {name: t('internalMedcine.Difficultybreathing'), text:'/息が苦しい', value:"Difficultybreathing"},
        {name: t('internalMedcine.Palpitation'), text:'/動悸', value:"Palpitation"},
        {name: t('internalMedcine.Feelsulggish'), text:' /身体がだるい', value:"Feelsulggish"},
        {name: t('internalMedcine.Geteasilytired'), text:'/疲れやすい', value:"Geteasilytired"},
        {name: t('internalMedcine.Shortnessof'), text:'/息切れ', value:"shortness of breath"},
        {name: t('internalMedcine.Dizziness'), text:' /めまい', value:"Dizziness"},
        {name: t('internalMedcine.Lossappetite'), text:' /食欲がない', value:"Lossappetite"},
        {name: t('internalMedcine.Vomiting'), text:'/嘔吐', value:"Vomiting"},
        {name: t('internalMedcine.Bloodystool'), text:'/血便', value:"Bloodystool"},
        {name: t('internalMedcine.Frequent'), text:'/頻尿', value:"frequenturination"},
        {name: t('internalMedcine.Bloodyurine'), text:'/血尿', value:"Bloodyurine"},
        {name: t('internalMedcine.Weightloss'), text:'/体重減少', value:"Weightloss"},
        {name: t('internalMedcine.Feelthirsty'), text:'/喉が渇く', value:"Feelthirsty"},
        {name: t('internalMedcine.Hypertension'), text:'/高血圧', value:"Hypertension"},
        {name: t('internalMedcine.Paralysis' ), text:'/ 麻痺', value:"Paralysis"},
        {name: t('internalMedcine.Swelling'), text:'/むくみ', value:"Swelling"},
        {name: t('internalMedcine.Hives'), text:'/じんましん', value:"Hives"},
        {name: t('internalMedcine.Insomnia' ), text:'/不眠症', value:"Insomnia"},
        {name: t('internalMedcine.Numbness'), text:'/しびれ', value:"Numbness"},
        {name: t('internalMedcine.Nausea'), text:'/吐き気', value:"Nausea"},
        {name: t('internalMedcine.Diarrhea'), text:'/下痢', value:"Diarrhea"},
        {name: t('internalMedcine.Itchiness'), text:'/かゆみ', value:"itchiness"},
        {name: t('internalMedcine.Pain'), text:'/痛み', value:"Pain"},
        {name: t('internalMedcine.Other'), text:'/その他：', value:"others"},
        
       ]

       const stools = [
        {name: t('internalMedcine.Grayishwhite'), text:'/ 灰白色', value:"Grayishwhite"},
        {name: t('internalMedcine.Brown'), text:'/ 茶色', value:"Brown"},
        {name: t('internalMedcine.Black'), text:'/黒色', value:"Black"},
        {name: t('internalMedcine.bloody'), text:'/血便', value:"bloody"},
        {name: t('internalMedcine.watery'), text:'/水様', value:"watery"},
        {name: t('internalMedcine.Soft'), text:'/軟便', value:"Soft"},
        {name: t('internalMedcine.Hard'), text:'/硬い便', value:"Hard"},
       ]
    

    const [values, setValues] = useContext(MedContext);
    const classes = useStyles();
    const [checkedProblemtoday, setCheckedProblemtoday] = React.useState([]);
    const [checkedStool, setCheckedStool] = React.useState([]);
    const [frequency, setFrequency] = React.useState('');
    const { userData } = useContext(UserContext);
    const history = useHistory();

    useEffect(() => {
        if (!userData.user) history.push("/login1");
    });

    const authAxios = Axios.create({
        baseURL: "http://localhost:5000",
        headers: {
          'x-auth-token': userData.token,
        },
      });

    const logFunction = async (question) =>{
        const loginfo = {
            inteviewName: "Internal Medcine form 2",
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

    const handleToggleProblemtoday = (object) => () => {
        const currentIndex = values.problemtoday.indexOf(object.value);
        const newChecked = [...values.problemtoday];
        
        if (currentIndex === -1) {
            newChecked.push(object.value);
        } else {
            newChecked.splice(currentIndex, 1);
        }

        setCheckedProblemtoday(newChecked);
        setValues({...values, problemtoday:newChecked});
        logFunction("What is the problem today");
    };

    const handleToggleStool = (object) => () => {
        const currentIndex = values.stools.indexOf(object.value);
        const newChecked = [...values.stools];

        if (currentIndex === -1) {
            newChecked.push(object.value);
        } else {
            newChecked.splice(currentIndex, 1);
        }

        setCheckedStool(newChecked);
        setValues({...values, stools:newChecked});
        logFunction("How is your stool like");
    };

    const updateFrequency = (event) => {
        setFrequency(event.target.value);
        setValues({...values, stoolfrequency:event.target.value});
        logFunction("How is your stool frequency");
    };

    return (

        <div>
            <div className={classes.root}>
                <Grid container spacing={3} style={{ padding: 20 }}>
                    <Grid item xs={12}>
                        <Paper className={classes.paper}><strong><h4>{t('internalMedcine.problemtoday')}<br/><i style={{color:"blue"}}>/今日はどのような症状がありますか。（複数ある方は複数☑してください.)</i></h4></strong></Paper>
                    </Grid>
                    
                    <Grid container spacing={3} style={{ padding: 20 }}>
                    <GridList container style={{height:370, padding: 20 }} cellHeight={10} className={classes.gridList} cols={3}>
                        {problemtodays.map((value) => {
                            const labelId = `checkbox-list-label-${value.name}`;

                            return (
                                <ListItem key={value.name} role={undefined} dense button onClick={handleToggleProblemtoday(value)}>
                                    <ListItemIcon>
                                        <Checkbox
                                            edge="start"
                                            checked={values.problemtoday.indexOf(value.value) !== -1}
                                            tabIndex={-1}
                                            disableRipple
                                            inputProps={{ 'aria-labelledby': labelId }}
                                        />
                                    </ListItemIcon>
                                    <ListItemText id={labelId} >
                                        {value.name}
                                        <span style={{color:"blue"}}>{value.text}</span>
                                    </ListItemText>

                                </ListItem>
                            );
                        })}
                    </GridList>

                    <Grid item xs={12}>
                        <Paper className={classes.paper}><strong><h4>Check all that apply about your stool. <br/><i style={{color:"blue"}}>/ 便の性状に☑してください</i></h4></strong></Paper>
                    </Grid>
                        
                    <GridList container style={{height:107, padding: 20 }} cellHeight={10} className={classes.gridList} cols={3}>
                        {stools.map((value) => {
                            const labelId = `checkbox-list-label-${value.name}`;

                            return (
                                <ListItem key={value.name} role={undefined} dense button onClick={handleToggleStool(value)}>
                                    <ListItemIcon>
                                        <Checkbox
                                            edge="start"
                                            checked={values.stools.indexOf(value.value) !== -1}
                                            tabIndex={-1}
                                            disableRipple
                                            inputProps={{ 'aria-labelledby': labelId }}
                                        />
                                    </ListItemIcon>
                                    <ListItemText id={labelId} >
                                        {value.name}
                                        <span style={{color:"blue"}}>{value.text}</span>
                                    </ListItemText>

                                </ListItem>
                            );
                        })}
                    </GridList>
                    <Grid item xs={6}>
                    <FormControl fullWidth xs={8} className={classes.formControl}>
                        <InputLabel id="demo-simple-select-label">{t('internalMedcine.Stoolfrequency')}<i style={{color:"#0000ffbf"}}>/ 一日の排便回数：</i></InputLabel>
                        <Select 
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={values.stoolfrequency}
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
                        </Grid>
                    </Grid>

            </div>
        </div>

    )
}
export default CenteredGrid;