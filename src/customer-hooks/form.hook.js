import  { useState } from 'react';

function useForm(initFormObject={},initErrorObject={}) {
  
    const [form, setForm] = useState(initFormObject);
    const [error, setErrors] = useState(initErrorObject);

    const setFormCustom = (name, value) => {
      console.log(name,value)
        setForm((preState) => {
          return {
            ...preState,
            [name]: value,
          };
        });
      };
      const setErrorCustom = (name, value) => {
        setErrors((pre) => {
          return {
            ...pre,
            [name]: value,
          };
        });
      };
    const resetForm=()=>{
      setForm(initFormObject);
      setErrors(initErrorObject);
    };
  return [form,error,setFormCustom,setErrorCustom,resetForm,setForm];
}
export {useForm};