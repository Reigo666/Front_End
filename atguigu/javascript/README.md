# 一.小技巧

## a标签点击不跳转
```html
<a href="javascript:"></a>
```

## typeof 检查标签
返回的结果是字符串形式

## instanceof 检查标签
检查一个对象是否是一个类的实例
```js
console.log(person instance of Person) //true
console.log(dog instance of Person) //false
console.log(person instance of Object) //true 任何对象都是object的后代
```

## 输出unicode编码
1. js中使用 \u2620 (16进制编码)
2. html中使用 \&#9760; &#9760;(转换为10进制编码)

# 二.数据类型
1. String字符串
2. Number数值
3. Boolean布尔值
4. Null空值
5. Undefined未定义
6. Object 对象
> 其中前五种属于基本数据类型，Object属于引用数据类型。

## 2.1 Number
1. 正无穷值 a=Infinity;
2. 负无穷值 a=-Infinity;
3. 正最大值 a=Number.MAX_VALUE
4. 正最小值 a=Number.MIN_VALUE
5. `NaN`  a="abc" * "bcd" `NaN`也是一个`Number`类型
6. var c=0.1+0.2 可能得到一个不精确的结果，不要用js进行精确运算。

## 2.2 Null
1. var a=null;
2. `null`值用来表示一个空的对象
3. `typeof`检查一个`null`值时，会返回`Object`

## 2.3 Undefined
1. var a;
2. `undefined`值用来表示未定义的对象
3. `typeof`检查，返回`undefined`

## 2.4 强制类型转换(String)
1. 调用被转换数据类型的`toString()`
> **var b=a.toString()**<br>
> null和undefined没有toString()方法。
2. 调用`String()`,
> **a=String(a)**
> null和undefined会转换为"null"和"undefined"

## 2.5强制类型转换(Number)
**1.Number()方法**
1. 字符串转正常数字，转为Number
2. 字符串不是数字，转为NaN
3. 字符串是空串，转为0
4. null，转为0
5. undefined，转为NaN

> var b=Number(a)

**2.parseInt()**<br>
只针对字符串使用，从前往后读取数字,读到非法就停止
> var b=parseInt(a)<br>
> '123px' -> 123<br>
> '123.456' -> 123<br>
> '123px456' -> 123<br>
> null/undefined ->"null"/"undefined" -> NaN

**3.parseFloat()**<br>
> var b=parseFloat(a)<br>
> '123.456.789' -> 123.456<br>
> null/undefined -> NaN<br>

**4.+**
> 通过在String类型前增加一个加号来转变为Number类型<br>
> var a="1"<br>
> a=+a

## 2.6不同进制数
1. 十六进制 0x??
2. 八进制 0??
3. 二进制 0b??
> parseInt('070')<br>
> 有的浏览器会当成八进制解析 -> 56<br>
> 有的浏览器会当成十进制解析 -> 70<br>
> 解决方案 parseInt('070',10)

## 2.7强制类型转换(Boolean)
1. **数字**转布尔，除了`0`和`NaN`，其余都是`true`
2. **字符串**转布尔，除了空串(""),其余都是`true`
3. `null`和`undefined`转布尔，结果是`false`
4. **对象**转布尔，结果是`true`

## 2.8算数运算符
1. true=1,false=0,null=0,undefined=NaN
2. 1+NaN=NaN
3. "abc"+"def"="abcdef"
4. 123+"1"="1231"
5. 1+2+'3'='33'
6. '1'+2+3='123'
7. true+"hello"="truehello"
8. 100-'1'=99
9.  2*'8'=16
10. 2* null =0

> 快速转为String.<br>
> var c=123;<br>
> c=c+"";<br><br>
> 快速转为Number.<br>
> var c='123';<br>
> c=c-0;<br>

## 2.9非布尔值的与或运算
- 与运算
1. 第一个值为true，返回第二个值
2. 第一个值为false，则返回第一个值
> 5 && 6 -> 6<br>
> 0 && 2 -> 0<br>
> 2 && 0 -> 0<br>
> NaN && 0 -> NaN<br>
> 0 && NaN -> 0<br>
- 或运算
1. 第一个值为true，返回第一个值
2. 第一个值为false，返回第二个值
> 2 || 1 -> 2<br>
> 2 || NaN -> 2<br>
> 2 || 0 -> 2<br>
> NaN || 0 -> 0<br>
> NaN || 1 -> 1<br>

