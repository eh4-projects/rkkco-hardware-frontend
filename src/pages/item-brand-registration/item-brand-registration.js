import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useForm } from '../../customer-hooks/form.hook';
import { CustomButton } from '../../components/common/forms/custom-btn';
import { CustomForm } from '../../components/common/forms/custom-form'
import { CustomInput } from '../../components/common/forms/customInput';
import { errorInitObject, formInitObject } from '../../form-init-object/login.init'
import { UIContextAPI } from "../../components/contexts/ui.context";
import { AuthContextAPI } from "../../components/contexts/auth.context";
import { isRequired } from '../../config/validation.config';
import { BrandItemService } from '../../services/brand.service';

const ItemBrandRegistration = () => {

    const [form, errors, setFormCustom, setErrorCustom] = useForm(errorInitObject, formInitObject);
    const [brandService, setbrandService] = useState(undefined);
    const { setAuth } = useContext(AuthContextAPI);
    const { setLoader, setAlert } = useContext(UIContextAPI);

    const onSubmit = async () => {
        await brandService.addBrand(form.brandName, () => {
            setFormCustom("brandName", '');
            setErrorCustom("brandName", '');
        });
    };

    useEffect(() => {
        setbrandService(new BrandItemService(setLoader, setAlert, setAuth));
    }, []);


    return (
        <div className='item-brand-reg-home'>
            <div className='container-fluid'>
                <div className='item-brand-reg-title'>
                    <h2 className='item-title'>Item Brand Registration</h2>
                </div>
                <div className=' card item-brand-reg-content'>
                    <div className='card-header'>Add New Brand Item</div>
                    <div className="card-body">
                        <div className='row'>
                            <CustomForm
                                mainClass="login-form-card"
                                onSubmit={onSubmit}
                                setError={setErrorCustom}
                                errors={errors}>
                                <CustomInput
                                    className="cust-input"
                                    placeholder="Multilack"
                                    name="brandName"
                                    label="Brand Item Name"
                                    type="text"
                                    value={form.brandName}
                                    onChange={setFormCustom}
                                    errorMsg={errors.brandName}
                                    setError={setErrorCustom}
                                    validations={[isRequired]}
                                    maxLength={320}
                                    disabled={false}
                                />
                                <CustomButton
                                    btnType="submit"
                                    btnText="Add Brand"
                                    customClasses="btn btn-outline-primary item-brand-add-button"
                                />
                            </CustomForm>
                        </div>
                    </div>
                </div>
                <div className='card item-brand-list'>
                    <div className='card-header'>Brand Item List</div>
                    <div className='card-body'>
                    </div>

                </div>
            </div>
        </div>
    )
}

export { ItemBrandRegistration };