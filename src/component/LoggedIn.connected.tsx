import { connect } from "react-redux";
import { LoggedIn } from "./LoggedIn";
import { LoginState } from "../store/LoginReducer.action";

export const mapDispatchToProps = (dispatch: any) => {
    return {
        onInvalidUser: () => dispatch({ type: LoginState.LOGOUT }),
    };
};

export default connect(null, mapDispatchToProps)(LoggedIn); 