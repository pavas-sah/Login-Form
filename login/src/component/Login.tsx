import React, { Component } from "react";
import { Redirect, RouteComponentProps } from "react-router-dom";
import "./Login.css";
import { connect } from "react-redux";

export interface IState {
    user?: string,
    pass?: string,
    toSuccess: boolean,
    errors?: {
        user: string,
        pass: string,
    },
    isUserValid: boolean,
    isPassValid: boolean,
    errorMessage: string
}

interface IProps extends RouteComponentProps{
 onValidUser(): any,
 onInvalidUser(): any
}
// const fakeAuth = {
//     isAuthenticated: false,
//     authenticate(cb:any) {
//       this.isAuthenticated = true
//       setTimeout(cb, 100)
//     },
//     signout(cb:any) {
//       this.isAuthenticated = false
//       setTimeout(cb, 100)
//     }
//   }

class Login extends Component<IProps, IState> {
    state: IState = {
        user: '',
        pass: '',
        toSuccess: false,
        errors:
        {
            user: "",
            pass: ""
        },
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

        let errors = this.state.errors;
        this.setState({
            user: e.target.value,
            errorMessage: ""
        });

        if (errors !== undefined)
            errors.user = this.validEmailRegex.test(e.target.value) ? "" : "User Id is not valid email id.";

        if (errors !== undefined && errors.user !== '') {
            this.setState({
                errors: errors
            });
        }
    }

    handlePassword = (e: any) => {

        let errors = this.state.errors;
        this.setState({
            pass: e.target.value,
            errorMessage: ""
        });

        if (errors !== undefined)
            errors.pass = this.validPasswordRegex.test(e.target.value)
                ? ""
                : "Password should be alphanumeric.";

        if (errors !== undefined && errors.pass !== '') {
            this.setState({
                errors: errors
            });
        }
    }

    formSubmitted = (form: React.FormEvent<HTMLFormElement>) => {
        form.preventDefault();
        if (this.state.errors !== undefined) {
            if (this.state.errors.user !== '' || this.state.errors.pass !== '') {
                console.log(this.state.errors)
            }
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
    }


    haveErrors = () => {
        let haveError: boolean = false;
        if (this.state.user === '' || this.state.pass === '') {
            haveError = true;
        }

        if (this.state.errors !== undefined && (this.state.errors.user !== '' || this.state.errors.pass !== '')) {
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
                    </div>
                    <div>
                        <label>Password :</label>
                        <input type="password" id="pass" onChange={this.handlePassword} required />
                    </div>
                    <button disabled={this.haveErrors()} >Login</button>
                    <div id="error">{this.state.errorMessage}</div>
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

export default connect(null, mapDispatchToProps)(Login);
