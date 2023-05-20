


## px像素
1个像素就是一个电脑上的小点，在分辨率越高的电脑上像素越多。
分辨率高的电脑可能会开125%的显示，导致w+h=100px实际截图测量为125px

## rgb和rgba
rgb中可以写数字0-255或百分比

## HEX和HEXA
HEX：#ff0000红色 #00ff00绿色 #00f蓝色
HEXA：#ff000088 红色一半的透明度 #f008
IE不支持HEXA，但支持HEX

## HSL或HSLA
示例:红色hsl(0deg,100%,50%) 绿色hsl(120,100%,50%) 蓝色hsl(240,100%,50%)
* HSL是通过：色相，饱和度，亮度来表示一个颜色的，格式为hsl(色相，饱和度，亮度)0000000
    - 色相：取值范围是0~360度
    - 饱和度：取值范围是0%~100%（向色相中对应颜色中添加灰色，0%全灰，100%没有灰）
    - 亮度：取值范围是0%~100%（0%亮度没了，所以就是黑色。100%亮度太强，所以就是白色）
* HSLA其实就是在HSL的基础上，添加了透明度

## font-size
注意点：
    1.Chrome浏览器支持的最小文字为12px，默认的文字大小为16px，并且0px会自动消失。
    2.不同浏览器默认的字体大小可能不一致，所以最好给一个明确的值，不要用默认大小。
    3.通常以给body设置font-size属性，这样body中的其他元素就都可以继承了。

## font-family
示例:font-family:"STCaiyun","STHupo","Microft YaHei",sans-serif
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;font-family:"华文彩云","华文琥珀","微软雅黑",sans-serif
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;font-family:"楷体",serif
**非衬线字体和衬线字体的区别**
sans-serif：非衬线字体 没有棱角如宋体 经常使用
serif：衬线字体  有棱角如楷体 不经常使用
注意：
    1.使用字体的英文名字兼容性会更好，具体的英文名可以自行查询，或在电脑的设置里去寻找
    2.如果字体名包含空格，必须使用引号包裹起来
    3.可以设置多个字体，按照从左到右的顺序逐个查找，找到就用，没有找到就使用后面的，且通常在最后写上`serif`(衬线字体)或`sans-serif`(非衬线字体)
    4.windows系统上，默认的字体就是微软雅黑

## font-style
常用值：
1.`normal`:正常(默认值)
1.`italic`:斜体(使用字体自带的斜体效果 推荐)
1.`oblique`:正常(强制倾斜产生的斜体效果)

## font-weight
- 关键词：
1.`lighter`:细
2.`normal`:正常
3.`bold`:粗
4.`bolder`:很粗（多数字体不支持）

- 数值：
1.100-1000无单位，数值越大，字体越粗
2.100~300等同于lighter,400~500等同于normal，600及以上等同于bold

## font
示例:font:bold italic 100px "STCaiyun","STHupo",sans-serif;
- 属性名：`font`,可以把上述字体样式合并成一个属性。
- 编写规则：
    1.字体大小、字体族必须都写上。
    2.字体族必须是最后一位、字体大小必须是倒数第二位。
    3.各个属性间用空格隔开。
- 实际开发中更推荐复合写法，但这也不是绝对的，比如只想设置字体大小，
  
## letter-spacing和word-wpacing
- 字母间距：`letter-spacing`
- 单词间距：`word-spacing`(通过空格识别词)
- 属性值为像素(`px`),正值让间距增大，负值让间距缩小。

## text-decoration
示例:text-decoration:overline dotted green
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;text-decoration:underline wavy red
- 可选值：
    1.`none`:无装饰线(常用)
    2.`underline`:下划线(常用)
    3.`overline`:上划线
    4.`line-through`:删除线
    可搭配如下值使用：
    1.`dotted`:虚线
    2.`wavy`:波浪线
    3.也可以指定颜色

## text-indent
示例:font-size:40px;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;text-indent:80px;
会空出80px的空间(两个空格)

## text-align
示例:text-align:center;
常用值：
    1.left
    2.center
    3.right

