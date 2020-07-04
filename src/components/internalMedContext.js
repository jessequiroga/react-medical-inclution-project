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
        symtomstarttime : new Date,
        
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
            beer : false,
            nobeer : '',
            japsake : false,
            nojapsake : '',
            wisky : false,
            nowisky : '',
            wine : false,
            nowine : '',
            other : false,
            noOther : '',
        },
        pregnant : '',
        breastfeeding : false,
        medicalexpenses : false,
        haveinterpreter : false,
        otherssss : false,

        bodyPart : []
    });
   

    return(
        <MedContext.Provider value={[values, setValues]}>
            {props.children}
        </MedContext.Provider>
    );
};