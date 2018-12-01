const add = new Add();
add.addBtn.addEventListener('click', function () {
    event.preventDefault();
    add.addTask();
    add.displayTask();
})

const search = new Search();
search.inputSearch.addEventListener('input', search.search);