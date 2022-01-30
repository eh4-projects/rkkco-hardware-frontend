import React from 'react';
import PageNotFoundImage from '../../../assets/common/404-error-2.png';

//rscp
const PageNotFound = () => {

    return (
        <div className="container-fluid">
            <div className="container">
                <div className="row">
                    <div className="page-not-found-devision-1">
                        <img src={PageNotFoundImage} className="page-not-found-image" />
                        <p className="page-not-found-head" >Oops! Page Not Found</p>
                        <p className="page-not-found-body" >Sorry, the page you're looking for doesn't exist or temporarily unavailable.</p>
                    </div>

                </div>
                <div className="row">
                    <div className="page-not-found-devision-2">
                    </div>
                </div>
                <div className="row">

                    <div className="page-not-found-devision-3">
                    </div>
                </div>
            </div>
        </div>
    );
};

export  {PageNotFound};