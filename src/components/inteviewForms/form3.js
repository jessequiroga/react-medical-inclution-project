import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { useTranslation } from 'react-i18next';
import HumanImage from '../img/human-image.png';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import GridList from '@material-ui/core/GridList';


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
        { name: "3- Eye(right) /目(右)", value: "eyeR" },
        { name: "4- Eye(left) /目(左)", value: "eyeL1" },
        { name: "5- Ear(right) /耳(右)", value: "earR" },
        { name: "6- Ear(left) /耳(左)", value: "earL" },
        { name: "7- Nose /鼻", value: "nose" },
        { name: "9- Mouth /口", value: "mouth" },
        { name: "10- Throat /のど", value: "throat" },
        { name: "11- Neck /首", value: "eaneckrL" },
        { name: "12- Sholder /肩", value: "sholder" },
        { name: "13- Back /背", value: "back" },
        { name: "14- Chest /胸", value: "chest" },
        { name: "16- Abdoment /腹", value: "abdoment" },
        { name: "17- Groin /陰部･性器", value: "groin" },
        { name: "18- Arm(right) /腕(右)", value: "armR" },
        { name: "19- Arm(left) /腕(左)", value: "armL" },
        { name: "20- Hand(right) /手(右)", value: "handR" },
        { name: "21- Hand(left) /手(左)", value: "handL" },
        { name: "22- Waist /腰", value: "waist" },
        { name: "23- Buttocks /尻", value: "buttocks" },
        { name: "24- Leg(right) /脚(右)", value: "legR" },
        { name: "25- Leg(left) /脚(左)", value: "legL" },
        { name: "26- Foot(right) /足(右)", value: "footR" },
        { name: "27 Ffoot(left) /足(左)", value: "footL" },
        { name: "28- knee(right) /膝(右)", value: "kneeR" },
        { name: "29- knee(left) /膝(左)", value: "kneeL" }
    ];

    const [checkedBodyParts, setCheckedBodyParts] = React.useState([]);
    const classes = useStyles();

    const handleToggleBodyParts = (object) => () => {
        const currentIndex = checkedBodyParts.indexOf(object.value);
        const newChecked = [...checkedBodyParts];

        if (currentIndex === -1) {
            newChecked.push(object.value);
        } else {
            newChecked.splice(currentIndex, 1);
        }

        setCheckedBodyParts(newChecked);

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
                                                checked={checkedBodyParts.indexOf(value.value) !== -1}
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