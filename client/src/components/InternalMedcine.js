import React, { useState, useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Nav from './nav';
import Footer from "./footer";
import { useTranslation } from 'react-i18next';
import Form2 from './inteviewForms/form2'
import Form1 from './inteviewForms/form1'
import Form3 from './inteviewForms/form3'
import Form4 from './inteviewForms/form4'
import Form5 from './inteviewForms/form5'
import Form6 from './inteviewForms/form6'
import Form7 from './inteviewForms/form7'
import ViewInternalMed from './inteviewForms/viewInternalMed'
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import { InternalMedContext, MedContext } from './internalMedContext';
import axios from "axios"


const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        flexGrow: 1,
        textAlign:"center"
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
        color: theme.palette.text.secondary,
    },
}));

function getSteps() {
    return ['', '', '', '', '', '', '', ''];
}

function GetStepContent({ activeStep, name, setValues }) {
    //console.log("this is the name "+ values.name);

    switch (activeStep) {
        case 0:
            return <Form2
                name={name}
                //onChange={(value) =>setValues(value)}
                setValues={setValues}
            //setSelectedDate={setSelectedDate}
            // selectedDate={selectedDate}
            />;
        case 1:
            return <Form1 />;
        case 2:
            return <Form3 />;
        case 3:
            return <Form4 />;
        case 4:
            return <Form5 />;
        case 5:
            return <Form6 />;
        case 6:
            return <Form7 />;
        case 7:
            return <ViewInternalMed />;
        default:
            return 'Unknown step';
    }
}

export default function HorizontalLinearStepper() {
    const { t } = useTranslation();
    const classes = useStyles();
    const [activeStep, setActiveStep] = React.useState(0);
    const [skipped, setSkipped] = React.useState(new Set());
    const steps = getSteps();
    const [values, setValues] = React.useState({});
    const [datas, setDatas] = useContext(MedContext);
    const [selectedDate, setSelectedDate] = React.useState(new Date());


    const isStepOptional = (step) => {
        return step === 10;
    };

    const isStepSkipped = (step) => {
        return skipped.has(step);
    };

    const handleNext = (e) => {
        e.preventDefault();
        let newSkipped = skipped;
        if (isStepSkipped(activeStep)) {
            newSkipped = new Set(newSkipped.values());
            newSkipped.delete(activeStep);
        }

        setActiveStep((prevActiveStep) => prevActiveStep + 1);
        setSkipped(newSkipped);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleSkip = () => {
        if (!isStepOptional(activeStep)) {
            // You probably want to guard against something like this,
            // it should never occur unless someone's actively trying to break something.
            throw new Error("You can't skip a step that isn't optional.");
        }

        setActiveStep((prevActiveStep) => prevActiveStep + 1);
        setSkipped((prevSkipped) => {
            const newSkipped = new Set(prevSkipped.values());
            newSkipped.add(activeStep);
            return newSkipped;
        });
    };

    const handleReset = () => {
        setActiveStep(0);
    };

    const handleSubmit = () =>{
        //console.log(datas)
    
       axios.post('http://localhost:5000/internaMedcine', datas)
       .then(res => {
         console.log(res.data)
        // window.location = '/homepage';
        });
       
      }

    return (
        <React.Fragment>
            <CssBaseline />
            <Container >
                <div className={classes.root}>
                    <Nav />
                    <Stepper activeStep={activeStep}>
                        {steps.map((label, index) => {
                            const stepProps = {};
                            const labelProps = {};
                            if (isStepOptional(index)) {
                                labelProps.optional = <Typography variant="caption">Optional</Typography>;
                            }
                            if (isStepSkipped(index)) {
                                stepProps.completed = false;
                            }
                            return (
                                <Step key={label} {...stepProps}>
                                    <StepLabel {...labelProps}>{label}</StepLabel>
                                </Step>
                            );
                        })}
                    </Stepper>
                    <div>
                        {activeStep === steps.length ? (
                            <div>
                                <Typography className={classes.instructions}>
                                    All steps completed - you&apos;re finished
            </Typography>
                                <Button onClick={handleReset} className={classes.button}>
                                    Reset
            </Button>
                            </div>
                        ) : (
                                <div>
                                    <div className={classes.instructions}>

                                        { /*{getStepContent(activeStep, values, classes, t, setValues, setSelectedDate, selectedDate)}*/}
                                       
                                            <GetStepContent activeStep={activeStep} name={values.name} setValues={setValues} />
                                       
                                    </div>
                                    <div>
                                        <Button disabled={activeStep === 0} onClick={handleBack} className={classes.button}>
                                            Back
              </Button>
                                        {isStepOptional(activeStep) && (
                                            <Button
                                                variant="contained"
                                                color="primary"
                                                onClick={handleSkip}
                                                className={classes.button}
                                            >
                                                Skip
                                            </Button>
                                        )}

                                        <Button
                                            variant="contained"
                                            color="primary"
                                            onClick={activeStep === steps.length - 1 ?  handleSubmit : handleNext}
                                            className={classes.button}
                                        >
                                        {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                                        </Button>
                                    </div>
                                </div>
                            )}
                    </div>
                </div>
            </Container>
            <Footer />
        </React.Fragment>
    );
}


