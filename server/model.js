const mongoose = require('mongoose');
const DB_URL = "mongodb://localhost:27017/demo";
mongoose.connect(DB_URL, {useNewUrlParser: true});
const db = mongoose.connection;
mongoose.Promise = global.Promise;
db.on('error', function(){
  console.log('数据库连接出错！');
});
db.on('open', function() {
  console.log('数据库连接成功！');
});


const models = {
  user: {
    username: {
      type: String,
      require: true
    },
    password: {
      type: String,
      require: true
    },
    type: {
      type: String,
      require: true
    },
    integrity: {
      type: Boolean,
    },
    desc: {
      type: String
    },
    // 职位名
    title: {
      type: String
    },
    // 如果是boss 
    company: {
      type: String
    },
    money: {
      type: String
    }
  },
  chat: {

  }
}
for (let key in models) {
  mongoose.model(key, new mongoose.Schema(models[key]))
}
module.exports = {
  getModel: function(name){
    return mongoose.model(name)
  }
};