## font-size
1.由于字体设计原因，文字最终呈现的大小，并不一定与font-size的值一致，可能大，也可能小。
例如：font-size设为40px，最终呈现的文字，可能比40px大，也可能比40px小。
2.通常情况下，文字相对字体设计框，并不是垂直居中的，通常都靠下一些。                                                                                                       

## line-height
示例:
    line-height:60px;
    line-height:1.5;
    line-height:150%;
- 可选值：
    1.`normal`:
    2.像素(`px`)
    3.数字：参考自身`font-size`的倍数(很常用)。
    4.百分比：参考自身`font-size`的百分比。
- 备注：由于字体设计原因，文字在一行中，并不是绝对垂直居中，若一行中都是文字，不会太影响观感。

- 行高注意事项：
    1. line-height过小会怎样？--文字产生重叠，且最小值是0，不能为负数。
    2. line-height是可以继承的，且为了能更好的呈现文字，最好写数值。
    3. line-height和height是什么关系?
        - 设置了height，那么高度就是height的值。
        - 不设置height的时候，会根据line-height计算高度。
- 应用场景：
    1. 对于多行文字：控制行与行之间的距离。
    2. 对于单行文字：让height等于line-height，可以实现文字垂直居中。

## 文本对齐_垂直
1. 顶部：无需任何属性，在垂直方向上，默认就是顶部对齐。
2. 居中：对于单行文字，让height=line-height即可
> 问题：多行文字垂直居中怎么办？--后面我们用定位去做
3. 底部：对于单行文字，目前一个临时的方式：
    让`line-height`=(`height`x`2`)-`font-size`-`x`
    备注：`x`是根据字体族，动态决定的一个值。
> 问题：垂直方向上的底部对齐，更好的解决办法是什么？--后面我们用定位去做。

## vertical-align
- 属性名：vertical-align。
- 作用：用于指定<font color='red'>同一行元素之间</font>,或<font color='red'>表格单元格</font>内文字的<font color='red'>垂直对齐方式</font>。
- 常用值：
    1. `baseline`(默认值)：使元素的基线与父元素的基线对齐。
    2. `top`：使元素的顶部与其所在行的顶部对齐。
    3. `middle`：使元素的中部与父元素的基线加上父元素字母x的一半对齐。
    4. `bottom`：使元素的底部与其所在行的底部对齐。
> 特别注意：vertical-align不能控制块元素。

## CSS列表属性
列表相关的属性，可以作用在`ul`,`ol`,`li`元素上。

<table border='1' cellspacing="0" width="700px">
<thead>
    <tr>
        <th>CSS属性名</th>
        <th>功能</th>
        <th>属性值</th>
    </tr>
</thead>

<tbody>
    <tr>
        <td>list-style-type</td>
        <td>设置列表符号</td>
        <td>
            常用值如下：<br>
            none:不显示前面的标识（很常用！）<br>
            square:实心方块<br>
            disc:圆形<br>
            decimal:数字<br>
            lower-roman:小写罗马字<br>
            upper-roman:大写罗马字<br>
            lower-alpha:小写字母<br>
            upper-alpha:大写字母<br>
        </td>
    </tr>
    <tr>
        <td>list-style-position</td>
        <td>设置列表符号的位置</td>
        <td>
            inside：在li的里面<br>
            outside：在li的外边<br>
        </td>
    </tr>
    <tr>
        <td>list-style-image</td>
        <td>自定义列表符号</td>
        <td>url(图片地址)</td>
    </tr>
    <tr>
        <td>list-style</td>
        <td>符合属性</td>
        <td>没有数量、顺序的要求</td>
    </tr>
</tbody>
</table>

## CSS 表格属性
1. 边框相关属性（其他元素也能用）：
<table border="1px" cellspacing="0px">
<thead>
    <tr>
        <td>CSS属性名</td>
        <td>功能</td>
        <td>属性值</td>
    </tr>
</thead>
    
