import React, { useEffect } from 'react';
import { isMaxLength, isRequired, unTouched } from '../../../config/validation.config';

const CustomTextArea=({
    name="",
    label="",
    onChange=()=>undefined,
    value="",
    placeholder="",
    errorMsg="",
    setError=()=>undefined,
    validations=[],
    disabled=false,
    rows="3",
    extraClasses="",
    maxLength=200
})=>{


    useEffect(() => {
        if(errorMsg===unTouched){
            setError(name,"");
        }
        for(let i in validations){
           if(validations[i]===isRequired){
                if(value!==""){
                    if(errorMsg===isRequired)
                        setError(name,"");
                }else{
                    setError(name,isRequired);
                }
            }
        }

        if(value.length>maxLength){
            setError(name,isMaxLength)
        }else{
            if(errorMsg===isMaxLength){
                setError(name,"");
            }
        }
    }, [value]);

    useEffect(() => {
        let flag=true;
        for(let i in validations){
            if(validations[i]===isRequired && value===""){
                setError(name,unTouched);
                flag=false;
                break;        
            }
        }
        if(flag)setError(name,"");
    },[]);

    return(
        <div className="form-group">
            <label htmlFor={name} className={`cust-input-area ${errorMsg&&errorMsg!==unTouched?'text-danger':''}`}>{label}</label>
            <textarea 
                className="form-control" 
                id={name} 
                rows={rows}
                name={name}
                placeholder={placeholder}
                value={value}
                disabled={disabled}
                className={`form-control  ${errorMsg&&errorMsg!==unTouched?'is-invalid':''}`}  
                onChange={(e)=>{onChange(e.target.name,e.target.value,e)}}
            >
            </textarea>
            <small className={`${errorMsg&&errorMsg!==unTouched?'text-danger':'form-text text-muted'}`}>{errorMsg&&errorMsg!==unTouched?errorMsg:''}</small>
        </div>
    )
}

export {CustomTextArea};