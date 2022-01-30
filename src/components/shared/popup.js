import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
const Popup = ({
    message = null,
    messageBody = null,
    redirect = false,
}) => {
    const [showPopup, setShowPopup] = useState(true);
    let history = useHistory();

    const closePopup = () => {
        setShowPopup(false);
    }

    return (
        <div>
            {showPopup ?
                <div className={`popup-main-div ${'show-message'}`}>
                    <p onClick={() => closePopup()} className="popup-close">x</p>
                    <p className="popup-message">{message}</p>
                    <p className="popup-message-body">{messageBody}</p>
                </div>
                : null}
        </div>
    );
};

export { Popup };