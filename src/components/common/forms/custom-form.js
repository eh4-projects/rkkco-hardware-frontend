import React from 'react';
import { isRequired, unTouched } from '../../../config/validation.config';

const CustomForm = ({
    children = null,
    onSubmit = () => undefined,
    errors = {},
    setError = () => undefined
}) => {

    const isValid = () => {
        let flag = true;
        for (let i in errors) {
            if (errors[i] !== '') flag = false;
            if (errors[i] === unTouched) {
                setError(i, isRequired);
            }
        }
        return flag;
    }
    const onSubmitFn = (e) => {
        console.log(errors)
        e.preventDefault();

        // console.log(errors)
        if (isValid()) {
            onSubmit()
        }
    }


    return (
        <form onSubmit={onSubmitFn}>
            {children}
        </form>
    );
}
export { CustomForm };