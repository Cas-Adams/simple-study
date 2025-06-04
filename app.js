const newtask = document.getElementsByTagName("form")[0];
const TitleInput = document.getElementById("title");
const DescInput = document.getElementById("desc");
//Declare inputs as constants

//adds event listener to the form that will listen for when an input has been submitted
newtask.addEventListener("submit",(event) => {

    event.preventDefault()

    const TaskTitle = TitleInput.value;
    const TaskDesc = DescInput.value;

    storeNewTask(TaskTitle, TaskDesc);

    newtask.reset();

});

//Stores the new task from the from 
function storeNewTask(TaskTitle, TaskDesc) {
    const tasks = GetAllStoredTasks();

    tasks.push({TaskTitle,TaskDesc});

    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(sessions));

    window.alert("Testing")
    
};

//gets all stored tasks from local storage
function GetAllStoredTasks() {
  // Get the string of session data from localStorage
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
  pastTaskHeader.textContent = filterDate ? `Tasks on ${formatDate(filterDate)}` : "Past tasks";
  const pastTaskList = document.createElement("ul");

  filteredTasks.forEach((session, index) => {
    const sessionEl = document.createElement("li");
    sessionEl.innerHTML = `${tasks.TaskTitle} to ${session.TaskDesc}`;

    pastTaskList.appendChild(sessionEl);
  });

  pastTaskContainer.appendChild(pastTaskHeader);
  pastTaskContainer.appendChild(pastTaskList);
}

renderPastTasks();