import React, {useState, createContext} from 'react';

export const MedContext = createContext();

export const InternalMedContext = props => {
    const [values, setValues] = useState({
        name : '',
        DateOfBirth : new Date,
        height : '',
        weight : '',
        sex : '',
        allergis : {
            foods : [],
            medcine : [],
        },
 
        problemtoday : [],
        stools : [],
        stoolfrequency : '',
       
        symptomoccur : [],
        symptomlike : [],
        scale1to10 : '',
        symptomstart : new Date,
        symtomstarttime : '',
        onMedication : '',
        onmedications: [],
        
        doctorcare: '',
        doctorCare : [],

        hadsurgerys: [],
        hadsurgery: '',
        
        
        smokeregularly : '',
        smokeday : {
            amount : '',
            duration : '',
            yearStop : '',
        },
        drinkregularly: '',
        drinkeday: {
            beer : '',
            nobeer : '',
            japsake : '',
            nojapsake : '',
            wisky : '',
            nowisky : '',
            wine : '',
            nowine : '',
            other : '',
        },
        pregnant : '',
        breastfeeding : '',
        medicalexpenses : '',
        haveinterpreter : '',
        otherssss : '',

        bodyPart : []
    });
   

    return(
        <MedContext.Provider value={[values, setValues]}>
            {props.children}
        </MedContext.Provider>
    );
};