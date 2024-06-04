document
  .getElementById("todo-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    const todoInput = document.getElementById("todo-input").value;
    const datetimeInput = document.getElementById("datetime-input").value;
    if (todoInput && datetimeInput) {
      addTodoItem(todoInput, datetimeInput);
      document.getElementById("todo-input").value = "";
      document.getElementById("datetime-input").value = "";
    }
  });

function addTodoItem(task, datetime) {
  const todoList = document.getElementById("todo-list");

  const li = document.createElement("li");
  li.innerHTML = `<span>${task} (Due: ${new Date(
    datetime
  ).toLocaleString()})</span><button class="delete-btn">Delete</button>`;

  todoList.appendChild(li);

  li.querySelector(".delete-btn").addEventListener("click", function () {
    li.remove();
  });
}
