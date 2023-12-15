const todoInput = document.getElementById("todoInput");
const todoBtn = document.getElementById("todoBtn");
const todoList = document.getElementById("todoList");
const filterOption = document.querySelector(".filterTodo");

todoBtn.addEventListener("click", addTodo);
todoList.addEventListener("click", deleteComplete);
filterOption.addEventListener("click", filterTodos);

function addTodo(e) {
  e.preventDefault();
  //create todo Div
  const todoDiv = document.createElement("div");
  todoDiv.classList.add("todo");
  //create li
  const newTodo = document.createElement("li");
  newTodo.innerText = todoInput.value;
  newTodo.classList.add("todoItem");
  todoDiv.appendChild(newTodo);
  //create complete button
  const completeBtn = document.createElement("button");
  completeBtn.innerHTML = '<i class="fa-solid fa-check"></i>';
  completeBtn.classList.add("completeBtn");
  todoDiv.appendChild(completeBtn);
  //create delete button
  const deleteBtn = document.createElement("button");
  deleteBtn.innerHTML = '<i class="fa-regular fa-trash-can"></i>';
  deleteBtn.classList.add("deleteBtn");
  todoDiv.appendChild(deleteBtn);
  todoList.appendChild(todoDiv);
  todoInput.value = "";
}

function deleteComplete(e) {
  const item = e.target;
  //delete item
  if (item.classList[0] === "deleteBtn") {
    const todo = item.parentElement;
    todo.classList.add("fall");
    todo.addEventListener("transitionend", () => {
      todo.remove();
    });
  }
  //mark item complete
  if (item.classList[0] === "completeBtn") {
    const todo = item.parentElement;
    todo.classList.toggle("completed");
  }
}

function filterTodos(e) {
  const todos = todoList.childNodes;
  console.log(todos);
  todos.forEach(function (todo) {
    switch (e.target.valve) {
      case "all":
        todo.style.display = "flex";
        break;
      case "completed":
        if (todos.classList.contains("completed")) {
          todo.style.display = "flex";
        } else {
          todo.style.display = "none";
        }
    }
  });
}
