import React, { useEffect, useState } from 'react';
import { isEmail, isRequired, isPassword, unTouched, isNumber, isPasswordMatch, isName, isMaxLength } from '../../../config/validation.config'


const CustomInput = ({
    name = "",
    label = "",
    onChange = () => undefined,
    value = "",
    type = "text",
    disabled = false,
    extraClassesWrapper = "",
    extraClasses = "",
    placeholder = "",
    errorMsg = "",
    setError = () => undefined,
    hintTxt = "",
    validations = [],
    password = "",
    maxLength = 25,
}) => {
    const [localError, setLocalError] = useState("");
    useEffect(() => {
        if (errorMsg === unTouched) {
            setLocalError("");
        }
        for (let i in validations) {
            if (validations[i] === isEmail) {
                let pattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                if (pattern.test(value)) {
                    setLocalError(pre => {
                        if (pre === isEmail)
                            return ""
                        else
                            return pre;
                    })
                } else {
                    setLocalError(isEmail);
                }
            } else if (validations[i] === isPassword) {
                let pattern = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[!@#\$&*~]).{8,50}$/;
                if (pattern.test(value)) {
                    setLocalError(pre => {
                        if (pre === isPassword)
                            return ""
                        else
                            return pre;
                    })

                } else {
                    setLocalError(isPassword);
                }
            } else if (validations[i] === isNumber) {
                let pattern = /^(\+\d{1,2}\s?)?1?\-?\.?\s?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/;
                if (pattern.test(value)) {
                    setLocalError(pre => {
                        if (pre === isNumber)
                            return ""
                        else
                            return pre;
                    })

                } else {
                    setLocalError(isNumber);
                }
            } else if (validations[i] === isPasswordMatch) {

                if (password !== value) {
                    setLocalError(isPasswordMatch);
                } else {
                    setLocalError(pre => {
                        if (pre === isPasswordMatch)
                            return ""

                        else
                            return pre;
                    })
                }
            } else if (validations[i] === isName) {
                let pattern = /^[a-z,. '-]{1,25}$/i;
                if (pattern.test(value)) {
                    setLocalError(pre => {
                        if (pre === isName)
                            return ""
                        else
                            return pre;
                    })
                } else {
                    setLocalError(isName);
                }

            } else if (validations[i] === isNumber) {
                let pattern = /^[a-z,.']{1,25}$/i;
                if (pattern.test(value)) {
                    setLocalError(pre => {
                        if (pre === isName)
                            return ""
                        else
                            return pre;
                    })
                } else {
                    setLocalError(isName);
                }

            } else if (validations[i] === isRequired) {
                if (value !== "") {
                    setLocalError(pre => {
                        if (pre === isRequired)
                            return ""
                        else
                            return pre;
                    })
                } else {
                    setLocalError(isRequired);
                }
            }
        }
        if (value.length > maxLength) {
            setLocalError(isMaxLength)
        } else {
            setLocalError(pre => {
                if (pre === isMaxLength)
                    return ""
                else
                    return pre;
            })
        }
    }, [value, password]);

    useEffect(() => {
        setError(name, localError);
    }, [localError]);

    useEffect(() => {

        if (errorMsg === isRequired) {
            setLocalError(isRequired);
        }

    }, [errorMsg]);

    useEffect(() => {
        let flag = true;
        for (let i in validations) {
            if (validations[i] === isRequired && value === "") {
                setLocalError(unTouched);
                flag = false;
            }
        }
        if (flag) setLocalError("");
    }, []);



    return (
        <div className={`form-group text-left ${errorMsg && errorMsg !== unTouched ? 'is-invalid' : ''} ${extraClassesWrapper}`}>
            {label ? <label className={`cust-input-lable ${errorMsg && errorMsg !== unTouched ? 'text-danger' : ''}`}>
                {label}
            </label> : null}
            <input
                onChange={(e) => { onChange(e.target.name, e.target.value, e) }}
                value={value}
                name={name}
                type={type}
                disabled={disabled}
                className={`form-control ${extraClasses} ${errorMsg && errorMsg !== unTouched ? 'is-invalid' : ''}`}
                placeholder={placeholder}


            />
            <small className={`${errorMsg && errorMsg !== unTouched ? 'text-danger form-error' : 'form-text text-muted'}`}>{errorMsg && errorMsg !== unTouched ? errorMsg : hintTxt}</small>
        </div>

    );

}

export {
    CustomInput
}
