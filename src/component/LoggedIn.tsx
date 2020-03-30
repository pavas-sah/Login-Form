import React, { Dispatch } from 'react';
import { RouteComponentProps } from "react-router-dom";
import { Action } from 'redux';

export interface IProps extends RouteComponentProps{
    onValidUser(): Dispatch<Action>,
    onInvalidUser(): Dispatch<Action>
   }

export const LoggedIn = (props:IProps) => {
    return (
        <div>
            <button onClick = {props.onInvalidUser}>LogOut</button>
            User Logged In Successfully.
        </div>
    )
    
}
