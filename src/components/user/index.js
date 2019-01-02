import React, { Component } from 'react'
import { withRouter, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import cookies from 'browser-cookies';

import { logout } from '../../store/user.redux'

import {
  UserHeader,
  UserInfo,
  Button
} from './style'
@withRouter
@connect(
  state => state.user,
  { logout }
)
class User extends Component {
  constructor(props) {
    super(props)
    this.logoutHandle = this.logoutHandle.bind(this)
  }
  logoutHandle () {
    cookies.erase('userid');
    this.props.logout()
  }
  render () {
    let {
      username,
      desc,
      title,
      type,
      redirectTo
    } = this.props
    return (
      username ?
        (<div>
          <UserHeader>
            <div className="avator">
              <img src="http://thirdwx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTIl1LoVo2C1lEd8f9ALN1hK40ZOnzt48bcFElUeOJcwCKbX26ZKYesqed0taQWJiaaFZxmmHfXerkA/132" alt="" />
            </div>
            <div className="userinfo">
              <div className="info">
                <span className="username">{username}</span>
                <i className="tag">{title}</i>
              </div>
              {
                type === 'boss' ? (<div className="company">daqsoft软件有限公司</div>) : ''
              }
            </div>
          </UserHeader>
          <UserInfo>
            <div className="title">
              {
                type === 'boss' ? '招聘要求' : '个人简介'
              }
            </div>
            <div className="summary">
              {
                desc ? desc.split('\n').map(e => <p key={e}>{e}</p>) : ''
              }
            </div>
          </UserInfo>
          <Button onClick={this.logoutHandle}>退出登录</Button>
        </div>) : <Redirect to={redirectTo}/>
    )
  }
}
export default User