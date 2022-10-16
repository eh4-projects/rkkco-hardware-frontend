import { categoryApi } from '../config/endpoints/category-add.endpoint';
import { apiRequest, apiRequestWithToken } from "./core-api.service";
import { userTypes } from '../config/user-type.config'
import get from 'lodash.get';
import { chatLinesAva } from '../config/endpoints/user-management.endpoint';
import { itemApi, getItemNo, getItemListArray} from '../config/endpoints/items.endpoint';

class ItemService {

    constructor(setLoader = () => undefined, setAlert = () => undefined, setAuth = () => undefined) {
        this.setAlert = setAlert;
        this.setAuth = setAuth;
        this.setLoader = setLoader
    }

    addItem(categoryName, callback = () => { }) {
        this.setLoader(true);
        const body = {
            category: categoryName
        }
        apiRequest(categoryApi, 'POST', body).then(axioResponse => {
            console.log(axioResponse)
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

    getAll(set) {
        this.setLoader(true);
        apiRequest(itemApi, 'GET').then(axioResponse => {
            this.setLoader(false);
            if (axioResponse && axioResponse.data && (axioResponse.data.length > 0)) {
                set(axioResponse.data);
            }
        }).catch(axioError => {
            this.setLoader(false);
        })
    }

    getItemNo = (callback) => {
        apiRequest(getItemNo, 'GET')
            .then(axioResponse => {
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
            })
        }
}

export { ItemService };