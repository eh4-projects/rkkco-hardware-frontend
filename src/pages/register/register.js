import React, { useContext, useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useForm } from '../../customer-hooks/form.hook';
import { CustomButton } from '../../components/common/forms/custom-btn';
import { CustomForm } from '../../components/common/forms/custom-form'
import { CustomInput } from '../../components/common/forms/customInput';
import { errorInitObject, formInitObject } from '../../form-init-object/login.init'
import { UIContextAPI } from "../../components/contexts/ui.context";
import { AuthContextAPI } from "../../components/contexts/auth.context";
import { isEmail, isRequired, isName, isPasswordMatch, isPassword, unTouched } from '../../config/validation.config';
import { UserService } from '../../services/user.service';
import { CustomSelectBox } from '../../components/common/forms/custom-select-box';


const SignUp = () => {
    let history = useHistory();
    const initObject = {
        firstName: '',
        lastName: '',
        userId: '',
        userType: '',
        password: '',
        confirmPassword: '',
    };


    const [form, setForm] = useState(initObject);
    const [errors, setErrors] = useState(initObject);

    const [userService, setuserService] = useState(undefined);
    const { setAuth } = useContext(AuthContextAPI);
    const { setLoader, setAlert } = useContext(UIContextAPI);

    const [userTypeList, setOptionList1] = useState([{ id: 'Admin', name: 'Admin' },
    { id: 'Customer', name: 'Customer' }, { id: 'Seller', name: 'Seller' }]);


    const handleChange = (name, value) => {
        setForm(pre => {
            return {
                ...pre,
                [name]: value
            }
        })
    }

    useEffect(() => {

    }, [form.confirmPassword, form.confirmPassword]);


    useEffect(() => {
        setErrorCustom('confirmPassword', unTouched);
        setuserService(new UserService(setLoader, setAlert, setAuth));
    }, []);

    const setErrorCustom = (name, value) => {
        setErrors(pre => {
            return {
                ...pre,
                [name]: value
            }
        });
    }

    useEffect(() => {
        setuserService(new UserService(setLoader, setAlert, setAuth));
    }, []);


    const onSubmit = async () => {
        console.log("KKKK")
        await userService.register(form, () => history.push("/"));
    }

    return <div className='register-form-main'>
        <CustomForm
            mainClass="register-form-card"
            onSubmit={onSubmit}
            setError={setErrorCustom}
            errors={errors}
        >
            <div className="card register-card-style">

                <div className="card-header register-card-header">
                    <h3 className="card-title">SignUp</h3>
                </div>

                <div className='card-body'>
                    <div className="register-form-inputs">
                        <CustomInput
                            className="cust-input"
                            placeholder="Enter first name"
                            name="firstName"
                            label="First Name"
                            type="text"
                            value={form.firstName}
                            onChange={handleChange}
                            errorMsg={errors.firstName}
                            setError={setErrorCustom}
                            validations={[isRequired, isName]}
                            maxLength={320}
                        />
                    </div>

                    <div className="register-form-inputs">
                        <CustomInput
                            className="cust-input"
                            placeholder="Enter last name"
                            name="lastName"
                            label="Last Name"
                            type="text"
                            value={form.lastName}
                            onChange={handleChange}
                            errorMsg={errors.lastName}
                            setError={setErrorCustom}
                            validations={[isRequired, isName]}
                            maxLength={320}
                        />
                    </div>

                    <div className="register-form-inputs">
                        <CustomSelectBox
                            title={"User Type"}
                            label="User Type"
                            value={form.userType}
                            name="userType"
                            data={[{ name: "Select Your user Type", id: '' }, ...userTypeList]}
                            valueKey="name"
                            onChange={(val) => { handleChange("userType", val) }}
                            setError={setErrorCustom}
                            errorMsg={errors.userType}
                            isRequiredFlag={true}
                        />
                    </div>

                    <div className="register-form-inputs">
                        <CustomInput
                            className="cust-input"
                            placeholder="Enter userId"
                            name="userId"
                            label="userId"
                            type="userId"
                            value={form.userId}
                            onChange={handleChange}
                            errorMsg={errors.userId}
                            setError={setErrorCustom}
                            validations={[isRequired]}
                            maxLength={320}
                            disabled={false}
                        />
                    </div>

                    <div className="register-form-inputs">
                        <CustomInput
                            className="cust-input"
                            placeholder="Enter password"
                            name="password"
                            label="Password"
                            type="password"
                            value={form.password}
                            onChange={handleChange}
                            errorMsg={errors.password}
                            setError={setErrorCustom}
                            validations={[isPassword, isRequired]}
                            maxLength={50}
                        />
                    </div>


                    <div className="register-form-inputs">
                        <CustomInput
                            className="cust-input"
                            placeholder="Enter confirm password"
                            name="confirmPassword"
                            label="Confirm Password"
                            type="password"
                            value={form.confirmPassword}
                            onChange={handleChange}
                            errorMsg={errors.confirmPassword}
                            password={form.password}
                            setError={setErrorCustom}
                            validations={[isPasswordMatch, isRequired]}
                            maxLength={50}
                        />
                    </div>

                </div>

                <div className="card-footer register-card-footer">
                    <CustomButton
                        btnType="submit"
                        btnText="SignUp"
                        customClasses="btn btn-outline-primary register-form-submit-btn"
                    />
                    <div className='login-link'>
                        <p>If you have an Account  <Link to="/signin">SignIn</Link> </p>
                    </div>
                </div>

            </div>

        </CustomForm>
    </div>





}
export { SignUp };