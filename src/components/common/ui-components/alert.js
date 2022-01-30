import React from 'react';


const Alert=({
    message='',
    type='',
})=>{
    return(
        <div className="alert-backdrop">
            <div className="alert alert-success" role="alert">
                <p>{message}</p>
            </div>
        </div>
    );
}

export {Alert};