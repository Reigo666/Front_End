1. ES6中var let const区别
```
    1. let const不能重复声明
    2. 块级作用域和暂时性死区：
        只要作用域内存在let、const，它们所声明的变量或常量就会自动“绑定”这个区域，不再受外部作用域的影响。
    3. let不存在变量提升
    4. var在全局作用域绑定可以通过window调用
```
2. cokkie localstorage sessionstorage三者的区别
```
    1. cookie数据大小不能大于4K；localStorage和sessionStorage则可以达到5M；
    2. cookie在设置的有效期内一直有效； localStorage存储持久数据，只要不手动清除则一直存在，无时间限制； sessionStorage数据在当前浏览器关闭后就会被自动清除
    3. cookie的数据会自动传递到服务器端，服务器端也可以写cookie到客户端;  localStorage和sessionStorage不会把数据自动传到服务器端，仅在本地存储。
    
```
3. 防抖和节流
```
    防抖：单位时间内，频繁触发事件，只执行最后一次
        - 典型场景：搜索框搜索输入，手机号邮箱号验证
        - 代码思路是利用定时器，每次触发先清掉以前的定时器。（从新开始）

    节流：单位时间内，频繁触发事件，直接执行一次
        - 典型场景：高频事件快速点击、滚动加载
        - 代码思路也是利用定时器，等定时器执行完毕，才开启定时器（不要打断）
    
    可以使用lodash库中的debounce（防抖）和throttle（节流）来做。
```
4. 强缓存和协商缓存
```
1.强缓存：不会向服务器发送请求，直接从缓存中读取资源，在chrome控制台的network选项中可以看到该请求返回200的状态码;

2.协商缓存：向服务器发送请求，服务器会根据这个请求的request header的一些参数来判断是否命中协商缓存，如果命中（请求的资源未更新），则返回304状态码并带上新的response header通知浏览器从缓存中读取资源，如果资源更新则返回资源和状态码200；

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
8. 状态码
```
    301 302 304 400 401 404 500 503
    1XX- 信息型，服务器收到请求，需要请求者继续操作。
    2XX- 成功型，请求成功收到，理解并处理。
    3XX - 重定向，需要进一步的操作以完成请求。
    4XX - 客户端错误，请求包含语法错误或无法完成请求。
    5XX - 服务器错误，服务器在处理请求的过程中发生了错误。

    200 OK - 客户端请求成功
    301 - 资源（网页等）被永久转移到其它URL
    302 - 临时跳转
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
    User-Agent:告诉服务器，客户端的操作系统和浏览器版本
    Accept：表示客户端期望服务器返回的媒体格式。 image/jpg,test/html,application
    Accept-Charset：表示客户端期望服务器端返回内容编码格式 gb2312
    Accept-Language：表示客户端期望服务器返回内容的语言 zh-cn
    Connect：告诉服务器，本次传输后是否保持连接，如keep-alive
    Content-Type：请求体内容类型，如Application,Multipart/form-data
    Content-length：表示传输请求响应内容的长度
    Cookie：客户端将Cookie信息传给服务器
    Cache-Control：缓存机制，如no-cache,public,privite等
    HOST：主机IP地址或域名
    Referer：当前文档的URL，表示从哪个站点链接过来的
    
```
13. 头部的content-type干嘛的
```
    GET 请求不存在请求体部分，请求头不需要设置 Content-Type 字段

    POST 请求：
        text/plain	                        文本文件默认值
        text/html	                        HTML格式，内容会解析为html网页格式
        application/json	                JSON数据格式
        application/x-www-form-urlencoded	数据发送过程中会对数据进行序列化处理，以键值对形式? key1=value1&key2=value2的方式发送到服务器（表单默认的提交数据的格式）
        application/octet-stream        二进制流数据（如常见的文件下载）
        multipart/form-data 	        需要在表单中进行文件上传时，就需要使用该格式
        image/gif	                    GIF 图片 (无损耗压缩方面被 PNG 所替代)
        image/jpeg	                    JPEG 图片
        image/png	                    PNG 图片

```
14. 进程和线程的区别
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
```
15. 进程之间的通信方式
```
    1、无名管道通信
　　无名管道（ pipe ）：管道是一种半双工的通信方式，数据只能单向流动，而且只能在具有亲缘关系的进程间使用。进程的亲缘关系通常是指父子进程关系。
　  2、有名管道通信
　　有名管道 （named pipe） ： 有名管道也是半双工的通信方式，但是它允许无亲缘关系进程间的通信。
　　3、高级管道通信
　　高级管道（popen）：将另一个程序当做一个新的进程在当前程序进程中启动，则它算是当前程序的子进程，这种方式我们成为高级管道方式。
　　4、消息队列通信
　　消息队列（ message queue ） ： 消息队列是由消息的链表，存放在内核中并由消息队列标识符标识。消息队列克服了信号传递信息少、管道只能承载无格式字节流以及缓冲区大小受限等缺点。
　　5、共享内存通信
　　6、套接字通信
　　套接字（ socket ） 
```
16. 线程间通信
```
    共享内存、消息传递
```
17. 线程同步的方式？
```
    线程同步:同步就是协同步调，按预定的先后次序进行运行。

    1.临界区： 在任意时刻只允许一个线程对共享资源进行访问
    2.互斥对象：只有拥有互斥对象的线程才有访问公共资源的权限
    3.信号量：限制在同一时刻访问此资源的最大线程数目
    4.事件对象：通过通知操作的方式来保持线程的同步

```
18. http有什么问题，所以才会去用https去解决？
```
    1.通信使用明文(不加密)内容会被监听
    2.不验证通信方的信息,因此可能遭遇伪装
    3.无法证明报文的完整性,所以有可能遭到篡改
```
1.  讲述浏览器渲染过程
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
    父块子块：
        1.水平margin:0 auto 垂直margin-top计算
        2.子绝父相 left,top,bottom,right:0 margin:auto 前提子有宽高
        3.子绝父相 left,top：50% transform:translate(-50%,-50%)
        4.父flex justify-content,align-items:center
        5.父flex 子margin:auto

    父块子行：
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
        3.undefined表示 缺少值，即此处有值但是还没有定义
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
    1.动画不需要任何的触发条件，直接运行。过渡需要hover或者点击等事件触发。
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
36. 1
37. 1
38. 1
39. 1
40. 

```
面试官您好，我叫王心雷，本科毕业于哈尔滨工业大学计算学部，现在在哈尔滨工业大学模式识别实验室攻读硕士研究生，主要的研究方向是计算机视觉。对计算机前端方面有较大兴趣，目前自学一年多，已经较系统学习了html，css，js，react，ajax，promise技术。

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



a标签有哪些属性
target除了a标签有，还有哪些标签有target属性（我没问答出来）


https加密


缓存，cookie



- 数组方法some every区别
- 数组方法filter find区别


怎么做线程同步？


react hook

react provider标签以及其使用原理

react 路由的两种模式

