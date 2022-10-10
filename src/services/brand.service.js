import { brandApi, getAllBrands } from '../config/endpoints/brand-add.endpoint';
import { apiRequest, apiRequestWithToken } from "./core-api.service";


class BrandItemService {

    constructor(setLoader = () => undefined, setAlert = () => undefined, setAuth = () => undefined) {
        this.setAlert = setAlert;
        this.setAuth = setAuth;
        this.setLoader = setLoader
    }

    getAllBrands(callback){
        apiRequest(getAllBrands, 'GET').then(res => {
            console.log(res.data);
            callback =  res.data;
        })
    } 

    addBrand(brandName, callback = () => { }) {
        this.setLoader(true);
        const body = {
            brand: brandName
        }
        apiRequest(brandApi, 'POST', body).then(axioResponse => {
            if (axioResponse.data.status) {
                console.log('axioResponse');
                this.setLoader(false);
                this.setAlert('Success', 'Successfully Added', 'success');
                callback();
            } else {
                this.setLoader(false);
                this.setAlert('Failed', axioResponse.data.message, 'error');
            }
        }).catch(axioError => {
            this.setLoader(false);
            this.setAlert('Failed', 'Something Went Wrong', 'error');
        })
    }

}


export { BrandItemService };