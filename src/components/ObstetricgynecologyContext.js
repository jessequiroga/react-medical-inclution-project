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
        }
 
      
    });
   

    return(
        <ObstetricContext.Provider value={[values, setValues]}>
            {props.children}
        </ObstetricContext.Provider>
    );
};