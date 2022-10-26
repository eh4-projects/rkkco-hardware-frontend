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
        <PDFExport ref={pdfExportComponent} paperSize="auto" margin={40} fileName={`Report for ${new Date().getFullYear()}`} author="KendoReact Team">
          
            <div>
                {JSON.stringify(quotationData)}
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

            <div className="col-md-2" style={{ display: 'block' }}>
                <CustomButton customClasses="billing-btn btn-print-bill btn-outline-success" btnText="Print" isSmall="true" onClick={exportPDFWithComponent} />
            </div>
        </div>

    </div>
  );
};
export { QuotationPdf };