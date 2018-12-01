class Add {
    constructor() {
        this.inputAdd = document.querySelector('.add-input');
        this.removeBtn = document.querySelectorAll('.remove-task-btn');
        this.addBtn = document.querySelector('.add-btn');
        this.displayTaskList = document.querySelector('.task-list ul');
        this.numberOfTask = document.querySelector('.task-number span');
        this.taskList = [];
    }
    addTask() {
        this.taskList.push(this.inputAdd.value);
        this.inputAdd.value = '';
    }

    displayTask() {
        const taskElement = document.createElement('li');
        this.taskList.forEach(task => {
            taskElement.innerHTML = task + `<button class="remove-task-btn"><i class="fas fa-times"></button>`;
            this.displayTaskList.appendChild(taskElement);
            this.numberOfTask.textContent = this.taskList.length;
        })
    }

}