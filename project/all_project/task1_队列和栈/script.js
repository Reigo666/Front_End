var queue = ["apple", "pear"];
const input_field=document.getElementById("queue-input");
const btn1=document.getElementById("in-btn");
const btn2=document.getElementById("out-btn");
const btn3=document.getElementById("font-btn");
const btn4=document.getElementById("empty-btn");
const pcontent=document.getElementById("queue-cont");
btn1.onclick=()=>{//push
    queue.push(String(input_field.value));
    showQueue();
};
btn2.onclick=()=>{
    if(queue.length){
        queue.pop();
    }
    showQueue();
};
btn3.onclick=()=>{//show
    showQueue();
};
btn4.onclick=()=>{
    if(queue.length){
        console.log("队列不为空");
    }
    else{
        console.log("队列为空");
    }
};

function showQueue(){
    s=queue.join("->");
    pcontent.textContent=s;
}
