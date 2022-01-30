import React from 'react';
import { AiOutlineClose } from 'react-icons/ai'

const Popup = ({
    handleState = () => undefined,
    state = false,
    children = null,
    header = ""
}) => {

    const handleClose = (e) => {
        if (e.target.id === "popup-main") {
            document.getElementById("popup-main").style.backgroundColor = "transparent";
            document.getElementById('popup-container').style.animationDuration = "0.3s";
            document.getElementById('popup-container').style.animationName = "popup-go";
            setTimeout(() => handleState(false), 300)
        }
    }

    return (
        state ?
            <div className="popup-main" onClick={handleClose} id="popup-main">
                <div className="popup-container" id="popup-container">
                    <div className="popup-card-header">
                        <AiOutlineClose
                            style={{ color: "white" }}
                            className="popup-close-icon"
                            onClick={() => {
                                document.getElementById("popup-main").style.backgroundColor = "transparent";
                                document.getElementById('popup-container').style.animationDuration = "0.2s";
                                document.getElementById('popup-container').style.animationName = "popup-go";
                                setTimeout(() => handleState(false), 200)
                            }}
                        />
                        <label className="text">{header}</label>
                    </div>
                    <div className="popup-card-text">
                        <div className="text"> {children}</div>
                    </div>

                </div>
            </div> :
            null
    );
}
export { Popup };