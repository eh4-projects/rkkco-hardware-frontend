import  { useState } from 'react';

function useForm(initFormObject={},initErrorObject={}) {
  
    const [form, setForm] = useState(initFormObject);
    const [error, setErrors] = useState(initErrorObject);

    const setFormCustom = (name, value) => {
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
    
  return [form,error,setFormCustom,setErrorCustom,setForm];
}
export {useForm};