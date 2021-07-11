import axios from "axios";
import Promise from "redux-promise";
var url = 'http://localhost:4000'

export const registeruser = (state) => dispatch => {

    const { username, password, panel } = state;
    console.log(state)

    axios({
        method: "POST",
        data: {
            username,
            password,
            email: username
        },

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




export const sendpoint = (point, type, id) => dispatch => {

    console.log(id)

    axios({
        method: "POST",
        data: {
            point,
            type,
            id
        },

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

