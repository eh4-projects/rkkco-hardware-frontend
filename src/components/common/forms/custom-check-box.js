import React, { useEffect } from 'react';
import { isRequired, unTouched } from '../../../config/validation.config';

const CustomCheckBox = ({
    name = "",
    label = "",
    onChange = () => undefined,
    value = "",
    extraClassesWrapper = "",
    extraClasses = "",
    placeholder = "",
    errorMsg = "",
    setError = () => undefined,
    hintTxt = "",
    isRequiredFlag = false
}) => {

    useEffect(() => {
        if (isRequiredFlag) {
            if (value === false) {
                setError(name, isRequired)
            } else {
                setError(name, '');
            }
        }

    }, [value]);

    useEffect(() => {
        if (isRequiredFlag && value === false) {
            setError(name, unTouched);
        } else {
            setError(name, '');
        }

    }, []);

    return (
        <div className={`form-check cust-check-box ${extraClassesWrapper}`}>
            <input
                className="form-check-input"
                type="checkbox"
                id={name}
                name={name}
                checked={value}
                onChange={(e) => {
                    onChange(name, !value);
                }}
            />
            <label className="form-check-label" htmlFor={name}>
                {label}
            </label>
            <br />
            <small className={`${errorMsg && errorMsg !== unTouched ? 'text-danger' : ''}`} >
                {errorMsg && errorMsg !== unTouched ? errorMsg : ""}
            </small>
        </div>
    );
}
export { CustomCheckBox };