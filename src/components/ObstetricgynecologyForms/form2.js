import React, { useState, useContext }  from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { useTranslation } from 'react-i18next';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import GridList from '@material-ui/core/GridList';
import { ObstetricContext } from '../ObstetricgynecologyContext'

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
        {name: t('obstetricGynecology.Pregnancy') + " /妊娠", value:"Pregnancy"},
        {name: t('obstetricGynecology.Menstrualdisorder')+" /月経異常", value:"Menstrual disorder"},
        {name: t('obstetricGynecology.Menstrualpain') +" /月経痛", value:"Menstrual pain"},
        {name: t('obstetricGynecology.Vaginaldischarge') +" /おりもの", value:"Vaginal discharge"},
        {name: t('obstetricGynecology.Abnormalvaginalbleeding')+" /不正出血", value:"Abnormal vaginal bleeding"},
        {name: t('obstetricGynecology.Painwhenurinating')+" /排尿時痛", value:"Pain when urinating"},
        {name: t('obstetricGynecology.Difficultyurinating')+" /尿がでにくい", value:"Difficulty urinating"},
        {name: t('obstetricGynecology.Hematuria')+" /尿に血が混じる", value:"Hematuria (blood inurine)"},
        {name: t('obstetricGynecology.Pyuria')+" /尿に膿が混じる", value:"Pyuria (pus in urine)"},
        {name: t('obstetricGynecology.Perineumrash')+" /会陰部にできもの", value:"Perineum rash"},
        {name: t('obstetricGynecology.Rednessandswelling')+" /赤く脹れている", value:"Redness and swelling"},
        {name: t('obstetricGynecology.Havepain')+" /痛みがある", value:"Have pain"},
        {name: t('obstetricGynecology.Itchiness')+" /かゆみ", value:"Itchiness"},
        {name: t('obstetricGynecology.Urinaryincontinence')+" /尿失禁", value:"Urinary incontinence"},
        {name: t('obstetricGynecology.Fecalincontinence')+" /便失禁", value:"Fecal incontinence"},
        {name: t('obstetricGynecology.Uterineprolapse')+" /子宮脱", value:"Uterine prolapse"},
        {name: t('obstetricGynecology.Consultationonfertilitytreatment')+" /不妊の相談", value:"Consultation on fertility treatment"},
        {name: t('obstetricGynecology.Vomiting')+" /嘔吐", value:"Vomiting"},
        {name: t('obstetricGynecology.Nausea' )+" /嘔気", value:"Nausea"},
        {name: t('obstetricGynecology.Cancerscreening')+" /がん健診", value:"Cancer screening"},
        {name: t('obstetricGynecology.Other(s)' )+" /その他", value:"Other(s)"},
        {name: t('obstetricGynecology.advisedbyanother')+" /他の医療機関から受診するように勧められた（健診含む）", value:"I was advised by another clinic/hospital (or at a regular check-up) to come here."},
        
       ]
    

    const [values, setValues] = useContext(ObstetricContext);
    const classes = useStyles();

    const handleToggleProblemtoday = (object) => () => {
        const currentIndex = values.problemtoday.indexOf(object.value);
        const newChecked = [...values.problemtoday];
        
        if (currentIndex === -1) {
            newChecked.push(object.value);
        } else {
            newChecked.splice(currentIndex, 1);
        }
        
         setValues({...values, problemtoday:newChecked})
    };

   

    return (

        <div>
            <div className={classes.root}>
                <Grid container spacing={3} style={{ padding: 20 }}>
                    <Grid item xs={12}>
                        <Paper className={classes.paper}><strong><h4>{t('internalMedcine.problemtoday')}<br/>/今日はどのような症状がありますか。（複数ある方は複数☑してください.)</h4></strong></Paper>
                    </Grid>
                    
                    <Grid container spacing={3} style={{ padding: 20 }}>
                    <GridList container style={{height:642, padding: 20 }} cellHeight={10} className={classes.gridList} cols={3}>
                        {problemtodays.map((value) => {
                            const labelId = `checkbox-list-label-${value.name}`;

                            return (
                                <ListItem style={{marginTop:61}} key={value.name} role={undefined} dense button onClick={handleToggleProblemtoday(value)}>
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