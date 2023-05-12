


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


