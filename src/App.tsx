import React from 'react';
import './App.css';
import LoginScreen from "./component/Login-Screen";
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
          <Route exact path="/" component={LoginScreen} />
          <AuthorizedRoute path ="/login" component ={LoggedIn}  />
          <Redirect to="/" />
        </Switch>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
