import { Redirect, Route } from "react-router-dom"
import React from "react"
import { connect } from "react-redux"
import { IGlobalState } from "../store/LoginReducer";

interface IProps {
    path: any,
    component: any,
    // pending:any,
    // logged:any,
    isAuthenticated?: boolean
}

// interface IState {
//     isAuthenticated?: boolean
// }

const mapStateToProps = (globalState: IGlobalState, props:IProps) => {
    return {
        // ...props,
        isAuthenticated : globalState.isAuthenticated
    };
};

class AuthorizedRoute extends React.Component<IProps>{

    // state = {
    //     isAuthenticated: false
    // }
    
    render() {
        const { component: Component, ...rest } = this.props
        // console.log(isAuthenticated);
        
        // const isAuth = () =>{
    
        //     this.props.isAuthenticated = props.isAuth;
        // }
        return (
        // <div>Somethinf</div>
            <Route {...rest} render={props => {
                return this.props.isAuthenticated !== undefined && this.props.isAuthenticated
                    ? <Component {...this.props} />
                    : <Redirect to="/" />
            }} />
        )
    }
}


export default connect(mapStateToProps)(AuthorizedRoute)