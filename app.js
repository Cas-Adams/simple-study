const newtask = document.getElementsByTagName("form")[0];
const TitleInput = document.getElementById("title");
const DescInput = document.getElementById("desc");
const STORAGE_KEY = "Simple-Study";
const pastTaskContainer = document.getElementById("past-tasks");
//Declare inputs as constants

//adds event listener to the form that will listen for when an input has been submitted
newtask.addEventListener("submit",(event) => {

    event.preventDefault()

    const TaskTitle = TitleInput.value;
    const TaskDesc = DescInput.value;

    storeNewTask(TaskTitle, TaskDesc);

    newtask.reset();

    renderPastTasks();
});

//Stores the new task from the from 
function storeNewTask(TaskTitle, TaskDesc) {
    const tasks = getAllStoredTasks();

    tasks.push({TaskTitle,TaskDesc});

    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));

    window.alert("New Task Added")
    
};

//gets all stored tasks from local storage
function getAllStoredTasks() {
  // Get the string of task data from localStorage
  const data = window.localStorage.getItem(STORAGE_KEY);

  // If no tasks were stored, default to an empty array
  // otherwise, return the stored data as parsed JSON
  const tasks = data ? JSON.parse(data) : [];

  return tasks;
}


function renderPastTasks(filterDate = null) {
  const tasks = getAllStoredTasks();
  pastTaskContainer.textContent = "";

  const pastTaskHeader = document.createElement("h2");
  pastTaskHeader.textContent = "Tasks To Do:";
  const pastTaskList = document.createElement("ul");

  tasks.forEach((tasks, index) => {         
    const taskEL = document.createElement("li");
    taskEL.style.display = "flex";
    taskEL.style.justifyContent = "space-between";
    taskEL.style.alignItems = "center";

    const taskText = document.createElement("span");
    taskText.textContent = `${tasks.TaskTitle} ${tasks.TaskDesc}`;

    const deletebtn = document.createElement("button");
    deletebtn.textContent = 'delete';
    deletebtn.addEventListener("click", () => {deleteTask(index);});


    taskEL.appendChild(taskText);
    taskEL.appendChild(deletebtn);
    pastTaskList.appendChild(taskEL);
    });

  pastTaskContainer.appendChild(pastTaskHeader);
  pastTaskContainer.appendChild(pastTaskList);
  }
  

function deleteTask(index) {
  const tasks = getAllStoredTasks();
  tasks.splice(index, 1); // Remove task at said index
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
  renderPastTasks(); // task list again
  window.alert("Task Deleted");
}

renderPastTasks();