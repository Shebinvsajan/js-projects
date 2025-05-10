const addBtn = document.getElementById("addBtn");
const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");

addBtn.addEventListener("click", addTask);

taskInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") addTask();
});

function addTask() {
  const taskText = taskInput.value.trim();

  if (taskText !== "") {
    console.log(taskText);

    // Create a new list item
    const li = document.createElement("li");

    // Create task text element
    const taskSpan = document.createElement("span");
    taskSpan.textContent = taskText;
    li.appendChild(taskSpan);

    taskInput.value = "";

    // create delete button
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    li.appendChild(deleteBtn);

    deleteBtn.addEventListener("click", () => {
      taskList.removeChild(li);
    });

    li.addEventListener("click", () => {
      li.classList.toggle("completed");
    });

    taskList.appendChild(li);
  }
}
