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
  }
}