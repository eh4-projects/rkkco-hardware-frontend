import { userLogin, userRegister } from '../config/endpoints/user.endpoint'
import { apiRequest, apiRequestWithToken } from "./core-api.service";
import { userTypes } from '../config/user-type.config'
import get from 'lodash.get';
import { chatLinesAva } from '../config/endpoints/user-management.endpoint';

class UserService {

    constructor(setLoader = () => undefined, setAlert = () => undefined, setAuth = () => undefined) {
        this.setAlert = setAlert;
        this.setAuth = setAuth;
        this.setLoader = setLoader
    }


    register(data, cb = () => undefined) {
        console.log("KKK", data)
        // this.setLoader(true);
        // data.userType = userTypes.Guest;
        // apiRequest(userRegister, 'POST', data).then(axioResponse => {
        //     if (axioResponse.data.status) {
        //         this.setLoader(false);
        //         this.setAlert('Success', axioResponse.data.message, 'success');
        //         cb();
        //     } else {
        //         this.setLoader(false);
        //         this.setAlert('Failed', axioResponse.data.message ? axioResponse.data.message : axioResponse.data.message ? axioResponse.data.message : 'Something Went Wrong', 'error');
        //     }
        // }).catch(() => {
        //     this.setLoader(false);
        //     this.setAlert('Failed', 'Something Went Wrong', 'error');
        // })


    }

    // userCreateByAdmin(data, cb = () => undefined) {
    //     this.setLoader(true);
    //     apiRequestWithToken(createUser, 'POST', data).then(axioResponse => {
    //         if (axioResponse.data.status) {
    //             this.setLoader(false);
    //             this.setAlert('Success', 'User Created Successfully', 'success');
    //             cb();
    //         } else {
    //             this.setLoader(false);
    //             this.setAlert('Failed', axioResponse.data.message ? axioResponse.data.message : axioResponse.data.message ? axioResponse.data.message : 'Something Went Wrong', 'error');
    //         }
    //     }).catch(() => {
    //         this.setLoader(false);
    //         this.setAlert('Failed', 'Something Went Wrong', 'error');
    //     })
    // }

    signin(userName, password) {
        this.setLoader(true);
        if (email === 'admin@admin.com' && password === 'admin') {
            localStorage.setItem('jwt', `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwiZnVsbE5hbWUiOiJKb2huIERvZSIsInVzZXJUeXBlIjoiQWRtaW4iLCJpYXQiOjE5MTYyMzkwMjJ9.Uz5TVUD-9ykj5M6XtD1asJRubbsNNKiOJ3dbxROt28c
            `);
            this.setAuth(true);
            this.setLoader(false);
            this.setAlert('Success', 'Successfully Logged', 'success');
        } else {
            this.setLoader(false);
            this.setAlert('Failed', "Something Went wrong", 'error');
        }
        // const body = {
        //     email, password
        // }
        // apiRequest(userLogin, 'POST', body).then(axioResponse => {
        //     console.log(axioResponse)
        //     if (axioResponse.data.status) {
        //         localStorage.setItem('jwt', axioResponse.data.data.jwt);
        //         this.setAuth(true);
        //         this.setLoader(false);
        //         this.setAlert('Success', 'Successfully Logged', 'success');
        //     } else {
        //         this.setLoader(false);
        //         this.setAlert('Failed', axioResponse.data.message, 'error');
        //     }
        // }).catch(axioError => {
        //     this.setLoader(false);
        //     this.setAlert('Success', 'Successfully Logged', 'success');
        // } else{
        //     this.setLoader(false);
        //     this.setAlert('Failed', "Something Went wrong", 'error');
        // }
        const body = {
            userName, password
        }
        console.log(body);
        apiRequest(userLogin, 'POST', body).then(axioResponse => {
            console.log(axioResponse)
            if (axioResponse.data.status) {
                console.log('axioResponse')
                localStorage.setItem('jwt', axioResponse.data.jwt);
                this.setAuth(true);
                this.setLoader(false);
                this.setAlert('Success', 'Successfully Logged', 'success');
            } else {
                this.setLoader(false);
                this.setAlert('Failed', axioResponse.data.message, 'error');
            }
        }).catch(axioError => {
            this.setLoader(false);
            this.setAlert('Failed', 'Something Went Wrong', 'error');
        })
    }

