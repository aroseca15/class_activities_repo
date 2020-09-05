const todoInput = document.querySelector("#todo-text");
const todoForm = document.querySelector("#todo-form");
const todoList = document.querySelector("#todo-list");
const todoCountSpan = document.querySelector("#todo-count");

// Notice it's a let now!
let todos = [];

init();

function renderTodos() {
  // Clear todoList element and update todoCountSpan
  todoList.innerHTML = "";
  todoCountSpan.textContent = todos.length;

  // Render a new li for each todo
  for (let i = 0; i < todos.length; i++) {
    let todo = todos[i];

    let li = document.createElement("li");
    li.textContent = todo;
    li.setAttribute("data-index", i);

    let button = document.createElement("button");
    button.textContent = "Complete";

    li.appendChild(button);
    todoList.appendChild(li);
  }
}

function init() {
  // Write code here to check if there are todos in localStorage
  // If so, parse the value from localStorage and assign it to the todos variable

  // Render todos to the DOM
  renderTodos();
}

function storeTodos() {
  // Add code here to stringify the todos array and save it to the "todos" key in localStorage
}

// When form is submitted...
todoForm.addEventListener("submit", function(event) {
  event.preventDefault();

  let todoText = todoInput.value.trim();

  // Return from function early if submitted todoText is blank
  if (todoText === "") {
    return;
  }

  // Add new todoText to todos array, clear the input
  todos.push(todoText);
  todoInput.value = "";

  // Store updated todos in localStorage, re-render the list
  storeTodos();
  renderTodos();
});
