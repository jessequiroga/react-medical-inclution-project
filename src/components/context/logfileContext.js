import React, {useState, createContext} from 'react';

export const LogfileContext = createContext();

export const LogContext = props => {
    const [values, setValues] = useState({
        inteviewName: '',
        userName: '',
        language: '',
        contentSentence: '',
        date: new Date,
    });
   

    return(
        <LogfileContext.Provider value={[values, setValues]}>
            {props.children}
        </LogfileContext.Provider>
    );
};