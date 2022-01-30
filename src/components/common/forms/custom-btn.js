import React from 'react';

const CustomButton = ({
    btnText = "",
    type = "submit",
    isBlock = false,
    btnType = "button",
    customClasses = "",
    onClick = () => undefined,
    disabled = false,
    isSmall = false

}) => {
    return (
        <button
            disabled={disabled}
            type={btnType}
            className={`btn custom-btn ${isSmall ? 'btn-sm' : ''} ${type === "submit" ? "custom-btn-primary" : ''} ${isBlock ? 'btn-block' : ''}  ${customClasses}`}
            onClick={onClick}
        >
            {btnText}
        </button>
    );

}


const IconButton = ({
    icon = null,
    customClasses = "",
    title = "",
    onClick = () => undefined
}) => {
    return (
        <button
            className={`btn custom-icon-btn ${customClasses}`}
            onClick={onClick}
        >
            {icon}
            {title}
        </button>
    );

}
export { CustomButton, IconButton };