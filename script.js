

const task = document.getElementById("task")
const addbtn  = document.getElementById("btn")
const taskList = document.querySelector(".list");


//Event Listeners
document.addEventListener("DOMContentLoaded",getTasks)
addbtn.addEventListener("click", addTask)
taskList.addEventListener("click",listBtns)


// Adding tasks
function addTask()
{
   console.log(task.value)
   if(task.value == '')
   {
      alert("Enter task to be done")

   } else
   {
      const taskDiv =  document.createElement("div")
      taskDiv.classList.add("todo")
      const newTask = document.createElement("li");
      newTask.classList.add("new-Task")
      newTask.innerHTML = task.value;
      taskDiv.append(newTask)
      taskList.append(taskDiv)
   
      const completeBtn = document.createElement("button")
      completeBtn.innerHTML = '<i class ="fas fa-check-circle"></i>'
      completeBtn.classList.add("complete-Btn")
      taskDiv.appendChild(completeBtn)
   
      const deleteBtn = document.createElement("button")
      deleteBtn.innerHTML = '<i class="fas fa-trash"></i>'
      deleteBtn.classList.add("delete-Btn")
      taskDiv.append(deleteBtn);
      saveLocalTasks(task.value)
      console.log(task.value)

    
      
   }

}

// for Buttons
function listBtns(event)
{
   const specifiedTask = event.target;
   if(specifiedTask.classList[0] === "complete-Btn")
   {
      const todoParent = specifiedTask.parentElement;
      todoParent.classList.toggle("completed");
   }
   else
   {
      const todoParent = specifiedTask.parentElement;
      removeLocalTask(todoParent)
      todoParent.remove()
   }
}

//Saving tasks into local Storage
function saveLocalTasks()
{
   console.log(task.value)
   let tasks;
   if(localStorage.getItem('tasks') === null)
   {
      tasks = [];
   }
   else
   {
      tasks = JSON.parse(localStorage.getItem("tasks"));
   }

   tasks.push(task.value);
   localStorage.setItem('tasks', JSON.stringify(tasks))
   task.value = ""
}


function getTasks()
{
   let tasks;
   if(localStorage.getItem('tasks') === null)
   {
      tasks = [];
   }
   else
   {
      tasks = JSON.parse(localStorage.getItem("tasks"));
   }

   tasks.forEach(function(task)
   {
      console.log(task)
      const taskDiv =  document.createElement("div")
      taskDiv.classList.add("todo")
      const newTask = document.createElement("li");
      newTask.classList.add("new-Task")
      newTask.innerHTML = task;
      taskDiv.append(newTask)
      taskList.append(taskDiv)
   
      const completeBtn = document.createElement("button")
      completeBtn.innerHTML = '<i class ="fas fa-check"></i>'
      completeBtn.classList.add("complete-Btn")
      taskDiv.append(completeBtn)
   
      const deleteBtn = document.createElement("button")
      deleteBtn.innerHTML = '<i class="fas fa-trash"></i>'
      deleteBtn.classList.add("delete-Btn")
      taskDiv.append(deleteBtn);
   })
}

//Removing tasks
function removeLocalTask(todoParent)
{
   let tasks;
   if(localStorage.getItem('tasks') === null)
   {
      tasks = [];
   }
   else
   {
      tasks = JSON.parse(localStorage.getItem("tasks"));
   }
   const todoIndex = todoParent.children[0].innerText;
   tasks.splice(tasks.indexOf(todoIndex),1)
   localStorage.setItem('tasks', JSON.stringify(tasks))
}


