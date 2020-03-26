import React from 'react';
import { connect } from "react-redux";
import { RouteComponentProps } from "react-router-dom";

interface IProps extends RouteComponentProps{
    onValidUser(): any,
    onInvalidUser(): any
   }

const LoggedIn = (props:IProps) => {
    return (
        <div>
            <button onClick = {props.onInvalidUser}>LogOut</button>
            User Logged In Successfully.
        </div>
    )
    
}

const mapDispatchToProps = (dispatch: any) => {
    return {
        onInvalidUser: () => dispatch({ type: 'LOGOUT' }),
    };
};

export default connect(null, mapDispatchToProps)(LoggedIn); 