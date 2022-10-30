import { apiRequest } from "./core-api.service";
import { itemApi, getItemNo } from '../config/endpoints/items.endpoint';

class ItemService {

    constructor(setLoader = () => undefined, setAlert = () => undefined, setAuth = () => undefined) {
        this.setAlert = setAlert;
        this.setAuth = setAuth;
        this.setLoader = setLoader
    }

    addItem(form, callback = () => { }) {
        this.setLoader(true);
        apiRequest(itemApi, 'POST', form).then(axioResponse => {
            if (axioResponse.data.status) {
                this.setLoader(false);
                this.setAlert('Success', 'Successfully Added', 'success');
                callback();
                window.location.reload();
            } else {
                this.setLoader(false);
                this.setAlert('Failed', axioResponse.data.message, 'error');
            }
        }).catch(axioError => {
            this.setLoader(false);
            this.setAlert('Failed', 'Something Went Wrong', 'error');
            console.log(axioError);
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
            console.log(axioError);
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

    deleteItem(id) {
        apiRequest(itemApi + '?item_no=' + id, 'DELETE')
            .then(res => {
                console.log(res.data.responseCode);
                if (res.status === 202) {
                    this.setLoader(false);
                    this.setAlert('Success', res.data.message, 'success');
                    window.location.reload();
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