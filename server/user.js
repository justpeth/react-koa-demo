const Koa = require('koa');
const Router = require('koa-router');
const UserMthods = require('./user.controller');
const router = new Router();


router
  .get('/', UserMthods.GetAllUsers)
  .post('/doregister', UserMthods.Register)
  .get('/delete', UserMthods.DelUser)

module.exports = router;