    // getUserProfileDetails(setProfile, setName) {
    //     this.setLoader(true);
    //     apiRequestWithToken(getUserProfileDetails, "GET", {}, {}, this.setAlert, this.setAuth).then((response) => {
    //         this.setLoader(false);
    //         console.log(response);
    //         setProfile(response && response.data ? response.data.data : {})
    //         setName(response && response.data ? { firstName: response.data.data.firstName, lastName: response.data.data.lastName } : {})
    //     }).catch(axioError => {
    //         this.setLoader(false);
    //     })
    // }

    // updateUserProfile(data, cb=()=>undefined) {
    //     this.setLoader(true);

    //     apiRequestWithToken(`${updateUserProfile}${data.phoneNumber}`, "PUT", data, {}, this.setAlert, this.setAuth).then((axioResponse) => {
    //         if (axioResponse.data.status) {
    //             cb();
    //             this.setLoader(false);
    //             this.setAlert('Success', 'Successfully', 'success');
    //         } else {
    //             this.setLoader(false);
    //             this.setAlert('Failed', axioResponse.data.message ? axioResponse.data.message : axioResponse.data.message ? axioResponse.data.message : 'User Update Fail, Try Again', 'error');
    //         }
    //     }).catch(axioError => {
    //         this.setLoader(false);
    //         this.setAlert('Failed', 'Something Went Wrong', 'error');
    //     })
    // }

    // deleteUserProfile(dataToDelete, cb = () => undefined) {
    //     this.setLoader(true);

    //     apiRequestWithToken(deleteUserProfile, "PUT", dataToDelete, {}, this.setAlert, this.setAuth).then((axioResponse) => {
    //         if (axioResponse.data.status) {
    //             this.setLoader(false);
    //             console.log(axioResponse);
    //             this.setAlert('Success', `${axioResponse.data.message}`, 'success');
    //             cb();
    //         } else {
    //             this.setLoader(false);
    //             this.setAlert('Failed', axioResponse.data.message ? axioResponse.data.message : axioResponse.data.message ? axioResponse.data.message : `${axioResponse.data.message}`, 'error');
    //         }
    //     }).catch(axioError => {
    //         this.setLoader(false);
    //         this.setAlert('Failed', 'Something Went Wrong', 'error');
    //     });

    // }

    // changeUserProfilePassword(passChange, cb = () => undefined) {
    //     this.setLoader(true);
    //     apiRequestWithToken(changePassword, "PUT", passChange, {}, this.setAlert, this.setAuth).then((axioResponse) => {
    //         if (axioResponse.data.status) {
    //             this.setLoader(false);
    //             console.log(axioResponse);
    //             this.setAlert('Success', `${axioResponse.data.message}`, 'success');
    //             cb();
    //         } else {
    //             this.setLoader(false);
    //             this.setAlert('Failed', axioResponse.data.message ? axioResponse.data.message : axioResponse.data.message ? axioResponse.data.message : `${axioResponse.data.message}`, 'error');
    //         }
    //     }).catch(axioError => {
    //         this.setLoader(false);
    //         this.setAlert('Failed', 'Something Went Wrong', 'error');
    //     });
    // }

    // getUserTypes(setUserTypes = () => undefined) {
    //     this.setLoader(true);
    //     apiRequestWithToken(getUserTypesAPI, "GET", {}, {}, this.setAlert, this.setAuth).then((axioResponse) => {
    //         if (axioResponse.data.status) {
    //             this.setLoader(false);
    //             // console.log(axioResponse);
    //             setUserTypes(get(axioResponse, "data.data", []));
    //         } else {
    //             this.setLoader(false);
    //             setUserTypes([]);
    //         }
    //     }).catch(axioError => {
    //         this.setLoader(false);
    //         this.setAlert('Failed', 'Something Went Wrong', 'error');
    //     });
    // }

