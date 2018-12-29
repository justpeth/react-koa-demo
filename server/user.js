const Router = require('koa-router');
const UserMthods = require('./user.controller');
const router = new Router();


router
  .get('/', UserMthods.GetAllUsers)
  .get('/list', UserMthods.GetUserList)
  .post('/doregister', UserMthods.Register)
  .post('/login', UserMthods.Login)
  .post('/update', UserMthods.Update)
  .get('/info', UserMthods.GetUserInfo)
  .get('/delete', UserMthods.DelUser)
  
module.exports = router;