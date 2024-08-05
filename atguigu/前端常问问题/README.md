1. ES6中var let const区别
```
    1. let const不能重复声明
    2. 块级作用域和暂时性死区(let const)：
        块级作用域:内层作用域->外层作用域->全局作用域
        暂时性死区:只要作用域内存在let、const，它们所声明的变量或常量就会自动“绑定”这个区域，不再受外部作用域的影响。
    3. 函数作用域(var let const):
        三者都有函数作用域
    4. es6(let,const)不存在变量提升 es5(var)存在变量提升
    5. var在全局作用域绑定可以通过window调用
```
2. cookie localstorage sessionstorage,indexedDB四者的区别
```
    1. cookie数据大小不能大于4K；localStorage和sessionStorage则可以达到5M，indexedDB每个域名不大于250MB；
    2. cookie在设置的有效期内一直有效； localStorage存储持久数据，只要不手动清除则一直存在，无时间限制； sessionStorage数据在当前标签页关闭或浏览器关闭后就会被自动清除
    3. cookie的数据会自动传递到服务器端，服务器端也可以写cookie到客户端;  localStorage和sessionStorage不会把数据自动传到服务器端，仅在本地存储。
    4. indexedDB是一个非关系数据库，先创建一个数据库，假设是键值对的形式，定义key的名字。然后在成功的回调里可以创建读写事务，进行增删改查。
    
```
3. 防抖和节流
```
    防抖：单位时间内，频繁触发事件，只执行最后一次
        - 典型场景(输入框完成)：搜索框搜索输入，手机号邮箱号验证
        - 代码思路是利用定时器，每次触发先清掉以前的定时器。（从新开始计时）

    节流：单位时间内，频繁触发事件，直接执行一次
        - 典型场景(滚动)：高频事件快速点击、滚动加载
        - 代码思路也是利用定时器，等定时器执行完毕，才开启定时器（不要打断计时）
    
    可以使用lodash库中的debounce（防抖）和throttle（节流）来做。
```
4. 强缓存和协商缓存
```
1.强缓存：不会向服务器发送请求，直接从缓存中读取资源，在chrome控制台的network选项中可以看到该请求返回200的状态码;(比较cache-control expires)(http1.0 http1.1)

2.协商缓存：向服务器发送请求，服务器会根据这个请求的request header的一些参数来判断是否命中协商缓存，如果命中（请求的资源未更新），则返回304状态码并带上新的response header通知浏览器从缓存中读取资源;如果资源更新则返回资源和状态码200；(比较Last-Modified etag)

两者的共同点是，都是从客户端缓存中读取资源；区别是强缓存不会发请求，协商缓存会发请求。
```
5. xss和csrf
```
    1.XSS 跨站脚本攻击(cross site script) csrf 跨站请求伪造(cross site request forgery)
    2.xss
        浏览器向服务器请求的时候被注入脚本攻击
        分成三种类型 反射型（非持久型）， 存储型（持久型），基于DOM
        防范手段：
            1.输入过滤
            2.输出过滤
            3.加httponly请求头 ，锁死cookie
    
    3.csrf
        黑客通过网站B 诱使用户去访问已经登陆的的网站A 进行一些违背用户意愿的请求，造成用户损失
        防范手段：
            1.服务器验证 http refer头信息 是否是同域名
            2.避免登录的session长时间存储在客户端中
            3.使用token或者验证码
    具体参考 https://blog.csdn.net/Dax1_/article/details/124045191
```
6. OSI七层模型
```
    1.应用层    HTTP，FTP
    2.表示层    数据格式化，数据加密
    3.会话层    解除或建立与别的接点的联系
    4.传输层    TCP/UDP
    5.网络层    IP
    6.数据链路层
    7.物理层
```
7. HTTP和HTTPS的区别
```
    1. HTTPS是HTTP协议的安全版本，HTTP协议的数据传输是明文的，是不安全的，HTTPS使用了SSL/TLS协议进行了加密处理。
    2. http和https使用连接方式不同，默认端口也不一样，http是80，https是443。
```
7. TLS四次握手
```
    1.客户端向服务端发送 tls版本，加密套件，第一随机数
    2.服务端向客服端发送 证书，公钥，第二随机数
    3.客户端随机生成第三随机数预主密钥，通过公钥给预主密钥加密发送给服务端
    4.服务端通过私钥，解密预主密钥，并通过第一，第二随机数和加密算法生成会话密钥，通过会话密钥加密发送server finish确定协商的密钥是一致的

    TLS四次握手加密方式是非对称的，建立连接后后续传输数据是使用会话密钥的对称加密。
```

