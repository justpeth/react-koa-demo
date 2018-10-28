import Ajax from './request';

export default {
  getUsers(params){
    return Ajax({
      url: '/users',
      params,
      loading: false
    })
  },
  getUserInfo(){
    return Ajax({
      url: 'users/info'
    })
  },
  // 注册用
  doRegister(params){
    return Ajax({
      url: 'users/doregister',
      params,
      type: 'post'
    });
  },
  login(params){
    return Ajax({
      url: 'users/login',
      params,
      type: 'post'
    })
  }
}