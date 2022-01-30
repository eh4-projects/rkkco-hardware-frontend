import React, { useEffect, useState } from 'react';
import { isMaxLength,isSupportFile, isRequired, unTouched,isMaxSize } from '../../../config/validation.config';
import { FaUpload } from 'react-icons/fa'
import { AiOutlinePlusCircle } from 'react-icons/ai'

const CustomFileUploader = ({
    btnTxt = "Choose File",
    file = null,
    changeFile = () => undefined,
    id = "upload",
    isRequiredFlag = false,
    setError = () => undefined,
    name = '',
    errorMsg = "",
    label = "",
    maxSize = 1,
    acceptedTypes=[],
    fileUpload=()=>undefined
}) => {
    const [localError, setLocalError] = useState("");

    useEffect(() => {
        console.log(localError)


        if (isRequiredFlag) {
            if (file === null) {
                setLocalError(isRequired);
            } else {
                setLocalError(pre=>{
                    if(localError===isRequired || localError===unTouched){
                        return "";
                    }else{
                        return pre;
                    }
                });
            }
        }
        
        if(file){

            let temp=file.name.split(".");
            let fileType=temp[temp.length-1];
            // console.log(fileType);
            // console.log(acceptedTypes)
            let flag=false;
            for(let i=0;i<acceptedTypes.length;i++){
                if(acceptedTypes[i]===fileType){
                    flag=true;
                    break;
                }   
            }
            if(flag){
                setLocalError(pre=>{
                    if(localError===isSupportFile){
                        return "";
                    }else{
                        return pre;
                    }
                });
            }else{
                setLocalError(isSupportFile);
            }

            let maxSizeBB=maxSize*1024*1024;
            if(maxSizeBB<file.size){
                setLocalError(isMaxSize);
            }else{
                setLocalError(pre=>{
                    if(localError===isMaxSize){
                        return "";
                    }else{
                        return pre;
                    }
                })
            }
        }

        



    }, [file]);


    useEffect(() => {
        setError(name, localError);
    }, [localError]);

    useEffect(() => {

        if (errorMsg === isRequired) {
            setLocalError(isRequired);
        }

    }, [errorMsg]);


    useEffect(() => {
        if (isRequiredFlag) {
            setLocalError(unTouched)
        } else {
            setError(name, '');
        }

    }, []);


    return (
        <div className={`form-group custom-fileuploader-main `}>
            <div className="row">
                <label className={`file-uploader-tag ${errorMsg && errorMsg !== unTouched ? 'text-danger' : ''}`}>
                    {label}
                </label>
            </div>
            <div className="row">
                <div className="col-md-2">
                    <input
                        type="file"
                        id={id}
                        onChange={(e) => changeFile(e.target.files[0])}
                        hidden />
                    <label
                        htmlFor={id}
                        className={`${errorMsg && errorMsg !== unTouched ? 'is-invalid-uploader' : ''}`}>
                        {/* {btnTxt} */}
                        {! file || (errorMsg && errorMsg !== unTouched) ? <AiOutlinePlusCircle 
                            className="upload-icon"
                            onClick={fileUpload}
                        /> :null}
                    </label>
                    
                </div>
                <div className="col-md-10">
                    <span className={`file-name-label ${errorMsg && errorMsg !== unTouched ? 'text-danger' : ''}`} >
                        {errorMsg && errorMsg !== unTouched ? errorMsg : file && file.name}
                    </span>
                    
                </div>
            </div>
        </div>
    );
}

export { CustomFileUploader };