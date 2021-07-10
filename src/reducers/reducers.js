const initialstate = {
    profile: JSON.parse(localStorage.getItem('user')) || {},
    registererror: '',
    isloading: false,
    isAuthenticated: localStorage.getItem('user')

}

const Reducers = (state = initialstate, action) => {

    switch (action.type) {


        case 'Register':
            localStorage.setItem('user', JSON.stringify(action.payload))
            return { ...state, registererror: null, isAuthenticated: true, profile: action.payload }
        case 'error':
            return { ...state, registererror: action.payload, profile: '' }
        default:
            return state



    }
}

export default Reducers