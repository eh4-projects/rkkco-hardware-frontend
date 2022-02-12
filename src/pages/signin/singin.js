import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useForm } from '../../customer-hooks/form.hook';
import { CustomButton } from '../../components/common/forms/custom-btn';
import { CustomForm } from '../../components/common/forms/custom-form'
import { CustomInput } from '../../components/common/forms/customInput';
import { errorInitObject, formInitObject } from '../../form-init-object/login.init'
import { UIContextAPI } from "../../components/contexts/ui.context";
import { AuthContextAPI } from "../../components/contexts/auth.context";
import { isEmail, isRequired } from '../../config/validation.config';
import { UserService } from '../../services/user.service';


const SignIn = () => {
    const [form, errors, setFormCustom, setErrorCustom] = useForm(errorInitObject, formInitObject);
    const [userService, setuserService] = useState(undefined);

    const { setAuth } = useContext(AuthContextAPI);
    const { setLoader, setAlert } = useContext(UIContextAPI);
    useEffect(() => {
        setuserService(new UserService(setLoader, setAlert, setAuth));
    }, []);


    const onSubmit = async () => {
        await userService.signin(form.email, form.password);
    };
    return <div className='login-form-main'>
        <CustomForm
            mainClass="login-form-card"
            onSubmit={onSubmit}
            setError={setErrorCustom}
            errors={errors}
        >
            <h1>Login</h1>
            
            <div className="login-form-inputs">
                <CustomInput
                    className="cust-input"
                    placeholder="Enter Email"
                    name="email"
                    label="Email"
                    type="email"
                    value={form.email}
                    onChange={setFormCustom}
                    errorMsg={errors.email}
                    setError={setErrorCustom}
                    validations={[isRequired, isEmail]}
                    maxLength={320}
                    disabled={false}
                />
            </div>
            <div className="login-form-inputs">
                <CustomInput
                    className="cust-input"
                    placeholder="Enter Password"
                    name="password"
                    label="Password"
                    type="password"
                    value={form.password}
                    onChange={setFormCustom}
                    errorMsg={errors.password}
                    setError={setErrorCustom}
                    validations={[isRequired]}
                    password={50}
                />
                <p className="forgot-password">
                    Forgot <Link to="/forgot-password">Password?</Link>
                </p>

            </div>
            <div className="login-form-inputs">
                <CustomButton
                    btnType="submit"
                    btnText="Login"
                    customClasses="login-form-submit-btn"
                />
            </div>

        </CustomForm>
    </div>





}
export { SignIn };