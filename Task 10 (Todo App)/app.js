const todoForm = document.querySelector("#todo-form");
const todos = document.querySelector(".todos");
const remainingTasks = document.querySelector("#remaining-tasks");
const completedTasks = document.querySelector("#completed-tasks");
const totalTasks = document.querySelector("#total-tasks");
const mainInput = document.querySelector("#todo-form input");

let tasks = JSON.parse(localStorage.getItem('tasks')) || []

todoForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const inputValue = mainInput.value

    if (inputValue == '') {
        return
    }
    const task = {
        id: new Date().getTime(),
        name: inputValue,
        isCompleted: false
    }
    tasks.push(task);
    localStorage.setItem('tasks', JSON.stringify(tasks));

    createTask(task);

    todoForm.reset();
    mainInput.focus();
})

function createTask(task) {
    const taskEl = document.createElement('li');
    taskEl.setAttribute('id', task.id);
    if (task.isCompleted) {
        taskEl.classList.add('completed')
    }

    const taskElMarkup = `
    <div>
        <input type="checkbox" name="task" id='${task.id}' ${task.isCompleted ? 'checked' : " "}>
        <span ${!task.isCompleted ? 'contenteditable' : " "} >${task.name}</span>
    </div>
     <button title="remove task" ${task.name} class="remove-task">
        <svg viewBox="0 0 16 16" fill="currentColor">
            <path d="M10.707 5.293a1 1 0 0 0-1.414 0L8 6.586l-1.293-1.293a1 1 0 1 0-1.414 1.414L6.586 8l-1.293 1.293a1 1 0 0 0 1.414 1.414L8 9.414l1.293 1.293a1 1 0 0 0 1.414-1.414L9.414 8l1.293-1.293a1 1 0 0 0 0-1.414z"></path>
        </svg>
    </button>
    `
    taskEl.innerHTML = taskElMarkup;
    console.log(taskEl)
    todos.appendChild(taskEl);
    countTask();
}

const countTask = () => {
    const completedTasksArray = tasks.filter(task => task.isCompleted === true);
    totalTasks.textContent = tasks.length;
    completedTasks.textContent = completedTasksArray.length;
    remainingTasks.textContent = tasks.length - completedTasksArray.length;
}

// remove list item 

todos.addEventListener('click', (e) => {
    if (e.target.classList.contains('remove-task') || e.target.parentElement.classList.contains('remove-task')) {
        const taskId = e.target.closest('li').id;
        removeTask(taskId);
    }
})
const removeTask = (taskId) => {
    tasks = tasks.filter((task) => {
        return task.id !== parseInt(taskId)
    })
    localStorage.setItem('tasks', JSON.stringify(tasks));
    document.getElementById(taskId).remove();
    countTask();
}

// update list item 

todos.addEventListener('input', (e) => {
    const taskId = e.target.closest('li').id;
    updateTask(taskId, e.target)

})

const updateTask = (taskId, el) => {
    const task = tasks.find(task => task.id === parseInt(taskId));
    if (el.hasAttribute('contenteditable')) {
        task.name = el.textContent;
    }
    else {
        const span = el.nextElementSibling;
        const parent = el.closest('li');
        task.isCompleted = !task.isCompleted;
        if (task.isCompleted) {
            span.removeAttribute('contenteditable')
            parent.classList.add('complete')
        }
        else {
            span.setAttribute('contenteditable', true);
            parent.classList.remove('complete')
        }
    }
    localStorage.setItem('tasks', JSON.stringify(tasks))
    countTask();
}