import { Reducer } from "redux";
import { LoginState, IMemberLoginAction } from "./LoginReducer.action";

export interface IGlobalState {
    isAuthenticated: boolean,

}

const initialState: IGlobalState = {
    isAuthenticated: false,
};

const LoginReducer: Reducer<IGlobalState> = (state = initialState, action: IMemberLoginAction) => {

    switch (action.type) {

        case LoginState.LOGIN:
            return {
                isAuthenticated: true,
            }

        case LoginState.LOGOUT:
            return {
                isAuthenticated: false,
            }

        default:
            return state;
    }
}

export default LoginReducer;