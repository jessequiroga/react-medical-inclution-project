import React, {useState, createContext} from 'react';

export const CovidContext = createContext();

export const Covid19Context = props => {
    const [values, setValues] = useState({
        checkBoxApplicable1:"false",
        checkBoxApplicable2:"false",
        checkBoxApplicable3:"false",
        haveSymptoms1:"false",
        Cough:"false",
        Phlegm:"false",
        Shortnessofbreath:"false",
        Senseoffatigue:"false",
        Abnormalityinthesenseofsmell:"false",
        Unabletoappreciatetaste:"false",
        VomitingNausea:"false",
        Diarrhea:"false",
        Noappetite:"false"
    });

    return(
        <CovidContext.Provider value={[values, setValues]}>
            {props.children}
        </CovidContext.Provider>
    );
};