const toDoForm = document.getElementById("todo-form");
const toDoList =  document.getElementById("todo-list");
const toDoInput = document.querySelector("#todo-form input");

const TODOS_KEY = "todos"

let toDos = [];

function deleteToDo(event){
    const li = event.target.parentElement;
    li.remove();
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
    saveToDos();
}

function saveToDos(){
    localStorage.setItem(TODOS_KEY,JSON.stringify(toDos));
}


function paintTodo(newTodo){
    const createList = document.createElement("li");
    createList.id = newTodo.id;

    const span  = document.createElement("span");
    span.innerText = newTodo.text;

    const button  = document.createElement("button");
    button.innerText = "X";
    button.addEventListener("click", deleteToDo);

    createList.appendChild(span);
    createList.appendChild(button);

    toDoList.appendChild(createList);
}

function  handleTodoSubmit(e){
    e.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value = "";
    const newTodoObj = {
        text: newTodo,
        id: Date.now(),
    };
    toDos.push(newTodoObj);
    paintTodo(newTodoObj);
    saveToDos();
}

toDoForm.addEventListener("submit", handleTodoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);
if(savedToDos){
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    parsedToDos.forEach(paintTodo);
}