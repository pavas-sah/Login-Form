import React from 'react';
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
import {Provider} from 'react-redux';
import {createStore} from 'redux';


import LoginReducer  from './store/LoginReducer';
import LoggedIn from "./component/LoggedIn.connected";
import LoginScreen from "./component/Login-Screen.connected";
import AuthorizedRoute from './component/AuthorizedRoute.connected';

const myStore = createStore(LoginReducer);

function App() {
  return (
    <Provider store={myStore}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={LoginScreen} />
          <AuthorizedRoute path ="/login" component ={LoggedIn}  />
          <Redirect to="/" />
        </Switch>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
