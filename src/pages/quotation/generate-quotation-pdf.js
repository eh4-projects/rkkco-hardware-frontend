import React, { useState, useEffect, useCallback, useContext, useRef } from 'react';
import { PDFExport, savePDF } from "@progress/kendo-react-pdf";
import { CustomButton } from '../../components/common/forms/custom-btn';

const QuotationPdf = ({
    quotationData
}) => {

  const pdfExportComponent = useRef(null);

  const exportPDFWithComponent = () => {
    if (pdfExportComponent.current) {
      pdfExportComponent.current.save();
    }
  };

  const sendQuotationEmail = () => {
    //integrate email service here
  };

  return (
    <div>

      <div className="border rounded p-2">
        <PDFExport ref={pdfExportComponent} paperSize="auto" margin={40} fileName={`Quotation for ${quotationData.customerName} - ${new Date()}`} author="KendoReact Team">
          
            <div className="quotation-pdf">
              <div className="container">

                <div className="row" style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>
                  <strong>Quotation</strong>
                </div>
                <hr />
                <div className="row">
    		          <div className="span4">
                    <img src="" className="img-rounded logo" />
                    <address>
                        <strong>R K Kulathissa Co.</strong><br />
                                Address Line 01<br />
                                Address Line 02
                        </address>
    		  	      </div>

    		          <div className="span4 well">
    			          <table className="invoice-head">
                      <tbody>
                        <tr>
                          <td className="pull-right"><strong>Customer Name:</strong></td>
                          <td>{quotationData.customerName}</td>
                        </tr>
                        <tr>
                          <td className="pull-right"><strong>Contact Number:</strong></td>
                          <td>{quotationData.customerNumber}</td>
                        </tr>
                        <tr>
                          <td className="pull-right"><strong>Email:</strong></td>
                          <td>{quotationData.customerEmail}</td>
                        </tr>
                        <tr>
                          <td className="pull-right"><strong>Date:</strong></td>
                          <td>{(new Date()).toString()}</td>
                        </tr> 
                      </tbody>
    			          </table>
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
                            </tr>
                        </thead>
                        <tbody>
                            {[...Object.keys(quotationData.itemList)].map((key) => {
                                let item = quotationData.itemList[key];
                                return (
                                    <tr key={item.itemNo}>
                                        <th scope="row">{item.index}</th>
                                        <td>{item.itemNo}</td>
                                        <td>{item.itemName}</td>
                                        <td>{item.brand}</td>
                                        <td style={{ textAlign: 'center' }}>{item.quantity}</td>
                                        <td style={{ textAlign: 'right' }}>{item.price}</td>
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
                                <p className="field-title-quotation">Total:</p>
                            </div>
                            <div className="col-md-2">
                                <p className="field-title-quotation-value">{quotationData.total}</p>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-md-8">
                            </div>
                            <div className="col-md-2">
                                <p className="field-title-quotation">Discount:</p>
                            </div>
                            <div className="col-md-2">
                                <p className="field-title-quotation">{quotationData.discount}</p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-8">
                            </div>
                            <div className="col-md-2">
                                <p className="field-title-quotation">Net Total:</p>
                            </div>
                            <div className="col-md-2">
                                <p className="field-title-quotation-value" name="netTotal" >{quotationData.netTotal}</p>
                            </div>
                        </div>
                        <div className="row">
                          <div className="span3">
                              <strong>Phone:</strong>+91-124-111111
                          </div>
                          <div className="span3">
                              <strong>Email:</strong> <a href="">test@rkko.com</a>
                          </div>
                          <div className="span3">
                              <strong>Website:</strong> <a href="test.com">test.com</a>
                          </div>
                        </div>
                      
                  </div>
                </div>

                
              </div>
            </div>
        </PDFExport>
      </div>

      <div className="row">
            <div className="col-md-6">
            </div>

            <div className="col-md-2">
                <CustomButton customClasses="billing-btn btn-danger" btnText="Cancel" isSmall="true"/>
            </div>

            <div className="col-md-2">
                <CustomButton customClasses="billing-btn btn-primary" btnText="Email" isSmall="true" onClick={sendQuotationEmail} />
            </div>

            <div className="col-md-2">
                <CustomButton customClasses="billing-btn btn-print-bill btn-outline-success" btnText="Print" isSmall="true" onClick={exportPDFWithComponent} />
            </div>
        </div>

    </div>
  );
};
export { QuotationPdf };