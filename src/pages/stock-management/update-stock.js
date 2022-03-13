import React, { useRef, useState } from 'react';
import MyImage from '../../assets/nerolac-pearls-500x500.jpg';
import { CustomButton } from '../../components/common/forms/custom-btn';

const UpdateStock = () => {

    const initObject = {
        category: '',
        brand: '',
        itemNo: '',
        companyBarcode: '',
        itemName: '',
        unit: '',
        newItemCount: '',
        threshold: '',
        buyingPrice: '',
        sellingPrice: ''
    };
    const [form, setForm] = useState(initObject);

    const handleChange = (name, value) => {
        setForm(pre => {
            return {
                ...pre,
                [name]: value
            }
        })
    }

    const clearData = () => {
        // console.log(form.brand);
    }

    const updateStock = () => {
        // console.log(form.brand);
    }

    return (
        <div className="update-stock">
            <div className="container-fluid">
                <div className="stock-content">
                    <label className="stock-topic">Items Stock Handling</label>
                    <div className="card stock-card">
                        <div className="card-header">Update Stock</div>
                        <div className="card-body">
                            <div className="row scan-btn-row">
                                <div>
                                    <CustomButton customClasses="scan-btn stock-btn btn btn-outline-primary" btnText="Scan Code" isSmall="true" />
                                </div>
                            </div>
                            <form className="stock-update-form" onSubmit={updateStock()}>
                                <div className="row">
                                    <div className="col">
                                        <p className="field-title">Category</p>
                                        <input type="text" name="category" value={form.category} onChange={(e) => { handleChange(e.target.name, e.target.value) }} list="categoryList" className="form-control dropdown form-control-sm" />
                                        <datalist id="categoryList">
                                            <option value="pen">Paint</option>
                                            <option value="pencil">Pencil</option>
                                            <option value="paper">Paper</option>
                                        </datalist>
                                    </div>
                                    <div className="col">
                                        <p className="field-title">Brand</p>
                                        <input type="text" name="brand" value={form.brand} onChange={(e) => { handleChange(e.target.name, e.target.value) }} list="brandList" className="form-control dropdown form-control-sm" />
                                        <datalist id="brandList">
                                            <option value="pen">Pen</option>
                                            <option value="pencil">Pencil</option>
                                            <option value="paper">Paper</option>
                                        </datalist>
                                    </div>
                                    <div className="col">
                                        <p className="field-title">Item No</p>
                                        <input type="text" name="itemNo" value={form.itemNo} onChange={(e) => { handleChange(e.target.name, e.target.value) }} list="itemNoList" className="form-control dropdown form-control-sm" />
                                        <datalist id="itemNoList">
                                            <option value="pen">Pen</option>
                                            <option value="pencil">Pencil</option>
                                            <option value="paper">Paper</option>
                                        </datalist>
                                    </div>
                                    <div className="col">
                                        <p className="field-title">Company Barcode</p>
                                        <input type="text" name="companyBarcode" value={form.companyBarcode} onChange={(e) => { handleChange(e.target.name, e.target.value) }} className="form-control dropdown form-control-sm" />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-8">
                                        <p className="field-title">Item Name</p>
                                        <input type="text" name="itemName" value={form.itemName} onChange={(e) => { handleChange(e.target.name, e.target.value) }} list="itemNameList" className="form-control dropdown form-control-sm" />
                                        <datalist id="itemNameList">
                                            <option value="pen">Pen</option>
                                            <option value="pencil">Pencil</option>
                                            <option value="paper">Paper</option>
                                        </datalist>
                                    </div>
                                    <div className="col-md-4">
                                        <p className="field-title">Unit</p>
                                        <input type="text" name="unit" value={form.unit} onChange={(e) => { handleChange(e.target.name, e.target.value) }} list="unitList" className="form-control dropdown form-control-sm" />
                                        <datalist id="unitList">
                                            <option value="kg">Kilogram</option>
                                            <option value="l">Liter</option>
                                            <option value="m">Meter</option>
                                        </datalist>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col">
                                        <p className="field-title">New Item Count</p>
                                        <input type="number" name="newItemCount" value={form.newItemCount} onChange={(e) => { handleChange(e.target.name, e.target.value) }} className="form-control dropdown form-control-sm" />
                                    </div>
                                    <div className="col">
                                        <p className="field-title">Threshold</p>
                                        <input type="number" name="threshold" value={form.threshold} onChange={(e) => { handleChange(e.target.name, e.target.value) }} className="form-control dropdown form-control-sm" />
                                    </div>
                                    <div className="col">
                                        <p className="field-title">Buying Price</p>
                                        <input type="number" name="buyingPrice" value={form.buyingPrice} onChange={(e) => { handleChange(e.target.name, e.target.value) }} className="form-control dropdown form-control-sm" />
                                    </div>
                                    <div className="col">
                                        <p className="field-title">Selling Price</p>
                                        <input type="number" name="sellingPrice" value={form.sellingPrice} onChange={(e) => { handleChange(e.target.name, e.target.value) }} className="form-control dropdown form-control-sm" />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col">
                                        <p className="field-title">Image</p>
                                        <img src={MyImage} className="img-fluid stock-image" />
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div className="card-footer text-muted">
                            <div className="row">
                                <div className="col">
                                    <CustomButton customClasses="stock-btn btn-one btn-outline-success" btnText="Update Stock" isSmall="true" onClick={updateStock}/>
                                    <CustomButton customClasses="stock-btn btn-two btn-outline-danger" btnText="Clear" isSmall="true" onClick={clearData}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export { UpdateStock };