import React, { Component } from "react";
import { RouteComponentProps, RouteChildrenProps } from "react-router-dom";
import { IGlobalState } from "../store/LoginReducer";

export interface IState {
    user: string,
    pass: string,
    isUserValid: boolean,
    isPassValid: boolean,
    errorMessage: string
}

export interface IProps {
    onValidUser(): any,
    onInvalidUser(): any,
    // history(): { push:  } 
    push(path:string):any
}

export class LoginScreen extends Component<IProps & IGlobalState, IState> {
    state: IState = {
        user: '',
        pass: '',
        isPassValid: true,
        isUserValid: true,
        errorMessage: ""
    };

    validEmailRegex = RegExp(
        // eslint-disable-next-line
        /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
    );
    validPasswordRegex =
        RegExp(/^[0-9a-zA-Z]*$/);

    handleUserId = (e: React.ChangeEvent<HTMLInputElement>) => {

        this.setState({
            user: e.target.value,
            errorMessage: "",
            isUserValid: this.validEmailRegex.test(e.target.value),
        });
    }

    handlePassword = (e: React.ChangeEvent<HTMLInputElement>) => {

        this.setState({
            pass: e.target.value,
            isPassValid: this.validPasswordRegex.test(e.target.value),
            errorMessage: ""
        });
    }

    formSubmitted = (form: React.FormEvent<HTMLFormElement>) => {
        form.preventDefault();
        if (this.state.user === "pavas.sah@gmail.com" && this.state.pass === "pass") {
            this.setState({
                errorMessage: ""
            })
            this.props.onValidUser();
            this.props.push('/login');
        } else {
            this.setState({ errorMessage: "Invalid User Id/Password" });
        }
    }


    haveErrors = () => {
        let haveError: boolean = false;
        if (this.state.user === '' || this.state.pass === '') {
            haveError = true;
        }

        if (!this.state.isPassValid || !this.state.isUserValid) {
            haveError = true;
        }
        return haveError;
    }


    render() {


        return (
            <div className="main-container">

                <form onSubmit={this.formSubmitted}>
                    <div>
                        <label>User Name :</label>
                        <input type="text" id="user" onChange={this.handleUserId} data-validation-type="email" required />
                        {!this.state.isUserValid &&
                            <label className="error">User Id entered is not a valid email id.</label>
                        }
                    </div>
                    <div>
                        <label>Password :</label>
                        <input type="password" id="pass" onChange={this.handlePassword} required />
                        {!this.state.isPassValid &&
                            <label className="error">Password should be alphanumeric.</label>
                        }
                    </div>
                    <button disabled={this.haveErrors()} >Login</button>
                    <div className="error">{this.state.errorMessage}</div>
                </form>

            </div>
        );
    }
}