<tbody>
    <tr>
        <td>border-width</td>
        <td>边框宽度</td>
        <td>CSS中可用的长度值</td>
    </tr>
    <tr>
        <td>border-color</td>
        <td>边框颜色</td>
        <td>CSS中可用的颜色值</td>
    </tr>
    <tr>
        <td>border-style</td>
        <td>边框风格</td>
        <td>
            none:默认值<br>
            solid:实线<br>
            dashed:虚线<br>
            dotted:点线<br>
            double:双实线<br>
        </td>
    </tr>
    <tr>
        <td>border</td>
        <td>边框复合属性</td>
        <td>没有数量、顺序的要求</td>
    </tr>
</tbody>
</table>

2. 表格独有属性（只有table标签才能使用）：
<table border="1px" cellspacing="0px">
<thead>
    <tr>
        <th>CSS属性名</th>
        <th>功能</th>
        <th>属性值</th>
    </tr>
</thead>

<tbody>
    <tr>
        <td>table-layout</td>
        <td>设置列宽度</td>
        <td>
            auto:自动，列宽根据内容计算（默认值）。<br>
            fixed:固定列宽，平均分。<br>
        </td>
    </tr>
    <tr>
        <td>border-spacing</td>
        <td>单元格间距</td>
        <td>
            CSS中可用的长度值。<br>
            生效的前提：单元格边框不能合并。<br>
        </td>
    </tr>
    <tr>
        <td>border-collapse</td>
        <td>合并单元格边框</td>
        <td>
            collapse:合并<br>
            seperate:不合并<br>
        </td>
    </tr>
    <tr>
        <td>empty-cells</td>
        <td>隐藏没有内容的单元格</td>
        <td>
            show:显示,默认<br>
            hide:隐藏<br>
            生效前提：单元格不能合并。
        </td>
    </tr>
    <tr>
        <td>caption-side</td>
        <td>设置表格标题位置</td>
        <td>
            top:上面(默认值)<br>
            bottom:在表格下面
        </td>
    </tr>
</tbody>
</table>
</body>
</html>


## CSS背景属性
<table border="1px" cellspacing="0px">
<thead>
    <tr>
        <th>css属性名 </th>
        <th>功能</th>
        <th>属性值</th>
    </tr>
</thead>
<tbody>
    <tr>
        <td>background-color</td>
        <td>设置背景颜色</td>
        <td>
            符合CSS种颜色规范的值<br>
            默认背景颜色是transparent
        </td>
    </tr>
    <tr>
        <td>background-image</td>
        <td>设置背景图片</td>
        <td>url(图片的地址)</td>
    </tr>
    <tr>
        <td>background-repeat</td>
        <td>设置背景重复方式</td>
        <td>
            repeat:重复，铺满整个元素，默认值。<br>
            repeat-x:只在水平方向重复。<br>
            repeat-y:只在垂直方向重复。<br>
            no-repeat:不重复。<br>
        </td>
    </tr>
    <tr>
        <td>background-position</td>
        <td>设置背景图位置</td>
        <td>
            <b>通过关键字设置位置：</b><br>
            写两个值，用空格隔开<br>
            水平：left、center、right<br>
            垂直：top、center、bottom<br>
            如果只写一个值，另一个方向的值取center<br><br>
            <b>通过长度指定坐标位置:</b><br>
            以元素左上角，为坐标原点，设置图片左上角的位置。<br>
            两个值，分别是x坐标和y坐标。<br>
            只写一个值，会被当做x坐标，y坐标取center。<br>
        </td>
    </tr>
    <tr>
        <td>background</td>
        <td>复合属性</td>
        <td>没有数量和顺序要求</td>
    </tr>
</tbody>
</table>

## CSS鼠标属性
<table border="1px" cellspacing="0px">
<thead>
    <tr>
        <th>css属性名 </th>
        <th>功能</th>
        <th>属性值</th>
    </tr>
</thead>
<tbody>
    <tr>
        <td>cursor</td>
        <td>设置鼠标光标的样式</td>
        <td>
            pointer：小手<br>
            move：移动光标<br>
            text：文字选择器<br>
            crosshair：十字架<br>
            wait：等待<br>
            help：帮助<br>
        </td>
    </tr>
