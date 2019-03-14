class Remove {
    constructor() {
        this.removeElement = document.querySelectorAll('remove-task-btn');
    }

    remove() {
        console.log(this);
        this.parentElement.remove();
        add.numberOfTask = add.taskIndex -= 1;
    }
}