import axios from 'axios';
import { baseUrl } from '../config/endpoints/main.endpoint';

const sampleFn=()=>undefined;

const apiRequest=(url="",method="GET",data={},params={},headers={},validateStatus=()=>true)=>axios({
    baseURL:baseUrl,
    method,
    url,
    params,
    headers,
    data,
    validateStatus
});

const apiRequsetWithFormDataWithToken=(url = "",method="",data={},params={},setAlert=sampleFn,setAuth=sampleFn)=>{
    console.log(url)
    const token = localStorage.getItem("jwt");
    let headers={
           Authorization:`Bearer ${token}`,
           "Content-Type":'multipart/form-data'
        }
    return apiRequest(url,method,data,params,headers,(status)=>{
        if(status===401){
            setAuth(false);
            setAlert('Failed','Unauthrized Access','error');
        }

        return true
    });


}

const apiRequestWithToken=(url="",method="",data={},params={},setAlert=sampleFn,setAuth=sampleFn)=>{
    const token = localStorage.getItem("jwt");
    let headers={
           Authorization:`Bearer ${token}`
        }
    return apiRequest(url,method,data,params,headers,(status)=>{
        if(status===401){
            setAuth(false);
            setAlert('Failed','Unauthrized Access','error');
        }

        return true
    });
}
export {apiRequest,apiRequestWithToken,apiRequsetWithFormDataWithToken}