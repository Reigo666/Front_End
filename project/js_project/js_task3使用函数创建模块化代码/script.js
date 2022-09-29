//task1
/*
 * QUIZ REQUIREMENTS
 * - Your code should have a `showMessage()` function
 * - Your `laugh()` function should return the correct output
 * - Your code should print `\"hello,stranger!\"` by calling the `showMessage()` function inside `console.log()`
 * - BE CAREFUL ABOUT THE PUNCTUATION AND THE EXACT WORDS TO BE PRINTED.
 */
// your code goes here
let name1="王心雷";
function showMessage(name1){
    return "您好,"+name1
}

console.log(showMessage(name1));
document.write(showMessage(name1));

//task2
let showMessage1= name1 => "您好,"+name1;
console.log(showMessage1(name1));
document.write(showMessage1(name1));

let myGreeting=function (name1){
    g="您好"+name1;
    setTimeout("alert(g)",1000);
};
myGreeting(name1);

//task3
function temperatureBodyDetection(temp,success,fail){
    
    if (!isNaN(temp)){
        temp=Number(temp);
    }
    else temp=39;
    if(temp>=36&&temp<=38)
      success() /*执行成功函数*/
    else
      fail() /*执行失败函数*/
  }
var temp=prompt("输入您的体温","37.8");
let success = ()=>{
    alert("体温正常，打卡成功！");
    return
};

let fail = ()=>{
    alert("体温异常，打卡失败！");
    return
};

temperatureBodyDetection(temp,success,fail);
  
