import React, { useState } from 'react';
import { CustomButton } from '../../components/common/forms/custom-btn';


const BillingHome = () => {
    const initObject = {
        index: 0,
        category: '',
        itemNo: '',
        itemName: '',
        quantity: 0,
        price: 0.00,
    };
    const [totalPrice, setTotalPrice] = useState('0.00');
    const [form, setForm] = useState(initObject);
    const [inputItemList, setInputItemList] = useState([]);
    const [cash, setCash] = useState(0.00);
    const [cashBalance, setCashBalance] = useState('0.00');

    const handleChange = (e) => {
        setForm(pre => {
            return {
                ...pre,
                [e.target.name]: e.target.value
            }
        })
    }

    const addItem = (itemNo) => {
        let count = Object.keys(inputItemList).length
        let tempArray = { ...inputItemList };
        form.price = form.quantity * 100;

        if (form.category === null || form.itemNo === null || form.itemName === null || form.quantity === null || form.quantity === 0 || form.price === null || form.price === 0) {
            alert("Please select a category!")
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
                calculateTotal(form.price);
            }
            else {
                tempArray[itemNo] = {
                    ...tempArray[itemNo],
                    quantity: parseInt(tempArray[itemNo].quantity) + parseInt(form.quantity),
                    price: tempArray[itemNo].price + parseFloat(form.price.toFixed(2))
                }
                calculateTotal(form.price)
            }
            setInputItemList(tempArray);
            setForm(initObject);
        }
        calculateCashBalance(cash, form.price);
    }

    const calculateTotal = (val) => {
        setTotalPrice(pre => {
            return (parseInt(pre) + val).toFixed(2);
        })
    }

    const calculateCashBalance = (val, price) => {
        setCashBalance((parseFloat(val) - parseFloat(totalPrice) - parseFloat(price)).toFixed(2));
    }

    const setCachBalanceChange = (e) => {
        setCash(e.target.value)
        setCashBalance(pre => {
            return (parseFloat(e.target.value) - parseFloat(totalPrice)).toFixed(2);
        })
    }

    return (
        <div className="billing-home">
            <div className="container-fluid">
                <div className="billing-content">
                    <label className="billing-topic">Billing Home</label>
                    <div className="card billing-card">
                        <div className="card-header">Search Item</div>
                        <div className="card-body">
                            <form className="billing-update-form">
                                <div className="row">
                                    <div className="col-md-2">
                                        <p className="field-title">Category</p>
                                        <input type="text" name="category" list="categoryList" value={form.category} onChange={(e) => { handleChange(e) }} className="form-control dropdown form-control-sm" />
                                        <datalist id="categoryList">
                                            <option value="pen">Paint</option>
                                            <option value="pencil">Metal</option>
                                            <option value="paper">Pipeline</option>
                                        </datalist>
                                    </div>
                                    <div className="col-md-2">
                                        <p className="field-title">Item No</p>
                                        <input type="text" name="itemNo" list="itemNoList" value={form.itemNo} onChange={(e) => { handleChange(e) }} className="form-control dropdown form-control-sm" />
                                        <datalist id="itemNoList">
                                            <option value="001">001</option>
                                            <option value="002">002</option>
                                            <option value="003">003</option>
                                        </datalist>
                                    </div>
                                    <div className="col">
                                        <p className="field-title">Item Name</p>
                                        <input type="text" name="itemName" list="itemNameList" value={form.itemName} onChange={(e) => { handleChange(e) }} className="form-control dropdown form-control-sm" />
                                        <datalist id="itemNameList">
                                            <option value="pen">Pen</option>
                                            <option value="pencil">Pencil</option>
                                            <option value="paper">Paper</option>
                                        </datalist>
                                    </div>
                                    <div className="col-md-1">
                                        <p className="field-title">Quantity</p>
                                        <input type="number" name="quantity" value={form.quantity} onChange={(e) => { handleChange(e) }} className="form-control dropdown form-control-sm" />
                                    </div>
                                    <div className="col-md-2">
                                        <p className="field-title">Price</p>
                                        <input style={{ textAlign: 'right' }} type="text" name="price" value={(form.quantity * 100).toFixed(2)} onChange={(e) => { handleChange(e) }} className="form-control dropdown form-control-sm" />
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div className="card-footer text-muted">
                            <div className="row">
                                <div className="col">
                                    <CustomButton customClasses="billing-btn btn-one btn-outline-success" btnText="Add Item" isSmall="true" onClick={() => addItem(form.itemNo)} />
                                    <CustomButton customClasses="billing-btn btn-three btn-outline-primary" btnText="Scan Code" isSmall="true" />
                                </div>
                            </div>
                        </div>
                    </div>
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
                                    <p className="field-title-billing-value" name="tatolBalance" >{cashBalance}</p>
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