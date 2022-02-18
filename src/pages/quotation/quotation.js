import React, { useState } from 'react';
import { useForm } from '../../customer-hooks/form.hook';
import { CustomButton } from '../../components/common/forms/custom-btn';
import { CustomForm } from '../../components/common/forms/custom-form';
import { CustomInput } from '../../components/common/forms/customInput';
import { errorInitObject, formInitObject } from '../../form-init-object/quotation.init';
import { isNumber,isEmail,isRequired } from '../../config/validation.config';

const Quotation = () => {

    const [form, errors, setFormCustom, setErrorCustom] = useForm(errorInitObject, formInitObject);
    const [inputItemList, setInputItemList] = useState([{ itemName: "", itemID: "",unitPrice: "",count: ""  }]);

    const handleInputChange = (e, index) => {
        const { name, value } = e.target;
        const list = [...inputItemList];
        list[index][name] = value;
        setInputItemList(list);
    };
    
    const handleRemoveClick = index => {
        const list = [...inputItemList];
        list.splice(index, 1);
        setInputItemList(list);
    };
    
    const handleAddClick = () => {
        setInputItemList([...inputItemList, { itemName: "", itemID: "",unitPrice: "",count: "" }]);
    };

    const onSubmit = async () => {
        console.log(form.name,form.cnum,form.email,inputItemList)
    };

    return (
        <div className="update-stock">
            <div className="container-fluid">
                <div className="stock-content">
                    <label className="stock-topic">Quotations</label>
                    <CustomForm
                        mainClass="login-form-card"
                        onSubmit={onSubmit}
                        setError={setErrorCustom}
                        errors={errors}>

                    
                    <div className="card stock-card">
                        <div className="card-header">Create Quotation</div>
                        <div className="card-body">
                            <form className="stock-update-form">
                                <div className="row">
                                <div >CLIENT DETAILS</div>
                                    <div className="col">
                                        <CustomInput
                                            className="cust-input"
                                            placeholder=""
                                            name="name"
                                            label="Client Name"
                                            type="text"
                                            value={form.name}
                                            onChange={setFormCustom}
                                            errorMsg={errors.name}
                                            setError={setErrorCustom}
                                            validations={[isRequired]}
                                            maxLength={320}
                                            disabled={false}
                                        />
                                    </div>
                                    <div className="col">
                                        <CustomInput
                                            className="cust-input"
                                            placeholder=""
                                            name="cnum"
                                            label="Contact Number"
                                            type="text"
                                            value={form.cnum}
                                            onChange={setFormCustom}
                                            errorMsg={errors.cnum}
                                            setError={setErrorCustom}
                                            validations={[isNumber,isRequired]}
                                            maxLength={320}
                                            disabled={false}
                                        />
                                    </div>
                                    <div className="col">
                                        <CustomInput
                                            className="cust-input"
                                            placeholder=""
                                            name="email"
                                            label="Email"
                                            type="text"
                                            value={form.email}
                                            onChange={setFormCustom}
                                            errorMsg={errors.name}
                                            setError={setErrorCustom}
                                            validations={[isEmail]}
                                            maxLength={320}
                                            disabled={false}
                                        />
                                    </div>
                                </div>
                                <hr/>
                                <div >ITEMS</div>
                                    <div >
                                        {inputItemList.map((x, i) => {
                                            return (
                                                <div className="row">
                                                    <div className="col">
                                                        <p className="field-title">Item Name</p>
                                                            <input
                                                                name="itemName" 
                                                                value={x.itemName}
                                                                onChange={e => handleInputChange(e, i)}
                                                            />
                                                    </div>
                                                    {/* <div className="col">
                                                        <CustomInput
                                                            className="cust-input"
                                                            placeholder=""
                                                            name="itemName"
                                                            label="Item Name"
                                                            type="text"
                                                            value={x.itemName}
                                                            onChange={e => handleInputChange(e, i)}
                                                        />
                                                    </div> */}
                                                    <div className="col">
                                                        <p className="field-title">Item ID</p>
                                                            <input
                                                                name="itemID"
                                                                value={x.itemID}
                                                                onChange={e => handleInputChange(e, i)}
                                                            />
                                                    </div>
                                                    <div className="col">
                                                        <p className="field-title">Unit Price</p>
                                                            <input
                                                                name="unitPrice"
                                                                value={x.unitPrice}
                                                                onChange={e => handleInputChange(e, i)}
                                                            />
                                                    </div>
                                                    <div className="col">
                                                        <p className="field-title">Count</p>
                                                            <input
                                                                name="count"
                                                                value={x.count}
                                                                onChange={e => handleInputChange(e, i)}
                                                            />
                                                    </div>
                                                    <div className="col">
                                                        {inputItemList.length !== 1 && 
                                                            <CustomButton 
                                                                customClasses="btn btn-outline-primary" 
                                                                btnText="Remove" 
                                                                onClick={() => handleRemoveClick(i)}
                                                            />
                                                        }
                                                        {inputItemList.length - 1 === i && 
                                                            <CustomButton 
                                                                customClasses="btn btn-outline-primary" 
                                                                btnText="Add Item" 
                                                                onClick={handleAddClick}
                                                            />
                                                        }
                                                    </div>
                                                </div>
                                            );
                                        })}
                                    </div>
                                
                            </form>

                            
                        </div>
                        {/* {JSON.stringify(inputItemList)} */}
                        {}
                        <div className="card-footer text-muted">
                            <div className="row btn-group">
                                <div className="col">
                                    <CustomButton 
                                        customClasses="stock-btn btn-one btn-outline-success" 
                                        btnText="Preview" 
                                        btnType="submit"
                                        
                                    />
                                    <CustomButton customClasses="stock-btn btn-two btn-outline-danger" btnText="Cancel" />
                                </div>
                            </div>
                        </div>
                    </div>
                    </CustomForm>
                </div>
            </div>
        </div>
    );
};

export { Quotation };