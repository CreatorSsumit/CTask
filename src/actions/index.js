import axios from "axios";
var url = 'http://capgeminibackend.herokuapp.com/'

export const registeruser = (state) => dispatch => {

    const { username, password, panel } = state;


    axios({
        method: "POST",
        data: {
            username,
            password,
            email: username
        },
        withCredentials: true,
        url: `${url}/register/${panel}`,
    }).then((res) => {




        if (res.data.error) {
            dispatch(failregister(res.data.error))
        } else {
            dispatch(successregister(res.data))
        }
    }).catch(err => dispatch(failregister(err)))

}

export const loginuser = (state) => dispatch => {

    const { username, password, panel } = state;

    axios({
        method: "POST",
        data: {
            username,
            password
        },
        withCredentials: true,
        url: `${url}/login/${panel}`,
    }).then((res) => {



        if (res.data.error) {
            dispatch(failregister(res.data.error))
        } else {
            dispatch(successlogin(res.data))
        }
    }).catch(err => dispatch(failregister(err)))



}




export const sendpoint = (point, type) => dispatch => {


    axios({
        method: "POST",
        data: {
            point,
            type,

        },
        withCredentials: true,
        url: `${url}/sendpoint`,
    }).then((res) => {

        if (res.data.error) {
            dispatch(failregister(res.data.error))
        } else {
            dispatch(successsend(res.data))
        }
    }).catch(err => dispatch(failregister(err)))



}


export const successsend = (res) => ({
    type: 'Sentpoint',
    payload: res
})


export const successregister = (res) => ({
    type: 'Register',
    payload: res
})

export const successlogin = (res) => ({
    type: 'Login',
    payload: res
})
export const failregister = (err) => ({
    type: 'error',
    payload: err
})

