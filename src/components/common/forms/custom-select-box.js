import React, { useEffect } from 'react';
import { isRequired, unTouched } from '../../../config/validation.config';

const CustomSelectBox=({
    title="",
    value="",
    idKey="id",
    valueKey="value",
    name="",
    data=[],
    onChange=()=>undefined,
    errorMsg="",
    extraClasses="",
    setError=()=>undefined,
    extraClassesWrapper="",
    isRequiredFlag=false,
    hintTxt="",
    labelClassName=""

})=>{

    useEffect(() => {
        if(isRequiredFlag){
            if(value===""){
                setError(name,isRequired)
            }else{
                setError(name,'');
            }
        }
        console.log(value)
    }, [value]);

    useEffect(() => {
        if(isRequiredFlag && value===""){
            setError(name,unTouched);
        }
        
    }, []);

    return (
        <div className={`form-group text-left ${errorMsg&&errorMsg!==unTouched?'is-invalid':''} ${extraClassesWrapper}`}>
            {title?<label htmlFor="select-box" className={`cust-select-box-lbl ${errorMsg&&errorMsg!==unTouched?'text-danger':''} ${labelClassName}`}>{title}</label>:null}
            <select 
                placeholder=""
                id="select-box" 
                value={value} 
                onChange={(val)=>onChange(name, val.target.value)}
                className={`form-control ${extraClasses} ${errorMsg&&errorMsg!==unTouched?'is-invalid':''}`}
            >
                {
                    data.map((item,index)=>{
                        return (
                            <option className={`select-option ${extraClasses} ${errorMsg&&errorMsg!==unTouched?'is-invalid':''}`} value={item[idKey]} key={index}>{item[valueKey]}</option>
                        );
                    })
                }
            </select>
            <small className={`${errorMsg&&errorMsg!==unTouched?'text-danger form-error':'form-text text-muted'}`}>{errorMsg&&errorMsg!==unTouched?errorMsg:hintTxt}</small>
        </div>
    )
}
export {CustomSelectBox};