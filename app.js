//引入express框架
const express = require('express');
//创建web服务器
const app = express();
//当客户端以get方式请求 / 的时候
app.get('/', (req,res) => {
    //向客户端做出相应
  res.send('hello blog')
});

//让服务器监听3000端口向外界提供服务
app.listen(3000, err =>{
if(err == null) {
    console.log('服务器启动成功');
    
}
})