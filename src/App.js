import React, { Component, Fragment } from 'react';
import { hot } from 'react-hot-loader';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Provider } from "react-redux";

import store from './store';

import Ajax from './request';

const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
);

const About = () => (
  <div>
    <h2>About</h2>
  </div>
);

const User = () => (
  <div>
    <h2>User</h2>
  </div>
)

class App extends Component {
  constructor(props){
    super(props)
  }
  componentDidMount () {
    Ajax.getUsers({
      name: 'aaa'
    }).then(res=>{
      console.log(res)
    })
  }
  render() {
    return (
      <Router>
        <Fragment>
          <ul>
            <li>
              <Link to="/" onClick = { this.buttonClickHandle} >Home</Link>
            </li>
            <li>
            <Link to="/about" onClick = { this.buttonClickHandle}>About</Link>
            </li>
            <li>
              <Link to="/user" onClick = { this.buttonClickHandle}>User</Link>
            </li>
          </ul>
          <hr />
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/user" component={User} />
        </Fragment>
      </Router>
    )
  }
  buttonClickHandle () {
    
  }
}

export default hot(module)(App);