## 2.10 关系运算符
1. 任何值和NaN做任何比较都是false
> 11>'hello' -> false<br>
> 11<'hello'-> false<br>
2. 比较两个字符串时比较的是Unicode编码
> '11'<'5' -> true
> 'a'<'b' -> true
> 'abb'>'a' -> true

## 2.11 相等运算符
### **==**<br>
**会做类型转换**
1. "1"==1 -> true
2. true=='1' -> true
3. null == 0 -> false(需要记住)
4. undefined == null -> true (undefined衍生自null)
5. NaN == NaN -> false (NaN不和任何值相等)

**判断是否是NaN**
1. b==NaN 一定为false **不能判断**
2. isNaN(b) **可以判断**

### **===**<br>
**不会做类型转换**,如果类型不同，直接返回false
1. "123" === 123 -> false
2. null === undefined -> false

### **!==**<br>
**不会做类型转换**,如果类型不同，直接返回true
1. 123 !== "123" -> true


# 三.对象
## 3.1 对象的分类
1. **内建对象**
- 由ES标准中自定义的对象，在任何的ES的实现中都可以使用
- 比如：Math String Number Boolean Function Object······
2. **宿主对象**
- 由JS的运行环境提供的对象，目前来讲主要指由浏览器提供的对象
- 比如BOM，DOM
3. **自定义对象**
- 由开发人员自己创建的对象
## 3.2 自定义对象
1. 创建一个对象
2. 向对象中添加属性
3. 查找一个属性
4. 删除一个属性
> 注意: 对象的属性名就是一个字符串
```js
    var obj=new Object()
    // var obj={} //两者等价

    obj.a=1
    obj.["1234"]=2

    console.log(obj.a)
    console.log(obj["1234"])

    delete obj.a
```
## 3.3 检查对象中是否有某个属性
```js
    var obj=new Object();
    obj.test=123;
    console.log("test" in obj); 
```
## 3.4 枚举对象的属性
```js
for (var k in obj){
    console.log(k) //k是属性名
    console.log(obj[k])//obj[k]是属性值
    console.log(obj.k)//->输出undefined k不是一个属性名
}
```


## 3.5 对象的比较
1. 当比较两个基本数据类型的值时，就是比较值。
2. 而比较两个引用数据类型时，比较的是内存地址。

```js
    var obj1=new Object();
    obj1.name="abc";

    var obj2=obj1
    obj2=null //只是把obj2设置为null，obj1记录的地址不变

    console.log(obj1) //-> Object
```

# 四.函数
## 4.1 创建一个函数对象
1. 使用构造函数方式返回一个函数对象(几乎不用)
```js
    var fun=new Function("console.log(123)")
```
2. 使用**函数声明**来创建一个函数
```js
    function fun1(){
        ···
    }
```
3. 使用**函数表达式**来创建一个函数
```js
    // 将一个匿名函数 赋值给变量
    var fun2=function(){
        ···
    }
```

## 4.2 函数的参数
1. 函数的实参可以是任意的数据类型，如果有可能需要对参数进行类型的检查。
2. 调用函数时，解析器不会检查实参的数量。
3. 多余的实参不会被赋值。
4. 实参数量少于形参的数量，则没有对应实参的形参将是undefined

## 4.3 立即执行函数
只会执行一次
```js
(function(){
    alert("123");
})()
```

# 五.作用域
## 5.1 全局作用域
- 在全局作用域中有一个全局对象window
- 在全局作用域中：
1. 创建的变量会作为window对象的属性保存
2. 创建的函数会作为window对象的方法保存
```js
    var a=10;
    function fun(){
        ···
    }
    console.log(window.a)
    window.fun()
    window.alert(123)
```

## 5.2 变量的声明提前
- 使用var关键字生命的变量，会在所有的代码执行之前被声明(但是不会被赋值)。
- 但是如果声明变量时不使用var关键字，则变量不会被声明提前

