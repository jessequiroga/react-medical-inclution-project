import React, {useState, createContext} from 'react';

export const SentContext = createContext();

export const BasicSentContext = props => {
    const [values, setValues] = useState({
        letter : '',
        count : '',
        remark : ''
    });
   

    return(
        <SentContext.Provider value={[values, setValues]}>
            {props.children}
        </SentContext.Provider>
    );
};