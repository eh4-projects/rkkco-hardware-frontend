import React, { useEffect, useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
const QuestionPopup = ({
    message = null,
    messageBody = null,
    redirect = false,
}) => {

    let location = useLocation();

    const OpenMessage = () => {
        if (redirect) {
            if (location.pathname !==redirect) window.open(redirect);
        }
    }

    return (
        <div>
            <div className={`q-popup-main-div ${'show-message'}`} onClick={() => OpenMessage()}>
                <p className="q-popup-message">{message}</p>
                {/* <p className="q-popup-message-body">{messageBody}</p> */}
            </div>

        </div>
    );
};

export { QuestionPopup };