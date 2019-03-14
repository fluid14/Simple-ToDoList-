class Add {
    constructor() {
        this.taskIndex = 0;
        this.inputAdd = document.querySelector('.add-input');
        this.removeBtn = document.querySelectorAll('.remove-task-btn');
        this.addBtn = document.querySelector('.add-btn');
        this.info = document.querySelector('.info');
        this.displayTaskList = document.querySelector('.task-list ul');
        this.numberOfTask = document.querySelector('.task-number span');
        this.taskList = [];
    }

    addTask() {
        if (!this.inputAdd.value) {
            this.info.textContent = "Wprowadź tekst";
        } else {
            const taskElement = document.createElement('li');
            taskElement.innerHTML = this.inputAdd.value + '<p class="remove-task-btn">Usuń</p>';
            this.inputAdd.value = '';
            this.info.textContent = ''
            this.displayTaskList.appendChild(taskElement);
            this.numTasks();
        }
    }

    numTasks() {
        const li = document.getElementsByTagName('li');
        this.numberOfTask.textContent = li.length;
    }

}