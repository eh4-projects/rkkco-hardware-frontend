import React, { useContext, useEffect, useState } from 'react';
import DefaultImage from '../../assets/default_image_01.png';
import { CustomButton } from '../../components/common/forms/custom-btn';
import { ItemService } from '../../services/item.service';
import { UIContextAPI } from "../../components/contexts/ui.context";
import { AuthContextAPI } from "../../components/contexts/auth.context";
import { useBarcode } from 'react-barcodes';

const ItemRegistration = () => {
    const [itemService, setItemService] = useState(undefined);
    const { setAuth } = useContext(AuthContextAPI);
    const { setLoader, setAlert } = useContext(UIContextAPI);

    useEffect(() => {
        setItemService(new ItemService(setLoader, setAlert, setAuth));
    }, []);

    const initObject = {
        category: '',
        brand: '',
        companyBarcode: '1000.10',
        itemBarcode: '4325432523.34',
        itemName: '',
        unit: '',
        threshold: '',
        buyingPrice: '',
        sellingPrice: '',
        itemSize: '',
        itemImage: []
    };
    const [itemImage, setItemImage] = useState(DefaultImage);
    const [form, setForm] = useState(initObject);
    const [itemNo, setItemNo] = useState(undefined);
    const [itemBarCode, setItemBarCode] = useState(undefined);

    const ImageHandler = (e) => {
        const reader = new FileReader();
        reader.onload = () => {
            if (reader.readyState === 2) {
                setItemImage(reader.result)
            }
        }
        reader.readAsDataURL(e.target.files[0]);
    }

    const handleChange = (name, value) => {
        setForm(pre => {
            return {
                ...pre,
                [name]: value
            }
        })
    }

    useEffect(() => {
        getNextItemNo();
    })

    const getNextItemNo = async () => {
        setItemNo(await itemService.getItemNo());
    }

    useEffect(() => {
        generateBarcode();
    }, [itemNo])

    const generateBarcode = () => {
        let timestamp = Date.now();
        setItemBarCode(itemNo + parseInt(timestamp / 1000));
    }

    const { inputRef } = useBarcode({
        value: itemBarCode,
        options: {
            background: '#ffffff',
            width: 2,
            height: 100,
            displayValue : true
        },
        
    });

    const clearData = () => {
        console.log("hello");
        setForm(initObject);
    }

    const addItem = () => {
        if (itemImage !== '/static/media/default_image_01.6988980f.png') {
            form.itemImage = itemImage;
        }
        form.brand = parseInt(form.brand);
        form.category = parseInt(form.category);
        form.buyingPrice = parseFloat(form.buyingPrice);
        form.sellingPrice = parseFloat(form.sellingPrice);
        form.unit = parseInt(form.unit);
        form.threshold = parseFloat(form.threshold);
        form.itemSize = parseFloat(form.itemSize);
        form.itemImage = btoa(form.itemImage)
        console.log(form.itemImage);
        itemService.addItem(form);
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
                                        <p className="field-title">Item Barcode</p>
                                        <input type="text" name="itemBarcode" onChange={(e) => { handleChange(e.target.name, e.target.value) }} className="form-control dropdown form-control-sm" value={itemBarCode} disabled />
                                    </div>
                                    <div className="col">
                                        <p className="field-title">Item No</p>
                                        <input type="text" name="itemNo" onChange={(e) => { handleChange(e.target.name, e.target.value) }} className="form-control dropdown form-control-sm" value={itemNo} disabled />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col">
                                        <p className="field-title">Category</p>
                                        <input type="text" name="category" onChange={(e) => { handleChange(e.target.name, e.target.value) }} list="categoryList" className="form-control dropdown form-control-sm" />
                                        <datalist id="categoryList">
                                            <option value="1">Paint</option>
                                            <option value="2">Pencil</option>
                                            <option value="3">Paper</option>
                                        </datalist>
                                    </div>
                                    <div className="col">
                                        <p className="field-title">Brand</p>
                                        <input type="text" name="brand" onChange={(e) => { handleChange(e.target.name, e.target.value) }} list="brandList" className="form-control dropdown form-control-sm" />
                                        <datalist id="brandList">
                                            <option value="1">Pen</option>
                                            <option value="2">Pencil</option>
                                            <option value="3">Paper</option>
                                        </datalist>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6">
                                        <p className="field-title">Item Name</p>
                                        <input type="text" name="itemName" onChange={(e) => { handleChange(e.target.name, e.target.value) }} className="form-control dropdown form-control-sm" />
                                    </div>
                                    <div className="col">
                                        <p className="field-title">Item Size</p>
                                        <input type="number" name="itemSize" onChange={(e) => { handleChange(e.target.name, e.target.value) }} className="form-control dropdown form-control-sm" />
                                    </div>
                                    <div className="col">
                                        <p className="field-title">Unit</p>
                                        <input type="text" name="unit" onChange={(e) => { handleChange(e.target.name, e.target.value) }} list="unitList" className="form-control dropdown form-control-sm" />
                                        <datalist id="unitList">
                                            <option value="1">Kilogram</option>
                                            <option value="2">Liter</option>
                                            <option value="3">Meter</option>
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
                                    <div className="col" style={{ margin: "auto" }}>
                                        <div className="row">
                                            <div className="card col">
                                                <img ref={inputRef} alt="" />

                                            </div>
                                            <div className="col" style={{ margin: "auto" }}>
                                                <CustomButton customClasses="scan-btn stock-btn btn btn-outline-primary" btnText="Download Barcode" isSmall="true" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div className="card-footer text-muted">
                            <div className="row">
                                <div className="col">
                                    <CustomButton customClasses="stock-btn btn-one btn-outline-success" btnText="Add Item" isSmall="true" onClick={() => addItem()} />
                                    <CustomButton customClasses="stock-btn btn-two btn-outline-danger" btnText="Clear" isSmall="true" onClick={() => clearData()} />
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