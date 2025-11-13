const taskInput = document.getElementById("task-input");
const taskbtnadd = document.getElementById("add-task-btn");
const taskList = document.getElementById("task-list");

let taskitem;

function addTask(){
    const taskText = taskInput.value.trim();

    if( taskText  !== "" ){
        taskitem = document.createElement("li");
        taskitem.innerHTML = `<span>${taskText}</span>
        <button class="delete-btn">Eliminar</button>
        `;

        const deleteBtn = taskitem.querySelector(".delete-btn");
        deleteBtn.addEventListener("click",deleteTask);
        taskList.appendChild(taskitem);
        taskInput.value = "";
    }
}

function togglecomplete(){
    this.classList.toggle("complete");
}

function deleteTask(){
    this.parentElement.remove();
}

taskbtnadd.addEventListener("click", addTask);

taskInput.addEventListener("keypress", function(e){
    if(e.key === "Enter"){
        addTask();
    }
});

taskList.addEventListener("click", function(e){
    if(e.target.tagName === "SPAN"){
        e.target.classList.toggle("complete");
    }
});

taskList.addEventListener("click", function(e){
    if(e.target.classList.contains("delete-btn")) {
        e.target.parentElement.remove();
    }
});