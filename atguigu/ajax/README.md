# 一.AJAX
## 1.1 AJAX简介
AJAX全称为Asynchronous JavaScript And XML,就是异步的JS和XML。<br>
通过AJAX可以在浏览器中向服务器发送异步请求，最大的优势：**无刷新获取数据**<br>
AJAX不是新的编程语言，而是一种将现有的标准组合在一起使用的新方式。

## 1.2 XML简介
- XML可扩展标记语言。
- XML被设计用来传输和存储数据。

## 1.3 AJAX的特点
### 1.3.1 AJAX的优点
1. 可以无需刷新页面与服务器端进行通信。
2. 允许根据用户事件来更新部分页面内容。
### 1.3.2 AJAX的缺点
1. 没有浏览历史，不能回退
2. 存在跨域问题（同源）
3. SEO（搜索引擎优化）不友好 。（爬虫爬不到）

## 1.4 HTTP协议
### 1.4.1 HTTP
HTTP(Hypertext transport protocal)协议[超文本传输协议]，协议规定了浏览器和万维网服务器之间互相通信的规则。

### 1.4.2 请求报文
重点是格式与参数
```
行    GET /s?ie=utf-8 HTTP/1.1  //方法 URL 协议版本    //GET请求 请求体为空
头    HOST: atguigu.com
      Cookie: name=guigu
      Content-type: application/x-www-form-unlencoded
      User-Agent: chrome 83
空行
体    username=admin&password-admin
```

### 1.4.3 响应报文
行 头 体
```
行  HTTP/1.1 200 OK
头  Content-type: text/html;charset=utf-8
    Content-length: 2048
    Content-encoding: gzip
空行
体  <html>
        <head>
        </head>
        <body>
            <h1>尚硅谷</h1>
        </body>
    </html>
```