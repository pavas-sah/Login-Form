import React from 'react';
import './App.css';
import Login from "./component/Login";
import LoggedIn from "./component/LoggedIn";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import LoginReducer  from './store/LoginReducer';
import AuthorizedRoute from './component/AuthorizedRoute';

const myStore = createStore(LoginReducer);

function App() {
  return (
    <Provider store={myStore}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Login} />
          <AuthorizedRoute path ="/login" component ={LoggedIn} />
          <Redirect to="/" />
        </Switch>
      </BrowserRouter>
    </Provider>
  );
}

// const fakeAuth = {
//   isAuthenticated: false,
//   authenticate(cb:any) {
//     fakeAuth.isAuthenticated = true;
//     setTimeout(cb, 100); // fake async
//   },
//   signout(cb:any) {
//     fakeAuth.isAuthenticated = false;
//     setTimeout(cb, 100);
//   }
// };

export default App;
