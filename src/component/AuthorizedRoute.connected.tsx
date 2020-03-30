import { IGlobalState } from "../store/LoginReducer";
import { AuthorizedRoute } from "./AuthorizedRoute";
import { connect } from "react-redux";

const mapStateToProps = (globalState: IGlobalState) => {
    return {
        isAuthenticated : globalState.isAuthenticated,
    };
};

export default connect(mapStateToProps)(AuthorizedRoute)