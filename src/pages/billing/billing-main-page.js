import React from 'react';
import MyImage from '../../assets/nerolac-pearls-500x500.jpg';
import { CustomButton } from '../../components/common/forms/custom-btn';


const BillingHome = () => {
    const initObject = {
        total: 0.00,
        cash: 0.00,
        tatolBalance: 0.00
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
                                        <input type="text" name="category" list="categoryList" className="form-control dropdown" />
                                        <datalist id="categoryList">
                                            <option value="pen">Paint</option>
                                            <option value="pencil">Pencil</option>
                                            <option value="paper">Paper</option>
                                        </datalist>
                                    </div>
                                    <div className="col-md-2">
                                        <p className="field-title">Item No</p>
                                        <input type="text" name="category" list="categoryList" className="form-control dropdown" />
                                        <datalist id="categoryList">
                                            <option value="pen">Pen</option>
                                            <option value="pencil">Pencil</option>
                                            <option value="paper">Paper</option>
                                        </datalist>
                                    </div>
                                    <div className="col">
                                        <p className="field-title">Item Name</p>
                                        <input type="text" name="category" list="categoryList" className="form-control dropdown" />
                                        <datalist id="categoryList">
                                            <option value="pen">Pen</option>
                                            <option value="pencil">Pencil</option>
                                            <option value="paper">Paper</option>
                                        </datalist>
                                    </div>
                                    <div className="col-md-1">
                                        <p className="field-title">Quentity</p>
                                        <input type="text" name="category" className="form-control dropdown" />
                                    </div>
                                    <div className="col-md-2">
                                        <p className="field-title">Price</p>
                                        <input type="text" name="category" className="form-control dropdown" />
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div className="card-footer text-muted">
                            <div className="row btn-group">
                                <div className="col">
                                    <CustomButton customClasses="billing-btn btn-one btn-outline-success" btnText="Add Item" isSmall="true" />
                                    <CustomButton customClasses="billing-btn btn-three btn-outline-primary" btnText="Scan Code" isSmall="true" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card billing-card">
                        <div className="card-header">Items List</div>
                        <div className="card-body">
                            <table class="table">
                                <thead>
                                    <tr>
                                        <th scope="col">Item No</th>
                                        <th scope="col">Item Name</th>
                                        <th scope="col">Brand</th>
                                        <th scope="col">Quentity</th>
                                        <th scope="col">Price</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th scope="row">1</th>
                                        <td>Mark</td>
                                        <td>Otto</td>
                                        <td>589 Kg</td>
                                        <td>374.00</td>
                                    </tr>
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
                                    <p className="field-title-billing-value">23,493.39</p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-8">
                                </div>
                                <div className="col-md-2">
                                    <p className="field-title-billing">Cash</p>
                                </div>
                                <div className="col-md-2">
                                    <input type="text" name="category" className="form-control field-title-billing-value-input" defaultValue="0.00" />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-8">
                                </div>
                                <div className="col-md-2">
                                    <p className="field-title-billing">Balance</p>
                                </div>
                                <div className="col-md-2">
                                    <p className="field-title-billing-value" name="tatolBalance" value={tatolBalance}>500,00.00</p>
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