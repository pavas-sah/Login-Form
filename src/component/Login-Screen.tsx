import React, { Component } from "react";
import { Redirect, RouteComponentProps } from "react-router-dom";
import "./Login.css";
import { connect } from "react-redux";

export interface IState {
    user: string,
    pass: string,
    toSuccess: boolean,
    isUserValid: boolean,
    isPassValid: boolean,
    errorMessage: string
}

export interface IProps extends RouteComponentProps {
    onValidUser(): any,
    onInvalidUser(): any
}

export class LoginScreen extends Component<IProps, IState> {
    state: IState = {
        user: '',
        pass: '',
        toSuccess: false,
        isPassValid: true,
        isUserValid: true,
        errorMessage: ""
    };

    // componentWillUpdate()
    // {
    //     debugger;
    //     return true;

    // }

    validEmailRegex = RegExp(
        // eslint-disable-next-line
        /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
    );
    validPasswordRegex =
        RegExp(/^[0-9a-zA-Z]*$/);

    handleUserId = (e: any) => {

        // let errors = this.state.errors;
        this.setState({
            user: e.target.value,
            errorMessage: "",
            isUserValid: this.validEmailRegex.test(e.target.value),
        });
    }

    handlePassword = (e: any) => {

        // let errors = this.state.errors;
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
                toSuccess: true,
                errorMessage: ""
            })
            this.props.onValidUser();
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

        if (this.state.toSuccess === true) {
            return <Redirect to='/logged-in' />
        }

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

const mapDispatchToProps = (dispatch: any) => {
    return {
        onValidUser: () => dispatch({ type: 'LOGIN' }),
        // onInvalidUser: () => dispatch({ type: 'LOGOUT' }),
    };
};

export default connect (null, mapDispatchToProps)(LoginScreen);

