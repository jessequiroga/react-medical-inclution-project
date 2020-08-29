import React, { useState, useContext } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { useTranslation } from 'react-i18next';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import GridList from '@material-ui/core/GridList';
import Checkbox from '@material-ui/core/Checkbox';
import { CardiologyContext } from '../context/cardiologyContext'

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
    const problem = [
        { name: 'Irregular pulse /脈が乱れる', value: 'Irregular pulse' },
        { name: 'Chest pain /胸痛', value: 'Chest pain' },
        { name: 'Cold sweat /冷汗', value: 'Cold sweat' },
        { name: 'Heaviness in chest /胸が重たい', value: 'Heaviness in chest' },
        { name: 'Difficulty breathing /息苦しさ', value: 'Difficulty breathing' },
        { name: 'Shortness of breath /息切れ', value: 'Shortness of breath' },
        { name: 'Have a palpitation /動悸がする', value: 'Have a palpitation' },
        { name: 'Lightheadedness /立ちくらみ', value: 'Lightheadedness' },
        { name: 'Swelling (face, hands, feet) /むくみ（顔・手・足）', value: 'Swelling (face, hands, feet)' },
        { name: 'Cold hands and feet /手足が冷たい', value: 'Cold hands and feet' },
        { name: 'Other(s) /その他：', value: 'Other(s)' },
        { name: 'I was advised by another clinic/hospital (or at a regular check-up) to come here./他の医療機関から受診するように勧められた（健診含む）', value: 'I was advised by another clinic/hospital (or at a regular check-up) to come here.' },
    ]

    const [values, setValues] = useContext(CardiologyContext);
    const { t, i18n } = useTranslation();
    const classes = useStyles();

    const handleToggleProblem = (value) => () => {
        const currentIndex = values.problemtoday.indexOf(value.value);
        const newChecked = [...values.problemtoday];

        if (currentIndex === -1) {
            newChecked.push(value.value);
        } else {
            newChecked.splice(currentIndex, 1);
        }

        setValues({ ...values, problemtoday: newChecked })
    };

    return (
        <div>
            <div className={classes.root}>
                <Grid container spacing={3} style={{ padding: 20 }}>
                    <Grid item xs={12}>
                        <Paper className={classes.paper}><strong><h4>{t('internalMedcine.problemtoday')}<br/>/今日はどのような症状がありますか。（複数ある方は複数☑してください.)</h4></strong></Paper>
                    </Grid>
                    
                    <Grid container spacing={3} style={{ padding: 20 }}>
                    <GridList container style={{height:438, padding: 20 }} cellHeight={10} className={classes.gridList} cols={3}>
                        {problem.map((value) => {
                            const labelId = `checkbox-list-label-${value.name}`;

                            return (
                                <ListItem style={{marginTop:61}} key={value.name} role={undefined} dense button onClick={handleToggleProblem(value)}>
                                    <ListItemIcon >
                                        <Checkbox
                                            edge="start"
                                            checked={values.problemtoday.indexOf(value.value) !== -1}
                                            tabIndex={-1}
                                            disableRipple
                                            inputProps={{ 'aria-labelledby': labelId }}
                                        />
                                    </ListItemIcon>
                                    <ListItemText id={labelId} primary={`${value.name}`} style={{display:"table-caption"}}/>

                                </ListItem>
                            );
                        })}
                    </GridList>

                    
                        </Grid>
                    </Grid>

            </div>
        </div>
    )
}
export default CenteredGrid;