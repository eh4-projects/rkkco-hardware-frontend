import React, {  useState } from 'react';
import { Loader } from '../common/ui-components/loader';
import Swal from 'sweetalert2'
import { PageLoader } from '../shared/page-loader';

const UIContextAPI=React.createContext();
const UIContext=({children})=>{
    const [loader,setLoader] = useState(false);
    const [imgLoader,setImgLoader] = useState(false);
    const [liveShow,setLiveShow] = useState(false);

    const setAlert=(title="",text="",icon="success")=>{
        Swal.fire({
            title,
            confirmButtonColor: '#006766',
            text,
            icon,
        });
    }


    const setConfirmationDialog=(title="",icon="info",successFn=()=>undefined)=>{
        Swal.fire({
            title,
            showCancelButton: true,
            confirmButtonColor:'#006766',
            cancelButtonColor:'#bd2130',
            confirmButtonText: `&nbsp;&nbsp;Yes&nbsp;&nbsp;`,
            icon,
        }).then((result) => {
            console.log(result)
            if (result.isConfirmed) {
                successFn()
            } 
        })
    }

    return (
        <UIContextAPI.Provider value={{setLoader,setAlert,setConfirmationDialog,setLiveShow,liveShow,setImgLoader}}>
            {loader?<Loader/>:null}
            {imgLoader?<PageLoader/>:null}
            {children}
        </UIContextAPI.Provider>
    );
    
}
export {
    UIContext,
    UIContextAPI
}