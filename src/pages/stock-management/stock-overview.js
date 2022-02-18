import React from 'react';
import MyImage from '../../assets/nerolac-pearls-500x500.jpg';
import { CustomButton } from '../../components/common/forms/custom-btn';


const StockOverview = () => {
    return (
        <div className="stock-overview-page">
            <div className="container-fluid">
                <div className="stock-content">
                    <label className="stock-topic">Stock Overview</label>
                    <div className="card stock-card">
                        <div className="card-header">Search Item</div>
                        <div className="card-body">
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
                                        <p className="field-title">Item No</p>
                                        <input type="text" name="category" list="categoryList" className="form-control dropdown" />
                                        <datalist id="categoryList">
                                            <option value="pen">Pen</option>
                                            <option value="pencil">Pencil</option>
                                            <option value="paper">Paper</option>
                                        </datalist>
                                    </div>
                                    <div className="col-md-8">
                                        <p className="field-title">Item Name</p>
                                        <input type="text" name="category" list="categoryList" className="form-control dropdown" />
                                        <datalist id="categoryList">
                                            <option value="pen">Pen</option>
                                            <option value="pencil">Pencil</option>
                                            <option value="paper">Paper</option>
                                        </datalist>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div className="card-footer text-muted">
                            <div className="row btn-group">
                                <div className="col">
                                    <CustomButton customClasses="stock-btn btn-one btn-outline-success" btnText="Search" />
                                    <CustomButton customClasses="stock-btn btn-three btn-outline-primary" btnText="Scan Code" />
                                    <CustomButton customClasses="stock-btn btn-two btn-outline-danger" btnText="Clear" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card stock-card">
                        <div className="card-header">Items List</div>
                        <div className="card-body">
                            <table class="table">
                                <thead>
                                    <tr>
                                        <th scope="col">Item Number</th>
                                        <th scope="col">Item Name</th>
                                        <th scope="col">Brand</th>
                                        <th scope="col">Stock</th>
                                        <th scope="col">Buying Price</th>
                                        <th scope="col">Selling Price</th>
                                        <th scope="col">State</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th scope="row">1</th>
                                        <td>Mark</td>
                                        <td>Otto</td>
                                        <td>589 Kg</td>
                                        <td>239.00</td>
                                        <td>374.00</td>
                                        <td>
                                            <span class="badge bg-success">Available</span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th scope="row">2</th>
                                        <td>Mark</td>
                                        <td>Otto</td>
                                        <td>589 Kg</td>
                                        <td>239.00</td>
                                        <td>374.00</td>
                                        <td>
                                            <span class="badge bg-danger">Unavailable</span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th scope="row">3</th>
                                        <td>Mark</td>
                                        <td>Otto</td>
                                        <td>589 Kg</td>
                                        <td>239.00</td>
                                        <td>374.00</td>
                                        <td>
                                            <span class="badge bg-warning">Warning</span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th scope="row">1</th>
                                        <td>Mark</td>
                                        <td>Otto</td>
                                        <td>589 Kg</td>
                                        <td>239.00</td>
                                        <td>374.00</td>
                                        <td>
                                            <span class="badge bg-success">Available</span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th scope="row">2</th>
                                        <td>Mark</td>
                                        <td>Otto</td>
                                        <td>589 Kg</td>
                                        <td>239.00</td>
                                        <td>374.00</td>
                                        <td>
                                            <span class="badge bg-danger">Unavailable</span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th scope="row">3</th>
                                        <td>Mark</td>
                                        <td>Otto</td>
                                        <td>589 Kg</td>
                                        <td>239.00</td>
                                        <td>374.00</td>
                                        <td>
                                            <span class="badge bg-warning">Warning</span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th scope="row">1</th>
                                        <td>Mark</td>
                                        <td>Otto</td>
                                        <td>589 Kg</td>
                                        <td>239.00</td>
                                        <td>374.00</td>
                                        <td>
                                            <span class="badge bg-success">Available</span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th scope="row">2</th>
                                        <td>Mark</td>
                                        <td>Otto</td>
                                        <td>589 Kg</td>
                                        <td>239.00</td>
                                        <td>374.00</td>
                                        <td>
                                            <span class="badge bg-danger">Unavailable</span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th scope="row">3</th>
                                        <td>Mark</td>
                                        <td>Otto</td>
                                        <td>589 Kg</td>
                                        <td>239.00</td>
                                        <td>374.00</td>
                                        <td>
                                            <span class="badge bg-warning">Warning</span>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="card-footer">
                            <nav aria-label="" className="pagination-div">
                                <ul className="pagination justify-content-center">
                                    <li className="page-item disabled">
                                        <a className="page-link">Prev</a>
                                    </li>
                                    <li className="page-item">
                                        <a className="page-link" href="#">1</a>
                                    </li>
                                    <li className="page-item active" aria-current="page">
                                        <a className="page-link" href="#">2</a>
                                    </li>
                                    <li className="page-item">
                                        <a className="page-link" href="#">3</a>
                                    </li>
                                    <li className="page-item">
                                        <a className="page-link" href="#">Next</a>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

}

export { StockOverview };