const todoForm = document.getElementById('todoForm');
const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');

todoForm.addEventListener('submit', function(event) {
    event.preventDefault();
    addTask();
});

function addTask() {
    const taskValue = taskInput.value.trim();

    if (taskValue === '') {
        alert('Please enter a task');
        return;
    }

    const li = document.createElement('li');
    li.appendChild(document.createTextNode(taskValue));

    const deleteBtn = document.createElement('button');
    deleteBtn.className = 'delete-btn';
    deleteBtn.appendChild(document.createTextNode('Delete'));
    deleteBtn.addEventListener('click', function() {
        li.remove();
    });

    li.appendChild(deleteBtn);
    li.addEventListener('click', function() {
        li.classList.toggle('completed');
    });

    taskList.appendChild(li);
    taskInput.value = '';
}
