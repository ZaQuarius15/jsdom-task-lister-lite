const createTaskForm = document.getElementById('create-task-form')
const taskList = document.getElementById('tasks')


createTaskForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const toDo = createTaskForm.children[1].value
  e.target.reset()
  const li = document.createElement("li");
  const delBtn = document.createElement("button")
  li.innerText = toDo;
  delBtn.innerText = "x"
  delBtn.className = "del-btn"
  li.append(delBtn)
  taskList.appendChild(li);
  delBtn.addEventListener("click", () => {
    li.remove()
  })
})