import React from 'react';
import MyImage from '../../assets/nerolac-pearls-500x500.jpg';
import { CustomButton } from '../../components/common/forms/custom-btn';

const UpdateStock = () => {
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
                                    <CustomButton customClasses="scan-btn stock-btn btn btn-outline-primary" btnText="Scan Code" />
                                </div>
                            </div>
                            <form className="stock-update-form">
                                <div className="row">
                                    <div className="col">
                                        <p className="field-title">Category</p>
                                        <input type="text" name="category" list="categoryList" className="form-control dropdown" />
                                        <datalist id="categoryList">
                                            <option value="pen">Paint</option>
                                            <option value="pencil">Pencil</option>
                                            <option value="paper">Paper</option>
                                        </datalist>
                                    </div>
                                    <div className="col">
                                        <p className="field-title">Brand</p>
                                        <input type="text" name="category" list="categoryList" className="form-control dropdown" />
                                        <datalist id="categoryList">
                                            <option value="pen">Pen</option>
                                            <option value="pencil">Pencil</option>
                                            <option value="paper">Paper</option>
                                        </datalist>
                                    </div>
                                    <div className="col">
                                        <p className="field-title">Item No</p>
                                        <input type="text" name="category" list="categoryList" className="form-control dropdown" />
                                        <datalist id="categoryList">
                                            <option value="pen">Pen</option>
                                            <option value="pencil">Pencil</option>
                                            <option value="paper">Paper</option>
                                        </datalist>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-8">
                                        <p className="field-title">Item Name</p>
                                        <input type="text" name="category" list="categoryList" className="form-control dropdown" />
                                        <datalist id="categoryList">
                                            <option value="pen">Pen</option>
                                            <option value="pencil">Pencil</option>
                                            <option value="paper">Paper</option>
                                        </datalist>
                                    </div>
                                    <div className="col-md-4">
                                        <p className="field-title">Unit</p>
                                        <input type="text" name="category" list="unitList" className="form-control dropdown" />
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
                                        <input type="text" name="category" className="form-control dropdown" />
                                    </div>
                                    <div className="col">
                                        <p className="field-title">Company Barcode</p>
                                        <input type="text" name="category" className="form-control dropdown" />
                                    </div>
                                    <div className="col">
                                        <p className="field-title">Buying Price</p>
                                        <input type="text" name="category" className="form-control dropdown" />
                                    </div>
                                    <div className="col">
                                        <p className="field-title">Selling Price</p>
                                        <input type="text" name="category" className="form-control dropdown" />
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
                            <div className="row btn-group">
                                <div className="col">
                                    <CustomButton customClasses="stock-btn btn-one btn-outline-success" btnText="Update Stock" />
                                    <CustomButton customClasses="stock-btn btn-two btn-outline-danger" btnText="Clear" />
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