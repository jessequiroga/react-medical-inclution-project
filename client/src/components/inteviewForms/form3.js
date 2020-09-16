import React, { useEffect, useState, useContext } from 'react';
import { useHistory } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { useTranslation } from 'react-i18next';
import HumanImage from '../img/human-image1.png';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import GridList from '@material-ui/core/GridList';
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
    const bodyParts = [
        { name: "1- "+t('internalMedcine.Head')+"/頭", value: "Head" },
        { name: "2- "+t('internalMedcine.Eye(right)')+" /目(右)", value: "Eye(right)" },
        { name: "3- "+t('internalMedcine.Eye(left)')+" /目(左)", value: "Eye(left)" },
        { name: "4- "+t('internalMedcine.Ear(right)')+" /耳(右)", value: "Ear(right)" },
        { name: "5- "+t('internalMedcine.Ear(left)')+" /耳(左)", value: "Ear(left)" },
        { name: "6- "+t('internalMedcine.Nose')+" /鼻", value: "Nose" },
        { name: "7- "+t('internalMedcine.Mouth')+" /口", value: "Mouth" },
        { name: "8- "+t('internalMedcine.Throat')+" /のど", value: "Throat" },
        { name: "9- "+t('internalMedcine.Neck')+" /首", value: "Neck" },
        { name: "10- "+t('internalMedcine.Sholder')+" /肩", value: "Sholder" },
        { name: "11- "+t('internalMedcine.Back')+" /背", value: "back" },
        { name: "12- "+t('internalMedcine.Chest')+" /胸", value: "Chest" },
        { name: "13- "+t('internalMedcine.Abdoment')+" /腹", value: "Abdoment" },
        { name: "14- "+t('internalMedcine.Groin')+" /陰部･性器", value: "Groin" },
        { name: "15- "+t('internalMedcine.Arm(right)')+" /腕(右)", value: "Arm(right)" },
        { name: "16- "+t('internalMedcine.Arm(left)')+" /腕(左)", value: "Arm(left)" },
        { name: "17- "+t('internalMedcine.Hand(right)')+" /手(右)", value: "Hand(right)" },
        { name: "18- "+t('internalMedcine.Hand(left)')+" /手(左)", value: "Hand(left)" },
        { name: "19- "+t('internalMedcine.Waist')+" /腰", value: "Waist" },
        { name: "20- "+t('internalMedcine.Buttocks')+" /尻", value: "Buttocks" },
        { name: "21- "+t('internalMedcine.Leg(right)')+" /脚(右)", value: "Leg(right)" },
        { name: "22- "+t('internalMedcine.Leg(left)')+" /脚(左)", value: "Leg(left)" },
        { name: "23- "+t('internalMedcine.Foot(right)')+" /足(右)", value: "Foot(right)" },
        { name: "24- "+t('internalMedcine.Foot(left)')+" /足(左)", value: "Foot(left)" },
        { name: "25- "+t('internalMedcine.knee(right)')+" /膝(右)", value: "knee(right)" },
        { name: "26- "+t('internalMedcine.knee(left)')+" /膝(左)", value: "knee(left)" }
    ];
    const [values, setValues] = useContext(MedContext);

    const [checkedBodyParts, setCheckedBodyParts] = React.useState([]);
    const classes = useStyles();
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
            inteviewName: "Internal Medcine form 3",
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

    const handleToggleBodyParts = (object) => () => {
        const currentIndex = values.bodyPart.indexOf(object.value);
        const newChecked = [...values.bodyPart];

        if (currentIndex === -1) {
            newChecked.push(object.value);
        } else {
            newChecked.splice(currentIndex, 1);
        }

        setCheckedBodyParts(newChecked);
        setValues({...values, bodyPart:newChecked});
        logFunction("Select the place where you feel the symptoms");
    };

    //console.log(checkedBodyParts)
    return (
        
            <div>
                <div className={classes.root}>
                    <Grid container spacing={3} style={{ padding: 20 }}>
                        <Grid style={{height:700, marginTop:-30, backgroundColor: 'white'}}>
                            <img src={HumanImage} width="80%" />

                        </Grid>
                        <Grid item xs={12} style={{ backgroundColor: 'white'}}>
                            <Paper className={classes.paper}><strong><h5>{t('internalMedcine.selectPlaceSymptom')}</h5></strong></Paper>
                        </Grid>

                        <GridList container style={{ height: 362, paddingLeft: 20,paddingRight: 20, paddingTop: 16, paddingBottom: 15, backgroundColor: 'white' }} cellHeight={10} className={classes.gridList} cols={3}>
                            {bodyParts.map((value) => {
                                const labelId = `checkbox-list-label-${value.name}`;

                                return (
                                    <ListItem key={value.name} role={undefined} dense button onClick={handleToggleBodyParts(value)}>
                                        <ListItemIcon>
                                            <Checkbox
                                                edge="start"
                                                checked={values.bodyPart.indexOf(value.value) !== -1}
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

                    </Grid>

                </div>
            </div>
        
    );
}
export default CenteredGrid;