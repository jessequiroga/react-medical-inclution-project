import React, { useEffect, useState, useContext } from 'react';
import { CovidContext } from "./context/covid19Context"
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import Table from '@material-ui/core/Table';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import Checkbox from '@material-ui/core/Checkbox';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import { useHistory } from "react-router-dom";
import Container from '@material-ui/core/Container';
import { useTranslation } from 'react-i18next';
import Footer from "./footer";
import Nav from "./nav";

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

function createData(name, calories) {
    return { name, calories};
}

const Centered = () => {
    const classes = useStyles();
    const { t, i18n } = useTranslation();
    const [values, setValues] = useContext(CovidContext);
    const history = useHistory();

    const rows = [
        createData('checkBoxApplicable1', values.checkBoxApplicable1),
        createData('checkBoxApplicable2', values.checkBoxApplicable2),
        createData('checkBoxApplicable3', values.checkBoxApplicable3),
        createData('haveSymptoms1', values.haveSymptoms1),
        createData('Cough', values.Cough),
        createData('Phlegm', values.Phlegm),
        createData('Shortnessofbreath', values.Shortnessofbreath),
        createData('Senseoffatigue', values.Senseoffatigue),
        createData('Abnormalityinthesenseofsmell', values.Abnormalityinthesenseofsmell),
        createData('Unabletoappreciatetaste', values.Unabletoappreciatetaste),
        createData('VomitingNausea', values.VomitingNausea),
        createData('Diarrhea', values.Diarrhea),
        createData('Noappetite', values.Noappetite)
    ];

    const handleChange = (event) => {
        setValues({ ...values, [event.target.name]: event.target.value })
        console.log(values)
    };

    const handleConfirm = () => {
        history.push("/");
        //window.location = '/covid19Result';
    }

    return (
        <div>
            <Nav />
            <Container component="main" maxWidth="lg">
                <Grid item xs={12}>
                    <strong className={classes.h4}><h4 className={classes.paper}>{t('internalMedcine.PersonnalInformation')}</h4></strong>
                </Grid>

                <Grid item xs={12} style={{ textAlign: "left", paddingBottom:10}}>
                        <Button color="primary" variant="contained" style={{ width: 150 }} onClick={handleConfirm}>
                        {t('internalMedcine.Back') }
                    </Button>
                    </Grid>
                <TableContainer component={Paper} >
                    <Table className={classes.table} aria-label="simple table" size="small">

                        <TableBody>
                            {rows.map((row) => (
                                <TableRow key={row.name}>
                                    <TableCell component="th" scope="row">
                                        <strong>{t("covid-19." + row.name)}</strong>
                                    </TableCell>
                                    <TableCell align="left">
                                        <FormControlLabel
                                            control={
                                                <Checkbox
                                                    checked={JSON.parse(row.calories)}
                                                    onChange={handleChange}
                                                    name="checkedB"
                                                    color="primary"
                                                />
                                            }
                                        />

                                    </TableCell>

                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Container>
            <Footer />
        </div>
    )
}
export default Centered;