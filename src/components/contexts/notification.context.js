import React, { useState, useEffect } from 'react';
import { Popup } from '../shared/popup';

const NotificationContextAPI = React.createContext();
const NotificationContext = ({ children }) => {
    const [showMessage, setShowMessage] = useState(false);
    const [message, setMessage] = useState("");
    const [messageBody, setMessageBody] = useState("");

    const [showMessage1, setShowMessage1] = useState(false);
    const [showMessage2, setShowMessage2] = useState(false);
    const [message1, setMessage1] = useState("");
    const [message2, setMessage2] = useState("");



    return (
        <NotificationContextAPI.Provider>
            
            {showMessage ? <Popup message={message} messageBody={messageBody} /> : null}
            {children}
        </NotificationContextAPI.Provider>
    );

}
export {
    NotificationContext,
    NotificationContextAPI
}