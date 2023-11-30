const itembox=document.getElementById("input-box");
const listcontainer=document.getElementById("list-container");

function addevent(){
    if(itembox.value===''){
        alert("There must be somthing to add");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = itembox.value;
        listcontainer.appendChild(li);
        let span=document.createElement("span");
        span.innerHTML="\u00d7";
        li.appendChild(span);
    }
    itembox.value ="";
    saveData(); 
}

listcontainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
},false);

function saveData(){
    localStorage.setItem("data",listcontainer.innerHTML);
}

function showTask(){
    listcontainer.innerHTML= localStorage.getItem("data");
}
showTask();