const initialState = {
    isAuthenticated: false,
};

const LoginReducer = (state = initialState, action: any) => {

    console.log(action.type);
    switch (action.type) {

        case 'LOGIN ': return {  isAuthenticated: true }

        case 'LOGOUT':
            return {  isAuthenticated: false }

        default:
            return state;
    }
}

export default LoginReducer;