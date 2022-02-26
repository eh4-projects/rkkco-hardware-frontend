import React, { useRef, useState } from 'react';
import { CustomButton } from '../../components/common/forms/custom-btn';
import { PDFExport } from "@progress/kendo-react-pdf";
import { format } from 'date-fns';

const StockOverview = () => {
    const pdfExportComponent = useRef(null);
    const stock_table = useRef(null);

    const initData = {
        category: '',
        itemName: '',
        itemNo: ''
    }
    const [category, setCategory] = useState(initData.category);
    const [itemNo, setItemNo] = useState(initData.itemNo);
    const [itemName, setItemName] = useState(initData.itemName);

    const handleExportWithComponent = (e) => {
        pdfExportComponent.current.save();
    }

    const file_name = 'RKKCo Stock ' + format(new Date(), 'yyyy-MM-dd');

    const clearData = () => {
        setCategory("");
        setItemName("");
        setItemNo("");
    }
    const handleChange = e => {
        setCategory(e.target.value);
    };

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
                                        <input type="text" onChange={handleChange} value={category} name="category" list="categoryList" className="form-control dropdown form-control-sm" />
                                        <datalist id="categoryList">
                                            <option value="pen">Paint</option>
                                            <option value="pencil">Pencil</option>
                                            <option value="paper">Paper</option>
                                        </datalist>
                                    </div>
                                    <div className="col">
                                        <p className="field-title">Item No</p>
                                        <input type="text" name="itemNo" list="categoryList" className="form-control dropdown form-control-sm" />
                                        <datalist id="categoryList">
                                            <option value="pen">Pen</option>
                                            <option value="pencil">Pencil</option>
                                            <option value="paper">Paper</option>
                                        </datalist>
                                    </div>
                                    <div className="col-md-8">
                                        <p className="field-title">Item Name</p>
                                        <input type="text" name="itemName" list="categoryList" className="form-control dropdown form-control-sm" />
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
                            <div className="row">
                                <div className="col">
                                    <CustomButton customClasses="stock-btn btn-one btn-outline-primary" btnText="Search" isSmall="true" />
                                    <CustomButton customClasses="stock-btn btn-three btn-outline-primary" btnText="Scan Code" isSmall="true" />
                                    <CustomButton customClasses="stock-btn btn-two btn-outline-danger" btnText="Clear" isSmall="true" onClick={clearData} />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="card stock-card">
                        <PDFExport
                            ref={pdfExportComponent}
                            paperSize="A4"
                            fileName={file_name}
                            margin={{ top: 20, left: 20, right: 20, bottom: 10 }}
                            repeatHeaders="true"
                        >
                            <div className="list-header">
                                <p className="pdf-header" style={{}}>{file_name}</p>
                                <ul></ul>
                            </div>

                            <div className="card-header" >Items List</div>
                            <div className="card-body">
                                <table className="table form-control-sm" ref={stock_table}>
                                    <thead>
                                        <tr className="stock-table-header">
                                            <th scope="col">Item Number</th>
                                            <th scope="col">Item Name</th>
                                            <th scope="col">Brand</th>
                                            <th scope="col">Stock</th>
                                            <th scope="col">Buying Price</th>
                                            <th scope="col">Selling Price</th>
                                            <th scope="col">State</th>
                                        </tr>
                                    </thead>
                                    <tbody className="stock-table-body">
                                        <tr>
                                            <th scope="row">1</th>
                                            <td>Mark </td>
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
                        </PDFExport>
                        <div className="card-footer">
                            <div className="row">
                                <div className="col">
                                    <CustomButton customClasses="stock-btn btn-one btn-outline-primary" btnText="Download" isSmall="true" onClick={handleExportWithComponent} />
                                    <CustomButton customClasses="stock-btn btn-one btn-outline-primary" btnText="Print" isSmall="true" />
                                    <nav aria-label="" className="pagination-div">
                                        <ul className="pagination justify-content-center form-control-sm">
                                            <li className="page-item">
                                                <a className="page-link" href="/stock-overview">Prev</a>
                                            </li>
                                            <li className="page-item">
                                                <a className="page-link" href="/stock-overview">1</a>
                                            </li>
                                            <li className="page-item active" aria-current="page">
                                                <a className="page-link" href="/stock-overview">2</a>
                                            </li>
                                            <li className="page-item">
                                                <a className="page-link" href="/stock-overview">3</a>
                                            </li>
                                            <li className="page-item">
                                                <a className="page-link" href="/stock-overview">Next</a>
                                            </li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );

}

export { StockOverview };