import React from 'react';
import { Ripple } from 'react-spinners-css';

const Loader = props => {
    return (
        <div className="container loader-main">
            <Ripple color="#006766" className="loader" />
        </div>
    );
};

Loader.propTypes = {

};

export { Loader };