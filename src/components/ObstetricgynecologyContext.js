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
              }],
        problemDuringDelivery: false,
        problemDelivery: [],
        haveBabyAtThisHuspital: false,
        symptomLike: false,
        symptomLikeValue:[],
        symptomstartDate: new Date(),
        symptomStartTime: "",

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
        medicalexpenses : false,
        haveinterpreter : false,
        otherssss : false
      
    });
   

    return(
        <ObstetricContext.Provider value={[values, setValues]}>
            {props.children}
        </ObstetricContext.Provider>
    );
};