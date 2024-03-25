const inputBox = document.querySelector("#input-box");
const listContainer = document.querySelector("#list-container");

function AddTask(){
    if(inputBox.value === ''){
        alert("You have to write your task...");
    }else{
        let list = document.createElement("li");
        list.innerHTML = inputBox.value;
        listContainer.appendChild(list);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        list.appendChild(span);
    }
    inputBox.value = "";
    saveData();
}

listContainer.addEventListener("click",(e) => {
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
},false);

function saveData(){
    localStorage.setItem("data",listContainer.innerHTML);
}

function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}

showTask();