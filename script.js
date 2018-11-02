// Add
const inputText = document.querySelector('input');
const form = document.querySelector('form');
const taskList = document.querySelector('.taskList ul');
let taskNumber = document.querySelector('p span');

// Search
const searchList = document.querySelector('.searchList ul');


let taskListArray = [];
let index = 0;

const add = () => {
    event.preventDefault();
    const text = inputText.value;
    if (!text) {
        alert("Musisz wprowadzic treśc zadania!");
        return;
    }

    inputText.value = '';
    taskListArray.push(text);
    taskNumber.textContent = taskListArray.length;

    const newTask = document.createElement('li');
    newTask.innerHTML = text + `<button class="removeTaskBtn" ><i class="fas fa-times"></button>`;
    newTask.className = 'task';
    newTask.dataset.key = index++;
    taskList.appendChild(newTask);
    console.log(`Dodano task o indeksie: ${newTask.dataset.key}\nI treści: ${newTask.textContent}`);

    const removeBtn = document.querySelectorAll('.task button');
    removeBtn.forEach((btn) => {
        btn.addEventListener('click', remove)
    });
}

const remove = () => {
    const indexRemove = event.currentTarget.parentNode.dataset.key;
    event.currentTarget.parentNode.remove();
    console.log(`Usunięto task o indeksie: ${indexRemove}\nI treści: ${taskListArray[indexRemove]}`);
    taskListArray.splice(indexRemove, 1)
    taskNumber.textContent = taskListArray.length;
}

const search = () => {
    const text = inputText.value;
    const tasksList = document.querySelectorAll('.taskList li');
    const tasksListArray = [...tasksList];

    let tasksListArrayFiltered = tasksListArray.filter(task => task.textContent.includes());

    tasksListArrayFiltered.forEach(search => searchList.appendChild(search));

}




form.addEventListener('submit', add);
inputText.addEventListener('input', search);