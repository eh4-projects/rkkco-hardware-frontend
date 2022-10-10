import { itemApi, getItemNo, getItemListArray} from '../config/endpoints/items.endpoint';
import { apiRequest, apiRequestWithToken } from "./core-api.service";
import { userTypes } from '../config/user-type.config'
import get from 'lodash.get';
import { chatLinesAva } from '../config/endpoints/user-management.endpoint';


class ItemService {

    constructor(setLoader = () => undefined, setAlert = () => undefined, setAuth = () => undefined) {
        this.setAlert = setAlert;
        this.setAuth = setAuth;
        this.setLoader = setLoader
    }

    addItem = (form) => {
        this.setLoader(true);
        apiRequest(itemApi, 'POST', form).then(axioResponse => {
            if (axioResponse.data.status) {
                this.setLoader(false);
                this.setAlert('Success', 'Successfully Added', 'success');
            } else {
                this.setLoader(false);
                this.setAlert('Failed', axioResponse.data.message, 'error');
            }
        }).catch(error => {
            console.log(error);
            this.setLoader(false);
            this.setAlert('Failed', 'Something Went Wrong', 'error');
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
            });
    }

    getItemList = (callback) => {
        apiRequest(getItemListArray, 'GET')
        .then(response => {
            this.setLoader(false);
            callback(response.data);
        })
        .catch(error => {
            console.log(error);
            this.setLoader(false);
            this.setAlert('Failed', 'Something Went Wrong', 'error');
        });
    }
}


export { ItemService };