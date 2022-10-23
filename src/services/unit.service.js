import { unitApi } from '../config/endpoints/units.endpoint';
import { apiRequest, apiRequestWithToken } from "./core-api.service";


class UnitService {

    constructor(setLoader = () => undefined, setAlert = () => undefined, setAuth = () => undefined) {
        this.setAlert = setAlert;
        this.setAuth = setAuth;
        this.setLoader = setLoader
    }

    getUnits(setUnitList = () => undefined) {
        this.setLoader(true);
        apiRequest(unitApi, "GET").then((axioResponse) => {
            if (axioResponse.status === 202) {
                console.log(axioResponse);
                this.setLoader(false);
                setUnitList(axioResponse.data);
            } else {
                this.setLoader(false);
                setUnitList([]);
            }
        }).catch(axioError => {
            this.setLoader(false);
            this.setAlert('Failed', 'Something Went Wrong', 'error');
        });
    }
}

export { UnitService };