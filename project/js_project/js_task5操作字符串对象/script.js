/**
 * @param {string} firstStr
 * @param {string} lastStr
 */
 function concatString(firstStr, lastStr) {
    return firstStr+lastStr;
  }
  
  // 测试用例
  console.log(concatString("Jennie", "Kim")); // "Jennie Kim"
  console.log(concatString(" Congratulation！", "you are the winner")); // "Congratulation！，you are the winner"
  
  /**
 * @param {string} name
 */
function sayHi(name) {
    const h="Hello,";
    return h+name;
  }
  
  //测试用例
  console.log(sayHi("Amy")); // "Hello, Amy"


//Task1
  /**
 * @param {string} name
 */
const convertToSlug = (name) => {
    name=name.split(" ").join("-");
    name=name.slice(0,15);
    return name;
  };
  
  // 测试用例
  console.log(convertToSlug("to do list")); // "to-do-list"
  console.log(convertToSlug("My SeCond BlOg")); // "my-second-blog"
  console.log(convertToSlug("Grade inquiry of CET-4&6")); // "grade-inquiry-o"
  console.log(); 

//Task2

const data = [
    "monday - 500ml",
    "mONday - 330",
    "monday - 150ml",
    "Tuesday - 100ml",
    "Tuesday - 330ml",
    "weDnesDay - 230",
    "TursDAy - 330ml",
    "Friday - 500",
    "Saturday - 100ml",
    "sunday - 250",
    "sunday - 100ml",
];
function dataProcess(data){
    for(var i=0;i<data.length;i++){
        var d=data[i];
        d=d.split("-");
        var day=String(d[0]);
        var drink=String(d[1]);

        day=day.toLowerCase();
        day=day[0].toUpperCase()+day.slice(1);

        if(!drink.endsWith("ml")){
            drink+="ml";
        }

        d=day+":"+drink;

        data[i]=d;
        //console.log(data[i]);
    }
}
dataProcess(data);

// TODO: 实现检索功能
/**
 * @param {string} day
 * @param {Array} data
 */
 const query = (day, data) => {
    let ans=[];
    day=String(day);
    day=day.toLowerCase();
    day=day.trim();
    while(day.charAt(day.length-1)==" "){
        day=day.slice(0,day.length);
    }
    day=day[0].toUpperCase()+day.slice(1);

    let sumdrink=0;
    for(d of data){
        d=String(d);
        if(d.includes(day)){
            var dd=d.split(" : ");
            // console.log("dd:"+dd);
            var drink=String(dd[1]);
            // console.log("drink:"+drink);
            drink=drink.substring(0,drink.length-2);
            sumdrink+=Number(drink);
            ans.push(d);
        }
    }

    if (sumdrink>=500){
        console.log("您在 "+day+" 的饮水量达标啦！");
        console.log("sumdrink:"+sumdrink);
    }
    else{
        console.log("您在 "+day+" 的饮水量没有达标！");
        console.log("sumdrink:"+sumdrink);
    }
    

    return ans;
  };
  
  // 测试用例
  console.log(query(" monday   ",data)); 
  console.log(query(" Tuesday   ",data)); // ["Tuesday - 100ml","Tuesday - 330ml"]
  console.log(query("Friday",data)); // ["Friday - 500ml"]
  console.log(); 


  /**
 * @param {string} todos
 */
const getCountTodos = (todos) => {
    return todos.split(",").length;
  };
  
  // 测试用例
  console.log(getCountTodos("Laundry, Wash dishes, Clean table")); // 3
  console.log(getCountTodos("Feed cat, Degrease bike chain")); // 2
  console.log("\n"); 

  /*
去掉字符串str中，连续重复的地方
*/
function removeRepetition(str) {
    str=String(str);
    
    if (!str){
        return "";
    }else{
        let ans=str[0];
        var last=str[0];

        for(var i=1;i<str.length;i++){
            if (str[i]==last){
                continue;
            }else{
                ans+=str[i];
                last=str[i];
            }
        }
        return ans;
    }
    
}

// 测试用例
console.log(removeRepetition("aaa")); // ->a
console.log(removeRepetition("abbba")); // ->aba
console.log(removeRepetition("aabbaabb")); // ->abab
console.log(removeRepetition("")); // ->
console.log(removeRepetition("abc")); // ->abc
console.log("\n");

/**
* @@param {string} str
* @return {Boolean} 如果是返回 true，如果不是回文字符串 返回 false
*/
function isPalindromicString(str) {
    let rstr=String(str).split("").reverse().join("");
    //console.log(rstr);
    return String(str)==rstr;
}

