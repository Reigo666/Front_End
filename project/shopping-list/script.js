const btn=document.getElementById("add_button");


const ul=document.querySelector("ul");

btn.onclick=function addItem(){
    item=document.getElementById("item_adder");
    if (item.value==="" ||item.value===null){
        alert("item不能为空!");
        return
    }
    itemName=item.value;

    let myli=document.createElement("li");
    let itemSpan=document.createElement("span");
    itemSpan.textContent = itemName;
    let deleteButton=document.createElement("button");
    deleteButton.setAttribute("class","deleteButton");
    deleteButton.addEventListener("click",deleteItem);
    deleteButton.textContent="Delete";
    
    ul.appendChild(myli);
    myli.appendChild(itemSpan);
    myli.appendChild(deleteButton);

    item.value="";
    item.focus();
};

function deleteItem(e){
    let deleteButton=e.target;
    console.log(deleteButton);
    let deleteLi=deleteButton.parentNode
    deleteLi.parentNode.removeChild(deleteLi);
}