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

    const onSubmit = async () => {
        await userService.signin(form.userName, form.password);
    };
    useEffect(() => {
        setuserService(new UserService(setLoader, setAlert, setAuth));
    }, []);

    return <div className='login-form-main'>
        <CustomForm
            mainClass="login-form-card"
            onSubmit={onSubmit}
            setError={setErrorCustom}
            errors={errors}>

            <div className="card">
                <div className="card-header login-card-header">
                    <h3 className="card-title">Welcome!</h3>
                </div>
                <div className="card-body">
                    <div className="container">
                        <div className="container">
                            <CustomInput
                                className="cust-input"
                                placeholder="RKK00001"
                                name="userName"
                                label="User ID"
                                type="text"
                                value={form.userName}
                                onChange={setFormCustom}
                                errorMsg={errors.userName}
                                setError={setErrorCustom}
                                validations={[isRequired]}
                                maxLength={320}
                                disabled={false}
                            />
                            <CustomInput
                                className="cust-input"
                                placeholder="**************"
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
                                <Link to="/forgot-password">Forgot Password?</Link>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="card-footer login-card-footer">
                    <CustomButton
                        btnType="submit"
                        btnText="Sign In"
                        customClasses="btn btn-outline-primary login-form-submit-btn"
                    />
                </div>
            </div>
        </CustomForm>
    </div>
}
export { SignIn };