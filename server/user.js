const Koa = require('koa');
const Router = require('koa-router');


const model = require('./model');
const User = model.getModel('user');

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
  })
  .post('/doregister',async (ctx, next) =>{
    let { password, username, type }= ctx.request.body.params;
    await User.find({username},async (err, doc) => {
      if(err){
        ctx.body = {
          code: 1,
          message: "查看用户名是否注册失败",
          errorMsg: err
        }
        return false;
      }
      if(doc.length){
        ctx.body = {
          code: 1,
          message: '用户名重复'
        }
        console.log(doc)
        return false;
      }
      User.create({username, password, type}, async(err, doc) => {
        if(err) {
          ctx.body = {
            code: 1,
            message: "注册失败",
            errorMsg: err
          }
          return false;
        }
        ctx.body = {
          code: 0,
          message: '注册成功'
        }
      })
    })
  })
  .get('/delete', async(ctx, next) => {
    let { username }= ctx.request.query;
    await User.deleteOne({username},async (err, doc) => {
      if(err){
        ctx.body = {
          code: 1,
          message: '删除失败',
          errorMsg: err
        }
        return false;
      }
      ctx.body = {
        code: 0,
        message: '删除成功'
      }
    })
  })


module.exports = router;