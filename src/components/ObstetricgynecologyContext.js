import React, {useState, createContext} from 'react';

export const ObstetricContext = createContext();

export const ObstetricgynecologyContext = props => {
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
        menstrualPeriod : {
            ageStart: '',
            ageLast: '',
            daysCycle: '',
            irregular: false,
            periodsLast: '',
            usualFlow: '',
            painduringyourperiods: false,
            painkiller: '',
            dateLastPeriod: new Date,
        },
        haveSexualIntercourse: false,
        hadUterineCancerTest: false,
        dateHadUterineCancerTest: new Date,
        takenBirthControlPills: false,
        pregnantOrPossiblyPregnant: false,
        noWeeks: '',
        doNotKnow: false,
        Areyoubreastfeeding: false,
        PregnantHistory:'',
        YesPregnancyHistory: [{
            date: new Date(),
            delivery: "",
            hadMiscarriage: "",
            hadAbnomalPregnancy: "",
            weeksPregnanncy : ""  
              }]
 
      
    });
   

    return(
        <ObstetricContext.Provider value={[values, setValues]}>
            {props.children}
        </ObstetricContext.Provider>
    );
};