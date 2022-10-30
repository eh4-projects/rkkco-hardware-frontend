import { categoryApi } from '../config/endpoints/category-add.endpoint';
import { apiRequest, apiRequestWithToken } from "./core-api.service";
import { userTypes } from '../config/user-type.config'
import get from 'lodash.get';
import { chatLinesAva } from '../config/endpoints/user-management.endpoint';



class CatergoryItemService {

    constructor(setLoader = () => undefined, setAlert = () => undefined, setAuth = () => undefined) {
        this.setAlert = setAlert;
        this.setAuth = setAuth;
        this.setLoader = setLoader
    }

    addCategory(categoryName, callback = () => { }) {
        this.setLoader(true);
        const body = {
            category: categoryName
        }
        apiRequest(categoryApi, 'POST', body).then(axioResponse => {
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

    getAll(setcatergories) {
        this.setLoader(true);
        apiRequest(categoryApi, 'GET').then(axioResponse => {
            this.setLoader(false);
            if (axioResponse && axioResponse.data && (axioResponse.data.length > 0)) {
                setcatergories(axioResponse.data);
            }
        }).catch(axioError => {
            this.setLoader(false);
            this.setAlert('Failed', 'Something Went Wrong', 'error');
        });
    }

}

export { CatergoryItemService };