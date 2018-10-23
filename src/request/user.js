import Ajax from './request';

export default {
  getUsers(params){
    return Ajax({
      url: '/users',
      params
    })
  }
}