8. 状态码
```
    301 302 304 400 401 403 404 500 503
    1XX- 信息型，服务器收到请求，需要请求者继续操作。
    2XX- 成功型，请求成功收到，理解并处理。
    3XX - 重定向，需要进一步的操作以完成请求。
    4XX - 客户端错误，请求包含语法错误或无法完成请求。
    5XX - 服务器错误，服务器在处理请求的过程中发生了错误。

    200 OK - 客户端请求成功
    301 - 资源（网页等）被永久转移到其它URL (永久转移) 这种跳转是永久性的，浏览器会记住新的 URL，并在未来的请求中直接使用新的 URL，而不再访问旧的 URL。
    302 - 临时跳转 (临时转移) 这种跳转是临时性的，浏览器不会记住新的 URL，未来的请求仍然会使用原始 URL。
    304 – 页面长时间不更新
    400 Bad Request - 客户端请求有语法错误，不能被服务器所理解
    401 Unauthorized - 请求未经授权，这个状态代码必须和WWW-Authenticate报头域一起使用
    403 Forbidden 没有权限访问此站
    404 - 请求资源不存在，可能是输入了错误的URL
    500 - 服务器内部发生了不可预期的错误
    503 Server Unavailable - 服务器当前不能处理客户端的请求，一段时间后可能恢复正常。
```
9.  跨域
```
    跨域是指一个域下的文档或脚本试图去请求另一个域下的资源。
    同源策略：一个源指的是主机名、协议和端口号的组合，必须相同

    1.jsonp
    2.跨域资源共享（CORS） Access-Control-Allow-Origin
    3.nginx代理: a网站向b网站请求1.js文件时，nginx根据配置文件接收这个请求，代替a网站向b网站来请求这个资源，nginx拿到这个资源后再返回给a网站，以此来解决了跨域问题。
    
```
10. TCP和UDP的区别
```
传输控制协议 TCP（Transmission Control Protocol）
    1.面向连接的，提供可靠交付
    2.有流量控制，拥塞控制
    3.面向字节流（把应用层传下来的报文看成字节流，把字节流组织成大小不等的数据块）
    4.每一条 TCP 连接只能是点对点的（一对一）。


用户数据报协议 UDP（User Datagram Protocol）
    1.无连接的，尽最大可能交付，
    2.没有流量控制，拥塞控制
    3.面向报文（对于应用程序传下来的报文不合并也不拆分，只是添加 UDP 首部）
    4.支持一对一、一对多、多对一和多对多的交互通信。


TCP应用：
（1）FTP：文件传输协议；
（2）SSH：安全登录、文件传送(SCP)和端口重定向；
（3）Telnet：不安全的文本传送；
（4）SMTP：简单邮件传输协议Simple Mail Transfer Protocol (E-mail)；
（5）HTTP：超文本传送协议 (WWW)；

UDP应用：
（1）流媒体
采用TCP，一旦发生丢包，TCP会将后续包缓存起来，等前面的包重传并接收到后再继续发送，延迟会越来越大。基于UDP的协议如WebRTC是极佳的选择。
（2）实时游戏
对实时要求较为严格的情况下，采用自定义的可靠UDP协议，比如Enet、RakNet（用户有sony online game、minecraft）等，自定义重传策略，能够把丢包产生的延迟降到最低，尽量减少网络问题对游戏性造成的影响。
采用UDP的经典游戏如FPS游戏Quake、CS，著名的游戏引擎Unity3D采用的也是RakNet。
（3）物联网
2014年google旗下的Nest建立Thread Group，推出了物联网通信协议Thread，完善物联网通信。
全球将近50%的人都在使用互联网，人们不断的追求更快、更好的服务，一切都在变化，在越来越多的领域，UDP将会抢占TCP的主导地位。
（4）QQ 文件传输、QQ语音、QQ视频
对于网络通讯质量要求不高的情况下，要求网络通讯速度能尽量快捷方便，就可以使用UDP技术。
```
11. TCP三次握手，四次挥手
![三次握手](https://img-blog.csdnimg.cn/6e968a961d7c48ff91a8a44768e54387.png#pic_center)
```
    问：为什么采用三次握手而不是两次握手?

    答：为了防止已失效的请求报文，突然又传到服务器引起错误。（如果一个SYN报文由于网络问题超时，超时后客户端重发与服务器端建立了连接，但网络恢复后原先SYN报文又发送到了服务器端，导致服务器端会认为有两条连接，而客户端认为只有一条连接。 如果有三次握手，则因为客户端收到服务器端第二次的SYN+ACK包后，由于超时不会再向客户端服务器端发送ACK，也不会使第二条连接成功。）
```
![四次挥手](https://img-blog.csdnimg.cn/c14df8b8c94a4c0e9066c77528df8c73.png#pic_center)
```
    终止等待1状态      关闭等待状态
    终止等待2状态      最后确认状态
    超时等待状态

    问：解释四次挥手。
    第一次挥手：客户端向服务器端发送FIN终止连接报文。客户端变为终止等待1状态。
    第二次挥手：服务器端向客户端发送ACK确认。服务器端变为关闭等待状态。
    第二次挥手与第三次挥手之间：服务器端可以持续向客户端发送未发送完的报文。
    第三次挥手：服务器端向客户端发送FIN报文。服务器端变为最后确认状态。
    第四次挥手：客户端向服务器端发送ACK。客户端变为超时等待状态。
               服务器端收到ACK后会立即进入关闭状态。

    问：为什么服务器端收到FIN后不立即关闭？
    答：因为服务器端可能有未发送完的报文需要继续发送。

    问：为什么客户端需要等待超时时间？
    答：因为客户端发完ACK后，服务器端可能因为网络原因接收不到。当服务器接收不到客户端ACK报文，由于超时，服务器会重新向客户端发送FIN报文，客户端此时处于超时等待状态会重新发送ACK报文，服务器接收到ACK报文后会立即关闭。

    问：四次挥手为什么是四次，三次不行吗？
    答：如果服务器直接发送FIN后直接关闭，而客户端没有收到FIN报文则会一直处于等待关闭状态。
```


12. http头部有哪些字段
```
    请求头
    User-Agent:告诉服务器，客户端的操作系统和浏览器版本
    Accept：表示客户端期望服务器返回的媒体格式(即响应体内容格式)。 image/jpg,text/html,application/json
    Accept-Charset：表示客户端期望服务器端返回内容编码格式 gb2312
    Accept-encoding: gzip,deflate,br
    Accept-Language：表示客户端期望服务器返回内容的语言 zh-cn
    Connection：告诉服务器，本次传输后是否保持连接，如keep-alive
    Cookie：客户端将Cookie信息传给服务器
    HOST：主机IP地址或域名
    Referer：当前文档的URL，表示从哪个站点链接过来的
    If-Modified-Since/If-None-Match(etag):

    响应头(Content-Type是响应体里的内容 如果发的post请求 有请求体 才会有Content-Type)
    Content-Type：请求体内容类型，如Application,Multipart/form-data
    Content-encoding: gzip
    Content-length：表示传输请求响应内容的长度
    Cache-control(强缓存): max-age=500 缓存机制，如no-cache,public,privite等
    expires(强缓存): Sat, 23 Mar 2024 17:06:56 +0800
    Last-Modified(协商缓存): Sat, 23 Mar 2024 16:58:36 +0800
    Set-cookie:
    
```
13. 头部的content-type干嘛的
```
    GET 请求不存在请求体部分，响应头不需要设置 Content-Type 字段

    POST 请求：
        text/plain	                      文本文件默认值
        text/html	                        HTML格式，内容会解析为html网页格式
        application/json	                JSON数据格式
        application/x-www-form-urlencoded	数据发送过程中会对数据进行序列化处理，以键值对形式? key1=value1&key2=value2的方式发送到服务器（表单默认的提交数据的格式）
        application/octet-stream        二进制流数据（如常见的文件下载）
        multipart/form-data 	        需要在表单中进行文件上传时，就需要使用该格式
        image/gif	                    GIF 图片 (无损耗压缩方面被 PNG 所替代)
        image/jpeg	                    JPEG 图片
        image/png	                    PNG 图片

```
14. 进程和线程和协程的区别 
```
    1. 丛属关系不同：
        进程是正在运行的程序实例，进程中包含了线程，而线程中不能包含进程。
    2. 描述侧重点不同：
        进程是操作系统分配资源的基本单位，而线程是操作系统调度的基本单位。
    3. 共享资源不同：
        多个进程间不能共享资源。
        每个进程有自己的堆，栈，虚存空间（页表），文件描述符等信息。
        而线程可以共享进程资源文件（堆和方法区）
    4. 上下文切换速度不同：
        线程上下文切换速度很快，进程的上下文切换的速度比较慢。
    5. 操纵者不同：
        一般情况下，进程的操纵者是操作系统，而线程的操纵者是编程人员。
    协程是一种用户态的轻量级线程，一个线程可以拥有多个协程。

    多线程的优点：
        可以提高CPU的利用率。在多线程程序中，一个线程必须等待的时候，CPU可以运行其它的线程而不是等待，
    这样就大大提高了程序的效率。
```
15.  进程之间的通信方式
```
    1、无名管道通信
　　无名管道（ pipe ）：管道是一种半双工的通信方式，数据只能单向流动，而且只能在具有亲缘关系的进程间使用。进程的亲缘关系通常是指父子进程关系。
    匿名管道是最基本的 IPC 机制，通常用于具有亲缘关系的进程（如父子进程）之间的通信。
　  2、有名管道通信
　　有名管道 （named pipe） ： 有名管道也是半双工的通信方式，但是它允许无亲缘关系进程间的通信。
    命名管道是一种特殊类型的文件，可以在不相关的进程之间进行通信。
　　3、高级管道通信
　　高级管道（popen）：将另一个程序当做一个新的进程在当前程序进程中启动，则它算是当前程序的子进程，这种方式我们成为高级管道方式。
　　4、消息队列通信
　　消息队列（ message queue ） ： 消息队列是由消息的链表，存放在内核中并由消息队列标识符标识。消息队列克服了信号传递信息少、管道只能承载无格式字节流以及缓冲区大小受限等缺点。
                                消息队列是一种通过消息传递进行进程间通信的机制，消息以队列的形式存储。
　　5、共享内存通信
    共享内存是一种允许多个进程共享同一块内存区域的通信机制。
　　6、套接字通信
　　套接字（ socket ） 
    套接字是一种通过网络进行进程间通信的机制，支持本地和远程通信。
   7、信号｜信号量
   信号是一种用于通知进程某个事件发生的机制。
```
16.  线程间通信
```
    共享内存：
        线程可以通过共享变量进行通信，即多个线程访问同一块内存区域。
        在 C 语言中，使用全局变量或静态变量作为共享变量。
    消息队列：
        每个线程可以将消息放入队列或从队列中取出消息。
    事件通信：
        事件是一种用于线程之间同步的机制，一个线程可以等待某个事件的发生，而另一个线程可以设置该事件。
```
17.  线程同步的方式？
```
    线程同步:同步就是协同步调，按预定的先后次序进行运行。(避免冲突)

    1.临界区： 在任意时刻只允许一个线程对共享资源进行访问
    2.信号量：限制在同一时刻访问此资源的最大线程数目
    3.互斥对象：只有拥有互斥对象的线程才有访问公共资源的权限
    4.事件对象：通过通知操作的方式来保持线程的同步

```
18. http有什么问题，所以才会去用https去解决？
```
    1.通信使用明文(不加密)内容会被监听
    2.不验证通信方的信息,因此可能遭遇伪装
    3.无法证明报文的完整性,所以有可能遭到篡改
```

19. 讲述url(输入词)输入到浏览器展示网页的过程
```
    1.用户输入关键词，如果是搜索内容，会使用浏览器默认搜索引擎加上搜索内容合成url;如果是域名会加上协议(如 https)合成完整的 url。
    2.然后按下回车。浏览器进程通过IPC(进程间通信)把url传给网络进程(网络进程接收到 url 才发起真正的网络请求)。
    3.网络进程接收到 url 后，先查找有没有缓存。
    - 有强缓存，直接返回缓存的资源。
    - 没有强缓存。(进入真正的网络请求)。首先获取域名的 IP，系统会首先自动从 hosts 文件中寻找域名对应的 IP 地址;如果没有找到，则系统会将网址提交 DNS 域名解析服务器来进行 IP 地址的解析。
    4、利用 IP 地址和服务器建立 TCP 连接(3 次握手)
    5、建立连接后，浏览器构建数据包(包含请求行，请求头，请求体，并把该域名相关 Cookie 等数据附加到请求头)，然后向服务器发送请求消息
    6、服务器接收到消息后根据请求信息构建响应数据(包括响应行，响应头，响应正文).应用层HTTP解析请求头和请求体
    - 如果需要重定向，返回HTTP响应数据的状态码301或者302，同时在请求头的Location字段中附上重定向地址，浏览器会根据code和Location进行重定向提作;
    - 如果不是重定向，首先服务器会根据请求头中的If-None-Match的值来判断请求的资源是否被更新，如果没有更新，就返回304状态码，告诉浏览器之前的缓存还可以使用，不需要返回新数据，否则返回新数据和200的状态码，并且如果浏览器需要缓存数据的话，就在相应头中加入字段:Cache-Control:Max-age=？
    响应数据又顺着应用层——传输层——网络层——网络层——传输层——应用层的顺序返回到网络进程
    7.数据传输完成，TCP四次挥手断开连接。如果浏览器或者服务器在HTTP头部加上Connection:Keep-Alive，TCP就一直保持连接，这样再次传输时不需重新建立连接，提高资源加载速度
    8、网络进程接收到响应数据后进行解析，根据响应头中的Content-type来判断响应数据的类型，如果是字节流类型（application/octet-stream），就将该请求交给下载管理器;如果是text/html类型，就通知浏览器进程将获取的文档进行渲染

```

20.  讲述浏览器渲染过程
```
    1.解析HTML：
        获得DOM树和CSSOM树
    2.样式计算：
        把DOM树和CSSOM树合并到一起，获得带有样式的DOM树(渲染树)
    3.布局：
        获得布局树，布局树上的每一个节点都拥有它在页面上的位置也就是X，Y的坐标以及盒子模型的大小等几何信息。
    4.分层：
        获得层次树。
        分层的好处在于，改变某一层级的元素时，只会对该层级产生影响，从而提高效率
    5.生成绘制指令：
        主线程会给每一层单独生成一个绘制的指令集，用于生成该层的图像生成。
    6.分块：
        合成线程它首先会对每个图层进行一些分块，划分为更小的区域。
    7.光栅化：
        确认每一个像素点的rbg颜色信息 
    8.绘制：
        渲染到屏幕上。

```
19. 重排（回流）和重绘
```
    触发重排：
        当我们的渲染树发生元素的尺寸，结构或者属性发生变化的时候，浏览器会重新解析dom树和css树

    触发重绘：(分块,光栅化,绘制)
        当页面中某些元素的样式发生变化，但不会影响其在文档流中的位置时，浏览器就会对元素进行重新绘制。

    总结：这也是为什么重排的触发比重绘更加影响性能的渲染，因为重排会触发渲染主的流程的重新渲染，而重绘只需要重新执行合成线程
```
20. 实现水平垂直居中
```
    父块子块(div)：
        1.水平margin:0 auto 垂直margin-top计算
        2.子绝父相 left,top,bottom,right:0 margin:auto 前提子有宽高
        3.子绝父相 left,top：50% transform:translate(-50%,-50%)
        4.父flex justify-content,align-items:center
        5.父flex 子margin:auto

    父块子行(span)：
        1.父元素设置text-align:center,line-height=height;
        2.不行 因为span没有宽高
        3.子绝父相 left,top：50% transform:translate(-50%,-50%)
        4.父flex justify-content,align-items:center
        5.父flex 子margin:auto
```
21. null和undefined的区别 
```
    相同点：
        1.都是原始类型
        2.判断时均转为false
    
    不同点：
        1.undefined==null true
          undefined===null false
        2.undefined转为数值时是NaN
          null转为数值时是0
        3.typeof(null)='object' 这是一个历史遗留问题null instanceof Object => false
          typeof(undefined)='undefined'
        4.undefined表示 缺少值，即此处有值但是还没有定义
          null表示 此处不应该有值
```
22. http请求的方式
```
    get
    post
    put ：put 方法跟 post 方法很像，也是向服务器提交数据，但是 put 方法指向了资源在服务器上的位置，而 post 方法没有。
    head 只请求页面的首部
    delete 删除服务器上的某资源
    options 1、获取服务器支持的HTTP请求方法；2、用来检查服务器的性能。


```
23. BFC
```
    1.BFC是Block Fomatting Context(块级格式上下文)，开启后会有一些隐藏功能。
    2.开启BFC解决了什么问题
        (1)元素开启BFC后，其子元素不会再产生margin塌陷问题
        (2)元素开启BFC后，自己不会被其他浮动元素所遮盖
        (3)元素开启BFC后，就算其子元素浮动，元素自身高度也不会塌陷。
    3.如何开启BFC
        (1)根元素
        (2)浮动元素
        (3)绝对定位，固定定位的元素
        (4)行内块元素
        (5)表格相关元素
        (6)overflow不为visible的块元素
        (7)伸缩项目
        (8)display:flow-root
```
24. cookie的作用
```
    1.工作原理
        (1)第一次请求时，为该用户生成一个唯一的识别码（Cookie id），创建一个Cookie对象；通过set-cookie响应头设置用户的cookie信息
        (2)第二次请求时，用户请求头中携带cookie信息，服务器可以通过cookie找到对应会话，通过判断会话来判断用户状态。
    2.应用
        (1)记住密码，下次自动登录
        (2)购物车功能
        (3)记录用户浏览数据，进行广告推荐
    3.缺点
        (1)Cookie会被附加在每个HTTP请求中，增加流量
        (2)HTTP中cookie明文传输，有安全性问题
        (3)Cookie大小限制在4K，对于复杂存储需求不够用。
```
25. 闭包
```
    闭包的定义：访问外层函数作用域的内层函数就是闭包
    闭包是否一定要return：不一定，外部如果想使用闭包的变量，则此时需要return
    可能会造成内存泄露：变量被引用着就不会回收掉。
```
26. MVC设计模式 和 MVP 和 MVVM
```
    MVC:
    Model,View,Controller
    View：前端显示
    Controller： 调度中心，负责通知数据库拉取数据，在数据获取完成后通知View显示数据
    Model： 在数据库中拉取数据
        优点是分层清晰，缺点是数据流混乱，灵活性带来的维护性问题。
        
    MVP:
        MVP是MVC的进化形式，Presenter作为中间层负责MV通信，解决了两者耦合问题，但是P层过于臃肿会导致维护问题。
    MVVM:
        view-model不仅解决了MV耦合问题问题，还同时解决了维护维护两者映射关系的大量繁杂代码和DOM操作代码。
        1.viewModel通过实现一套数据响应式机制自动响应model中数据变化；
        2.实现一套更新策略自动将数据转化为视图更新，使用虚拟dom和diff算法，减少了对真实dom的操作。
        
```

27. 介绍一下伪类和伪元素
```
    伪类：元素在某特性或状态下的样式
        动态伪类:lvha :link :visited :hover :active
        结构伪类: :first-child :last-child :nth-child :nth-last-child :first-of-type :last-of-type :nth-of-type :nth-last-of-type
        first-child强调某个父元素的第一个子元素，而:first-of-type强调的是特定类型的第一个，不必是第一个子元素

    伪元素：创建虚拟元素并定义其样式
        ::before
        ::after
        ::first-letter
```
28.  css3的新特性用过吗？
```
    1.新增边框属性
        border-color,border-radius,border-image,box-shadow
    2.新增背景属性
        background-size,background-origin,background-clip
    3.新增文字属性
        text-shadow
    4.新增动画效果
        transform,animation
    5.新增过渡效果
        transition
```
29. transition怎么用
```
    transition:1s linear all 0.5s
    transition-duration:1s
    transition-timing-function:ease(平滑过渡) ease-in ease-out linear.....
    transition-property:all
    transition-delay:0.5s
```
30. transform和transition和animation
```
    transform：translate,scale,rotate,skew(扭曲，不常用)
    transition：property duration timing-function delay
    animation: name duration timing-function delay iteration-count direction fill-mode;
    @keyframes name{
        from{

        }
        to{

        }
    }
```
31. transition和animation的区别
```
    1.动画不需要任何的触发条件，直接运行。过渡需要hover或者点击等事件触发。 过渡用于在元素状态发生变化时，平滑地改变元素的样式属性。
    2.动画可以通过关键帧精细设置。过渡只关心始末。
```
32. 死锁
```
    多个线程因为争夺资源而互相等待。
    例子：线程A持有a锁，线程b持有b锁，线程a需要访问b，线程b需要访问a，而ab锁都在被占用而未被释放，造成互相等待的局面

    解决方案：
        1.以确定的顺序获得锁
            (1)资源一次性分配： 一次性分配所有资源，只要一个资源得不到分配，则不分配任何资源
            (2)资源有序分配：   系统给每类资源进行编号，进程按编号递增顺序请求资源，释放则相反。
        2.可剥夺资源：
            当进程已经获得了部分资源，但得不到其他资源，则释放已占有的资源
        3.超时放弃：
            超时以后放弃所有获得的锁。

```
33. http1和2
```
    HTTP 1.0

    每次请求都需要与服务器建立一个TCP连接（即3次握手4次挥手），服务器完成请求处理后立即断开TCP连接
    发送端队首阻塞
    缺点： TCP链接无法复用，造成浪费880

    HTTP 1.1

    支持长连接 Connection：Keep-Alive （HTTP/1.1的默认模式使用带流水线的持久连接），在一个TCP连接上可以传送多个HTTP请求和响应，减少了建立和关闭连接的消耗和延迟。

    管道化：基于上面长连接的基础，管道化可以不等第一个请求响应继续发送后面的请求，但响应的顺序还是按照请求的顺序返回

    Cache缓存机制
    

    HTTP 2.0
    1.多路复用:
        在连接后，一次可以发送多个请求和响应

    2.二进制分帧:
        二进制传输,首部信息会被封装到 HEADER frame，Request Body 则封装到 DATA frame 里面。

    3.头部压缩:
        HPACK算法

    4.服务器推送:
        在客户端请求之前发送数据。

    nginx添加：listen 443 ssl http2;
    
    HTTP 3.0
        为了解决HTTP 2.0存在的问题:
            1.队头堵塞(TCP的问题)：序号小的包发生丢包，序号较大的包必须等待序号小的包重传到才能接收
            2.TCP连接与TLS握手延迟：TCP三次握手，和TLS四次握手 3个RTT
        
        解决方法:
            使用UDP协议和QUIC协议，QUIC整合了TCP和TLS协议，使用一次握手即可完成连接与加密操作。
            为什么使用UDP协议？因为TCP协议无法在全世界再进行更改，虽然使用UDP协议，但QUIC封装大多都遵循了TCP的协议。

```
34. cookie
```
    http1.0:
    expires:失效的时间

    http1.1:
    max-age:-1表示处于会话阶段
    max-age:0表示删除cookie
    max-age:正数 expires=当前时间+max-age

```
35. 选择器优先级
```
    简单聊:
    !important>行内样式>id选择器>类选择器>元素选择器>通配选择器>继承样式

    复杂聊:
    从左向右比较(a,b,c)
    a id选择器
    b 类/伪类/属性选择器
    c 元素/伪元素选择器
```
36. promise
```
    promise就是一个异步编程。
    1.支持链式调用，解决回调地狱问题(不便于阅读，不便于异常处理)
    2.async await一起使用，解决回调地狱问题
```
37. js的基本数据类型
```
    基本数据类型:Number,String,Boolean,Null,Undefined,Symbol
    引用数据类型:Object,Function,Array

    变量名存储的是值 | 存储的是地址(引用)
    值存储在栈内存中 | 值存储在堆内存中
    通过值复制     |  通过引用复制
    比较的是值本身 | 比较的是引用
    值不可变      |  值可变         (值不可变指的是多个引用可以指向同一个字面量，当引用的值改变时创建新的字面量，重新指向这个值https://blog.csdn.net/WinstonLau/article/details/88754704)
    占用固定的内存空间 | 占用不固定的内存空间 （堆栈的区别）
    typeof 1 -> 'number'
    typeof 'abc' -> 'string'
    typeof true -> 'boolean'
    typeof null -> 'object' 历史遗留问题
    typeof undefiend -> 'undefined'

    typeof {} -> 'object'
    typeof [] -> 'object'
    typeof ()=>{} ->'function'
```
38. prototype和__proto__
```
- 我们所创建的每一个函数，解析器都会向函数中添加一个属性`prototype`。这个属性对应着一个对象，这个对象就是我们所谓的原型对象。
- 如果函数作为普通函数调用`prototype`没有任何作用
- 当函数以构造函数的形式调用时，它所创建的对象中都会有一个隐含的属性，指向该构造函数的原型对象，我们可以通过`__proto__`来访问该属性。
- 原型对象就相当于一个公共的区域，所有同一个类的实例都可以访问到这个原型对象，我们可以将对象中共有的内容，统一设置到原型对象中。
- 当我们访问对象的一个属性或方法时，它会先在对象自身中寻找，如果有则直接使用，如果没有则会去原型对象中寻找，如果找到则直接使用。
- 直到找到Object的原型对象<br>
```

    类或构造函数上才有prototype属性，实例对象获原型对象上都是__proto__属性。
![prototype](https://img-blog.csdnimg.cn/2aba7ed4371741639cdf3dc0fd08b368.png#pic_center)
```js
// prototype 和 __proto__
function Person(name,age){
    this.name=name
    this.age=age
}

// 向Person的原型中添加一个方法
Person.prototype.sayName=function(){
    console.log(this.name)
}

// 创建一个实例
var p1=new Person('zhangsan',18)
var p2=new Person('lisi',22)

// 调用实例的方法，会在person的__proto__中寻找（即Person的prototype）
p1.sayName()
p2.sayName()

console.log(p1.__proto__ == Person.prototype) // -> True
```
> `Person`的`prototype` 和 `person`的`__proto__`均指向**Person的原型对象**<br>
> 原型对象中保存一些公共的属性和方法。

**原型对象案例**
```js
function MyClass(){

}
MyClass.prototype.name="我是原型对象中的name";
var mc=new MyClass();

// 使用in检查对象中是否含有某个属性时，如果对象中没有但是原型中有，也会返回true
console.log('name' in MyClass)//-> true
console.log('name' in mc)//-> true

// 可以使用对象的hasOwnProperty()来检查对象自身是否含有该属性
console.log(mc.hasOwnProperty('name')); // -> false
console.log(mc.__proto__.hasOwnProperty('name'));// -> true 原型中含有name属性

// 判断hasOwnProperty方法的位置
// hasOwnProperty在Object的原型上 | Person的原型的原型上
console.log(mc.__proto__.hasOwnProperty('hasOwnProperty')); // -> false
console.log(mc.__proto__.__proto__.hasOwnProperty('hasOwnProperty'));// -> true

// Person的原型的原型的原型为null
console.log(mc.__proto__.__proto__.__proto__); // -> null

```
39. 性能优化
```
    面试回答思路:(以下是性能优化的回答)
    1. 借助lighthouse工具进行优化，里面会提示首屏加载时间，第一次可交互时间，速度指标，最大文件加载速度。
    2. 压缩资源： 压缩HTML、CSS和JavaScript文件，减小文件大小，加快下载速度。
    3. 图像优化： 使用适当的图像格式（如WebP），并压缩图像以减小文件大小。
    4. 懒加载： 通过使用IntersectionObserver判断图片位置加载
    5. 异步加载：某些通过点击才触发的组件可以通过异步加载

    面试回答思路:(以下是渲染优化的回答 其实可以和上面一样)
    1. 减少重排和重绘，涉及样式，尺寸，节点增减操作都会影响到重绘重排。
    2. 懒加载图片,使用精灵图
    3. 使用虚拟dom
    4. 动画元素要absolute

    1. 页面加载性能：
    页面加载性能直接影响用户的第一印象和留存率。以下是一些优化页面加载性能的方法：
    压缩资源： 压缩HTML、CSS和JavaScript文件，减小文件大小，加快下载速度。
    使用CDN： 利用内容分发网络（CDN）来分发静态资源，使用户能够从距离更近的服务器加载资源。
    延迟加载： 延迟加载非关键资源，如图片和脚本，以减小初始页面加载时间。
    预加载： 使用<link rel="preload">来预加载关键资源，加速后续页面的加载。
    服务端渲染（SSR）： 对于某些应用程序，考虑使用服务端渲染以减少首次渲染时间。

    2. 渲染性能：
    渲染性能涉及浏览器将HTML、CSS和JavaScript转换为可见页面的速度。以下是一些优化渲染性能的方法：
    减少重排和重绘： 通过使用CSS硬件加速、合并和最小化CSS样式、避免使用昂贵的DOM操作来减少重排和重绘。
    懒加载： 仅在需要时加载不可见元素，如滚动懒加载图片。
    使用Web Workers： 将计算密集型任务移至Web Workers，以防止主线程阻塞渲染。
    使用虚拟DOM： 对于大型单页面应用（SPA），使用虚拟DOM库（如React或Vue）来最小化渲染操作。

    3. 资源优化：
    优化资源管理有助于减少页面加载时间和带宽消耗。以下是一些资源优化的方法：
    图像优化： 使用适当的图像格式（如WebP），并压缩图像以减小文件大小。
    字体优化： 仅加载所需的字体，避免不必要的字体请求。
    代码拆分： 使用代码拆分来将应用程序拆分为小块，仅在需要时加载。
    缓存策略： 利用浏览器缓存来减少重复资源请求，但确保及时更新缓存。
    资源合并： 合并多个CSS或JavaScript文件，以减少请求数量。
```
40. css文字隐藏溢出内容
```css
    overflow:hidden;
    white-spce:nowrap;
    text-overflow:ellipsis
```
41. get请求和post请求的区别
```
    1.get向服务端请求数据；post向服务端发送数据
    2.get请求的参数在query中，参数长度有限制，一般不超过2000个字符，且参数数据类型只能为asc2；post请求的参数在请求体里，参数长度没有限制,数据类型没有限制。
    3.get请求会被缓存；post不会被缓存
    4.对于客户端来说，post请求比get请求更安全，因为get请求的参数会保留在浏览器历史记录中。
    5.对于服务端来说，get请求比post请求更安全，因为get只请求数据，而post有用户提交的数据，可能会被注入。
    6.对于http来说，get和post都是不安全的，因为无论参数在哪均是明文传输。
```


42. ES6的模块化和Nodejs的模块化
```
    在ES6中，你使用import和export关键词来导入和导出模块。
    在Node.js中，你使用require和module.exports来导入和导出模块。
```
43.  hash路由和history路由
```
    1.hash路由带#号，history路由不带#号。 
    2.hash路由通过监听hashChange事件，history路由通过监听popstate事件
    3.history路由后端要特殊配置，否则刷新页面会404
```
44. session和token
```
    1.session由服务器创建，发送给浏览器，浏览器保存在cookie中，下次请求带着session_id发送给服务器，session中保存着过期时间。
    2.jwt(json web token)第一次由服务端生成，保存在客户端的cookie或storage中，下次请求带着jwt发送给服务器。jwt由三部分组成，header.payload.signature。header中保存着加密算法和token类型，payload中是自定义数据，signature是header和payload和服务端保存的密钥经由加密算法生成的一段签名。
    
```
45. DNS解析域名获得ip地址(UDP查询)
``` 
    迭代查询如下：
    1.用户终端设备发送DNS查询请求到本地域名服务器。本地递归域名服务器接收到查询请求后，检查是否有该域名的缓存记录。如果有，则直接返回缓存的解析结果给用户终端设备。如果本地递归域名服务器没有缓存记录或缓存已过期。
    2.本地域名服务器->根域名服务器 ->返回顶级域名服务器ip地址
    3.本地域名服务器->顶级域名服务器->返回权威域名服务器ip地址
    4.本地域名服务器->权威域名服务器->收到解析结果
    5.本地递归域名服务器将解析结果返回给用户终端设备，并将解析结果缓存起来，以备后续查询使用。

    递归查询更改:
    2.3.4 本地域名服务器->根域名服务器->顶级域名服务器->权威域名服务器（然后再返回来）

```
46. 事件冒泡与事件捕获
```
    dom事件流三个阶段：事件捕获阶段->处于目标阶段->事件冒泡阶段
    可以通过grandma.addEventListener('click',func,true)更改为捕获时触发

    阻止事件默认行为：
    如a标签跳转,表单点击提交
    e.preventDefault()
    e.returnValue=false
    return false

    阻止事件传播(冒泡/捕获):
    一个事件只会在捕获阶段 或 冒泡阶段触发，取决于addEventListener的第三个参数，如果是true的话就是捕获触发。无论是捕获阶段还是冒泡阶段只要这个事件停止了传播整个事件就不继续往下传。
    inner.addEventListener('click',function(){
        e.stopPropagation()
        e.cancelBubble=True //尽量别提这个
    })

    例子A->B->C->D,AC捕获，BD冒泡，C进行了停止传播，那么运行顺序为AC然后停止。

    
```
47. js垃圾回收
```
    1.引用计数
    例子
    let obj={} //obj引用计数为0
    let a=obj //obj引用计数为1 （obj被引用）
    let b=obj //obj引用计数为2
    a=1 //obj引用计数为1
    b=1 //obj引用计数为0

    存在问题(循环引用)
    let a={}
    let b={}
    a.name=b //a引用了b
    b.name=a //b引用了a

    2.标记清除
    当变量进入标记和离开环境时进行标记，当离开环境时进行清除

    3.内存常见泄露方式
    (1)函数内使用this声明全局变量 -> 使用严格模式
    (2)定时器没有clear,回调函数或参数占用大量资源 -> clearTimeout clearInterval
    (3)闭包 -> 进行手动清除 cnt=null
    (4)dom引用 -> outer=null
```
48. script中的async和defer
```
    两者都是异步执行，async执行时间不确定；defer下载时间不确定，会在浏览器解析完html后再执行脚本
    defer适用于外部脚本下载且操作了dom
    async适用于外部脚本下载
```
49. js中this指向问题
```
    1. 以**函数**的形式调用时,this永远都是window。
    2. 以**方法**的形式调用时，this就是调用方法的那个对象。
    3. 当以构造函数的形式调用时，this就是新创建的那个对象。
    4.箭头函数指向外层作用域this的指向，如果外层也是箭头函数则继续向前找。
```
50. ==和===
```
    1.==只比较值，不比较类型,但不将 null 和 undefined 转换成其他任何值；===先比较类型
    例子：
        undefined==null ->true 这是一个特例 因为Number(null)=0 Number(undefined)=Nan 认为null和undefined有相似之处
        1=='1' -> true
        undefined==false ->false
        null==false -> false
        1==='1' ->false
        let a={} let b={} a==b->false 比较的值是二者引用的地址 不相同
```
51. 一个url的组成部分
```
    http://www.aspxfans.com:8080/news/index.asp?boardID=5&ID=24618&page=1#r_70732423
    协议+域名(主机名)+端口+虚拟目录+文件名+参数+锚
    锚：即在跳转到网页后会自动滚动到锚点
```
52. js中的宏任务与微任务（eventloop）
```
    宏任务：
    1.新程序的运行(<sciprt>脚本)
    2.事件的回调函数
    3.setTimeout()和setInterval()

    微任务:
    1.Promise.then()
    2.Object.observe

    简单说
    同步任务->微任务->判断是否渲染->宏任务

    宏任务中有新的宏任务或微任务时，将其加入各自的任务队列，先清空微任务队列，再继续按队列顺序执行宏任务

```
53. 堆和栈的区别
54. es6新增特性
```
    1.let const
    2.解构赋值 const [a,b]=[1,2]  const [...a]=arr
    3.模板字符串 `${}` 
    4.Symbol
    5.支持for of
    6.Set Map
    7.Promise (理解不到位 还有调度器)
    8.Generator与async await
    9.Class
    10.
    对象的扩展 let a=100 {a}
```
55.  Object.getOwnPropertyNames()和Object.keys()和Reflex.ownKeys()的区别
```
    Object.getOwnPropertyNames返回的是对象中所有自己的属性(不包括symbol);
    Object.keys(obj)则返回的对象中所有自己的属性，也就是属性下的 enumerable: true 的属性。
                    主要用于遍历对象自有的可枚举属性，不包括继承自原型的属性和不可枚举的属性。
    for ... in 和 Object.keys都不能访问不可枚举属性。同时for in会迭代原型上的可迭代属性。
    Reflect.ownKeys()返回所有自有属性key，不管是否可枚举，但不包括继承自原型的属性
```
56. Symbol的作用
```
    1.给对象设置唯一的属性值,for in,Object.getOwnPropertyNames(),Object.keys()遍历不到 , Reflect.ownKeys(),Object.getOwnPropertySymbols()能遍历到
    2.可以使用Symbol变量进行宏管理，作为不同行为的判断值,即使他们的描述是相同的，但是他们变量的值是不同的(即确定了唯一的变量)，利用了Symbol值不同的特性。
    AAA=Symbol('aaa')
    BBB=Symbol('aaa')
    switch(action.type){
        case AAA:

        case BBB:
    }
    3.Symbol.for() 和 Symbol.keyFor() 
    for:在Symbol的全局注册表上注册一个值，如果已有的话直接返回这个值
    keyFor:查询值的描述值
```

57. async和await
```
    await用来等待promise异步编程的返回值，才会执行后续的操作。解决了地狱回调问题，改回调写法为同步写法。
    await只能等待promise的成功值，如果失败了需要用try,catch捕获
    await 等待的其他值直接返回结果

    async函数会返回一个promise对象

    三种await写法的区别:
    这种写法会2等待1结束，3等待2结束，是一个串行执行
    async f(){
        for(let i in [1,2,3]){
            await AsyncOperation()
        }
    }

    这种写法是一个并发执行，虽然1，2，3执行的顺序是不定的，但是console.log(item)打印的结果是确定的。一定会1执行完打印2，再打印3
    async f(){
        let promises=[AsyncOperation(),AsyncOperation(),AsyncOperation()]
        for await(let item of promises){
            console.log(item)
        }
    }

    更好的写法
    async f(){
        try{
            let values=await Promise.all([AsyncOperation(),AsyncOperation(),AsyncOperation()])
            for(let value of values){
                console.log(values)
            }
        }catch(e){
            console.log(e)
        }
    }
```
58. js单线程
```
    js是一门单线程的语言，它支持并发操作，是通过异步的方式实现的。异步就是通过在主程序上分配不同的时间片进行来完成的。
    常用的异步方式有promise技术,async await,setTimeout,setInterval。
    new promise本身是同步的，.then之后执行的是异步的。
    async本身是同步的，直到遇到await才会异步执行，await可以理解为添加了一个新的微任务。
```
59. a标签有哪些属性
```
    1.href 跳转到哪个链接 或者锚点
    2.target _self(默认值) 在当前标签页打开
             _blank 在新的标签页打开
    3.title 鼠标悬停显示的名字
    4.download 如果需要下载，下载文件的名字
    5.name 锚点的名字
    
```
60. 1


js单线程/多线程
微前端 vue中的diff算法 js是解释性语言 宏任务微任务 异步执行的顺序

eventloop事件循环,语法糖,重写内置call
for in循环会迭代原型上的可迭代属性 , 不会迭代symbol类型的属性 for in 和 for of的区别
Reflect用法
Generator


1.  进程间共享内存是怎么通信的 
2.  创建生命周期时父子执行顺序
3.  vue响应式内部深究

a标签有哪些属性
target除了a标签有，还有哪些标签有target属性（我没问答出来）

 //function 根构造函数
      
      //api nexttick
      //新生代 老生代回收
      //登陆


1.  python多线程


```
```
1.  1
2.  1


```
面试官您好，我叫王心雷，本科毕业于哈尔滨工业大学计算机科学与技术物联网专业，本科时成绩优异，以专业第八获得保研资格。在本科时，我参加了2021年全国大学生物联网竞赛，获得了全国二等奖，在2022年我获得了2022届哈尔滨工业大学优秀毕业生荣誉称号。我现在在哈尔滨工业大学软件工程学院攻读硕士研究生，毕业时间为2025年3月，在硕士期间我leetcode完成800题，并在leetcode周赛上取得了Knight称号，即排名全站前4%。在去年6到8月份我有一份在北京安顶盛公司旗下的万物心选app的前端工程师实习经历，在公司实习的两个月期间完成了多个项目。

```

```
    实习时遇到的技术问题：
        1.程序健壮性：
            判定背景图片链接是否为空(|空)，不能让页面白屏,经常用vif去判断。引用二级属性的时候，一定要判断一级属性是否为空。
        2.高斯模糊有白边：
            用scale的方式解决白边问题。
        3.搜索框：
        4.组件表格提取问题:
            以前非组件：下拉框改变msku_id,view_id ->Handler 解决更新问题
            现在组件：下拉框改变msku_id,view_id -》传到组件内部 watch监听传入参数的改变 重新执行表格数据拉取
```

```
    毕业设计：
        智慧养猪系统：
    1.智慧监测 -> 环境监测 ， 猪只应激反应监测
    2.智慧饲养 -> 猪只靠近监测 ， 智能投喂
    3.智慧控制与显示 -> 异常情况上报 ， 执行机构触发 ， 现场设备，云端，客户端显示
```
```
    中国招标网：
    招标网站，有很多招标信息，想找到里面的组织机构(公司)。这是一个自然语言处理里面的命名实体识别问题。
    用传统定义规则的方式找到了一些公司名。
    1.ac自动机，多模式字符串匹配。实现方式是拥有fail节点的trie树。O(n)的时间复杂度可以找到所有组合的词和位置。
    可以通过最大前向算法只选择b(begin)最先出现的词，使用单调栈记录所有词。
    2.命名实体识别。使用隐马尔科夫中的BMS模型,Begin Middle Simple(单个字),对公司名进行识别。
    3.无监督的新词发现。使用词频，和词与词或词之间的自由度和凝聚度来计算是否成词。自由度：考虑一个词的左右熵，X巧克X,天天向
    左面出现的字很多，右面出现的字很少，自由度就很小。凝聚度：的巧克，巧克力 ，统计'的'出现的次数 和'巧克'的出现次数 和'的巧克'的出现次数
    与'巧克'的出现次数 和'力'的出现次数 和'巧克力'的出现次数进行比较。
```
```
   砂石骨料质量由粒径和粒形决定，好的砂石粒径需要满足分布要求，传统方法使用人工筛选进行检测，费时费力，筛选一次成本较高，而使用计算机视觉方法可以快速检测出石头的粒径。通过实例分割的方法，分割出石头的边缘，并通过自动掩码补全技术对部分被遮挡的掩码进行补全，计算石头的粒径与分布，结果与人工筛选差异小于5%，满足项目需求。 
```
1.快速排序：
# 二.React
1.  useEffect
```jsx
    useEffect(()=>{
        // 在这里可以执行一些副作用操作
        doSomething() //相当于componentDidMount和相当于componentDidUpdate
        return ()=>{
            // componentWillUnmount
        }
    },[]) //要监听的对象 谁都不监听就相当于componentDidMount 监听谁就相当于componentDidMount和componentDidUpdate

    // 想让useEffect第一次不执行需要使用useRef()
```
1.  diff
```
    渲染真实DOM的开销很大，有时候我们修改了某个数据，直接渲染到真实dom上会引起整个dom树的重绘和重排。
    diff算法的本质就是：进行虚拟dom之间的比较，没有改变的虚拟dom直接作为真实dom继续使用。
```
1.  1
2.  1
3.  1
4.  1
5.  



transform里面有什么 transition怎么用 animation怎么用

9.手撕promise.all
12.讲一下从浏览器输入url，点击回车后发生了什么


addEventListener 的第三参数
增加防抖功能
怎么减少重复渲染






https加密

decodeURIComponent和...的区别

缓存，cookie



- 数组方法some every区别
- 数组方法filter find区别


怎么做线程同步？


react hook

react provider标签以及其使用原理

react 路由的两种模式

