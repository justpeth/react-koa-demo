const utils = require('utility');
const model = require('./model');
const User = model.getModel('user');

//根据用户名查找用户
const findUser = (params) => {
  return new Promise((resolve, reject) => {
    User.findOne(params, {password: false, __v: false}, (err, doc) => {
      if(err){
        reject(err);
      }
      resolve(doc);
    });
  });
};
// 
//找到所有用户
const findAllUsers = (params, filter) => {
  return new Promise((resolve, reject) => {
    User.find(params, filter,(err, doc) => {
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
  let doc = await findUser({username: user.username});
  if(doc){ 
    console.log(`用户名 ${username} 已经存在`);
    ctx.status = 200;
    ctx.body = {
      code: 1,
      message: `用户名 ${username} 已经存在`
    };
  }else{
    let doc = await new Promise((resolve, reject) => {
      user.save((err, doc) => {
        if(err){
          reject(err);
        }  
        resolve(doc);
      });
    });
    console.log(`用户：${doc.username} 注册成功`);
    ctx.cookies.set('userid', doc._id);
    ctx.status = 200;
    ctx.body = {
      code: 0,
      data: {
        username,
        type
      },
      message: '注册成功'
    }
  }
};

// 根据用户id查找用户并且修改用户对应信息
const findByIdAndUpdate = (id, params) => {
  return new Promise(( resolve, reject) => {
    let filter = { 
      fields: { 
        password: false,
        __v: false,
        _id: false,
      },
      new: true 
    }
    let param = Object.assign({integrity: true}, params)
    User.findByIdAndUpdate(id, param, filter, (err, doc) => {
      if(err){
        reject(err);
      }
      console.log(`更新用户${doc._id} ：信息成功`);
      resolve(doc);
    });
  });
}

// 登录
const Login = async (ctx) => {
  let { username, password} = ctx.request.body.params
  let doc = await findUser({username, password: md5Pwd(password)});
  if(doc){ 
    console.log(`用户：${doc.username} 登录成功`)
    ctx.status = 200;
    ctx.cookies.set('userid', doc._id);
    ctx.body = {
      code: 0,
      data: doc
    };
  } else {
    ctx.status = 200;
    ctx.body = {
      code: 1,
      message: '用户名不存在或者密码错误'
    }
  }
}



const GetUserInfo = async (ctx) => {
  let userid = ctx.cookies.get('userid');
  if(userid){
    await findUser({ _id:userid}).then(res => {
      if(res){
        ctx.body = {
          code: 0,
          data: res
        }
      } else {
        ctx.body = {
          code:1,
          message: '用户不存在'
        }
      }
    }).catch(err=> {
      ctx.body = {
        code:1,
        message: '数据库出错'
      }
    })
  }
  else {
    ctx.body = {
      code:1,
      message: ''
    }
  }
}

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

const Update = async (ctx) => {
  let userid = ctx.cookies.get('userid');
  let params = ctx.request.body.params;
  if(!userid){
    ctx.body = {
      code: 1
    }
  }
  await findByIdAndUpdate(userid, params).then(res => {
    ctx.status = 200;
    ctx.body = {
      code: 0,
      data: res
    }
  })
}

const GetUserList = async (ctx) => {
  let params = ctx.request.query
  await findAllUsers(params, {__v: false, password: false}).then(res => {
    ctx.body = {
      code: 0,
      data: res
    }
  }).catch(
    err => {
      ctx.body = {
        code:1,
        message: '数据库出错'
      }
    }
  );
}

function md5Pwd(str){
  const salt = `justPeth_react_${str}_KOA_demo@version.1`
  const salt1 = utils.md5(salt)
  const salt2 = `${salt1}@?%#!Asdcx__?!`
  return utils.md5(salt2);
}
module.exports = {
  Register,
  Login,
  GetUserInfo,
  GetAllUsers,
  GetUserList,
  DelUser,
  Update
};