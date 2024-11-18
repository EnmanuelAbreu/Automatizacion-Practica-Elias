const inputBox = document.getElementById("inputbox");
const listContainer = document.getElementById("list-container");
const cantidad = document.getElementById("cantidad");
let total = 0;
let tasks = [];

function addTask() {
  if (inputBox.value === '') {
    alert("¡Debes escribir algo!");
  } else {
    let li = document.createElement("li");

    const now = new Date();
    const formattedDateTime = now.toLocaleString(); 

    li.innerHTML = `${inputBox.value} (Agregado: ${formattedDateTime})`; 

    let span = document.createElement("span");
    span.innerHTML = '\u00d7'; 
    span.className = "delete"; 
    li.appendChild(span);

    listContainer.appendChild(li);

    tasks.push({ text: inputBox.value, date: formattedDateTime });
    total++;
    cantidad.textContent = total;

    inputBox.value = "";

    saveData();
  }
}

listContainer.addEventListener('dblclick', function (e) {
  if (e.target.tagName === 'LI' && !e.target.querySelector("input")) {
    const originalText = e.target.firstChild.textContent.split(" (Agregado:")[0].trim();
    const input = document.createElement("input");
    input.type = "text";
    input.value = originalText;
    e.target.firstChild.replaceWith(input);

    input.focus();

    input.addEventListener("blur", function() {
      updateTask(e.target, input.value);
    });

    input.addEventListener("keydown", function(event) {
      if (event.key === "Enter") {
        updateTask(e.target, input.value);
      }
    });
  }
});

function updateTask(liElement, newText) {
  const taskIndex = Array.from(listContainer.children).indexOf(liElement);
  tasks[taskIndex].text = newText;
  
  const now = new Date();
  const formattedDateTime = tasks[taskIndex].date || now.toLocaleString();

  liElement.innerHTML = `${newText} (Agregado: ${formattedDateTime})`;
  let span = document.createElement("span");
  span.innerHTML = '\u00d7'; 
  span.className = "delete"; 
  liElement.appendChild(span);

  saveData();
}

listContainer.addEventListener('click', function (e) {
    if (e.target.tagName === 'LI') {
      e.target.classList.toggle("tachada");
      saveData();
    } else if (e.target.tagName === 'SPAN' && e.target.classList.contains('delete')) {
      const taskIndex = Array.from(listContainer.children).indexOf(e.target.parentElement);
      tasks.splice(taskIndex, 1); 
      e.target.parentElement.remove(); 
      total--;
      cantidad.textContent = total;
      saveData();
    }
  }, false);

function showTask() {
  const savedTasks = JSON.parse(localStorage.getItem("miDiaTasks")) || [];
  tasks = savedTasks;
  savedTasks.forEach(task => {
    let li = document.createElement("li");
    li.innerHTML = `${task.text} (Agregado: ${task.date})`;

    let span = document.createElement("span");
    span.innerHTML = '\u00d7'; 
    span.className = "delete"; 
    li.appendChild(span);

    listContainer.appendChild(li);
  });
  total = listContainer.getElementsByTagName("li").length;
  cantidad.textContent = total;
}

function clearTasks() {
  listContainer.innerHTML = '';
  tasks = []; 
  total = 0;
  cantidad.textContent = total;
  saveData();
}

function saveData() {
  localStorage.setItem("miDiaTasks", JSON.stringify(tasks));
}

showTask();