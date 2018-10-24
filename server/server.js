const Koa = require('koa');
const Router = require('koa-router');
const UserRouter = require('./user');

const app = new Koa();
const router = new Router();

router.use('/users', UserRouter.routes(),UserRouter.allowedMethods());

app
  .use(router.routes())
  .use(router.allowedMethods());

app.listen(10086, function () {
  console.log('server is started at port 10086')
})