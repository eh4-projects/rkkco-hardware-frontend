import React, { useContext, useEffect, useState } from 'react';
import DefaultImage from '../../assets/default_image_01.png';
import { CustomButton } from '../../components/common/forms/custom-btn';
import { ItemService } from '../../services/item.service';
import { BrandItemService } from '../../services/brand.service';
import { UIContextAPI } from "../../components/contexts/ui.context";
import { AuthContextAPI } from "../../components/contexts/auth.context";
import { useBarcode } from 'react-barcodes';


const ItemList = () => {
    const initObject = {
        index: 0,
        category: '',
        itemName: '',
    };

    const [form, setForm] = useState(initObject);
    const [itemList, setItemList] = useState([]);
    const [itemService, setItemService] = useState(undefined);
    const { setAuth } = useContext(AuthContextAPI);
    const { setLoader, setAlert } = useContext(UIContextAPI);

    useEffect(() => {
        const service = new ItemService(setLoader, setAlert, setAuth);
        service.getItemList(setItemList);

        setItemService(service);
    }, []);

    const handleChange = (e) => {
        setForm(pre => {
            return {
                ...pre,
                [e.target.name]: e.target.value
            }
        })
    }

    const getAllBrands = () => {
        const service = new BrandItemService(setLoader, setAlert, setAuth);
        let data ;
        service.getAllBrands(data);
        console.log(data);
    }

    return (
        <div className="item-list">
            <div className="container-fluid">
                <div className="item-list-content">
                    <label className="item-list-topic">Items Management</label>
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
                                    <div className="col">
                                        <p className="field-title">Item Name</p>
                                        <input type="text" name="itemName" list="itemNameList" value={form.itemName} onChange={(e) => { handleChange(e) }} className="form-control dropdown form-control-sm" />
                                        <datalist id="itemNameList">
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
                                    <CustomButton customClasses="item-list-btn btn-one btn-outline-primary" btnText="Search Item" isSmall="true" onClick={() => getAllBrands()}/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card item-list-card">
                        <div className="card-header">Items</div>
                        <div className="card-body">
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th scope="col">Item No</th>
                                        <th scope="col">Barcode</th>
                                        <th scope="col">Brand</th>
                                        <th scope="col">Item Name</th>
                                        <th scope="col">Size</th>
                                        <th scope="col">Unit</th>
                                        <th scope="col" style={{ textAlign: 'center' }}>Buying Price</th>
                                        <th scope="col" style={{ textAlign: 'center' }}>Selling Price</th>
                                        <th scope="col" style={{ textAlign: 'center' }}>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {itemList.map((data, key) => {
                                        let item = itemList[key];
                                        return (
                                            <tr key={item.itemNo}>
                                                <td>{item.itemNo}</td>
                                                <td>{item.barcode}</td>
                                                <td>{item.brand}</td>
                                                <td>{item.itemName}</td>
                                                <td>{item.itemSize}</td>
                                                <td>{item.unit}</td>
                                                <td style={{ textAlign: 'right' }}>{item.buyingPrice}</td>
                                                <td style={{ textAlign: 'right' }}>{item.sellingPrice}</td>
                                                <td style={{ textAlign: 'right' }}>
                                                    <CustomButton customClasses="btn-two btn-outline-primary" btnText="View" isSmall="true" />
                                                    <CustomButton customClasses="btn-two btn-outline-success" btnText="Edit" isSmall="true" />
                                                    <CustomButton customClasses="btn-two btn-outline-danger" btnText="Delete" isSmall="true" />
                                                </td>
                                            </tr>
                                        )
                                    })}
                                </tbody>
                            </table>
                        </div>
                        <div className="card-footer text-muted">
                            <div className="row">
                                <nav aria-label="...">
                                    <ul class="pagination">
                                        <li class="page-item disabled">
                                            <a class="page-link" href="#" tabindex="-1">Previous</a>
                                        </li>
                                        <li class="page-item"><a class="page-link" href="#">1</a></li>
                                        <li class="page-item active">
                                            <a class="page-link" href="#">2 </a>
                                        </li>
                                        <li class="page-item"><a class="page-link" href="#">3</a></li>
                                        <li class="page-item">
                                            <a class="page-link" href="#">Next</a>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export { ItemList } 