const add = new Add();
add.addBtn.addEventListener('click', function () {
    event.preventDefault();
    add.addTask();
    add.displayTask();
    removeElement = document.querySelectorAll('.remove-task-btn');
    removeElement.forEach(element => {
        element.addEventListener('click', function () {
            element.parentElement.remove();
        })
    })
})

const search = new Search();
search.inputSearch.addEventListener('input', search.search);