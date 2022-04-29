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

    const [form, errors, setFormCustom, setErrorCustom] = useForm(errorInitObject, formInitObject);
    const [catergoryService, setcatergoryService] = useState(undefined);
    const { setAuth } = useContext(AuthContextAPI);
    const { setLoader, setAlert } = useContext(UIContextAPI);

    const onSubmit = async () => {
        await catergoryService.addCategory(form.catergoryName, () => {
            setFormCustom("catergoryName", '');
            setErrorCustom("catergoryName", '');
        });
    };

    useEffect(() => {
        setcatergoryService(new CatergoryItemService(setLoader, setAlert, setAuth));
    }, []);

    useEffect(() => {
        if (catergoryService) {
            let data = catergoryService.getCategory(setcatergoryService)
            console.log("KMK", data);
        }
    }, [catergoryService]);


    const reportsData = [{
        itemNumber: "1",
        name: "TEST 1",

    },
    {
        itemNumber: "2",
        name: "TEST 2",

    },
    {
        itemNumber: "3",
        name: "TEST 3",

    },
    {
        itemNumber: "4",
        name: "TEST 4",

    }]

    return (
        <div className='item-catergory-reg-home'>
            <div className='container-fluid'>
                <div className='item-catergory-reg-title'>
                    <h2 className='item-title'>Item Catergory Registration</h2>
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
                                    <th scope="col">Item Number</th>
                                    <th scope="col">Catergory Name</th>
                                </tr>
                            </thead>
                            <tbody>
                                {reportsData.map(item => (
                                    <tr>
                                        <th scope="row">{item.itemNumber}</th>
                                        <td>{item.name}</td>
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