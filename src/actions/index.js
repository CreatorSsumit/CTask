import axios from "axios";
import Promise from "redux-promise";
var url = 'http://localhost:4000'

// export function getdata() {
//     console.log('kuch huss')
//     var response = axios.request(options).then(res => res);
//     return {
//         type: 'DATA',
//         payload: response
//     }
// }


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

        url: "http://localhost:4000/register",
    }).then((res) => console.log(res));
    // axios.post(`${url}/signup`, { 'username': username, 'password': password }).then(res => {
    //     if (res.data.error) {
    //         dispatch(failregister(res.data.error))
    //     } else {
    //         dispatch(successregister(res.data))
    //     }
    // }).catch(err => dispatch(failregister(err)))

}

export const loginuser = (state) => dispatch => {

    const { username, password, panel } = state;


    console.log(state)


    axios({
        method: "POST",
        data: {
            username,
            password
        },
        withCredentials: true,
        url: "http://localhost:4000/login",
    }).then((res) => console.log(res));

    // axios.post(`${url}/login`, { 'username': username, 'password': password }).then(res => {
    //     console.log(res)
    //     // if (res.data.error) {
    //     //     dispatch(failregister(res.data.error))
    //     // } else {
    //     //     dispatch(successlogin(res.data))
    //     // }
    // }).catch(err => dispatch(failregister(err)))

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

