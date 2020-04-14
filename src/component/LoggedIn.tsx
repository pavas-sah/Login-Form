import React, { Dispatch } from 'react';
import { Action } from 'redux';

export interface IProps {
    onInvalidUser(): Dispatch<Action>
   }

export const LoggedIn = (isValidUser:(IProps)) => {
    return (
        <div>
            <button data-testid="button" onClick = {isValidUser.onInvalidUser}>LogOut</button>
            User Logged In Successfully.
        </div>
    )
    
}
