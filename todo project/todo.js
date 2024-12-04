var input=document.getElementById("inputContainer");
var listElement=document.getElementById("list-container");
function addTask(){
    let li=document.createElement("li");
    li.innerHTML=input.value;
    listElement.append(li);
    let spanVar=document.createElement("span");
    spanVar.innerHTML="\u00d7";
    li.appendChild(spanVar)
    input.value='';
}
listElement.addEventListener("click", function(e){
    if(e.target.tagName==="LI"){
        e.target.classList.toggle("checked");
    }
    else if(e.target.tagName==="SPAN"){
        e.target.parentElement.remove();
    }
})