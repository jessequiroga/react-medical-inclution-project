import React, { useState, useContext } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import { Grid } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import { useTranslation } from 'react-i18next';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import GridList from '@material-ui/core/GridList';
import FormLabel from '@material-ui/core/FormLabel';
import { ObstetricContext } from '../ObstetricgynecologyContext';

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

    const hadsurgerys = [
        {name: t('internalMedcine.Eye') +"/ 目", value:"Eye"},
        {name: t('internalMedcine.Ear') +"/ 耳", value:"Ear"},
        {name: t('internalMedcine.Nose') +"/ 鼻", value:"Nose"},
        {name: t('internalMedcine.Mouth') +"/ 口", value:"Mouth"},
        {name: t('internalMedcine.Throat') +"/ のど", value:"Throat"},
        {name: t('internalMedcine.neck') +"/ 乳房", value:"Neck"},
        {name: t('internalMedcine.Brest') +"/ 乳房", value:"Brest"},
        {name: t('internalMedcine.Esophagus') +"/ 食道", value:"Esophagus"},
        {name: t('internalMedcine.Stomach') +"/ 胃", value:"Stomach"},
        {name: t('internalMedcine.Intestines') +"/ 梅毒", value:"Intestines"},
        {name: t('internalMedcine.Heart') +"/ 心臓<", value:"Heart"},
        {name: t('internalMedcine.Cecum') +"/ 盲腸", value:"Cecum"},
        {name: t('internalMedcine.Liver') +"/ 肝臓", value:"Liver"},
        {name: t('internalMedcine.Pancreas') +"/ 膵臓", value:"Pancreas"},
        {name: t('internalMedcine.kidney') +"/ 腎臓", value:"kidney"},
        {name: t('internalMedcine.Ovary') +"/ 卵巣", value:"Ovary"},
        {name: t('internalMedcine.Uterus') +"/ 子宮", value:"Uterus"},
        {name: t('internalMedcine.Upperlowerlimb') +"/ 上下肢", value:"EUpperlowerlimbye"},
        {name: t('internalMedcine.Others') +"/ その他", value:"Others"}
       ]

    const onmedications = [
        {name: t('internalMedcine.Coldmedicine') +"/ かぜ薬", value:"Coldmedicine"},
        {name: t('internalMedcine.Feverreducer') +"/ 朝解熱剤", value:"Feverreducer"},
        {name: t('internalMedcine.Painkiller') +"/ 痛み止め", value:"Painkiller"},
        {name: t('internalMedcine.Anti-suppuration') +"/ 化膿止め", value:"Anti-suppuration"},
        {name: t('internalMedcine.Antibiotics') +"/ 化膿止め", value:"Antibiotics"}
       ]

       const ondoctorcares = [
        {name: t('internalMedcine.bronchialasthma') +"/ 気管支喘息 /発熱", value:"bronchialasthma"},
        {name: t('internalMedcine.highbloodpressure') +"/ 絶高血圧", value:"highbloodpressure"},
        {name: t('internalMedcine.Diabetesmellitus') +"/ 糖尿病", value:"Diabetesmellitus"},
        {name: t('internalMedcine.Tuberculosis') +"/ 結核", value:"Tuberculosis"},
        {name: t('internalMedcine.Hearttrouble') +"/ 心臓病", value:"Hearttrouble"},
        {name: t('internalMedcine.HepatitisB') +"/ Ｂ型肝炎", value:"HepatitisB"},
        {name: t('internalMedcine.epatitisC') +"/ Ｃ型肝炎", value:"epatitisC"},
        {name: t('internalMedcine.collagenConnectiveTissuedisease') +"/ 膠原病", value:"collagenConnectiveTissuedisease"},
        {name: t('internalMedcine.Thyroiddisease') +"/ 甲状腺の病気", value:"Thyroiddisease"},
        {name: t('internalMedcine.Cancertumor') +"/ 血液の病気", value:"Cancertumor"},
        {name: t('internalMedcine.glaucoma') +"/ 緑内障", value:"glaucoma"},
        {name: t('internalMedcine.Gastrointestinaldisorder') +"/ 胃腸の病気", value:"BlooGastrointestinaldisorderddisease"},
        {name: t('internalMedcine.Gonorrhea') +"/ 淋病", value:"Gonorrhea"},
        {name: t('internalMedcine.Syphilis') +"/ 梅毒", value:"Syphilis"}
       ]

    const [values, setValues] = useContext(ObstetricContext);
    const classes = useStyles();
    const [medication, setMedication] = React.useState('');
    const [medicationType, setMedicationType] = React.useState([]);
    const [doctorcares, setDoctorcares] = React.useState('');
    const [doctorcaresType, setDoctorcaresType] = React.useState([]);
    const [hadsurgery, setHadsurgerys] = React.useState('');
    const [hadsurgerysType, setHadsurgerysType] = React.useState([]);
    

    const handleToggleHadsurgerysType = (object) => () => {
        const currentIndex = values.hadsurgerys.indexOf(object.value);
        const newChecked = [...values.hadsurgerys];

        if (currentIndex === -1) {
            newChecked.push(object.value);
        } else {
            newChecked.splice(currentIndex, 1);
        }

        setHadsurgerysType(newChecked);
        setValues({...values, hadsurgerys:newChecked})
    };

    const handleChangeHadsurgerys = (event) => {
        setHadsurgerys(event.target.value);
        setValues({...values, hadsurgery:event.target.value})
    };


    const handleToggleMedicationType = (object) => () => {
        const currentIndex = values.onmedications.indexOf(object.value);
        const newChecked = [...values.onmedications];

        if (currentIndex === -1) {
            newChecked.push(object.value);
        } else {
            newChecked.splice(currentIndex, 1);
        }

        setMedicationType(newChecked);
        setValues({...values, onmedications:newChecked})
    };

    const handleChange = (event) => {
        setMedication(event.target.value);
        setValues({...values, onMedication:event.target.value})
    };

    const handleToggleDoctorcaresType = (object) => () => {
        const currentIndex = values.doctorCare.indexOf(object.value);
        const newChecked = [...values.doctorCare];

        if (currentIndex === -1) {
            newChecked.push(object.value);
        } else {
            newChecked.splice(currentIndex, 1);
        }

        setDoctorcaresType(newChecked);
        setValues({...values, doctorCare:newChecked})
    };

    const handleChangeDoctorcare = (event) => {
        setDoctorcares(event.target.value);
        setValues({...values, doctorcare:event.target.value})
    };


    return (
        <div className={classes.root}>
            <Grid container spacing={3} style={{ padding: 20 }}>
                <Grid item xs={12}>
                    <Paper className={classes.paper}><strong><h5>{t('internalMedcine.currentlyonmedication')} <br />/現在何か薬を飲んでいますか</h5></strong></Paper>
                </Grid>

                <Grid item xs={12}>
                <FormControl component="fieldset">
                    
                    <RadioGroup row aria-label="gender" name="gender1" value={values.onMedication} onChange={handleChange}>
                        <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
                        <FormControlLabel value="No" control={<Radio />} label="No" />
                    </RadioGroup>
                </FormControl>
                </Grid>

                <Grid>
                <div>
                    {values.onMedication === 'Yes' ? (
                        <div>
                        <FormLabel style={{marginLeft:-148, fontSize:18}}><strong>{t('internalMedcine.currentlyonmedicationyesno')}</strong></FormLabel>
                        <GridList style={{ height: 120, padding: 20 }} cellHeight={10} className={classes.gridList} cols={3}>
                        {onmedications.map((value) => {
                            const labelId = `checkbox-list-label-${value.name}`;

                            return (
                                <ListItem key={value.name} role={undefined} dense button onClick={handleToggleMedicationType(value)}>
                                    <ListItemIcon>
                                        <Checkbox
                                            edge="start"
                                            checked={values.onmedications.indexOf(value.value) !== -1}
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
                        </div>
                    ) : (
                            <nav> &apos; </nav>
                        )}
                </div>
                </Grid>

                <Grid item xs={12}>
                    <Paper className={classes.paper}><strong><h5>{t('internalMedcine.underdoctorcare')}? <br />/現在治療している病気、または過去に治療していたことはありますか？</h5></strong></Paper>
                </Grid>
                <Grid item xs={12}>
                <FormControl component="fieldset">
                    
                    <RadioGroup row aria-label="gender" name="gender1" value={values.doctorcare} onChange={handleChangeDoctorcare}>
                        <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
                        <FormControlLabel value="No" control={<Radio />} label="No" />
                    </RadioGroup>
                </FormControl>
                </Grid>
                <Grid>
                <div>
                    {values.doctorcare === 'Yes' ? (
                        <Grid container item xs={12}>
                        <FormLabel container style={{marginTop:-25, lineHeight:2, fontSize:18}}><strong>{t('internalMedcine.currentlyonmedicationyesno')} <br/>/「はい」に☑した人は、疾患名リストから選択し、治療していた医療機関名を書いてください。</strong></FormLabel>
                        <GridList style={{ height: 200, padding: 20 }} cellHeight={10} className={classes.gridList} cols={3}>
                        {ondoctorcares.map((value) => {
                            const labelId = `checkbox-list-label-${value.name}`;

                            return (
                                <ListItem key={value.name} role={undefined} dense button onClick={handleToggleDoctorcaresType(value)}>
                                    <ListItemIcon>
                                        <Checkbox
                                            edge="start"
                                            checked={values.doctorCare.indexOf(value.value) !== -1}
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
                    ) : (
                            <nav> &apos; </nav>
                        )}
                </div>
                </Grid>

                <Grid item xs={12}>
                    <Paper className={classes.paper}><strong><h5>{t('internalMedcine.hadsurgery')}? <br />/現在治療している病気、または過去に治療していたことはありますか？</h5></strong></Paper>
                </Grid>
                <Grid item xs={12}>
                <FormControl component="fieldset">
                    
                    <RadioGroup row aria-label="gender" name="gender1" value={values.hadsurgery} onChange={handleChangeHadsurgerys}>
                        <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
                        <FormControlLabel value="No" control={<Radio />} label="No" />
                    </RadioGroup>
                </FormControl>
                </Grid>
                <Grid>
                <div>
                    {values.hadsurgery === 'Yes' ? (
                        <div>
                            <FormLabel style={{marginLeft:-148, fontSize:18}}><strong>{t('internalMedcine.currentlyonmedicationyesno')}</strong></FormLabel>
                        <GridList style={{ height: 233, padding: 20 }} cellHeight={10} className={classes.gridList} cols={3}>
                        {hadsurgerys.map((value) => {
                            const labelId = `checkbox-list-label-${value.name}`;
                           return (
                                <ListItem key={value.name} role={undefined} dense button onClick={handleToggleHadsurgerysType(value)}>
                                    <ListItemIcon>
                                        <Checkbox
                                            edge="start"
                                            checked={values.hadsurgerys.indexOf(value.value) !== -1}
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
                        </div>
                    ) : (
                            <nav> &apos; </nav>
                        )}
                </div>
                </Grid>
            </Grid>
        </div>
    );
}
export default CenteredGrid;