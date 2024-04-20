const inputEl = document.querySelector("#input");
const buttonEl = document.querySelector("#delete");
const outputEl = document.querySelector("#list-container");
const form = document.querySelector("form");



const removeTask = (id) => {
  let tasks;
  if (localStorage.getItem("tasks") === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem("tasks", tasks));
  }
  tasks = tasks.filter((task) => {
    return task.id !== +id;
  });
  localStorage.setItem("tasks", JSON.stringify(tasks));
  getTasks();
};


const getTasks = () => {
  let tasks;
  if (localStorage.getItem("tasks") === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem("tasks"));
  }
  console.log(tasks);
  
  let output;
  const allTasks = tasks.map((task) => {
    return `
    <li id="item">
            <span>${task.title}</span>
            <button onclick="removeTask('${task.id}')" id="delete">X</button>
          </li>
    `;
  });
  output = allTasks.join("");
  outputEl.innerHTML = output;
};
getTasks();


const addTask = (e) => {
  e.preventDefault();

  if (inputEl.value === "") {
    alert("Pleast enter a task");
  }

  
  const task = inputEl.value;
  if (task) {
    let tasks;
    if (localStorage.getItem("tasks") === null) {
      tasks = [];
      console.log(tasks);
    } else {
      tasks = JSON.parse(localStorage.getItem("tasks"));
      console.log(tasks);
    }
    tasks.unshift({
      id: Date.now(),
      title: task,
    });
    
    localStorage.setItem("tasks", JSON.stringify(tasks));
    
    inputEl.value = "";
  }
  getTasks();
};


form.addEventListener("submit", addTask);