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
    hintTxt=""

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
            <label htmlFor="select-box" className={`cust-select-box-lbl ${errorMsg&&errorMsg!==unTouched?'text-danger':''}`}>{title}</label>
            <select 
                placeholder="Chamith"
                id="select-box" 
                value={value} 
                onChange={(val)=>onChange(val.target.value)}
                className={`form-control ${extraClasses} ${errorMsg&&errorMsg!==unTouched?'is-invalid':''}`}
            >
                {
                    data.map((item,index)=>{
                        return (
                            <option className={`select-option ${extraClasses} ${errorMsg&&errorMsg!==unTouched?'is-invalid':''}`} value={item[idKey]} key={index} >{item[valueKey]}</option>
                        );
                    })
                }
            </select>
            <small className={`${errorMsg&&errorMsg!==unTouched?'text-danger':'form-text text-muted'}`}>{errorMsg&&errorMsg!==unTouched?errorMsg:hintTxt}</small>
        </div>
    )
}
export {CustomSelectBox};