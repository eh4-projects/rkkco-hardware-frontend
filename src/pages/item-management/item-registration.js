import React, { useEffect, useState } from 'react';
import DefaultImage from '../../assets/default_image_01.png';
import { CustomButton } from '../../components/common/forms/custom-btn';



const ItemRegistration = () => {
    const initObject = {
        category: '',
        brand: '',
        itemNo: '',
        companyBarcode: '',
        itemName: '',
        unit: '',
        threshold: '',
        buyingPrice: '',
        sellingPrice: '',
        itemImage: ''
    };
    const [itemImage, setItemImage] = useState(DefaultImage);
    const ImageHandler = (e) => {
        const reader = new FileReader();
        reader.onload = () => {
            if (reader.readyState === 2) {
                setItemImage(reader.result)
            }
        }
        reader.readAsDataURL(e.target.files[0]);
    }
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
        setForm(initObject);

    }

    const addItem = (item) => {
        if (itemImage != '/static/media/default_image_01.6988980f.png') {
            form.itemImage = itemImage;
        }
        console.log(form);
        console.log(itemImage);
    }

    return (
        <div className="item-registration">
            <div className="container-fluid">
                <div className="stock-content">
                    <label className="stock-topic">Item Registration</label>
                    <div className="card stock-card">
                        <div className="card-header">Add New Item</div>
                        <div className="card-body">
                            <div className="row scan-btn-row">
                                <div>
                                    <CustomButton customClasses="scan-btn stock-btn btn btn-outline-primary" btnText="Scan Code" isSmall="true" />
                                </div>
                            </div>
                            <form className="stock-update-form">
                                <div className="row">
                                    <div className="col">
                                        <p className="field-title">Company Barcode</p>
                                        <input type="text" name="companyBarcode" onChange={(e) => { handleChange(e.target.name, e.target.value) }} className="form-control dropdown form-control-sm" />
                                    </div>

                                    <div className="col">
                                        <p className="field-title">Item No</p>
                                        <input type="text" name="itemNo" onChange={(e) => { handleChange(e.target.name, e.target.value) }} className="form-control dropdown form-control-sm" value="Norway" disabled />
                                    </div>
                                </div>
                                <div className="row">

                                    <div className="col">
                                        <p className="field-title">Category</p>
                                        <input type="text" name="category" onChange={(e) => { handleChange(e.target.name, e.target.value) }} list="categoryList" className="form-control dropdown form-control-sm" />
                                        <datalist id="categoryList">
                                            <option value="pen">Paint</option>
                                            <option value="pencil">Pencil</option>
                                            <option value="paper">Paper</option>
                                        </datalist>
                                    </div>
                                    <div className="col">
                                        <p className="field-title">Brand</p>
                                        <input type="text" name="brand" onChange={(e) => { handleChange(e.target.name, e.target.value) }} list="brandList" className="form-control dropdown form-control-sm" />
                                        <datalist id="brandList">
                                            <option value="pen">Pen</option>
                                            <option value="pencil">Pencil</option>
                                            <option value="paper">Paper</option>
                                        </datalist>
                                    </div>

                                </div>
                                <div className="row">
                                    <div className="col-md-8">
                                        <p className="field-title">Item Name</p>
                                        <input type="text" name="itemName" onChange={(e) => { handleChange(e.target.name, e.target.value) }} className="form-control dropdown form-control-sm" />
                                    </div>
                                    <div className="col">
                                        <p className="field-title">Unit</p>
                                        <input type="text" name="unit" onChange={(e) => { handleChange(e.target.name, e.target.value) }} list="unitList" className="form-control dropdown form-control-sm" />
                                        <datalist id="unitList">
                                            <option value="kg">Kilogram</option>
                                            <option value="l">Liter</option>
                                            <option value="m">Meter</option>
                                        </datalist>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col">
                                        <p className="field-title">Item Threshold</p>
                                        <input type="number" name="threshold" onChange={(e) => { handleChange(e.target.name, e.target.value) }} className="form-control dropdown form-control-sm" />
                                    </div>
                                    <div className="col">
                                        <p className="field-title">Buying Price</p>
                                        <input type="number" name="buyingPrice" onChange={(e) => { handleChange(e.target.name, e.target.value) }} className="form-control dropdown form-control-sm" />
                                    </div>
                                    <div className="col">
                                        <p className="field-title">Selling Price</p>
                                        <input type="number" name="sellingPrice" onChange={(e) => { handleChange(e.target.name, e.target.value) }} className="form-control dropdown form-control-sm" />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col">
                                        <p className="field-title">Image</p>
                                        <img src={itemImage} className="img-fluid stock-image" alt="" />
                                        <input type="file" name="image-upload" id="input" accept="image/*" onChange={ImageHandler} />
                                        <label htmlFor="input" className="image-upload">
                                            <p className="btn-text">Add Image</p>
                                        </label>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div className="card-footer text-muted">
                            <div className="row">
                                <div className="col">
                                    <CustomButton customClasses="stock-btn btn-one btn-outline-success" btnText="Add Item" isSmall="true" onClick={addItem} />
                                    <CustomButton customClasses="stock-btn btn-two btn-outline-danger" btnText="Clear" isSmall="true" onClick={clearData} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export { ItemRegistration };