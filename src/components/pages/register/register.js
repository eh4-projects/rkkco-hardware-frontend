import React, { useContext, useEffect, useState } from 'react';
import { CustomForm } from '../../../components/common/forms/custom-form';
import { CustomInput } from '../../../components/common/forms/customInput';
import { Link, useHistory } from 'react-router-dom';
import { AuthContextAPI } from '../../../components/contexts/auth.context';
import { UIContextAPI } from '../../../components/contexts/ui.context';
//import { UserService } from '../../../../services/user.service';
import { isEmail, isName, isPassword, isPasswordMatch, isRequired, unTouched } from '../../../config/validation.config';
import { CustomButton } from '../../../components/common/forms/custom-btn';
import { CustomSelectBox } from '../../../components/common/forms/custom-select-box';
//import { Footer } from '../../../components/shared/';


const UserRegistration = () => {

    const { setAuth, } = useContext(AuthContextAPI);
    const { setLoader, setAlert } = useContext(UIContextAPI);
    let history = useHistory();
    const initObject = {
        firstName: '',
        lastName: '',
        email: '',
        country: '',
        password: '',
        confirmPassword: '',
    };

    // const [userService, setuserService] = useState(undefined);
    // useEffect(() => {
    //     setuserService(new UserService(setLoader, setAlert, setAuth));
    // }, []);


    const [form, setForm] = useState(initObject);

    const [errors, setErrors] = useState(initObject);
    // useEffect(() => {

    // }, [form.confirmPassword, form.confirmPassword]);
    // useEffect(() => {
    //     setErrorCustom('confirmPassword', unTouched);
    //     setuserService(new UserService(setLoader, setAlert, setAuth));
    // }, []);
    // useEffect(() => {
    //     window.scrollTo({
    //         top: 0,
    //         behavior: 'auto'
    //     });
    // }, []);

    const handleChange = (name, value) => {
        setForm(pre => {
            return {
                ...pre,
                [name]: value
            }
        })
    }
    const setErrorCustom = (name, value) => {
        setErrors(pre => {
            return {
                ...pre,
                [name]: value
            }
        });
    }


    const handleSubmit = async () => {
        // await userService.register(form, () => history.push("/"));

    }


    return (
        <React.Fragment>
            <div className='registration-form-content-right'>
                <label className='registration-form-content-right-title'>Foundation Platform</label>
                <hr></hr>

                <CustomForm
                    className="registration-form"
                    onSubmit={handleSubmit}
                    setError={setErrorCustom}
                    errors={errors}
                >

                    <div className="registration-form-inputs">
                        <CustomInput
                            className="cust-input"
                            name="firstName"
                            label="First Name"
                            value={form.firstName}
                            type="text"
                            placeholder="Ex: Harper"
                            onChange={handleChange}
                            errorMsg={errors.firstName}
                            setError={setErrorCustom}
                            validations={[isRequired, isName]}
                        />
                    </div>

                    <div className="registration-form-inputs">
                        <CustomInput
                            className="cust-input"
                            name="lastName"
                            label="Last Name"
                            value={form.lastName}
                            type="text"
                            placeholder="Ex: O'Brien"
                            onChange={handleChange}
                            errorMsg={errors.lastName}
                            setError={setErrorCustom}
                            validations={[isName, isRequired]}
                        />
                    </div>

                    <div className="registration-form-inputs">
                        <CustomInput
                            className="cust-input"
                            name="email"
                            label="Email"
                            value={form.email}
                            type="text"
                            placeholder="Ex: harperO@hmail.com"
                            onChange={handleChange}
                            errorMsg={errors.email}
                            setError={setErrorCustom}
                            validations={[isEmail, isRequired]}
                            maxLength={320}
                        />
                    </div>
                    {/* {JSON.stringify(errors)} */}

                    {/* 
                    <div className="registration-form-inputs">
                        <CustomSelectBox
                            title={"Country"}
                            value={form.country}
                            name="country"
                            data={[{ name: "Select Your Country", id: '' }, ...countryList]}
                            valueKey="name"
                            onChange={(val) => { handleChange("country", val) }}
                            setError={setErrorCustom}
                            errorMsg={errors.country}
                            isRequiredFlag={true}
                        />
                    </div> */}

                    <div className="registration-form-inputs">
                        <CustomInput
                            extraClasses="cust-input"
                            name="password"
                            label="Password"
                            value={form.password}
                            type="password"
                            placeholder="********"
                            onChange={handleChange}
                            errorMsg={errors.password}
                            setError={setErrorCustom}
                            validations={[isPassword, isRequired]}
                            maxLength={50}
                        />

                    </div>

                    <div className="registration-form-inputs">
                        <CustomInput
                            className="cust-input"
                            name="confirmPassword"
                            label="Confirm Password"
                            value={form.confirmPassword}
                            type="password"
                            placeholder="********"
                            onChange={handleChange}
                            errorMsg={errors.confirmPassword}
                            setError={setErrorCustom}
                            validations={[isRequired, isPasswordMatch]}
                            password={form.password}
                            maxLength={50}

                        />
                    </div>

                    <CustomButton
                        btnText="Sign Up"
                        type="submit"
                        btnType='submit'
                        isBlock={true}
                        customClasses="registration-form-submit-btn"
                    />
                    <p className="registration-form-input-login">
                        {/* Already registered <Link to="/login">sign in?</Link> */}
                    </p>

                </CustomForm>


            </div>

        </React.Fragment>
    )
}



export { UserRegistration };