import React from 'react';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import Ajax from '../request';
import {loadUserData} from '../store/user.redux'

@withRouter
@connect(
  state => state.user,
  {loadUserData}
)
class Authorize extends React.Component{
  componentDidMount(){
    const list = ['/login', '/register'];
    const {history, loadUserData} = this.props;
    const pathname = history.location.pathname;
    if(list.indexOf(pathname)>-1){
      return null;
    }
    Ajax.getUserInfo()
      .then(res=>{
        // 需要判断是否登录
        if(res.code === 1){
          history.push('/login');
        } else {
          loadUserData(res.data);
        }
      })
  }
  render(){
    return null;
  }
}

export default Authorize;