// 测试用例
console.log(isPalindromicString("aaa")); // ->true
console.log(isPalindromicString("madam")); // ->true
console.log(isPalindromicString("hello")); // ->false
console.log("\n");


const offset=document.getElementById("offset");
const btnEncrypt=document.getElementById("btn1");
const btnDecrypt=document.getElementById("btn2");
const ipt=document.getElementById("input");
const opt=document.getElementById("output");
/**
     * @description 字符串加密
     * @param {number} offset偏移量
     * @param {string} str 需要加密的字符串
     * @return {string} 返回加密字符串
     */
btnEncrypt.onclick=encrypt;
function encrypt(){
    //这里实现加密算法
    let str=ipt.value;
    if (str==""){
        return
    }
    str=String(str);
    let os=Number(offset.value);
    while(os>=26){
        os-=26;
    }
    let ans="";
    let aasc='a'.charCodeAt();
    let zasc='z'.charCodeAt();
    let Aasc='A'.charCodeAt();
    let Zasc='Z'.charCodeAt();
    for(var i=0;i<str.length;i++){
        var tempasc=str[i].charCodeAt();
        if((tempasc>=aasc&&tempasc<=zasc)||(tempasc>=Aasc&&tempasc<=Zasc)){
            if(tempasc>=aasc&&tempasc<=zasc){
                tempasc+=os;
                if(tempasc>zasc){
                    tempasc-=26;
                }
            }
            else{
                tempasc+=os;
                if(tempasc>Zasc){
                    tempasc-=26;
                }
            }
            ans+=String.fromCharCode(tempasc);
        }
        else{
            ans+=str[i];
        }
    }
    ipt.value="";
    opt.value=ans;
}
btnDecrypt.onclick=decrypt;
/**
 * @description 字符串解密
 * @param {number} offset 偏移量
 * @param {string} str
 * @return {string} 返回加密字符串
 */
function decrypt(){
    //这里实现解密算法
    let str=opt.value;
    str=String(str);
    if (str==""){
        return
    }
    let os=Number(offset.value);
    while(os>=26){
        os-=26;
    }
    let ans="";
    let aasc='a'.charCodeAt();
    let zasc='z'.charCodeAt();
    let Aasc='A'.charCodeAt();
    let Zasc='Z'.charCodeAt();
    for(var i=0;i<str.length;i++){
        var tempasc=str[i].charCodeAt();
        if((tempasc>=aasc&&tempasc<=zasc)||(tempasc>=Aasc&&tempasc<=Zasc)){
            if(tempasc>=aasc&&tempasc<=zasc){
                tempasc-=os;
                if(tempasc<aasc){
                    tempasc+=26;
                }
            }
            else{
                tempasc-=os;
                if(tempasc<Aasc){
                    tempasc+=26;
                }
            }
            ans+=String.fromCharCode(tempasc);
        }
        else{
            ans+=str[i];
        }
    }
    opt.value="";
    ipt.value=ans;
}

const task2btn=document.querySelector(".task2 button");
const task2optField=document.querySelector(".task2 h2");
const task2iptField=document.querySelector(".task2 input");
task2btn.onclick=generateTypeEffect;
function generateTypeEffect () {
    //这里实现打字机效果
    //将内容显示在h2中
    let str=task2iptField.value;
    task2optField.textContent="";
    console.log(str);
    let strd="";
    let i=0;
    let timer=setInterval(()=>{
        if(strd.length<str.length){
            strd+=str[i]
            task2optField.textContent+=str[i++];
        }else{
            clearInterval(timer);
        }
    },100);
}

const num1Field=document.querySelector(".task3 .num1Field");
const num2Field=document.querySelector(".task3 .num2Field");
const resultField=document.querySelector(".task3 .resultField");
const addBtn=document.querySelector(".task3 button");

addBtn.onclick=()=>{
    let num1=String(num1Field.value);
    let num2=String(num2Field.value);
    let ans=largeNumAdd(num1,num2);
    resultField.value=ans;
};
/**
    * @param {string} num1
    * @param {string} num2
    * @return {string} 返回 num1+num2
    **/

function largeNumAdd(num1, num2) {
    // 在这里实现大数相加函数
    num1=Number(num1);
    num2=Number(num2);
    return num1+num2;
}

//测试用例
console.log(largeNumAdd("11", "123")); //->"134"
console.log(largeNumAdd("235656","746433225")); //->""746668881""
console.log(largeNumAdd("3456786543355","222222234567778")); //->"225679021111133"
console.log("\n");

