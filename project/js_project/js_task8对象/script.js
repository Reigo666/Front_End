let num1 = 1;
let num2 = 0;

//your complement
[num1,num2]=[num2,num1];
console.log({num1},{num2}) // - > 0 , 1

/*
 * 解构要求
 * name 属性赋值给变量 name。
 * years 属性赋值给变量 age。
 * math 属性复制给变量 mathScore。
 * chemistry 属性复制给变量 chemistryScore。
 * biology 属性复制给变量 biologyScore。
 * sport 属性复制给变量 hobby1。
 * dance 属性复制给变量 hobby2。
 * marriageStaus 属性赋值给变量 marriageStaus（如果属性缺失则取默认值 false）
 */

let person = {
    name: "Amy",
    years: 30,
    score: {
      math: 99,
      chemistry: 80,
      biology: 78,
    },
    hobbies: ["sport", "dance"],
  };
  
  // your complement
  let {name,years:age,score:{math:mathScore,chemistry:chemistryScore,biology:biologyScore},hobbies:[hobby1,hobby2]}=person;
  console.log(name); // Amy
  console.log(age); // 30
  console.log(mathScore); // 99
  console.log(chemistryScore); // 80
  console.log(biologyScore); // 78
  console.log(hobby1); // sport
  console.log(hobby2); // dance



// 使用递归来实现一个深度克隆，可以复制一个目标对象，返回一个完整拷贝
// 被复制的对象类型会被限制为数字、字符串、布尔、日期、数组、Object对象。不会包含函数、正则对象等
function deepClone(src) {
  // your implement
  function dg(src){
    let combination={};
    let isarray=false;
    if(Array.isArray(src)){
      isarray=true;
    }
    for(let k in src){
      if(typeof(src[k])=='object'){
        combination[k]=dg(src[k]);
      }
      else{
        combination[k]=src[k];
      }
    }
    if(isarray){
      combination=Object.values(combination);
    }
    return combination;
    
  }
  let newobj={};
  newobj=dg(src);
  // for(let k in src){
  //   if (typeof(src[k])=='object'){
  //     newobj[k]=dg(src[k]);
  //   }
  //   else{
  //     newobj[k]=src[k];
  //   }
  // }
  return newobj;
}

// 测试用例：
var srcObj = {
  a: 1,
  b: {
      b1: ["hello", {mygreeing:"hi"}],
      b2: "JavaScript"
  }
};
var abObj = srcObj;
var tarObj = deepClone(srcObj);

srcObj.a = 2;
srcObj.b.b1[0] = "Hello2";

console.log(abObj.a);
console.log(abObj.b.b1[0]);

console.log(tarObj.a);      // 1
console.log(tarObj.b.b1[0]);    // "hello"


//利用通过 Object.defineProperty()来实现简易的双向数据绑定 
//创建person对象 
var person = { name:'' };

function changeName(){
  //修改person对象中的name的值为输入框中的值 } 
  Object.defineProperty(person,'name', { // 这里实现双向绑定，监听name值变化，input也跟着变化 
  
  })
  
}
function changeInput(){ //按钮事件 修改person对象中的name的值为rose 

}