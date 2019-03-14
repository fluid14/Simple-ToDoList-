const add = new Add();
add.addBtn.addEventListener('click', function () {
    event.preventDefault();
    add.addTask();
    const removeElement = document.querySelectorAll('.remove-task-btn');
    removeElement.forEach(el => {
        el.addEventListener('click', () => {
            el.parentElement.remove();
            add.numTasks();
        })
    })
})

const search = new Search();
search.inputSearch.addEventListener('input', search.search);