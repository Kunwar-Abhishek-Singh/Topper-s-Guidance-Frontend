import React, {useState, createContext} from 'react';
export const cookie_validation_context = createContext();

export function Context({children}){
    const [data, setData] = useState(false);
    return(
        <cookie_validation_context.Provider value={[data, setData]}>
            {children}
        </cookie_validation_context.Provider>
    );
}