import axios from "axios";
import Promise from "redux-promise";
var url = 'http://localhost:4000'

export const registeruser = (state) => dispatch => {

    const { username, password } = state;
    console.log(state)

    axios({
        method: "POST",
        data: {
            username,
            password,
            email: username
        },

        url: `${url}/register`,
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

        url: `${url}/login`,
    }).then((res) => {



        if (res.data.error) {
            dispatch(failregister(res.data.error))
        } else {
            dispatch(successlogin(res.data.data))
        }
    }).catch(err => dispatch(failregister(err)))



}



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

