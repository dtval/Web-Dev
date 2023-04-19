const taskInput = document.querySelector("#newtask-todo");
const addTaskBtn = document.querySelector("#button-todo");
const taskList = document.querySelector("#list");
const inputDate = document.querySelector("input[type='date']");

let tasks = [];

const addTask = () => {
  if (taskInput.value === "") {
    alert("No tasks");
    return;
  }
  deadline = inputDate.value;
  tasks.push({ name: taskInput.value, done: false, deadline: new Date(deadline) });
  taskInput.value = "";
  inputDate.value = "";
  renderTasks();
};

const markTask = (index) => {
  tasks[index].done = !tasks[index].done;
  renderTasks();
};

const renderTasks = () => {
  taskList.innerHTML = "";
  tasks.forEach((task, index) => {
    const taskItem = document.createElement("li");
    taskItem.classList.add("task-item");
    taskItem.innerHTML =
      `<input type="checkbox" class="mark-done-btn" ${task.done ? "checked" : ""} />
      <div class="item ${task.done ? "done" : ""}">${task.name}</div>` +
      `<div>${task.deadline}</div>` +
      `<div class="delete-btn" onclick="deleteTask(${index})"><i class="fa-solid fa-trash-can"></i></div>`;
    taskItem.querySelector(".mark-done-btn").addEventListener("click", () => {
      markTaskDone(index);
    });
    taskList.appendChild(taskItem);
  });
};

const deleteTask = (index) => {
  tasks.splice(index, 1);
  renderTasks();
};

addTaskBtn.addEventListener("click", addTask);

renderTasks();