```js
    console.log(a) -> undefined
    var a=123

    等价于
    var a;
    console.log(a) -> undefined
    a=123
```
但如果
```js
    console.log(a) -> undefined //-> ERROR a is not defined
    a=123
```

## 5.3 函数的声明提前
- 使用函数声明形式创建的函数`function 函数(){}`,它会在所有的代码执行之前就被创建，所以我们可以在函数声明前来调用函数
- 使用函数表达式创建的函数，不会被声明提前，所以不能在声明前调用。
```js
fun1() //能被正常调用
function fun1(){
    ···
}
```

```js
fun2() //ERROR -> undefined is not a function
var fun2=function(){//fun2虽然声明被提前，但没有被赋值，不能被调用
    ···
};
```

## 5.4 局部作用域
- 当在函数作用域操作一个变量时，它会先在自身作用域中寻找，如果有就直接使用；如果没有则向上一级作用域中寻找，直到找到全局作用域。
- 如果在函数中想访问全局作用域可以使用window.xxx
- 在函数中也有声明提前的特性
```js
var a=1
function fun1(){
    var a=2
    function fun2(){
        console.log(a);// -> undefined var声明提前
        var a=3;
    }
}
```

- 在函数中,不使用var声明的变量都会成为全局变量
```js
var a=1
function fun3(){
    a=10 //a没有使用var关键字，则会设置为全局变量
}
console.log(a)// -> 10
```

- 定义形参就相当于在函数作用域中声明了变量
```js
var e=23;
function fun6(e){
    console.log(e);// -> undefined
}
fun6();
```

## 5.5 this
解析器在调用函数每次都会向函数内部传递一个隐含的参数this,this指向的是一个对象，这个对象我们称为函数执行的**上下文对象**。
1. 以**函数**的形式调用时,this永远都是window。
2. 以**方法**的形式调用时，this就是调用方法的那个对象。
3. 当以构造函数的形式调用时，this就是新创建的那个对象。

```js
var name='全局作用域的name';
function fun(){
    console.log(this.name);
}
var obj={
    name:"zhangsan";
    sayName:fun
}

fun() // -> '全局作用域的name' 即this=window
obj.sayName() // -> 'zhangsan' 即this=obj
```

## 5.6 使用工厂方法创建对象
```js
function createPerson(name,age){
    // 创建一个新的对象
    var obj=new Object();
    // 向对象中添加属性
    obj.name=name
    obj.age=age
    // 将新的对象返回
    return obj
}

var obj1=createPerson('zhangsan',18)
```
## 5.7 构造函数
- 构造函数和普通函数的区别就是调用方式的不同
- 普通函数就是直接调用，而构造函数需要使用new关键字来调用
- 构造函数的执行流程：
  1. 立刻创建一个新的对象
  2. 将新建对象设置为函数中this，在构造函数中可以使用this来引用新建的对象
  3. 逐行执行函数中的代码
  4. 将新建的对象(this)作为返回值返回
- 使用同一个构造函数创建的对象，我们称为一类对象，也将一个构造函数称为一个类。
- 我们将通过一个构造函数创建的对象，称为是该类的实例

```js
function Person(name,age){
    this.name=name
    this.age=age
}

var person=new Person()
console.log(person instanceof Person)
```

## 5.8 原型
### 5.8.1 prototype和__proto__
- 我们所创建的每一个函数，解析器都会向函数中添加一个属性`prototype`。这个属性对应着一个对象，这个对象就是我们所谓的原型对象。
- 如果函数作为普通函数调用`prototype`没有任何作用
- 当函数以构造函数的形式调用时，它所创建的对象中都会有一个隐含的属性，指向该构造函数的原型对象，我们可以通过`__proto__`来访问该属性。
- 原型对象就相当于一个公共的区域，所有同一个类的实例都可以访问到这个原型对象，我们可以将对象中共有的内容，统一设置到原型对象中。
- 当我们访问对象的一个属性或方法时，它会先在对象自身中寻找，如果有则直接使用，如果没有则会去原型对象中寻找，如果找到则直接使用。
- 直到找到Object的原型对象<br>
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
### 5.8.2 原型对象案例
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
