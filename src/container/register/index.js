import React, {Component} from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';

import {
  LoginWrapper
} from '../login/style';
@withRouter
@connect(
  state => state.user
)
class Login extends Component{
  constructor(props){
    super(props);
    this.state = {
      username: '',
      password: '',
      rpassword: '',
      type: ''
    };
    this.login = this.login.bind(this);
    this.handleRegister = this.handleRegister.bind(this);
  }
  render(){
    const { username, password, rpassword } = this.state;
    return (
      <LoginWrapper>
        <h3 className="title">新用户注册</h3>
        <label htmlFor="username" className="label">
          <input id="username" type="text" placeholder="用户名" onChange={v=>this.handleChange('username',v)} value={username}/>
        </label>
        <label htmlFor="password" className="label">
          <input id="password" type="password" placeholder="密码" onChange={v=>this.handleChange('password',v)} value={password}/>
        </label>
        <label htmlFor="rpassword" className="label">
          <input id="rpassword" type="password" placeholder="确认密码" onChange={v=>this.handleChange('rpassword',v)} value={rpassword}/>
        </label>
        <div className="checkbox" onChange={v=>this.handleChange('type',v)}>
          <label htmlFor="hunter">
            <input type="radio" id='hunter' name="type" value="boss"/>Boss
          </label>
          <label htmlFor="boss">
            <input type="radio" id='boss' name="type" value="hunter"/>牛人
          </label>
        </div>
        <div className="btn-wrapper">
          <button onClick={this.handleRegister}>注册</button>
        </div>
        <div className="txt-con">
          已有账号？前去<span onClick={this.login}>登录</span>
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
  login(){
    this.props.history.push('/login')
  }
  handleRegister(){
    console.log('click register')
  }
}
export default Login;