import React, { useState } from 'react';
import { Popup } from '../shared/popup';

const NotificationContextAPI = React.createContext();
const NotificationContext = ({ children }) => {
    const [showMessage] = useState(false);
    const [message] = useState("");
    const [messageBody] = useState("");

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