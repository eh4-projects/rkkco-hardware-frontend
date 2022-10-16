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
import { CatergoryItemService } from '../../services/category.service';


const ItemCategoryRegistration = () => {

    const [form, errors, setFormCustom, setErrorCustom, resetForm] = useForm(errorInitObject, formInitObject);
    const [catergoryService, setcatergoryService] = useState(undefined);
    const { setAuth } = useContext(AuthContextAPI);
    const { setLoader, setAlert } = useContext(UIContextAPI);
    const { categoryList, setCategoryList } = useState([]);

    const onSubmit = async () => {
        await catergoryService.addCategory(form.catergoryName, resetForm);
    };

    useEffect(() => {
        setcatergoryService(new CatergoryItemService(setLoader, setAlert, setAuth));    
    }, []);

    useEffect(() => {
        if (catergoryService) {
            let data = catergoryService.getCategory(setCategoryList)
            console.log(data);
        }
    }, [catergoryService]);

    return (
        <div className='item-catergory-reg-home'>
            <div className='container-fluid'>
                <div className='item-catergory-reg-title'>
                    <label className='item-title'>Item Catergory Registration</label>
                </div>
                <div className=' card item-catergory-reg-content'>
                    <div className='card-header'>Add New Catergory Item</div>
                    <div className="card-body">
                        <div className='row'>
                            <CustomForm
                                mainClass="login-form-card"
                                onSubmit={onSubmit}
                                setError={setErrorCustom}
                                errors={errors}>
                                <CustomInput
                                    className="cust-input"
                                    placeholder="Add Catergory"
                                    name="catergoryName"
                                    label="Catergory Item Name"
                                    type="text"
                                    value={form.catergoryName}
                                    onChange={setFormCustom}
                                    errorMsg={errors.catergoryName}
                                    setError={setErrorCustom}
                                    validations={[isRequired]}
                                    maxLength={320}
                                    disabled={false}
                                />
                                <CustomButton
                                    btnType="submit"
                                    btnText="Add Catergory"
                                    customClasses="btn btn-outline-primary item-catergory-add-button"
                                />
                            </CustomForm>
                        </div>
                    </div>
                </div>
                <div className='card item-catergory-list'>
                    <div className='card-header'>Catergory Item List</div>
                    <div className='card-body'>
                        <table class="table">
                            <thead>
                                <tr>
                                    <th scope="col">Catergory Number</th>
                                    <th scope="col">Catergory Name</th>
                                </tr>
                            </thead>
                            <tbody>
                                {categoryList.map(item => (
                                    <tr>
                                        <th scope="row">{item.id}</th>
                                        <td>{item.category}</td>
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

export { ItemCategoryRegistration };