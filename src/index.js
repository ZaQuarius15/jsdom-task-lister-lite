const createTaskForm = document.getElementById('create-task-form');
const taskList = document.getElementById('tasks');
const prioritySelect = document.createElement('select');
const optionHigh = document.createElement('option');
const optionMedium = document.createElement('option');
const optionLow = document.createElement('option');
const priorityLabel = document.createElement('label');
optionHigh.value = "high";
optionHigh.innerText = "high";
optionMedium.value = "medium";
optionMedium.innerText = "medium";
optionLow.value = "low";
optionLow.innerText = "low";
priorityLabel.innerText = "Priority: ";
prioritySelect.append(optionHigh, optionMedium, optionLow)
createTaskForm.appendChild(priorityLabel)
createTaskForm.appendChild(prioritySelect)

createTaskForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const toDo = createTaskForm.children[1].value;
  const priorityValue = e.target.children[4].value;
  const li = document.createElement("li");
  const delBtn = document.createElement("button");
  e.target.reset();
  
  delBtn.innerText = "x"
  delBtn.className = "del-btn"
  delBtn.addEventListener("click", () => {
    li.remove()
  })

  li.innerText = toDo;
  if (priorityValue == "high") {
    li.style.color = "green";
  } else if (priorityValue == "medium") {
    li.style.color = "gold";
  } else {
    li.style.color = "red";
  }
  li.append(delBtn)
  taskList.appendChild(li);
  
})