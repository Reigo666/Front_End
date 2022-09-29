//task1
const heightField=document.querySelector(".task1 .heightField");
const weightField=document.querySelector(".task1 .weightField");
const btn=document.querySelector(".task1 .btn");
const res=document.getElementById("result1");
btn.onclick=()=>{
    let h=heightField.value;
    let w=weightField.value;
    let bmi=w/(h*h);
    res.textContent=bmi;
    t="";
    // if (bmi<18.5){
    //     t="您是偏瘦体型，可以适当增肥咯";
    // }else if(bmi>=18.5 && bmi<25){
    //     t="您是标准体型，保持的不错哟";
    // }else if(bmi>=25 && bmi<28){
    //     t="您是微胖体型，可以多吃粗粮，让饮食结构更加健康吧！";
    // }else if(bmi>=28 && bmi<32){
    //     t="您是肥胖体型，管住嘴迈开腿开始减肥吧！";
    // }else if(bmi>=32){
    //     t="您是严重肥胖体型，管住嘴迈开腿开始减肥吧！！";
    // }

    switch(true){
        case bmi<18.5:
            t="您是偏瘦体型，可以适当增肥咯";
            break;
        case bmi>=18.5 && bmi<25:
            t="您是标准体型，保持的不错哟";
            break;
        default:
            t="您是严重肥胖体型，管住嘴迈开腿开始减肥吧！！";
            break;
    }
    res.textContent+=" "+t;
}

// 如果 BMI 值低于 18.5 ,体重过轻，就提示您是偏瘦体型，可以适当增肥咯
// 如果 BMI 值在 18.5-25 之间，属于正常体型，就提示您是标准体型，保持的不错哟
// 如果 BMI 值在 25-28 之间，就属于有点重，就提示您是微胖体型，可以多吃粗粮，让饮食结构更加健康吧！
// 如果 BMI 值在 28-32 之间，就属于重了，就提示您是肥胖体型，管住嘴迈开腿开始减肥吧！
// 如果 BMI 值大于 32，就属于严重超重了，就提示您是肥胖体型，管住嘴迈开腿开始减肥吧！
// 如果实际体重小于标准体重，并且差值大于 10kg，就提示您是过重体型，已经影响健康了，需要重视自己的饮食管理了

//task2
const task2_numField=document.querySelector(".task2 .task2_numField");
const task2_btn=document.querySelector(".task2 .btn");
const res2=document.getElementById("result2");


task2_btn.onclick=()=>{
    let v=task2_numField.value;
    let n=v.length;
    t="";
    if (isNaN(v)){
        t="请输入一个数字";
        res2.textContent=t;
        return
    }

    if(n<=2){
        t="请输入一个大于等于三位的数字";
        res2.textContent=t;
        return
    }

    let sum=0;
    for(let i=0;i<n;i++){
        vi=Number(v[i]);
        sum+=vi*vi*vi;
        console.log(sum);
    }
    console.log(sum);
    if(sum==Number(v)){
        t="是水仙花数";
    }
    else{
        t="不是水仙花数";
    }
    res2.textContent=t;
}



//task3
const dec_number_Field=document.getElementById("dec-number");
const res3=document.getElementById("result3");
const trans_btn=document.getElementById("trans-btn");

trans_btn.onclick=dec2bin;
function dec2bin() {
    decNumber=dec_number_Field.value
    let num=Number(decNumber);
    let bin_bit=5;
    let t="运算结果:";
    let ans="";
    if(isNaN(num)){
        t+="请输入一个数字";
    }
    else if(num<0){
        t+="请输入一个非负数字";   
    }else{
        if(num==0){
            ans="0";
        }
        else{
            while(num){
                let temp=num%2;
                ans+=String(temp);
                num=parseInt(num/2);
            }
        }
        n=ans.length;
        if(n>bin_bit){
            console.log("bin_bit Error!");
        }
        else{
            for(let i=0;i<bin_bit-n;i++){
                ans+="0";
            }
        }
        ans=ans.split("").reverse().join("");
        t+=ans;
    }
    res3.textContent=t;
    // 在这里实现你的转化方法，注意需要判断输入必须为一个非负整数
}

//task4
const res4=document.getElementById("result4");
generateNum();
function generateNum(){
    t=""
    for(let i=0;i<=100;i++){
        if(i%3==0){
            t+="PA,";
        }
        else{
           t+=String(i)+",";
        }
    }
    t=t.substr(0,t.length-1);
    res4.textContent=t;
}


//task4
const res5=document.getElementById("result5");
generateMultiTalbe();



function generateMultiTalbe(){
    s="<table>";
    for(var i=1;i<=9;i++){
        s+="<tr>";
        for(var j=1;j<=i;j++){
            s+="<td>";
            s+=j+"*"+i+"="+j*i;
            s+="</td>";
        }
        s+="</tr>";  
    }
    s+="</table>";
    res5.innerHTML=s;
}

//task5
Welcome();
function Welcome(){
    var date=new Date();
    var hour=date.getHours();
    console.log(hour);
    if(hour<13){
        alert("早上好！");
    }
    else if(hour>=13 && hour<=17){
        alert("下午好！");
    }
    else{
        alert("晚上好！");
    }
}