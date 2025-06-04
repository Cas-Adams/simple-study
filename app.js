const newtask = document.getElementsByTagName("form")[0];
const TitleInput = document.getElementById("title");
const DescInput = document.getElementById("desc");

newtask.addEventListener("submit",(event) => {

    event.preventDefault()

    const TaskTitle = TitleInput.value;
    const TaskDesc = DescInput.value;

});

function storeNewTask(TaskTitle, TaskDesc) {
    const tasks = GetAllStoredTasks();

    tasks.push({TaskTitle,TaskDesc});

    window.alert("Testing")
    
};

function GetAllStoredTasks() {
  // Get the string of session data from localStorage
  const data = window.localStorage.getItem(STORAGE_KEY);

  // If no sessions were stored, default to an empty array
  // otherwise, return the stored data as parsed JSON
  const sessions = data ? JSON.parse(data) : [];

  return sessions;
}