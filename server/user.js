const Koa = require('koa');
const Router = require('koa-router');


const User = require('./model');

const router = new Router();

router
  .get('/', async(ctx, next) =>{
    await User.find({}, (err, doc) => {
      ctx.body = doc;
    })
  })
  .get('/info', (ctx, next)=>{
    ctx.body = {
      islogin: false
    }
  });


module.exports = router;