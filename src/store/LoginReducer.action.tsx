
export enum LoginState {
    LOGIN = 'LOGIN',
    LOGOUT = 'LOGOUT',
}

export interface IMemberLoginAction {
    type: LoginState;
}