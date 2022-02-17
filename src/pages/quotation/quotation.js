import React, { useState } from 'react';
import { CustomButton } from '../../components/common/forms/custom-btn';

const Quotation = () => {

    const [inputItemList, setInputItemList] = useState([{ itemName: "", itemID: "",unitPrice: "",count: ""  }]);

    const handleInputChange = (e, index) => {
        const { name, value } = e.target;
        const list = [...inputItemList];
        list[index][name] = value;
        setInputItemList(list);
    };
    
    const handleRemoveClick = index => {
        const list = [...inputItemList];
        list.splice(index, 1);
        setInputItemList(list);
    };
    
    const handleAddClick = () => {
        setInputItemList([...inputItemList, { itemName: "", itemID: "",unitPrice: "",count: "" }]);
    };

    return (
        <div className="update-stock">
            <div className="container-fluid">
                <div className="stock-content">
                    <label className="stock-topic">Quotations</label>
                    <div className="card stock-card">
                        <div className="card-header">Create Quotation</div>
                        <div className="card-body">
                            <form className="stock-update-form">
                                <div className="row">
                                    <div className="col">
                                        <p className="field-title">Name</p>
                                        <input type="text" name="name" className="form-control dropdown" />
                                    </div>
                                    <div className="col">
                                        <p className="field-title">Email</p>
                                        <input type="text" name="email" className="form-control dropdown" />
                                    </div>
                                    <div className="col">
                                        <p className="field-title">Contact Number</p>
                                        <input type="text" name="cnum" className="form-control dropdown" />
                                    </div>
                                </div>
                                <hr/>
                                <div >Items</div>
                                    <div >
                                        {inputItemList.map((x, i) => {
                                            return (
                                                <div className="row">
                                                    <div className="col">
                                                        <p className="field-title">Item Name</p>
                                                            <input
                                                                name="itemName" 
                                                                value={x.itemName}
                                                                onChange={e => handleInputChange(e, i)}
                                                            />
                                                    </div>
                                                    <div className="col">
                                                        <p className="field-title">Item ID</p>
                                                            <input
                                                                name="itemID"
                                                                value={x.itemID}
                                                                onChange={e => handleInputChange(e, i)}
                                                            />
                                                    </div>
                                                    <div className="col">
                                                        <p className="field-title">Unit Price</p>
                                                            <input
                                                                name="unitPrice"
                                                                value={x.unitPrice}
                                                                onChange={e => handleInputChange(e, i)}
                                                            />
                                                    </div>
                                                    <div className="col">
                                                        <p className="field-title">Count</p>
                                                            <input
                                                                name="count"
                                                                value={x.count}
                                                                onChange={e => handleInputChange(e, i)}
                                                            />
                                                    </div>
                                                    <div className="col">
                                                        {inputItemList.length !== 1 && 
                                                            <CustomButton 
                                                                customClasses="btn btn-outline-primary" 
                                                                btnText="Remove" 
                                                                onClick={() => handleRemoveClick(i)}
                                                            />
                                                        }
                                                            {inputItemList.length - 1 === i && 
                                                                <CustomButton 
                                                                    customClasses="btn btn-outline-primary" 
                                                                    btnText="Add Item" 
                                                                    onClick={handleAddClick}
                                                                />
                                                            }
                                                    </div>
                                                </div>
                                            );
                                        })}
                                    </div>
                                
                            </form>

                            
                        </div>
                        {JSON.stringify(inputItemList)}
                        <div className="card-footer text-muted">
                            <div className="row btn-group">
                                <div className="col">
                                    <CustomButton 
                                        customClasses="stock-btn btn-one btn-outline-success" 
                                        btnText="Preview" 
                                        
                                    />
                                    <CustomButton customClasses="stock-btn btn-two btn-outline-danger" btnText="Cancel" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export { Quotation };