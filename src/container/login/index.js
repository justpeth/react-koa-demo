import React, {Component} from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';

import {
  LoginWrapper
} from './style';
@withRouter
@connect(
  state => state.user
)
class Login extends Component{
  constructor(props){
    super(props);
    this.state = {
      username: '',
      password: ''
    };
    this.register = this.register.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
  }
  render(){
    const { username, password } = this.state;
    return (
      <LoginWrapper>
        <h3 className="title">用户登录</h3>
        <label htmlFor="username" className="label">
          <input id="username" type="text" placeholder="用户名" onChange={v=>this.handleChange('username',v)} value={username}/>
        </label>
        <label htmlFor="password" className="label">
          <input id="password" type="password" placeholder="密码" onChange={v=>this.handleChange('password',v)} value={password}/>
        </label>
        <div className="btn-wrapper">
          <button onClick={this.handleLogin}>登录</button>
        </div>
        <div className="txt-con">
          还没账号？马上<span onClick={this.register}>注册</span>
        </div>
      </LoginWrapper>
    )
  }
  handleChange(key, e) {
    let val = e.currentTarget.value;
    this.setState({
			[key]:val
		})
  }
  register(){
		this.props.history.push('/register')
  }
  handleLogin(){
    console.log('click login')
  }
}
export default Login;