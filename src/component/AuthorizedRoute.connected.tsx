import { IGlobalState } from "../store/LoginReducer";
import { IProps, AuthorizedRoute } from "./AuthorizedRoute";
import { connect } from "react-redux";

const mapStateToProps = (globalState: IGlobalState, props:IProps) => {
    return {
        isAuthenticated : globalState.isAuthenticated,
        counter: globalState.counter
    };
};

export default connect(mapStateToProps)(AuthorizedRoute)