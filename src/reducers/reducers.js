const initialstate = {
    profile: JSON.parse(localStorage.getItem('user')) || {},
    registererror: '',
    isloading: false,
    isAuthenticated: localStorage.getItem('user') || false,
    who: 'user'

}

const Reducers = (state = initialstate, action) => {
    console.log(action.payload)
    switch (action.type) {


        case 'Register':

            return { ...state, registererror: null, isAuthenticated: action.payload.isAuthenticate, msg: action.payload.msg, profile: '' }

        case 'Login':
            localStorage.setItem('user', JSON.stringify(action.payload))


            return { ...state, registererror: null, isAuthenticated: action.payload.isAuthenticate, who: action.payload.who, profile: action.payload }
        case 'error':
            return { ...state, registererror: action.payload, profile: '' }
        default:
            return state

    }
}

export default Reducers