import React, { useEffect, useState } from 'react';
const SwitchContextAPI = React.createContext();

const SwitchContext = ({ children }) => {

    
    const [location, setLocation] = useState("");

    return (
        <SwitchContextAPI.Provider value={{location,setLocation}}>
            {children}
        </SwitchContextAPI.Provider>
    );
}
export {
    SwitchContextAPI,
    SwitchContext
}