const Koa = require('koa');
const Router = require('koa-router');

const mongoose = require('mongoose');
const DB_URL = "mongodb://localhost:27017/demo";
mongoose.connect(DB_URL);
const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('conect mongodb success');
});

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true
  },
  age: {
    type: Number,
    require: true
  }
});

const User = mongoose.model('Users', UserSchema);

// const users = [
//   {
//     name: 'aaa',
//     age: 18
//   },
//   {
//     name: 'bbb',
//     age: 19
//   },
//   {
//     name: 'ccc',
//     age: 20
//   }
// ]

// User.create(users, (err, doc) => {
//   if(err) {
//     console.log(err)
//   }
//   else console.log(doc);
// })

// User.remove({}, (err, doc) => {
//   console.log(err, doc)
// })

const app = new Koa();
const router = new Router();

router
  .get('/',async (ctx, next) => {
    // ctx.router available
    ctx.body = 'hello world';
  })
  .get('/users', async(ctx, next) =>{
    await User.find({}, (err, doc) => {
      ctx.body = doc;
    })
  })

app
  .use(router.routes())
  .use(router.allowedMethods());

app.listen(10086, function () {
  console.log('server is started at port 10086')
})