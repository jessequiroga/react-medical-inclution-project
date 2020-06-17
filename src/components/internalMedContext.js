import React, {useState, createContext} from 'react';

export const MedContext = createContext();

export const InternalMedContext = props => {
    const [values, setValues] = useState({
        name:"sdfg",
        date: new Date(),
    });
    const [selectedDate, setSelectedDate] = React.useState(new Date());

    return(
        <MedContext.Provider value={'hey'}>
            {props.children}
        </MedContext.Provider>
    );
};