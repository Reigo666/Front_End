1. Vue2数据代理
```
    1.将data中的数据代理到vm对象上，易于读取
    2.原理使用Object.defineProperty()把data对象中所有属性添加到vm上
```
2. vue2与vue3区别 diff算法怎么实现!
```
    1.双向绑定更新
        vue2使用defineProperty做数据劫持，结合订阅发布实现数据更新
        vue3使用Proxy对数据代理
    2.性能提升
        vue2所有方法都在vm上
        vue3可以按需引入
    3.生命周期名变了
        mounted->onMounted
    4.数据初始化和接收方式不一样
        使用setup
    5.配置式api和组合式api
        vue2上上下下改
        
```

2. vue中的diff算法
```
    比较新旧的vnode是否相同来判断是否更新。
    1.先判断是否是SameVnode(old,new), 判断其中的key，tag，iscomment，是否含有数据，这些点是否相同；samevnode是一个
    初步的快速比较，比较两个节点是否相同，如果不相同直接用新节点代替旧节点。
    2.在节点初步比较相同的情况下，diff算法的核心在patchVnode上。patchVnode是一个深层次的比较，比较其中的数据内容
    是否一致，会比较新旧文本，新旧子节点的情况。

```


3. vue的生命周期
```
  注意：这里所有函数后描述的都是在这之前已经完成的事件。
  1.beforeCreate() 在beforeCreate之前完成了 生命周期和事件的初始化(定义什么时候执行生命周期函数)（beforeCreate指的是数据监测和数据代理创建之前）
  2.Created() 在created之前完成了 数据监测和数据代理
    数据监测：_data中的数据存在get name() set name()
    数据代理：vm上有name这个参数
  3.beforeMount() vm生成虚拟dom，呈现未经编译的dom，此时操作dom最终不生效
  4.mounted() 将虚拟dom转为真实dom。在这里执行绑定定时器，发送网络请求，订阅消息，绑定自定义事件。
  5.beforeUpdate() 数据已经更新，视图还没有更新
  6.updated() 页面和数据已经保持同步
  7.beforeDestroy() vm中的data,methods依然可用。数据可以更改，但不会触发视图更新。一般在此阶段：关闭定时器，取消订阅消息，解绑自定义事件等。
  8.destroyed() 已经销毁。react没有这个钩子，这个钩子一般什么都不干。

  最常用的两个生命周期钩子
  mounted():发送网络请求，绑定定时器，绑定自定义事件，订阅消息。
  beforeDestroy():清除定时器，解绑自定义事件，取消订阅消息。
```
4. vue和react区别
```
    1.监听数据变化的实现原理不同
        Vue通过getter/setter方法以及一些函数的劫持能精确知道数据的变化
        React默认是通过比较引用方式diff算法进行的，若不优化，会导致大量不必要的VDom的重新渲染。
    2.数据流不同
        Vue实现双向绑定：props可以双响绑定，组件与Dom之间可以通过v-moudel绑定。
        React不支持双向绑定：提倡单向数据流，称之为onChange/setState模式。
    3.组件通信的区别
    Vue中有三种方式可以实现组件通信：
    a. 父传子props，子通过回调函数传参给父；
    b. 通过事件发送自定义消息(全局事件总线)；
    c. 通过Vue2.2中新增的provide/inject来实现父组件向子组件注入数据，可以跨越多个层级。
    d.消息订阅发布pubsub

    React中有三种方式实现组件通信：
    a. 父传子props，子通过回调函数传参给父；
    b. 可以通过context进行跨层级的通信；
    c. 消息订阅发布pubsub

    6.框架本质不同
    Vue本职是MVVM框架，有MVC发展而来。
    React是前端组件框架，有都断组件演化而来。
```
5. vm和vc
```
    vm是Vue的实例对象,vc是VueComponents的实例对象。
    vm有$el,vc生成数据时必须是函数式写法。
    VueComponent.prototype.__proto__===Vue.prototype
```
6. 自定义事件
```
    自定义事件相比props不用再传函数，子组件也不用props接函数。
    1.实现父子组件通信：
        在子组件上添加自定义事件，在子组件上触发自定义事件，自定义事件的触发的函数在父组件上。
        父组件:
        <div>
            <Child v-on:atguigu="getName"/>
            <Child @atguigu="getName"/>
            <Child ref=child/> //方式3
        </div>

        mounted(){
            this.$refs.child.$on('atguigu',this.getName)  //方式3
        }
        子组件:
        mounted(){
            this.$emit('atguigu',name)
        }

        总结：在子组件上创建自定义事件，在子组件上触发，回调函数在父组件。
            谁想收到数据，回调函数就在哪，自定义事件就在哪定义。

    2.解绑自定义事件
        this.$off('atguigu')
        this.$off(['atguigu','demo'])
        this.$off() //解绑所有事件
    
    3.组件上绑定原生dom事件，需要使用native修饰符,否则会被当成自定义事件。
        <Child @click.native="getName"/>
```
7. vue父子组件挂载顺序
```
    父组件初始化->父组件渲染->子组件初始化->子组件渲染->子组件挂载->父组件挂载 (可以用递归先序遍历来理解这个事情)

    怎么在父组件挂载后，子组件再执行一些在子组件上的操作:
    核心思路：使用全局事件总线，在子组件上创建自定义事件，在父组件上触发。
    全局:
        Vue.prototype.$bus=new Vue() //安装全局事件总线方法1
        beforeCreate(){
            Vue.prototype.$bus=this
        }
    父组件挂载后:
        mounted(){
            this.$bus.emit('ParentMounted')
        }
    子组件挂载后:
        mounted(){
            this.$bus.on('ParentMounted',function(){ //创建自定义事件
                console.log('父组件挂载完毕')
            })
        }
    
    总结：在子组件上创建自定义事件，在父组件上触发，回调函数在子组件
```
8.全局事件总线
```
    一种组件间通信方式，适用于任意组件间通信
    1.安装全局事件总线
        Vue.prototype.$bus=new Vue() //安装全局事件总线方法1
        beforeCreate(){
            Vue.prototype.$bus=this
        }
    2.使用事件总线 (谁想收到数据，回调函数就在哪，自定义事件就在哪定义。)
        A组件收数据
        mounted(){
            this.$bus.$on('demo',this.getName)
        }
        B组件发数据
        mounted(){
            this.$bus.%emit('demo',name)
        }
    3.解绑总线自定义事件
        A组件中
        beforeDestroy(){
            this.$bus.$off('demo')
            this.$bus.$off() //这会解绑所有总线事件 是不对的
        }
```

7. vm.$nextTick(()=>{})
```
    this.$nextTick(回调函数)
    在下一次dom更新结束后执行其指定的回调.
    例子：点击编辑按钮 输入框出现后 才能进行focus（否则输入框还不存在）
```
1. vm.$el
```
    $el是根元素的真实dom
    this.$el instanceof HTMLElement => true
```
1. vm.$destroy()
```
    调用destroy后进入销毁流程。会执行beforedestroy和destroyed生命周期钩子。在beforedestroy和destroyed之间移除所有watchers、child组件、自定义事件。在dom上绑定的原生事件依然可以被触发。在vm.$destroy()调用后所有数据更新都不会使视图更新。
```



1. 1
2.  1
3.  1
4.  1
5.  1
6.  1
7.  1
8.  1
9.  

$parents?????
vm.$children 一个数组，里面记录着VueComponents子组件