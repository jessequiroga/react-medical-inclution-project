import React, { useEffect, useState, useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Container from '@material-ui/core/Container';
import { useTranslation } from 'react-i18next';
import { MedContext } from '../internalMedContext';

const useStyles = makeStyles((theme) => ({
    table: {
        minWidth: 650,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: 'black',
        marginBottom: 10,
        marginTop: 10,
        fontSize: 20,

    },
    h4: {
        fontSize: 20,
        textAlign: "center"
    }
}));

function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
}



const CenteredGrid = () => {
    const { t, i18n } = useTranslation();
    const classes = useStyles();
    const [values, setValues] = useContext(MedContext);

    const rows = [
        createData('name', values.name),
        createData('Date Of Birth', values.DateOfBirth.toLocaleDateString()),
        createData('Height', values.height),
        createData('Weight', values.weight),
        createData('Sex', values.sex),
    ];

    const rows1 = [
        createData('Food allergis', values.allergis.foods),
        createData('Medcine allergis', values.allergis.medcine),
    ];

    const rows2 = [
        createData('stools', values.stools),
        createData('stoolfrequency', values.stoolfrequency),
    ]

    const rows3 = [
        createData('Place where you experience symptom', values.symptomoccur),
        createData('When does the symptoms occur', values.bodyPart),
        createData('What is the symptoms like', values.symptomlike),
        createData('Symptoms on a scale of 1 to 10', values.scale1to10),
        createData('Symptoms start time', values.symptomstart.toLocaleDateString()),
        createData('Symptoms start date', values.symtomstarttime.toLocaleDateString()),

    ]

    const rows4 = [
        createData('On medication', values.onMedication),
        createData('Condition', values.onmedications),
    ]

    const rows5 = [
        createData('Doctor care', values.doctorcare),
        createData('Condition', values.doctorCare),
    ]

    const rows6 = [
        createData('Had surgery', values.hadsurgerys),
        createData('Condition', values.hadsurgery),
    ]

    const rows7 = [
        createData('Do yo regularly or used to smoke', values.smokeregularly),
        createData('Amount you smoke', values.smokeday.amount),
        createData('Duration you smoke', values.smokeday.duration),
        createData('The year you stop smoking', values.smokeday.yearStop),
    ]

    const rows8 = [
        createData('Beer', values.drinkeday.beer, values.drinkeday.nobeer,),
        createData('Japanese sake', values.drinkeday.japsake, values.drinkeday.japsake,),
        createData('Wisky', values.drinkeday.wisky, values.drinkeday.nowisky,),
        createData('Wine', values.drinkeday.wine, values.drinkeday.nowine,),
        createData('Other', values.drinkeday.other, values.drinkeday.noOther,),
    ]

    const rows9 = [
        createData('Pregnant', values.pregnant),
        createData('Breastfeeding', values.breastfeeding),
        createData('Medicalexpenses', values.medicalexpenses),
        createData('Have interpreter', values.haveinterpreter),
        createData('Others', values.otherssss),
    ]

    return (
        <div>
            <Container component="main" maxWidth="md">
                <Grid item xs={12}>
                    <strong className={classes.h4}><h4 className={classes.paper}>{t('internalMedcine.PersonnalInformation')}</h4></strong>
                </Grid>

                <TableContainer component={Paper} >
                    <Table className={classes.table} aria-label="simple table">

                        <TableBody>
                            {rows.map((row) => (
                                <TableRow key={row.name}>
                                    <TableCell component="th" scope="row">
                                        {row.name}
                                    </TableCell>
                                    <TableCell align="right">{row.calories}</TableCell>

                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>

                <Grid item xs={12}>
                    <strong className={classes.h4}><h4 className={classes.paper}>{t('internalMedcine.Allergie')} /アレルギー</h4></strong>
                </Grid>
                <TableContainer component={Paper}>
                    <Table className={classes.table} aria-label="simple table">

                        <TableBody>
                            {rows1.map((row) => (
                                <TableRow key={row.name}>
                                    <TableCell component="th" scope="row">
                                        {row.name}
                                    </TableCell>
                                    <TableCell align="right">{row.calories}</TableCell>

                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>

                <Grid item xs={12}>
                    <strong className={classes.h4}><h4 className={classes.paper}>All that apply to your stool</h4></strong>
                </Grid>
                <TableContainer component={Paper}>
                    <Table className={classes.table} aria-label="simple table">

                        <TableBody>
                            {rows2.map((row) => (
                                <TableRow key={row.name}>
                                    <TableCell component="th" scope="row">
                                        {row.name}
                                    </TableCell>
                                    <TableCell align="right">{row.calories}</TableCell>

                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>

                <Grid item xs={12}>
                    <strong className={classes.h4}><h4 className={classes.paper}>Symptoms</h4></strong>
                </Grid>
                <TableContainer component={Paper}>
                    <Table className={classes.table} aria-label="simple table">

                        <TableBody>
                            {rows3.map((row) => (
                                <TableRow key={row.name}>
                                    <TableCell component="th" scope="row">
                                        {row.name}
                                    </TableCell>
                                    <TableCell align="right">{row.calories}</TableCell>

                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
                <Grid item xs={12}>
                    <strong className={classes.h4}><h4 className={classes.paper}>{t('internalMedcine.currentlyonmedication')} </h4></strong>
                </Grid>
                <TableContainer component={Paper}>
                    <Table className={classes.table} aria-label="simple table">

                        <TableBody>
                            {rows4.map((row) => (
                                <TableRow key={row.name}>
                                    <TableCell component="th" scope="row">
                                        {row.name}
                                    </TableCell>
                                    <TableCell align="right">{row.calories}</TableCell>

                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>

                <Grid item xs={12}>
                    <strong className={classes.h4}><h4 className={classes.paper}>{t('internalMedcine.underdoctorcare')}?</h4></strong>
                </Grid>
                <TableContainer component={Paper}>
                    <Table className={classes.table} aria-label="simple table">

                        <TableBody>
                            {rows5.map((row) => (
                                <TableRow key={row.name}>
                                    <TableCell component="th" scope="row">
                                        {row.name}
                                    </TableCell>
                                    <TableCell align="right">{row.calories}</TableCell>

                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>

                <Grid item xs={12}>
                    <strong className={classes.h4}><h4 className={classes.paper}>{t('internalMedcine.hadsurgery')}</h4></strong>
                </Grid>
                <TableContainer component={Paper}>
                    <Table className={classes.table} aria-label="simple table">

                        <TableBody>
                            {rows6.map((row) => (
                                <TableRow key={row.name}>
                                    <TableCell component="th" scope="row">
                                        {row.name}
                                    </TableCell>
                                    <TableCell align="right">{row.calories}</TableCell>

                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>

                <Grid item xs={12}>
                    <strong className={classes.h4}><h4 className={classes.paper}>{t('internalMedcine.smokeregularly')}?</h4></strong>
                </Grid>
                <TableContainer component={Paper}>
                    <Table className={classes.table} aria-label="simple table">

                        <TableBody>
                            {rows7.map((row) => (
                                <TableRow key={row.name}>
                                    <TableCell component="th" scope="row">
                                        {row.name}
                                    </TableCell>
                                    <TableCell align="right">{row.calories}</TableCell>

                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>

                <Grid item xs={12}>
                    <strong className={classes.h4}><h4 className={classes.paper}>{t('internalMedcine.drinkregularly')}?</h4></strong>
                </Grid>
                <TableContainer component={Paper}>
                    <Table className={classes.table} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                            <TableCell>Name</TableCell>
                                <TableCell>yes/no</TableCell>
                                <TableCell align="right">Quantity</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows8.map((row) => (
                                <TableRow key={row.name}>
                                    <TableCell component="th" scope="row">
                                        {row.name}
                                    </TableCell>
                                    <TableCell align="right">{row.calories}</TableCell>
                                    <TableCell align="right">{row.fat}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>

                <Grid item xs={12}>
                    <Paper className={classes.paper}><strong><h5>{t('internalMedcine.Iffemale')}? <br />/女性の方のみお答えください。妊娠していますか、またその可能性はありますか。</h5></strong></Paper>
                </Grid>
                <TableContainer component={Paper}>
                    <Table className={classes.table} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                               
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows9.map((row) => (
                                <TableRow key={row.name}>
                                    <TableCell component="th" scope="row">
                                        {row.name}
                                    </TableCell>
                                    <TableCell align="right">{row.calories}</TableCell>
                                    <TableCell align="right">{row.fat}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Container>
        </div>
    )
}
export default CenteredGrid;