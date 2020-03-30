import { Redirect, Route } from "react-router-dom"
import React from "react"
import { IGlobalState } from "../store/LoginReducer";

export interface IProps {
    path: any,
    component: any,
}

export class AuthorizedRoute extends React.Component<IProps & IGlobalState>{
    
    render() {
        const { component: Component, ...rest } = this.props
        console.log(this.props.isAuthenticated);
        console.log(this.props.counter);
        
        return (
            <Route {...rest} render={props => {
                return this.props.isAuthenticated !== undefined && this.props.isAuthenticated
                    ? < Component {...this.props} />
                    : <Redirect to="/" />
            }} />
        )
    }
}

