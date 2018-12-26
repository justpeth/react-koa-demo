import React, { Component, Fragment } from 'react';
import { hot } from 'react-hot-loader';
import { BrowserRouter as Router, Route } from "react-router-dom";
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
            <Route path="/login" exact component={Login} />
            <Route path="/register" exact component={Register} />
            <Route path="/bossinfo" exact component={bossInfo} />
            <Route path="/hunterinfo" exact component={HunterInfo} />
            <Route component={Dashboard}></Route>
          </Fragment>
        </Router>
      </Provider>
    )
  }
  buttonClickHandle () {

  }
}

export default App;
