import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import { Grid } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import { useTranslation } from 'react-i18next';
import Checkbox from '@material-ui/core/Checkbox';

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
    const classes = useStyles();
    const [female, setFemale] = React.useState('No');
    const [breastFeeding, setBreastFeeding] = React.useState('No');
    const [SpecialRequest, setSpecialRequest] = React.useState({
        medicalexpenses: false,
        haveinterpreter: false,
        others: false
    });

    const handleChangeCheckSpecialRequest = (event) => {
        setSpecialRequest({ ...SpecialRequest, [event.target.name]: event.target.checked });
    };

    const handleChange = (event) => {
        setFemale(event.target.value);
    };

    const handleChangebreastFeeding = (event) => {
        setBreastFeeding(event.target.value);
    };

    return (
        <div className={classes.root}>
            <Grid container spacing={3} style={{ padding: 20 }}>
                <Grid item xs={12}>
                    <Paper className={classes.paper}><strong><h5>{t('internalMedcine.Iffemale')}? <br />/女性の方のみお答えください。妊娠していますか、またその可能性はありますか。</h5></strong></Paper>
                </Grid>

                <Grid item xs={12}>
                    <FormControl component="fieldset">

                        <RadioGroup row aria-label="gender" name="gender1" value={female} onChange={handleChange}>
                            <FormControlLabel value="Yes" control={<Radio />} label={t('internalMedcine.yes')} />
                            <FormControlLabel value="No" control={<Radio />} label={t('internalMedcine.No')} />
                            <FormControlLabel value="Yes1" control={<Radio />} label={t('internalMedcine.Donotknow') + '/わからない'} />
                        </RadioGroup>
                    </FormControl>
                </Grid>

                <Grid item xs={12}>
                    <Paper className={classes.paper}><strong><h5>{t('internalMedcine.Areyoubreastfeeding')}? <br />/現在、授乳中ですか。</h5></strong></Paper>
                </Grid>

                <Grid item xs={12}>
                    <FormControl component="fieldset">

                        <RadioGroup row aria-label="gender" name="gender1" value={breastFeeding} onChange={handleChangebreastFeeding}>
                            <FormControlLabel value="Yes" control={<Radio />} label={t('internalMedcine.yes')} />
                            <FormControlLabel value="No" control={<Radio />} label={t('internalMedcine.No')} />

                        </RadioGroup>
                    </FormControl>
                </Grid>

                <Grid item xs={12}>
                    <Paper className={classes.paper}><strong><h5>{t('internalMedcine.specialrequestconcerningconsultation')}? <br />/診察でのご希望がある場合は、☑をしてください。</h5></strong></Paper>
                </Grid>

                <Grid container item xs={12}>
                    <FormControlLabel
                        control={
                            <Checkbox
                                checked={SpecialRequest.medicalexpenses}
                                onChange={handleChangeCheckSpecialRequest}
                                name="medicalexpenses"
                            />
                        }
                        label={t('internalMedcine.informedonestimatedexpenses')}
                    />
                </Grid>

                <Grid container item xs={12}>
                    <FormControlLabel
                        control={
                            <Checkbox
                                checked={SpecialRequest.haveinterpreter}
                                onChange={handleChangeCheckSpecialRequest}
                                name="haveinterpreter"
                            />
                        }
                        label={t('internalMedcine.interpreterinterpreterservice')}
                    />
                </Grid>

                <Grid container item xs={12}>
                    <FormControlLabel
                        control={
                            <Checkbox
                                checked={SpecialRequest.others}
                                onChange={handleChangeCheckSpecialRequest}
                                name="others"
                            />
                        }
                        label={t('internalMedcine.Other')+'(s)/その他'}
                    />
                </Grid>

            </Grid>
        </div>
    )
}
export default CenteredGrid;