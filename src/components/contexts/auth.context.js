import React, { useEffect, useState } from 'react';
import jwt_decode from "jwt-decode";
const AuthContextAPI = React.createContext();

const AuthContext = ({ children }) => {

    const firstName = "Anonymous"
    const lastName = "User"
    const fullName = firstName + " " + lastName;
    const userType = "Administrator"

    const [auth, setAuth] = useState({ isLogged: false, name: fullName, userId: "GST100005", userType: userType });

    useEffect(() => {
        let token = localStorage.getItem('jwt');
        if (token) {
            setAuthCustom(true);
        }
    }, [])

    const setAuthCustom = (status) => {
        try {
            if (status) {
                let token = localStorage.getItem('jwt');
                let user = jwt_decode(token);
                setAuth({
                    isLogged: true,
                    ...user,
                });
            } else {
                setAuth({ isLogged: false, name: "" });
                localStorage.removeItem("jwt")
            }
        } catch (err) {
            localStorage.removeItem('jwt');
            setAuth({ isLogged: false, name: "" });
        }

    }
    return (
        <AuthContextAPI.Provider value={{ auth, setAuth: setAuthCustom }}>
            {children}
        </AuthContextAPI.Provider>
    );
}
export {
    AuthContext,
    AuthContextAPI
}