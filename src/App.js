import React, { Component, Fragment } from 'react';
import { hot } from 'react-hot-loader'
import { BrowserRouter as Router,Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";

import store from './store';

import Authorize from './components/authorize';
import Login from './container/login';
import Register from './container/register';
import bossInfo from './container/bossinfo';
import HunterInfo from './container/hunterinfo';
import Dashboard from './container/dashboard'

@hot(
  module
)
class App extends Component {
  render () {
    return (
      <Provider store={store}>
        <Router>
          <Fragment>
            <Authorize></Authorize>
            <Switch>
              <Route path="/login" component={Login} />
              <Route path="/register" component={Register} />
              <Route path="/bossinfo" component={bossInfo} />
              <Route path="/hunterinfo" component={HunterInfo} />
              <Route component={Dashboard}></Route>
            </Switch>
          </Fragment>
        </Router>
      </Provider>
    )
  }
  buttonClickHandle () {

  }
}

export default App;
