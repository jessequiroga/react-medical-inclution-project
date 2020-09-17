import React, { useEffect, useState, useContext } from 'react';
import { useHistory } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { useTranslation } from 'react-i18next';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import DateFnsUtils from '@date-io/date-fns';
import Checkbox from '@material-ui/core/Checkbox';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker,
} from '@material-ui/pickers';

import { MedContext } from '../internalMedContext'
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import GridList from '@material-ui/core/GridList';
import UserContext from '../context/UserContext';
import Axios from "axios";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: 'black',
    },
    gridList: {
        width: 500,
        height: 300,
        textAlign: 'center',
        margin:10,
        padding:13
      },
      ListItemIcon: {
          minWidth:32
      }
}));

const CenteredGrid = () => {
    const blue = (text) =>{
        return(
        <span style={{color:"blue"}}>{text}</span>
        );
      
    }

    const foodAlergie = [
        { name: 'Fish Roe', text:'/魚卵', value: 'Fish Roe' },
        { name: 'Shellfish', text:'/貝類', value: 'Shellfish' },
        { name: 'Milk ', text:'/甲殻類（エビ、カニ等)',  value: 'Milk' },
        { name: 'Cheese ', text:'/卵', value: 'Cheese' },
        { name: 'Buckwheat ', text:'/魚卵', value: 'Buckwheat' },
        { name: 'Peanuts ', text:'/貝類',  value: 'Peanuts' },
        { name: 'Almonds ', text:'/卵', value: 'Almonds' },
        { name: 'Wheat ', text:'/小麦', value: 'wheat' },
        { name: 'Soy ', text:'/大豆',  value: 'Soy' },
        { name: 'Kiwifruit ', text:'/キウイ', value: 'Kiwifruit' },
        { name: 'Peaches ', text:'/桃', value: 'Peaches' },
        { name: 'Yams ', text:'/山芋', value: 'Yams' },
        { name: "Blue-skin fish (Mackerel/ Salmon/ Whitebait/ Anchovies/ Sardines)", text:'/青魚', value: "Blue-skin fish (Mackerel/ Salmon/ Whitebait/ Anchovies/ Sardines)" },
        { name: "Shrimp/Prawns/ Crabs/Lobsters", text:'/甲殻類（エビ、カニ等)/発熱', value: "Shrimp/Prawns/Crabs/Lobsters" },
    ];

    const medecinesAlergie = [
        {name:"Alcohol ", text:'/アルコール', value:"Alcohol"},
        {name:"Fever reducer ", text:'/解熱剤', value:"Fever reducer"},
        {name:"Pain killer ", text:'/痛み止め', value:"Pain killer"},
        {name:"Antibiotics ", text:'/抗生物質', value:"Antibiotics"},
        {name:"Medicine for stomach and bowels ", text:'/胃腸薬', value:"Medicine for stomach and bowels"},
        {name:"Anesthetic ", text:'/麻酔薬', value:"Antibiotics"}
       ];

    const [values, setValues] = useContext(MedContext);
    const { t, i18n } = useTranslation();
    const classes = useStyles();

    const [name, setName] = useState('')
    const [height, setHeight] = useState('')
    const [weight, setWeight] = useState('')
    const [date, setDate] = useState('')
    const [sex, setSex] = useState('');

    const [checkedFood, setCheckedFood] = React.useState([]);
    const [checkedMedecine, setCheckedMedecine] = React.useState([]);
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
            inteviewName: "Internal Medcine form1",
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

    const handleToggleFood = (value) => () => {
        const currentIndex = values.allergis.foods.indexOf(value.value);
        const newChecked = [...values.allergis.foods];

        if (currentIndex === -1) {
            newChecked.push(value.value);
        } else {
            newChecked.splice(currentIndex, 1);
        }

        //setCheckedFood({allergis:{...values.allergis, foods:newChecked}});
        setValues({...values, allergis:{...values.allergis, foods:newChecked}})
        logFunction("Food Allergie")
    };

    
    const handleToggleMedecin = (value) => () => {
        const currentIndex = values.allergis.medcine.indexOf(value.value);
        const newChecked = [...values.allergis.medcine];

        if (currentIndex === -1) {
            newChecked.push(value.value);
        } else {
            newChecked.splice(currentIndex, 1);
        }

        //setCheckedMedecine({allergis:{...values.allergis, medcine:newChecked}});
        setValues({...values, allergis:{...values.allergis, medcine:newChecked}});
        logFunction("Medicine Allergie");
    };
    //console.log(checkedFood)
   // console.log(checkedMedecine)

    const updateName = (e) => {
       // setName(e.target.value);
        setValues({...values, name:e.target.value})
        logFunction("Patient name")
       }
console.log(values)

    const updateHeight = (e) => {
       // setHeight(e.target.value);
        setValues({...values, height:e.target.value})
        logFunction("Patient height")
    }

    const updateWeight = (e) => {
        //setWeight(e.target.value);
        setValues({...values, weight:e.target.value})
        logFunction("Patient Weight")
    }

    const updateDate = (date) => {
        setDate(date)
        setValues({...values, DateOfBirth:date});
        logFunction("Date of birth")
    }

    const updateSex = (event) => {
       //setSex(event.target.value);
        setValues({...values, sex:event.target.value});
        logFunction("Patient sex")
    };


    return (
        <div className={classes.root}>
            <Grid container spacing={3} style={{ padding: 20 }}>
                <Grid item xs={12}>
                    <Paper className={classes.paper}><strong><h4>{t('internalMedcine.PersonnalInformation')} <i style={{color:"blue"}}>/個人情報</i></h4></strong></Paper>
                </Grid>
                <Grid item xs={8}>

                    <FormControl fullWidth className=''>
                        <InputLabel htmlFor="name">{t('internalMedcine.LastFirstname')} <i style={{color:"#0000ffbf"}}>/医療機関記入欄/生年月日（西暦)</i></InputLabel>
                        <Input
                            id="name"
                            type="text"
                            //values={name}
                            defaultValue={values.name}
                            onChange={updateName}
                        />
                    </FormControl>
                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                        <Grid container justify="space-around">

                            <KeyboardDatePicker
                                fullWidth
                                margin="normal"
                                id="date-picker-dialog"
                                label={t('internalMedcine.Dateofbirth')}
                                format="yyyy/MM/dd"
                                value={values.DateOfBirth}
                                onChange={updateDate}
                                KeyboardButtonProps={{
                                    'aria-label': 'change date',
                                }}
                            />

                        </Grid>

                    </MuiPickersUtilsProvider>
                    <Grid container spacing={3} style={{ padding: 20 }}>
                        <FormControl fullWidth xs={6} className=''>
                            <InputLabel htmlFor="height">{t('internalMedcine.Height')}</InputLabel>
                            <Input
                                id="height"
                                type="number"
                                //values={height}
                                defaultValue={values.height}
                                onChange={updateHeight}
                            />
                        </FormControl>
                        
                    </Grid>

                </Grid>
                <Grid item xs={4}>
                <FormControl fullWidth xs={6} className=''>
                            <InputLabel htmlFor="weight">{t('internalMedcine.Weight')}</InputLabel>
                            <Input
                                id="weight"
                                type="number"
                                //values={weight}
                                defaultValue={values.weight}
                                onChange={updateWeight}
                            />
                        </FormControl>
                    <FormControl fullWidth className={classes.formControl}>
                        <InputLabel id="demo-simple-select-label">{t('internalMedcine.Sex')}</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={values.sex}
                            onChange={updateSex}
                        >
                            <MenuItem value="Male">{t('internalMedcine.Male')}</MenuItem>
                            <MenuItem value="Female">{t('internalMedcine.Female')}</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>
            
            <Grid item xs={12}>
                <Paper className={classes.paper}><strong><h4>{t('internalMedcine.Allergie')} <span style={{color:"blue"}}>/アレルギー</span></h4></strong></Paper>
            </Grid>
            <br />
            <Grid container spacing={3} style={{ padding: 20 }}>
                <Grid item xs={6}>
                    <Paper className={classes.paper}><strong><h4>Food Allergie</h4></strong></Paper>
                    <GridList cellHeight={10} className={classes.gridList} cols={2}>
                        {foodAlergie.map((value) => {
                            const labelId = `checkbox-list-label-${value.name}`;

                            return (
                                <ListItem key={value.name} role={undefined} dense button onClick={handleToggleFood(value)}>
                                    <ListItemIcon className={classes.ListItemIcon}>
                                        <Checkbox
                                            edge="start"
                                            checked={values.allergis.foods.indexOf(value.value) !== -1}
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
                
                </Grid>
                <Grid item xs={6}>
                    <Paper className={classes.paper}><strong><h4>Medicine Allergie</h4></strong></Paper>
                    <GridList cellHeight={10} className={classes.gridList} cols={1} style={{paddingLeft: 62}}>
                        {medecinesAlergie.map((value) => {
                            const labelId = `checkbox-list-label-${value.name}`;

                            return (
                                <ListItem key={value.name} role={undefined} dense button onClick={handleToggleMedecin(value)}>
                                    <ListItemIcon>
                                        <Checkbox
                                            edge="start"
                                            checked={values.allergis.medcine.indexOf(value.value) !== -1}
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
                

                    </Grid>
            </Grid>
            </Grid>
        </div>
    );
}
export default CenteredGrid;