</tbody>
</table>

> 扩展：自定义鼠标图案
>
> /* 自定义鼠标光标 */
> cursor:url('./arrow.png'),pointer;

# 五、CSS盒子模型
## 1.CSS长度单位
1. px：像素
2. em：相对元素font-size的倍数
3. rem：相对根字体大小，html标签就是根。
4. %：相对父元素计算
> 注意：CSS中设置长度，必须加单位，否则样式无效！

## 2.元素的显示模式
- **块元素（block）**
> 又称:块级元素
> 特点:
> 1. 在页面中<font color='red'>独占一行</font>,不会与任何元素共用一行,是从上到下排列的.
> 2. 默认宽度:撑满<font color='red'>父元素</font>.
> 3. 默认高度:由<font color='red'>内容</font>撑开.
> 4. <font color='red'>可以</font>通过CSS设置宽高.
- **行内元素（inline）**
> 又称:内联元素
> 特点:
> 1. 在页面中<font color='red'>不独占一行</font>,一行中不能容纳下的行内元素,会在下一行继续从左到右排列.
> 2. 默认宽度:由<font color='red'>内容</font>撑开.
> 3. 默认高度:由<font color='red'>内容</font>撑开.
> 4. <font color='red'>无法</font>通过CSS设置宽高.
- **行内块元素（inline-block）**
> 又称:内联块元素
> 特点:
> 1. 在页面中<font color='red'>不独占一行</font>,一行中不能容纳下的行内元素,会在下一行继续从左到右排列.
> 2.默认宽度,由<font color='red'>内容</font>撑开.
> 3.默认高度,由<font color='red'>内容</font>撑开.
> 4.<font color='red'>可以</font>通过CSS设置宽高.

## 3.总结各元素的显示模式
- 块元素（block）
> 1. 主体结构标签：\<html>、\<body>
> 2. 排版标签：\<h1>、\<h6>、\<hr>、\<p>、\<pre>、\<div>
> 3. 列表标签：\<ul>、\<ol>、\<li>、\<dl>、\<dt>、\<dd>
> 4. 表格相关标签：\<table>、\<tbody>、\<thead>、\<tfoot>、\<tr>、\<caption>
> 5. \<form>与\<option>

- 行内元素（inline）
> 1.文本标签：\<span>、\<br>、\<em>、\<strong>、\<sup>、\<sub>、\<del>、\<ins>
> 2.\<a>与\<label>
- 行内块元素（inline-block）
> 1. 图片：\<img>
> 2. 单元格：\<td>、\<th>
> 3. 表单控件：\<input>、\<textarea>、\<select>、\<button>
> 4. 框架标签：\<iframe>



## 4.修改元素现实模式
通过CSS中的display属性可以修改元素的默认显示模式，常用值如下:
| 值           | 描述            |
| ------------ | --------------- |
| none         | 元素会被**隐藏**,不占用宽高和大小 |
| block        | 元素作为**块级元素**显示 |
| inline       | 元素将作为**内联元素**显示 |
| inline-block | 元素将作为**行内块元素**显示 |

## 5.盒子模型的组成
CSS会把所有的HTML元素都看成一个盒子，所有的样式也都是基于这个盒子。
1. **margin(外边距)：**盒子与外界的距离。
2. **border(边框)：**盒子的边框。
3. **paddng(内边距)：**紧贴内容的补白区域。
4. **content(内容)：**元素中的文本或后代元素都是它的内容。

**盒子的大小**=`content`+**左右**`padding`+**左右**`border`。

> 注意：外边距margin不会影响盒子的大小，但会影响盒子的位置。

## 6.盒子内容区（content）
CSS属性名|功能|属性值
--|--|--
`width`|设置内容区域宽度|长度
`max-width`|设置内容区域的最大宽度|长度
`min-width`|设置内容区域的最小宽度|长度
`height`|设置内容区域的高度|长度
`max-height`|设置内容区域的最大高度|长度
`min-height`|设置内容区域的最小高度|长度

