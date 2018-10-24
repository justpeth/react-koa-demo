import React,{Component} from 'react';
import {withRouter} from 'react-router-dom';
import Ajax from '../request';

@withRouter
class Authorize extends Component{
  componentDidMount(){
    const list = ['/login', '/register'];
    const history = this.props.history
    const pathname = history.location.pathname;
    if(list.indexOf(pathname)>-1){
      return null;
    }
    Ajax.getUserInfo()
      .then(res=>{
        console.log(res)
        // 需要判断是否登录
        if(!res.islogin){
          // history.push('/login');
        }
      })
  }
  render(){
    return <p>验证是否登录的信息</p>
  }
}

export default Authorize;

