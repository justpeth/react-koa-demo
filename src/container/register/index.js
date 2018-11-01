import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
import { register } from '../../store/user.redux';
import {
  LoginWrapper
} from '../login/style';
@connect(
  state => state.user,
  {register}
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
    const { redirectTo } = this.props;

    return (
      <LoginWrapper>
        {redirectTo ? <Redirect to={redirectTo}/> : null }
        <h3 className="title">新用户注册</h3>
        <form action="return false;">
          <label htmlFor="username" className="label">
            <input id="username" type="text" placeholder="用户名" onChange={v=>this.handleChange('username',v)} value={username}/>
          </label>
          <label htmlFor="password" className="label">
            <input id="password" autoComplete="off" type="password" placeholder="密码" onChange={v=>this.handleChange('password',v)} value={password}/>
          </label>
          <label htmlFor="rpassword" className="label">
            <input id="rpassword" autoComplete="off" type="password" placeholder="确认密码" onChange={v=>this.handleChange('rpassword',v)} value={rpassword}/>
          </label>
          <div className="checkbox">
            <label htmlFor="hunter">
              <input type="radio" id='hunter' name="type" value="boss" onChange={v=>this.handleChange('type',v)}/>Boss
            </label>
            <label htmlFor="boss">
              <input type="radio" id='boss' name="type" value="hunter" onChange={v=>this.handleChange('type',v)}/>牛人
            </label>
          </div>
        </form>
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
    this.props.register(this.state)
  }
}
export default Login;