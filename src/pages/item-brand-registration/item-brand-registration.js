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
    const [brands, setBrands] = useState([]);

    const addBrand = async () => {
        await brandService.addBrand(form.brandName, () => {
            setFormCustom("brandName", '');
            setErrorCustom("brandName", '');
        });
        brandService.getAllBrands(setBrands)
    };

    useEffect(() => {
        const brandService = new BrandItemService(setLoader, setAlert, setAuth);
        brandService.getAllBrands(setBrands);

        setbrandService(brandService);
    }, []);

    return (
        <div className='item-brand-reg-home'>
            <div className='container-fluid'>
                <div className='item-brand-reg-title'>
                    <label className='item-title'>Item Brand Registration</label>
                </div>
                <div className=' card item-brand-reg-content'>
                    <div className='card-header'>Add New Brand Item</div>
                    <div className="card-body">
                        <div className='row'>
                            <CustomForm
                                mainClass="login-form-card"
                                onSubmit={addBrand}
                                setError={setErrorCustom}
                                errors={errors}>
                                <CustomInput
                                    className="cust-input"
                                    placeholder="Add Brand"
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
                        <table class="table">
                            <thead>
                                <tr>
                                    <th scope="col">Item Number</th>
                                    <th scope="col">Catergory Name</th>
                                </tr>
                            </thead>
                            <tbody>
                                {brands.map(item => (
                                    <tr>
                                        <th scope="row" key={item.id}>{item.id}</th>
                                        <td>{item.brand}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                </div>
            </div>
        </div>
    )
}

export { ItemBrandRegistration };