> 注意
> `max-width`、`min-width`一般不与`width`一起使用。
> `max-height`、`min-height`一般不与`height`一起使用。

## 7.关于块元素默认宽度
所谓的默认宽度，就是`不设置width属性时`，元素所呈现出来的宽度。<br>
**盒子总宽度**=父的`content`-自身的左右`margin`。<br>
**内容区的宽度**=父的`content`-自身的左右`margin`-自身的左右`border`-自身的左右`padding`。

## 8.盒子内边距（padding）
CSS属性名|功能|属性值
--|--|--
`padding-top`|上内边距|长度
`padding-right`|右内边距|长度
`padding-bottom`|下内边距|长度
`padding-left`|左内边距|长度
`padding`|复合属性|长度，可以设置1-4个值

padding复合属性的使用规则：
1. `padding: 10px`; 四个方向内边距都是`10px`。
2. `padding: 10px 20px`; 上下`10px`，左右`20px`。（上下、左右）
3. `padding: 10px 20px 30px`; 上`10px`，左右`20px`，下`30px`。（上、左右、下）
4. `padding: 10px 20px 30px 40px`; 上`10px`，右`20px`，右`30px`，左`40px`。（上、右、下、左）

> 注意点：
> 1. `padding`的值不能为负数
> 2. **行内元素**的左右内边距是没问题的，上下内边距不能完美的设置。
> 3. **块级元素、行内块元素**，四个方向**内边距**都可以完美设置。

## 9.盒子边框（border）
CSS属性名|功能|属性值
--|--|--
`border-style`|边框线风格<br>复合了四个方向的边框风格|`none`:默认值<br> `solid`:实线<br> `dashed`:虚线<br> `dotted`:点线<br> `double`:双实线<br> ......
`border-width`|边框线宽度<br>复合了四个方向的边框宽度|长度，默认3px
`border-color`|边框线颜色<br>复合了四个方向的边框颜色|颜色，默认黑色
`border`|复合属性|值没有顺序和数量要求。
`border-left`<br>`border-left-style`<br>`border-left-width`<br>`border-left-color`<br><br> `border-right`<br>`border-right-style`<br>`border-right-width`<br>`border-right-color`<br><br> `border-top`<br>`border-top-style`<br>`border-top-width`<br>`border-top-color`<br><br> `border-bottom`<br>`border-bottom-style`<br>`border-bottom-width`<br>`border-bottom-color`<br> |分别设置各个方向的边框|同上

> 边框相关属性共20个。
> border-style、border-width、border-color其实也是复合属性。

## 10.盒子外边距（margin）
CSS属性名|功能|属性值
--|--|--
`margin-left`|左外边距|CSS中的长度值
`margin-right`|右外边距|CSS中的长度值
`margin-top`|上外边距|CSS中的长度值
`margin-bottom`|下外边距|CSS中的长度值
`margin`|复合属性，可以写1~4个值，规律同padding|CSS中的长度值

### 10.1 margin注意事项
> 1. 子元素的`margin`，是参考父元素的`content`计算的。（因为是父亲的`content`中承装着子元素）
> 2. 上`margin`、左`margin`：影响自己的位置；下``margin``、右`margin`：影响后面兄弟元素的位置。
> 3. 块级元素、行内块元素、均可以完美地设置四个方向的`margin`；但行内元素，左右`margin`可以完美设置，上下`margin`设置无效。
> 4. `margin`的值也可以是`auto`，如果给一个**块级元素**设置左右`margin`都为`auto`，该块级元素会在父亲元素中水平居中。
> 5. `margin`的值可以是负值。

### 10.2 margin塌陷问题
**什么是`margin`塌陷？**
&nbsp;&nbsp;&nbsp;&nbsp;第一个子元素的**上**`margin`会作用在父元素上，最后一个子元素的**下**`margin`会作用在父元素上。
**如何解决`margin`塌陷？**
- 方案一：给父元素设置不为0的`padding`。
- 方案二：给父元素设置宽度不为0的`border`。
- 方案三：给父元素设置CSS样式`overflow:hidden`

