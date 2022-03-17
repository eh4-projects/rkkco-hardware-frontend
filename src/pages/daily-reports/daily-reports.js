import React, { useEffect, useState } from 'react';
import { ReportPage } from './report-page'

const DailyReports = () => {

    const [startDate, setStartDate] = useState();
    const [endDate, setEndDate] = useState();
    const [dailyDate, setDailyDate] = useState();
    const [data, setData] = useState(false);


    function handleStartDateChange(e) {
        e.preventDefault();
        setStartDate(e.target.value);
    };


    function handleEndDateChange(e) {
        e.preventDefault();
        setEndDate(e.target.value);
    };

    function handleDailyDateChange(e) {
        e.preventDefault();
        setDailyDate(e.target.value);
    };

    function hadleClick() {
        if (startDate && endDate) {
            setData(true)
        } else {
            setData(false)
        }
    }

    function hadleClickDaily() {
        console.log("kjndc", dailyDate);
        if (dailyDate) {
            setData(true)
        } else {
            setData(false)
        }

    }


    return (
        <div>
            <div className='d-flex report-topic-wrap'>
                <label className='report-topic'>Daily Reports</label>
            </div>
            <div className="report-slect-content">
                <div className='date-rage-selector'>
                    <div className='row'>
                        <div className='col-md-6'>
                            <div className='slect-date-rage-title'>
                                <label>Slect Date Range</label>
                            </div>
                            <div className='d-flex'>
                                <div className='time-select-left'>
                                    <label className='label-from'>From</label>
                                    <input type="date" onChange={handleStartDateChange} />
                                </div>
                                <div className='time-select-right'>
                                    <label className='label-to'>To</label>
                                    <input type="date" onChange={handleEndDateChange} />
                                </div>
                                <div className='search-btn'>
                                    <button className='btn btn-primary btn-sm' onClick={hadleClick}>Search</button>
                                </div>
                            </div>
                        </div>

                        <div className='col-md-6'>
                            <div className='slect-date-rage-title'>
                                <label>Slect Date</label>
                            </div>
                            <div className='d-flex'>
                                <div className='time-select-left'>
                                    <input type="date" onChange={handleDailyDateChange} />
                                </div>
                                <div className='search-btn'>
                                    <button className='btn btn-primary btn-sm' onClick={hadleClickDaily}>Search</button>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <hr></hr>
            <ReportPage parentToChild={[data, startDate, endDate, dailyDate]} />
        </div>
    );

}

export { DailyReports };