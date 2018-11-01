import React, { Component, Fragment } from 'react';
import { hot } from 'react-hot-loader';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Provider } from "react-redux";

import store from './store';

import Authorize from './components/authorize';
import Login from './container/login';
import Register from './container/register';
import bossInfo from './container/bossinfo';


function hunterinfo () {
  return (<div>hunterinfo</div>)
}

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Fragment>
            <Authorize></Authorize>
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <Route path="/bossinfo" component={bossInfo} />
            <Route path="/hunterinfo" component={hunterinfo} />
          </Fragment>
        </Router>
      </Provider>
    )
  }
  buttonClickHandle () {
    
  }
}

export default hot(module)(App);