    // forgotPasswordRequest(body, cb = () => undefined) {
    //     this.setLoader(true);
    //     apiRequest(forgotPasswordRequestAPI, "POST", body).then((axioResponse) => {
    //         console.log(axioResponse);
    //         if (axioResponse.data.status) {
    //             this.setLoader(false);
    //             this.setAlert('Success', get(axioResponse, 'data.message'), 'success');
    //             cb();
    //         } else {
    //             this.setLoader(false);
    //             this.setAlert('Failed', get(axioResponse, 'data.message'), 'error');
    //         }
    //     }).catch(axioError => {
    //         this.setLoader(false);
    //         this.setAlert('Failed', 'Something Went Wrong', 'error');
    //     });
    // }


    // checkPasswordResetValidity(id, cb = () => undefined) {
    //     this.setLoader(true);
    //     apiRequest(`${forgotPasswordIsAvtive}${id}`, "GET").then((axioResponse) => {
    //         console.log(axioResponse);
    //         if (axioResponse.data.status) {
    //             this.setLoader(false);
    //             cb(true);
    //         } else {
    //             this.setLoader(false);
    //             this.setAlert('Failed', get(axioResponse, 'data.message'), 'error');
    //             cb(false);
    //         }
    //     }).catch(axioError => {
    //         this.setLoader(false);
    //         this.setAlert('Failed', 'Something Went Wrong', 'error');
    //         cb(false);
    //     });
    // }

    // resetPassword(body, cb = () => undefined) {
    //     this.setLoader(true);
    //     apiRequest(resetPasswordAPI, "POST", body).then((axioResponse) => {
    //         console.log(axioResponse);
    //         if (axioResponse.data.status) {
    //             this.setLoader(false);
    //             this.setAlert('Success', get(axioResponse, 'data.message'), 'success');
    //             cb();
    //         } else {
    //             this.setLoader(false);
    //             this.setAlert('Failed', get(axioResponse, 'data.message'), 'error');
    //         }
    //     }).catch(axioError => {
    //         this.setLoader(false);
    //         this.setAlert('Failed', 'Something Went Wrong', 'error');
    //     });
    // }

    // chatLineAvailability(cb) {
    //     this.setLoader(true);

    //     apiRequestWithToken(chatLinesAva, "GET", {}, {}, this.setAlert, this.setAuth).then(response => {
    //         if (!get(response, 'data.status', false)) {
    //             cb()
    //             this.setAlert('Failed', response.data.message, 'error')
    //         }
    //         this.setLoader(false);
    //     }).catch((e) => {
    //         console.log(e)
    //         this.setLoader(false);
    //         cb();
    //         this.setAlert('Failed', "Something went wrong", 'error')
    //     })
    // }

    // submitFeedback(body, cb = () => undefined) {
    //     this.setLoader(true);
    //     apiRequestWithToken(submitFeedback, "POST", body, {}).then((axioResponse) => {
    //         console.log(axioResponse)
    //         if (axioResponse.data.status) {
    //             this.setLoader(false);
    //             this.setAlert('Success', 'Successfully Added Feedback', 'success');
    //             cb();
    //         } else {
    //             this.setLoader(false);
    //             this.setAlert('Failed', axioResponse.data.message ? axioResponse.data.message : axioResponse.data.message ? axioResponse.data.message : 'Feedback not recorded, Try Again', 'error');
    //         }
    //     }).catch(axioError => {
    //         this.setLoader(false);
    //         this.setAlert('Failed', 'Something Went Wrong', 'error');
    //     })
    // }

    // getUsersByFilters(setData,setMeta,name="",phoneNumber="",userType="",pageNumber=1) {
    //     this.setLoader(true);
    //     apiRequestWithToken(`${getAllUsers}${pageNumber}&${phoneNumber}&${userType}&${name}&2`, "GET", {}, {}, this.setAlert, this.setAuth).then((response) => {
    //         this.setLoader(false);
    //         console.log(response.data);
    //         if (response&&response.data&&response.data.meta) {
    //             setMeta(response.data.meta);
    //         }
    //         if (response&&response.data&&response.data.data&&(response.data.data.length>0)) {
    //             setData(response.data.data.map(e => {
    //                 return {
    //                     ...e
    //                 }
    //             }));
    //         } else {
    //             setData([]);
    //         }
    //     }).catch(axioError => {
    //         this.setLoader(false);
    //         this.setAlert('Failed', 'Something Went Wrong', 'error');
    //     });
    // }
}

export { UserService };