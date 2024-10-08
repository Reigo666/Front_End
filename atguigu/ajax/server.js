// 1. 引用express框架
const express = require('express');

// 2.创建应用对象
const app=express();


// 3.创建路由规则
app.get('/server',(request,response) => {
    response.setHeader('Access-Control-Allow-Origin','*');
    
    const data={name:'zhangsan'}
    
    response.send(JSON.stringify(data));
});

// 接收所有请求信息
app.all('/server',(request,response) => {
    response.setHeader('Access-Control-Allow-Origin','*');
    response.setHeader('Access-Control-Allow-Headers','*');
    response.send('Hello AJAX POST');
});

// 针对ie缓存问题
app.get('/ie',(request,response) => {
    response.setHeader('Access-Control-Allow-Origin','*');
    response.send('Hello IE 1');
});

// 请求超时与网络异常
app.get('/delay',(request,response) => {
    response.setHeader('Access-Control-Allow-Origin','*');
    setTimeout(() => {
        response.send('延时调用');
    },3000)
    
});

// jquery
app.all('/jquery-server',(request,response) => {
    response.setHeader('Access-Control-Allow-Origin','*');
    const data={name:'zhangsan'};
    response.send(JSON.stringify(data))
    
});

// jsonp
app.all('/jsonp-server',(request,response) => {
    // response.send("hello jsonp server");
    // response.send('console.log("hello jsonp server")');
    const data={
        name:'hello jsonp!!!'
    }
    const str=JSON.stringify(data);
    response.end(`handle(${str})`);
});

// jsonp check-username
app.all('/check-username',(request,response) => {
    // response.send("hello jsonp server");
    // response.send('console.log("hello jsonp server")');
    const data={
        exist:1,
        msg:'该用户已经存在！'
    }
    const str=JSON.stringify(data);
    response.end(`handle(${str})`);
});

// jquery jsonp
app.all('/jquery-jsonp',(request,response) => {
    // response.send("hello jsonp server");
    // response.send('console.log("hello jsonp server")');
    const data={
        name:'zhangsan',
        age:'18'
    }
    let cb=request.query.callback
    console.log(cb);
    const str=JSON.stringify(data);
    response.end(`${cb}(${str})`);
});

// 4.监听端口启动服务
app.listen(8000,() => {
    console.log('服务器已经启动，8000端口监听中');
})