import { connect } from "react-redux";
import { LoginScreen} from "./Login-Screen";
import { IGlobalState } from "../store/LoginReducer";
import { LoginState } from "../store/LoginReducer.action";

export const mapStateToProps = (globalState: IGlobalState) => {
    return {
        isAuthenticated : globalState.isAuthenticated,
        push : props.history.push
    };
};

export const mapDispatchToProps = (dispatch: any) => {
    return {
        onValidUser: () => dispatch({ type: LoginState.LOGIN }),
    };
};

export default connect (mapStateToProps, mapDispatchToProps)(LoginScreen);
