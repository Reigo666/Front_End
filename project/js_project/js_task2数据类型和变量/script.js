// task1
const heightField=document.querySelector(".heightField");
const weightField=document.querySelector(".weightField");

const submit_task1=document.querySelector(".task1 .submit");
const bmiField=document.querySelector(".task1 div p");
submit_task1.onclick=function(){
    let height=Number(heightField.value);
    let weight=Number(weightField.value);
    let bmi=weight/(height*height);
    bmiField.textContent=bmi;
}

//task2
const purchaseMoneyField=document.getElementById("purchaseMoneyField");
const isVipField=document.getElementById("isVipField");
const submit_task2=document.querySelector(".task2 .submit");
const payField=document.querySelector(".task2 .pay");
submit_task2.onclick=function(){
    let purchase=purchaseMoneyField.value;
    let isVip=isVipField.checked;
    console.log(isVip);
    let minmoney=0
    if (purchase>=300){
        minmoney=30;
    }
    else if (purchase>=200){
        minmoney=10;
    }
    else if (purchase>=100){
        minmoney=5;
    }
    if (isVip){
        purchase*=0.98;
    }
    purchase-=minmoney;
    payField.textContent=purchase;
}

//task3
const task3_Input_Field=document.getElementById("task3_Input_Field");
const submit_task3=document.querySelector(".task3 .submit");
const task3_Output_Field=document.querySelector(".task3 .task3_Output_Field");
submit_task3.onclick=function(){
    task3_Input=task3_Input_Field.value;
    
    if (!isNaN(task3_Input)&&task3_Input!=''){
        task3_Output_Field.textContent="True";
    }
    else{
        task3_Output_Field.textContent="False";
    }
     
}

//task4
/*
实现一个判断传入的参数是否为 undefined 类型
返回一个布尔值，如果是undefied 为true，否之，为fase
*/

function isUndefined(arg){
    //do something
    if(arg===undefined){
        return true;
    }
    return false;
}

/*
实现一个判断传入的参数是否为 null 类型
返回一个布尔值，如果是null 为true，否之，为fase
*/
function isNull(arg){
    //do something
    if(arg===null){
        return true;
    }
    return false;
}

// 测试用例
var expUndefined = undefined;
var expNull = null;
var expZero = 0;
var a;
var o = new Object();
console.log(isUndefined(expUndefined)); // ->true
console.log(isUndefined(expNull)); // ->false
console.log(isUndefined(a)); // ->true
console.log(isUndefined(o)); // ->false

console.log("");

console.log(isNull(expUndefined)); // ->false
console.log(isNull(expNull)); // ->true
console.log(isNull(expZero)); // ->false
console.log(isNull(a)); // ->false
console.log(isNull(o)); // ->false