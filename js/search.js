class Search {
    constructor() {
        this.inputSearch = document.querySelector('.add-input');
        this.taskList = [];
    }

    search(e) {
        const searchText = e.target.value;
        const searchList = document.querySelector('.search-list ul');
        if (searchText) {
            searchList.textContent = '';
            const liElements = document.querySelectorAll('.task-list ul li')
            this.taskList = [...liElements];
            this.taskList = this.taskList.filter(task => task.textContent.toLowerCase().includes(searchText.toLowerCase()));
            this.taskList.forEach(task => {
                const li = document.createElement('li');
                li.textContent = task.textContent;
                console.log(li);
                searchList.appendChild(li);
            });
        } else {
            searchList.textContent = '';
        }
    }
}