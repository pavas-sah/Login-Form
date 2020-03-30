import { Reducer } from "redux";
import { LoginState, IMemberLoginAction } from "./LoginReducer.action";

export interface IGlobalState {
    isAuthenticated: boolean,
    counter: number

}

const initialState: IGlobalState = {
    isAuthenticated: false,
    counter: 0
};

const LoginReducer: Reducer<IGlobalState> = (state = initialState, action: IMemberLoginAction) => {

    console.log(action.type);
    switch (action.type) {

        case LoginState.LOGIN:
            console.log("isAuthenticated:" + state.isAuthenticated)
            console.log("Counter:" + state.counter)
            return {
                isAuthenticated: true,
                counter: state.counter + 1
            }

        case LoginState.LOGOUT:
            return {
                isAuthenticated: false,
                counter: 0
            }

        default:
            return state;
    }
}

export default LoginReducer;