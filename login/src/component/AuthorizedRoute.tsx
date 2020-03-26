import { Redirect, Route } from "react-router-dom"
import React from "react"
import { connect } from "react-redux"

interface IProps {
    path: any,
    component: any,
    // pending:any,
    // logged:any,
    isAuthenticated?: boolean
}

interface IState {
    isAuthenticated?: boolean
}

class AuthorizedRoute extends React.Component<IProps, IState>{

    state = {
        isAuthenticated: false
    }

    render() {
        const { component: Component, isAuthenticated, ...rest } = this.props
        console.log(isAuthenticated);

        return (
            <Route {...rest} render={props => {
                // if (!isAuthorized) return <div>Loading...</div>
                return this.props.isAuthenticated
                    ? <Component {...this.props} />
                    : <Redirect to="/" />
            }} />
        )
    }
}

const stateToProps = (newState: IProps) => {
    return {
        isAuth: newState.isAuthenticated
    };
};

export default connect(stateToProps)(AuthorizedRoute)