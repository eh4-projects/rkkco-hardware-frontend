import React, { useState, useEffect, useCallback } from 'react';
import { CustomButton } from '../../components/common/forms/custom-btn';

const BillingHome = () => {
    let barcodeScankey = 'F4', addItemKey = 'Insert';

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
    const [cash, setCash] = useState('0.00');
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
            setForm(initObject);
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
                                    <CustomButton customClasses="billing-btn btn-three btn-outline-primary" btnText="Scan Code (F4)" isSmall="true" onClick={() => scanBarcode(form.itemCode)} />
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