import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useForm } from '../../customer-hooks/form.hook';
import { CustomButton } from '../../components/common/forms/custom-btn';
import { CustomForm } from '../../components/common/forms/custom-form'
import { CustomInput } from '../../components/common/forms/customInput';
import { errorInitObject, formInitObject } from '../../form-init-object/login.init'
import { UIContextAPI } from "../../components/contexts/ui.context";
import { AuthContextAPI } from "../../components/contexts/auth.context";
import { isEmail, isRequired, isName } from '../../config/validation.config';
import { UserService } from '../../services/user.service';


const SignUp = () => {
    const [form, errors, setFormCustom, setErrorCustom] = useForm(errorInitObject, formInitObject);
    const [userService, setuserService] = useState(undefined);

    const { setAuth } = useContext(AuthContextAPI);
    const { setLoader, setAlert } = useContext(UIContextAPI);
    useEffect(() => {
        setuserService(new UserService(setLoader, setAlert, setAuth));
    }, []);


    const onSubmit = async () => {
        await userService.signin(form.fName, form.lName, form.email, form.password);
    };
    return <div className='register-form-main'>
        <CustomForm
            mainClass="register-form-card"
            onSubmit={onSubmit}
            setError={setErrorCustom}
            errors={errors}
        >
            <h1>SignUp</h1>

            <div className="register-form-inputs">
                <CustomInput
                    className="cust-input"
                    placeholder="Enter First Name"
                    name="fName"
                    label="First Name"
                    type="text"
                    value={form.fName}
                    onChange={setFormCustom}
                    errorMsg={errors.fName}
                    setError={setErrorCustom}
                    validations={[isRequired, isName]}
                    maxLength={320}
                    disabled={false}
                />
            </div>

            <div className="register-form-inputs">
                <CustomInput
                    className="cust-input"
                    placeholder="Enter Last Name"
                    name="lName"
                    label="Last Name"
                    type="text"
                    value={form.lName}
                    onChange={setFormCustom}
                    errorMsg={errors.lName}
                    setError={setErrorCustom}
                    validations={[isRequired, isName]}
                    maxLength={320}
                    disabled={false}
                />
            </div>

            <div className="register-form-inputs">
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
            <div className="register-form-inputs">
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
                    customClasses="register-form-submit-btn"
                />
            </div>

        </CustomForm>
    </div>





}
export { SignUp };