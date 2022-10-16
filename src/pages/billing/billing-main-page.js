import React, { useState, useEffect, useCallback, useContext } from 'react';
import { CustomButton } from '../../components/common/forms/custom-btn';
import { CustomForm } from '../../components/common/forms/custom-form';
import { CustomSelectBox } from '../../components/common/forms/custom-select-box';
import { CustomInput } from '../../components/common/forms/customInput';
import { AuthContextAPI } from '../../components/contexts/auth.context';
import { MetaDataContextAPI } from '../../components/contexts/meta-data.context';
import { UIContextAPI } from '../../components/contexts/ui.context';
import { useForm } from '../../customer-hooks/form.hook';
import { UserService } from '../../services/user.service';

const initObject = {
    category: '',
    itemId: '',
    itemName: '',
    quantity: 0,
    price: 0.00,
};
const BillingHome = () => {
    let barcodeScankey = 'F4', addItemKey = 'Insert';
    const { categories,items, itemMap } = useContext(MetaDataContextAPI);

    const [form, errors, setFormCustom, setErrorCustom] = useForm(initObject, initObject);
    const [userService, setuserService] = useState(undefined);
    const { setAuth } = useContext(AuthContextAPI);
    const { setLoader, setAlert } = useContext(UIContextAPI);
   
   
    useEffect(() => {
        setuserService(new UserService(setLoader, setAlert, setAuth));
    }, []);

   

    const [totalPrice, setTotalPrice] = useState('0.00');
    const [inputItemList, setInputItemList] = useState([]);
    const [cash, setCash] = useState('0.00');
    const [cashBalance, setCashBalance] = useState('0.00');

    const addItem = (itemNo) => {
        console.log(itemNo)
        let count = Object.keys(inputItemList).length
        let tempArray = { ...inputItemList };
        form.price = form.quantity * 100;

        if (form.category === null || form.itemNo === null || form.itemName === null || form.quantity === null || form.quantity === 0 || form.quantity <= 0 || form.price === null || form.price === 0) {
            alert(form.category)
        }
        else {
            if (tempArray[itemNo] === undefined) {
                tempArray[itemNo] = {
                    index: count + 1,
                    category: form.category,
                    itemNo: form.itemNo,
                    itemName: form.itemName,
                    quantity: form.quantity,
                    price: parseFloat(form.price.toFixed(2))
                }
            }
            else {
                tempArray[itemNo] = {
                    ...tempArray[itemNo],
                    quantity: parseInt(tempArray[itemNo].quantity) + parseInt(form.quantity),
                    price: tempArray[itemNo].price + parseFloat(form.price.toFixed(2))
                }
            }
            setInputItemList(tempArray);
            setTotalPrice(pre => {
                return (parseFloat(pre) + parseFloat(form.price)).toFixed(2)
            })
        }
    }

    useEffect(() => {
        setCashBalance(pre => {
            return (parseFloat(cash).toFixed(2) - parseFloat(totalPrice).toFixed(2)).toFixed(2)
        })
    }, [cash, totalPrice, cashBalance]);

    const setCachBalanceChange = (e) => {
        setCash(e.target.value)
        setCashBalance(pre => {
            return (parseFloat(e.target.value) - parseFloat(totalPrice)).toFixed(2);
        })
    }

    const handleQuantityBalance = (name, value) => {
        if(form.itemNo){
            let item = itemMap.get(form.itemNo);
            setFormCustom(name, value);
            setFormCustom("price", value * item.sellingPrice)
        }
    }
    useEffect(() => {
        setFormCustom("quantity", 0);
        setFormCustom("price", 0);
    }, [form.itemNo]);
    

    const deleteItem = async (itemNo) => {
        let tempArray = { ...inputItemList };
        await setTotalPrice(pre => (parseFloat(pre) - parseFloat(tempArray[itemNo].price)).toFixed(2))
        delete tempArray[itemNo];
        setInputItemList(tempArray)
    }

    const scanBarcode = (barcode) => {
        alert('Scan Barcode')
    }
    const handleKeyPress = useCallback((event) => {
        if (event.key === barcodeScankey) {
            scanBarcode(event.key)
        }
        if (event.key === addItemKey) {
            addItem(form.itemNo)
        }
    }, []);

    useEffect(() => {
        document.addEventListener('keydown', handleKeyPress);
        return () => {
            document.removeEventListener('keydown', handleKeyPress);
        };
    }, [handleKeyPress]);


    const submitOrder = () => {
        console.log("Submit order!");
    }

    const handleItemChange = (name, value) => {
        setFormCustom(name, value);
        
    }

    return (
        <div className="billing-home">
            <div className="container-fluid">
                <div className="billing-content">
                    <label className="billing-topic">Billing Home</label>
                            <CustomForm
                                mainClass="billing-update-form"
                                onSubmit={()=>addItem(form.itemNo)}
                                setError={setErrorCustom}
                                errors={errors}>
                    <div className="card billing-card">
                        <div className="card-header">Search Item</div>
                        <div className="card-body">
                                <div className="row">
                                    <div className="col-md-2">
                                        <CustomSelectBox
                                            labelClassName="field-title"
                                            extraClasses = "form-control dropdown form-control-sm"
                                            valueKey = "category"
                                            name="category"
                                            data={categories}
                                            title='Category'
                                            value={form.category}
                                            onChange = {setFormCustom}
                                            errorMsg={errors.category}
                                            setError={setErrorCustom}
                                        />
                                    </div>
                                    <div className="col-md-2">
                                        <CustomSelectBox
                                            labelClassName = "field-title"
                                            extraClasses = "form-control dropdown form-control-sm"
                                            valueKey = "itemNo"
                                            idKey='itemNo'
                                            name="itemNo"
                                            data={items}
                                            title='Item No'
                                            value={form.itemNo}
                                            onChange = {setFormCustom}
                                            errorMsg={errors.itemNo}
                                            setError={setErrorCustom}
                                        />
                                    </div>
                                    <div className="col">
                                        <CustomSelectBox
                                            labelClassName = "field-title"
                                            extraClasses = "form-control dropdown form-control-sm"
                                            valueKey = "itemName"
                                            idKey='itemNo'
                                            name="itemNo"
                                            data={items}
                                            title='Item Name'
                                            value={form.itemNo}
                                            onChange = {setFormCustom}
                                            errorMsg={errors.itemNo}
                                            setError={setErrorCustom}
                                        />
                                    </div>
                                    <div className="col-md-1">
                                        <CustomInput
                                            className="form-control dropdown form-control-sm"
                                            name="quantity"
                                            label="Quantity"
                                            type="number"
                                            labelClassName = "field-title"
                                            value={form.quantity}
                                            onChange={handleQuantityBalance}
                                            errorMsg={errors.quantity}
                                            setError={setErrorCustom}
                                        />
                                    </div>
                                    <div className="col-md-2">
                                        <CustomInput
                                            className="form-control dropdown form-control-sm"
                                            name="price"
                                            label="Price"
                                            type="price"
                                            labelClassName = "field-title"
                                            value={form.price}
                                            onChange={setFormCustom}
                                            errorMsg={errors.price}
                                            setError={setErrorCustom}
                                        />
                                    </div>
                                </div>
                        </div>
                        <div className="card-footer text-muted">
                            <div className="row">
                                <div className="col">
                                    <CustomButton 
                                        customClasses="billing-btn btn-one btn-outline-success" 
                                        btnText="Add Item" 
                                        isSmall="true" 
                                        btnType="submit" 
                                    />
                                    <CustomButton customClasses="billing-btn btn-three btn-outline-primary" btnText="Scan Code (F4)" isSmall="true" onClick={() => scanBarcode(form.itemCode)} />
                                </div>
                            </div>
                        </div>
                    </div>
                            </CustomForm>
                    <div className="card billing-card">
                        <div className="card-header">Items List</div>
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
                                                    <CustomButton customClasses="btn-two btn-outline-danger" btnText="Delete" isSmall="true" onClick={() => deleteItem(item.itemNo)} />
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
                                    <p className="field-title-billing">Total</p>
                                </div>
                                <div className="col-md-2">
                                    <p className="field-title-billing-value">{totalPrice}</p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-8">
                                </div>
                                <div className="col-md-2">
                                    <p className="field-title-billing">Cash</p>
                                </div>
                                <div className="col-md-2">
                                    <input type="text" name="cash" className="form-control field-title-billing-value-input form-control-sm" defaultValue="0.00" onChange={(e) => { setCachBalanceChange(e) }} />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-8">
                                </div>
                                <div className="col-md-2">
                                    <p className="field-title-billing">Balance</p>
                                </div>
                                <div className="col-md-2">
                                    <p className="field-title-billing-value" name="totalBalance" >{cashBalance}</p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-8">
                                </div>
                                <div className="col-md-2">
                                </div>
                                <div className="col-md-2" style={{ display: 'block' }}>
                                    <CustomButton customClasses="billing-btn btn-print-bill btn-outline-success" btnText="Print Bill" isSmall="true" onClick={() => submitOrder()} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

}

export { BillingHome };