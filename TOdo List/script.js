const taskInput = document.getElementById("task-input");
const addButton = document.getElementById("add-button");
const taskList = document.getElementById("task-list");

addButton.addEventListener("click", () => {
  const taskText = taskInput.value;
  if (taskText !== "") {
    const newTask = document.createElement("li");
    newTask.textContent = taskText;
    taskList.appendChild(newTask);

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.addEventListener("click", () => {
      taskList.removeChild(newTask);
    });
    newTask.appendChild(deleteButton);

    taskInput.value = "";
  }
});
