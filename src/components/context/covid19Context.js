import React, {useState, createContext} from 'react';

export const CovidContext = createContext();

export const Covid19Context = props => {
    const [values, setValues] = useState({
        checkBoxApplicable1:false,
        checkBoxApplicable2:'',
        checkBoxApplicable3:'',
        haveSymptoms1:'',
        Cough:'',
        Phlegm:'',
        Shortnessofbreath:'',
        Senseoffatigue:'',
        Abnormalityinthesenseofsmell:'',
        Unabletoappreciatetaste:'',
        VomitingNausea:'',
        Diarrhea:'',
        Noappetite:''
    });

    return(
        <CovidContext.Provider value={[values, setValues]}>
            {props.children}
        </CovidContext.Provider>
    );
};