### 10.3 margin合并问题
**什么是`margin`合并？**
&nbsp;&nbsp;&nbsp;&nbsp;上面兄弟元素的下外边距和下面兄弟元素的上外边距会合并，取一个最大的值，而不是相加。
**如何解决`margin`合并？**
&nbsp;&nbsp;&nbsp;&nbsp;无需解决，布局的时候上下的兄弟元素，只给一个设置上下外边距就可以了。

## 11.处理内容溢出
CSS属性名|功能|属性值
--|--|--
`overflow`|溢出内容的处理方式|`visible`：显示，默认值<br> `hidden`：隐藏<br> `scroll`：显示滚动条，不论内容是否溢出<br> `auto`:自动显示滚动条，内容不溢出不显示
`overflow-x`|水平方向溢出内容的处理方式|同`overflow`
`overflow-y`|垂直方向溢出内容的处理方式|+同`overflow`

> 注意：
> 1. `overflow-x`、`overflow-y`不能一个是`hidden`,一个是`visible`，是实验性属性，不建议使用。
> 2. `overflow`常用的值是`hidden`和`auto`,除了能处理溢出的显示方式，还可以解决很多疑难杂症。

## 12.隐藏元素的方式
**方式一：visibility属性**
`visability`属性默认值是`show`，如果设置为`hidden`，元素会隐藏。
元素看不见，还占有原来的位置（元素的大小依然保持）。
**方式二：display属性**
设置`display：none`，就可以让元素隐藏。
彻底地隐藏，不但看不见，也不占用任何位置，没有大小宽高。

## 13.样式的继承
有些样式会继承，元素如果本身设置了某个样式，就使用本身设置的样式；但如果本身没有设置某个样式，会从父元素开始一级一级继承（优先继承离得近的祖先元素）。
**会继承的CSS属性**
> 字体属性、文本属性（除了vertical-align）、文字颜色 等。

**不会继承的CSS属性**

> 边框、背景、内边距、外边距、宽高、溢出方式 等。
> 
> 一个规律：能继承的属性，都是不影响布局的，简单说：都是和盒子模型没关系的。

## 14.默认样式
元素一般都有些默认的样式，例如：
1. \<a>元素：下划线、字体颜色、鼠标小手。
2. \<h1>-\<h6>元素：文字加粗、文字大小、上下外边距。
3. \<p>元素：上下外边距
4. \<ul>、\<ol>元素：左内边距
5. `body`元素：`8px`外边距（4个方向）
······
优先级：元素的默认样式 > 继承的样式，所以如果要重置元素的默认样式，选择器一定要直接选择器到该元素。

## 15.布局小技巧
1. 行内元素、行内块元素，可以被父元素当做文本处理。
> 即：可以像处理文本对齐一样，去处理：行内、行内块在父元素中的对齐。
> 例如：`text-align`、`line-height`、`text-indent`等。

2. 如何让子元素，在父亲中 <font color='red'>水平居中</font>：
- 若子元素为<font color='blue'>块元素</font>，给父元素加上：`margin:0 auto`;。
- 若子元素为<font color='blue'>行内元素、行内块元素</font>，给父元素加上：`text-align：center`。

3. 如何让子元素，在父亲中 垂直居中：
- 若子元素为<font color='blue'>块元素</font>，给子元素加上：`margin-top`，值为：（父元素`content`-子元素盒子总高）/2。
- 若子元素为<font color='blue'>行内元素、行内块元素</font>：
让父元素的`height`=`line-height`，每个子元素都加上：`vertical-align:middle`;。<br>
补充：若想绝对垂直居中，父元素`font-size`设置为`0`。

## 16.元素之间的空白问题
**产生的原因**：
&nbsp;&nbsp;&nbsp;&nbsp;行内元素、行内块元素，彼此之间的换行被浏览器解析为一个空白字符。
**解决方案**：
1. **方案一**：去掉换行和空格（不推荐）。
2. **方案二**：给父元素设置`font-size：0`,再给需要显示文字的元素，单独设置字体大小（推荐）。

