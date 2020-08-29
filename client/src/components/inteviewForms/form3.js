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
        { name: "1- Head /頭", value: "head" },
        { name: "2- Eye(right) /目(右)", value: "eyeR" },
        { name: "3- Eye(left) /目(左)", value: "eyeL1" },
        { name: "4- Ear(right) /耳(右)", value: "earR" },
        { name: "5- Ear(left) /耳(左)", value: "earL" },
        { name: "6- Nose /鼻", value: "nose" },
        { name: "7- Mouth /口", value: "mouth" },
        { name: "8- Throat /のど", value: "throat" },
        { name: "9- Neck /首", value: "eaneckrL" },
        { name: "10- Sholder /肩", value: "sholder" },
        { name: "11- Back /背", value: "back" },
        { name: "12- Chest /胸", value: "chest" },
        { name: "13- Abdoment /腹", value: "abdoment" },
        { name: "14- Groin /陰部･性器", value: "groin" },
        { name: "15- Arm(right) /腕(右)", value: "armR" },
        { name: "16- Arm(left) /腕(左)", value: "armL" },
        { name: "17- Hand(right) /手(右)", value: "handR" },
        { name: "18- Hand(left) /手(左)", value: "handL" },
        { name: "19- Waist /腰", value: "waist" },
        { name: "20- Buttocks /尻", value: "buttocks" },
        { name: "21- Leg(right) /脚(右)", value: "legR" },
        { name: "22- Leg(left) /脚(左)", value: "legL" },
        { name: "23- Foot(right) /足(右)", value: "footR" },
        { name: "24- Foot(left) /足(左)", value: "footL" },
        { name: "25- knee(right) /膝(右)", value: "kneeR" },
        { name: "26- knee(left) /膝(左)", value: "kneeL" }
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