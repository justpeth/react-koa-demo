const utils = require('utility');
const model = require('./model');
const User = model.getModel('user');

//根据用户名查找用户
const findUser = (username) => {
  return new Promise((resolve, reject) => {
    User.findOne({ username }, (err, doc) => {
      if(err){
        reject(err);
      }
      resolve(doc);
    });
  });
};
//找到所有用户
const findAllUsers = () => {
  return new Promise((resolve, reject) => {
    User.find({}, {_id: false, __v: false, password: false}, (err, doc) => {
      if(err){
        reject(err);
      }
      resolve(doc);
    });
  });
};
//删除某个用户
const delUser = function(username){
  return new Promise(( resolve, reject) => {
    User.findOneAndRemove({username}, err => {
      if(err){
        reject(err);
      }
      console.log('删除用户成功');
      resolve();
    });
  });
};


const Register = async ( ctx ) => {
  let { username, password, type} = ctx.request.body.params
  let pwd = md5Pwd(password);
  let user = new User({
    username,
    password: pwd, 
    type
  });
 
  let doc = await findUser(user.username);
  if(doc){ 
    console.log('用户名已经存在');
    ctx.status = 200;
    ctx.body = {
      code: 1,
      message: '用户名已存在'
    };
  }else{
    await new Promise((resolve, reject) => {
      user.save((err) => {
        if(err){
          reject(err);
        }  
        resolve();
      });
    });
    console.log('注册成功');
    ctx.status = 200;
    ctx.body = {
      code: 0,
      data: {
        username,
        password: pwd,
        type
      },
      message: '注册成功'
    }
  }
};

const GetAllUsers = async( ctx ) => {
  //查询所有用户信息
  let doc = await findAllUsers();
  ctx.status = 200;
  ctx.body = {
    code: 0,
    data: doc
  };
};

const DelUser = async( ctx ) => {
  //拿到要删除的用户username
  let {username} = ctx.request.query;
  await delUser(username);
  ctx.status = 200;
  ctx.body = {
    code: '0',
    message: '删除成功'
  };
};

function md5Pwd(str){
  const salt = 'justPeth_react__KOA_demo@version.1'
  return utils.md5(utils.md5(str));
}
module.exports = {
  Register,
  GetAllUsers,
  DelUser
};