import React, { useEffect, useState } from 'react';
import moment from 'moment';

const ReportPage = (props) => {

    const isShow = props.parentToChild[0];
    const startDate = props.parentToChild[1];
    const endDate = props.parentToChild[2];
    const dailyDate = props.parentToChild[3];

    var date = moment().format('dddd, MMMM Do YYYY');
    var sDate = moment(startDate).format('dddd, MMMM Do YYYY');
    var eDate = moment(endDate).format('dddd, MMMM Do YYYY');
    var dDate = moment(dailyDate).format('dddd, MMMM Do YYYY');
    console.log("desv", sDate)

    console.log("sss", date);

    const reportsData = [{
        itemNumber: "1",
        date: "2022-03-27",
        itemName: "Simenthi",
        itemdesc: "Good",
        buyingPrice: 1375,
        selingPrice: 1475,
        quantity: 100,
        unitPrice: 1475,
    },
    {
        itemNumber: "2",
        date: "2022-03-27",
        itemName: "Simenthi",
        itemdesc: "Good",
        buyingPrice: 1375,
        selingPrice: 1475,
        quantity: 100,
        unitPrice: 1475,
    },
    {
        itemNumber: "3",
        date: "2022-03-27",
        itemName: "Simenthi",
        itemdesc: "Good",
        buyingPrice: 1375,
        selingPrice: 1475,
        quantity: 100,
        unitPrice: 1475,
    },
    {
        itemNumber: "4",
        date: "2022-03-27",
        itemName: "Simenthi",
        itemdesc: "Good",
        buyingPrice: 1375,
        selingPrice: 1475,
        quantity: 100,
        unitPrice: 1475,
    }]


    return (
        isShow ? (
            < div className='reports-container-wrapper' >
                <div className="card stock-card">
                    {dailyDate ? <div className="card-header d-flex ">Reports List  <p className='report-date'>{dDate}</p></div> : (
                        <div className="card-header d-flex">Reports List  <p className='report-date-s'>{sDate}</p>  to  <p className='report-date'>{eDate}</p> </div>
                    )}
                    <div className="card-body">
                        <table class="table">
                            <thead>
                                <tr>
                                    <th scope="col">Item Number</th>
                                    <th scope="col">Date</th>
                                    <th scope="col">Item Name</th>
                                    <th scope="col">Item Desc</th>
                                    <th scope="col">Buying Price</th>
                                    <th scope="col">Selling Price</th>
                                    <th scope="col">Quantity</th>
                                    <th scope="col">Unit Price</th>
                                    <th scope="col">Total Price</th>
                                </tr>
                            </thead>
                            <tbody>
                                {reportsData.map(item => (
                                    <tr>
                                        <th scope="row">{item.itemNumber}</th>
                                        <td>{item.date}</td>
                                        <td>{item.itemName}</td>
                                        <td>{item.itemdesc}</td>
                                        <td>{item.buyingPrice}</td>
                                        <td>{item.selingPrice}</td>
                                        <td>{item.quantity}</td>
                                        <td>{item.unitPrice}</td>
                                        <td>{item.quantity}*{item.totalPrice}</td>
                                    </tr>
                                ))}

                            </tbody>
                        </table>
                    </div>

                </div>
            </div >) : (
            < div className='reports-container-wrapper' >
                <div className="card stock-card">
                    <div className="card-header d-flex">Reports List  <p className='report-date'>{date}</p></div>
                    <div className="card-body">
                        <table class="table">
                            <thead>
                                <tr>
                                    <th scope="col">Item Number</th>
                                    <th scope="col">Date</th>
                                    <th scope="col">Item Name</th>
                                    <th scope="col">Item Desc</th>
                                    <th scope="col">Buying Price</th>
                                    <th scope="col">Selling Price</th>
                                    <th scope="col">Quantity</th>
                                    <th scope="col">Unit Price</th>
                                    <th scope="col">Total Price</th>
                                </tr>
                            </thead>
                            <tbody>
                                {reportsData.map(item => (
                                    <tr>
                                        <th scope="row">{item.itemNumber}</th>
                                        <td>{item.date}</td>
                                        <td>{item.itemName}</td>
                                        <td>{item.itemdesc}</td>
                                        <td>{item.buyingPrice}</td>
                                        <td>{item.selingPrice}</td>
                                        <td>{item.quantity}</td>
                                        <td>{item.unitPrice}</td>
                                        <td>{item.quantity}*{item.totalPrice}</td>
                                    </tr>
                                ))}

                            </tbody>
                        </table>
                    </div>

                </div>
            </div >
        )
    )

}

export { ReportPage };