## 17.行内块的幽灵空白问题
**产生原因：**
&nbsp;&nbsp;&nbsp;&nbsp;行内块元素与文本的基线对齐，而文本的基线与文本最底端之间是有一定距离的。
**解决方案：**
1. **方案一：** 给行内块设置`vertical`，值不为`baseline`即可，设置为`middle`、`bottom`、`top`均可。
2. **方案二：** 若父元素中只有一张图片，设置图片为`display：block`。
3. **方案三：** 给父元素设置`font-size:0`。如果该行内块内部还有文本，则需单独设置`font-size`。

# 六、浮动
## 1.浮动的简介
在最初，浮动是用来实现文字环绕图片效果的，现在浮动是主流的页面布局方式之一。

## 2.元素浮动后的特点
1. 脱离文档流。
2. 不管浮动前是什么元素，浮动后：默认宽与高都是被内容撑开（尽可能小），而且可以设置宽高。
3. 不会独占一行，可以与其他元素共用一行。
4. 不会`margin`合并，也不会`margin`塌陷，能够完美的设置四个方向的`margin`和`padding`。
5. 不会像行内块一样被当做文本处理（没有行内块的空白问题）。

## 3.浮动小练习
练习1：盒子1右浮动，效果如下
<div style="border: 1px solid black; width: 120px;">
    <div style="width: 20px;height: 20px;background-color: skyblue; margin: 10px; float: right;">1</div>
    <div style="width: 20px;height: 20px;background-color: skyblue; margin: 10px;">2</div>
    <div style="width: 20px;height: 20px;background-color: skyblue; margin: 10px;">3</div>
</div>
练习2：盒子1左浮动，效果如下
<div style="border: 1px solid black; width: 120px;">
    <div style="width: 20px;height: 20px;background-color: skyblue; margin: 10px; float: left;">1</div>
    <div style="width: 20px;height: 20px;background-color: skyblue; margin: 10px;">2</div>
    <div style="width: 20px;height: 20px;background-color: skyblue; margin: 10px;">3</div>
</div>
练习3：所有盒子都浮动，效果如下
<div style="border: 1px solid black; width: 120px;">
    <div style="width: 20px;height: 20px;background-color: skyblue; margin: 10px; float: left;">1</div>
    <div style="width: 20px;height: 20px;background-color: skyblue; margin: 10px; float: left;">2</div>
    <div style="width: 20px;height: 20px;background-color: skyblue; margin: 10px; float: left;">3</div>
</div>
<div style="clear:both"></div>

练习4：所有盒子浮动后，盒子3落下来，效果如下
<div style="border: 1px solid black; width: 100px;">
    <div style="width: 20px;height: 20px;background-color: skyblue; margin: 10px; float: left;">1</div>
    <div style="width: 20px;height: 20px;background-color: skyblue; margin: 10px; float: left;">2</div>
    <div style="width: 20px;height: 20px;background-color: skyblue; margin: 10px; float: left;">3</div>
</div>
<div style="clear:both"></div>

### 4.1浮动后会有哪些影响
&emsp;&emsp;&emsp;&emsp;**对兄弟元素的影响：** 后面的兄弟元素，会占据浮动元素之前的位置，在浮动元素的下面；对前面的兄弟无影响。<br>
&emsp;&emsp;&emsp;&emsp;**对父元素的影响：**不能撑起父元素的高度，导致父元素高度塌陷；但父元素的宽度依然束缚浮动的元素。

### 4.2解决浮动产生的影响（清除浮动）
**解决方案：**
1. 方案一：给父元素指定高度。
2. 方案二：给父元素也设置浮动，带来其他影响。
3. 方案三：给父元素设置overflow:hidden。
4. 方案四：在所有浮动元素的最后面，添加一个块级元素，并给该块级元素设置clear:both。
5. 方案五：给浮动元素的父元素，设置伪元素，通过伪元素清除浮动，原理与方案四相同。==>推荐使用
```CSS
.parent::after{
    content:'';
    display:block;
    clear:both;
}
```
> 布局中的一个原则：设置浮动的时候，兄弟元素要么全部浮动，要么全部不浮动。