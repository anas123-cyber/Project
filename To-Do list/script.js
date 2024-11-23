const inputBox = document.getElementById("input-box");

const button = document.querySelector(".row button");

const listCont = document.getElementById("list-container");

button.addEventListener("click", () => {
    if(inputBox.value === ''){
        alert("You must write something!");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listCont.append(li);

        let span = document.createElement("span");

        span.innerHTML = "\u00d7";
    
        li.appendChild(span);
        saveData();
    }
    inputBox.value = "";//to remove the text from input box after displaying it
});



listCont.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");//if the clicked item is <li> element then it would apply the "checked' property.
        saveData();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();//if the clicked item is <span> element then it would remove the corresponding li iten(i.e. its parent element).
        saveData();
        
    }
    },false);

function saveData(){
    localStorage.setItem("data", listCont.innerHTML);
    //saves all the work done above it will store the previous work which we have done no matter we refresh the page
}

function showTask(){
    listCont.innerHTML = localStorage.getItem("data");
    //still displays all the chnages we have made after refresing the page.
}
showTask();