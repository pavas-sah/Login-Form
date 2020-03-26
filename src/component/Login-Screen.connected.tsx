import { connect } from "react-redux";
import { LoginScreen} from "./Login-Screen";


const mapDispatchToProps = (dispatch: any) => {
    return {
        onValidUser: () => dispatch({ type: 'LOGIN' }),
        // onInvalidUser: () => dispatch({ type: 'LOGOUT' }),
    };
};

export default connect (null, mapDispatchToProps)(LoginScreen);
