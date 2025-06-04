const newtask = document.getElementsByTagName("form")[0];
const TitleInput = document.getElementById("title");
const DescInput = document.getElementById("desc");
//Declare inputs as constants

//adds event listener to the form that will listen for when an input has been submitted
newtask.addEventListener("submit",(event) => {

    event.preventDefault()

    const TaskTitle = TitleInput.value;
    const TaskDesc = DescInput.value;

});

//Stores the new task from the from 
function storeNewTask(TaskTitle, TaskDesc) {
    const tasks = GetAllStoredTasks();

    tasks.push({TaskTitle,TaskDesc});

    window.alert("Testing")
    
};

//gets all stored tasks from local storage
function GetAllStoredTasks() {
  // Get the string of session data from localStorage
  const data = window.localStorage.getItem(STORAGE_KEY);

  // If no sessions were stored, default to an empty array
  // otherwise, return the stored data as parsed JSON
  const sessions = data ? JSON.parse(data) : [];

  return sessions;
}