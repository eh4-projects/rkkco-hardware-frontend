import React, { useState } from 'react';
import { useForm } from '../../customer-hooks/form.hook';
import { CustomButton } from '../../components/common/forms/custom-btn';
import { CustomForm } from '../../components/common/forms/custom-form';
import { CustomInput } from '../../components/common/forms/customInput';
import { errorInitObject, formInitObject } from '../../form-init-object/quotation.init';
import { isNumber,isEmail,isRequired } from '../../config/validation.config';

const Quotation = () => {

    const [form, errors, setFormCustom, setErrorCustom] = useForm(errorInitObject, formInitObject);
    const [inputItemList, setInputItemList] = useState([{ category: "", itemNo: "",itemName: "", quantity: "",price: ""  }]);

    // const [inputItemList, setInputItemList] = useForm(errorFormItems,formItems);

    const [total, setTotal] = useState('0.00');
    const [discount, setDiscount] = useState('0.00');
    const [netTotal, setNetTotal] = useState('0.00');

    const handleChange = (e) => {
        setFormCustom(pre => {
            return {
                ...pre,
                [e.target.name]: e.target.value
            }
        })
    }

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
        setInputItemList([...inputItemList, { category: "", itemNo: "",itemName: "", quantity: "",price: ""  }]);
    };

    const onSubmit = async () => {
        console.log(form)
    };

    return (
        <div className="quotation-home">
            <div className="container-fluid">
                <div className="quotation-content">
                    <label className="quotation-topic">Quotations</label>
                    <CustomForm
                        mainClass="login-form-card"
                        onSubmit={onSubmit}
                        setError={setErrorCustom}
                        errors={errors}>

                    <div className="card quotation-card">
                        <div className="card-header">Customer Details</div>
                        <div className="card-body">
                            <div className="row">

                                <div className="col">
                                    <CustomInput
                                        className="cust-input"
                                        placeholder=""
                                        name="customerName"
                                        label="Customer Name"
                                        type="text"
                                        value={form.customerName}
                                        onChange={setFormCustom}
                                        errorMsg={errors.customerName}
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
                                        name="customerNumber"
                                        label="Contact Number"
                                        type="text"
                                        value={form.customerNumber}
                                        onChange={setFormCustom}
                                        errorMsg={errors.customerNumber}
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
                                        name="customerEmail"
                                        label="Email"
                                        type="text"
                                        value={form.customerEmail}
                                        onChange={setFormCustom}
                                        errorMsg={errors.customerEmail}
                                        setError={setErrorCustom}
                                        validations={[isEmail]}
                                        maxLength={320}
                                        disabled={false}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr/>
                    <div className="card quotation-card">
                        <div className="card-header">Item List</div>
                        <div className="card-body">
                            {inputItemList.map((x, i) => {
                                return (
                                    <div className="row">
                                                    
                                        <div className="col-md-3">
                                            <CustomInput
                                                className="form-control dropdown form-control-sm"
                                                placeholder=""
                                                name="category"
                                                label="Category"
                                                type="text"
                                                value={x.category}
                                                onChange={e => handleInputChange(e, i)}
                                                list="categoryList"
                                            />
                                            <datalist id="categoryList">
                                                <option value="pen">Paint</option>
                                                <option value="pencil">Metal</option>
                                                <option value="paper">Pipeline</option>
                                            </datalist>
                                        </div>

                                        <div className="col-md-2">
                                            <CustomInput
                                                className="form-control dropdown form-control-sm"
                                                placeholder=""
                                                name="itemNo"
                                                label="Item Number"
                                                type="text"
                                                value={x.itemNo}
                                                onChange={e => handleInputChange(e, i)}
                                            />
                                        </div>

                                        <div className="col-md-3">
                                            <CustomInput
                                                className="form-control dropdown form-control-sm"
                                                placeholder=""
                                                name="itemName"
                                                label="Item Name"
                                                type="text"
                                                value={x.itemName}
                                                onChange={e => handleInputChange(e, i)}
                                            />
                                        </div>

                                        <div className="col-md-2">
                                            <CustomInput
                                                className="form-control dropdown form-control-sm"
                                                placeholder=""
                                                name="quantity"
                                                label="Quantity"
                                                type="text"
                                                value={x.quantity}
                                                onChange={e => handleInputChange(e, i)}
                                            />
                                        </div>

                                        <div className="col-md-2">
                                            <CustomInput
                                                className="form-control dropdown form-control-sm"
                                                placeholder=""
                                                name="price"
                                                label="Price"
                                                type="text"
                                                value={x.price}
                                                onChange={e => handleInputChange(e, i)}
                                            />
                                        </div>
                                </div>
                                );
                            })}
                        </div>

                        <div className="card-footer text-muted">
                            <div className="row">
                                <div className="col">
                                    <CustomButton customClasses="quotation-btn btn-one btn-outline-success" btnText="Add Item" isSmall="true" onClick={handleAddClick} />
                                    {/* <CustomButton customClasses="quotation-btn btn-three btn-outline-primary" btnText="Scan Code (F4)" isSmall="true" onClick={() => scanBarcode(form.itemCode)} /> */}
                                </div>
                            </div>
                        </div>
                    </div>

                    <hr/>
                    {JSON.stringify(form)} 

                    <div className="card quotation-card">
                        <div className="card-header">Quotation Summary</div>
                        <div className="card-body">
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th scope="col">No</th>
                                        <th scope="col">Item No</th>
                                        <th scope="col">Item Name</th>
                                        <th scope="col">Brand</th>
                                        <th scope="col" style={{ textAlign: 'center' }}>Quantity</th>
                                        <th scope="col" style={{ textAlign: 'center' }}>Price</th>
                                        <th scope="col" style={{ textAlign: 'right' }}></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {[...Object.keys(inputItemList)].map((key) => {
                                        let item = inputItemList[key];
                                        return (
                                            <tr key={item.itemNo}>
                                                <th scope="row">{item.index}</th>
                                                <td>{item.itemNo}</td>
                                                <td>{item.itemName}</td>
                                                <td>{item.brand}</td>
                                                <td style={{ textAlign: 'center' }}>{item.quantity}</td>
                                                <td style={{ textAlign: 'right' }}>{item.price}</td>
                                                <td style={{ textAlign: 'right' }}>
                                                    <CustomButton customClasses="btn-two btn-outline-danger" btnText="Delete" isSmall="true" onClick={() => handleRemoveClick(item.itemNo)} />
                                                </td>
                                            </tr>
                                        )
                                    })}
                                </tbody>
                            </table>
                        </div>

                        <div className="card-footer">
                            <div className="row">
                                <div className="col-md-8">
                                </div>
                                <div className="col-md-2">
                                    <p className="field-title-quotation">Total</p>
                                </div>
                                <div className="col-md-2">
                                    <p className="field-title-quotation-value">{total}</p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-8">
                                </div>
                                <div className="col-md-2">
                                    <p className="field-title-quotation">Discount</p>
                                </div>
                                <div className="col-md-2">
                                    <input type="text" name="discount" className="form-control field-title-quotation-value-input form-control-sm" defaultValue="0.00" />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-8">
                                </div>
                                <div className="col-md-2">
                                    <p className="field-title-quotation">Net Total</p>
                                </div>
                                <div className="col-md-2">
                                    <p className="field-title-quotation-value" name="netTotal" >{netTotal}</p>
                                </div>
                            </div>

                            <hr/>
                            <div className="row justify-content-center">

                                <div className="col-md-2 ">
                                    <CustomButton customClasses="quotation-btn btn-print-bill btn-outline-success" btnText="Preview" isSmall="true"  />
                                </div>
                                
                                <div className="col-md-2">
                                    <CustomButton customClasses="quotation-btn btn-print-bill btn-outline-success" btnText="Print" isSmall="true"  />
                                </div>
                                <div className="col-md-2">
                                    <CustomButton customClasses="quotation-btn btn-print-bill btn-outline-danger" btnText="Cancel" isSmall="true"  />
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