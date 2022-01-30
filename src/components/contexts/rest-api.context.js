import React, { useState } from 'react';
const RESTAPIContextAPI=React.createContext();

const RESTAPIContext=({children})=>{
    const [auth,setAuth] = useState({isLogged:false,name:"Pradeepa"});
    

    return (
        <RESTAPIContextAPI.Provider value={{auth,setAuth}}>
            {children}
        </RESTAPIContextAPI.Provider>
    );
}
export {
    RESTAPIContext,
    RESTAPIContextAPI
}