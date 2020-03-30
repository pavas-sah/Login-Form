import { connect } from "react-redux";
import { LoginScreen} from "./Login-Screen";
import { IGlobalState } from "../store/LoginReducer";
import { IProps } from "./AuthorizedRoute";
import { LoginState } from "../store/LoginReducer.action";

const mapStateToProps = (globalState: IGlobalState, props:IProps) => {
    return {
        isAuthenticated : globalState.isAuthenticated,
    };
};

const mapDispatchToProps = (dispatch: any) => {
    return {
        onValidUser: () => dispatch({ type: LoginState.LOGIN }),
    };
};

export default connect (mapStateToProps, mapDispatchToProps)(LoginScreen);
