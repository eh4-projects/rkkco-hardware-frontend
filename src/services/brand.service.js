import { brandApi, getAllBrands } from '../config/endpoints/brand-add.endpoint';
import { apiRequest, apiRequestWithToken } from "./core-api.service";


class BrandItemService {

    constructor(setLoader = () => undefined, setAlert = () => undefined, setAuth = () => undefined) {
        this.setAlert = setAlert;
        this.setAuth = setAuth;
        this.setLoader = setLoader
    }

    getAllBrands = (callback) => {
        apiRequest(brandApi, 'GET').then(axioResponse => {
            if (axioResponse.status === 202) {
                this.setLoader(false);
                callback(axioResponse.data);
            } else {
                this.setLoader(false);
            }
        }).catch(error => {
            console.log(error);
            this.setLoader(false);
            this.setAlert('Failed', 'Something Went Wrong', 'error');
        });
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