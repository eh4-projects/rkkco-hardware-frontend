import React from 'react';
import { Ripple } from 'react-spinners-css';
// import LoaderLogo from '../../assets/logos/SLFCrest-Logo.png'

const PageLoader = () => {
    return (
        <div className="container-fluid image-loader-main">
            <div className="containder">
                <div className="page-loader-main-div">
                    {/* <img alt="" src={LoaderLogo} className="footer-logo" /> */}
                    <hr className="hr-line"></hr>

                    <label className="loading-text">Sri Lanka Foundation Platform</label>
                    <Ripple color="rgb(212, 0, 0)" className="loader" />
                </div>
            </div>
        </div>
    );
};

export { PageLoader };