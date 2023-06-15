//Registro de usuario
/* const registerForm = document.querySelector('.register-form');

registerForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const username = document.querySelector('#username').value;
    const password = document.querySelector('#password').value;
});

//Iniciar sesión
const loginForm = document.querySelector('.login-form');
loginForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const username = document.querySelector('#username').value;
    const password = document.querySelector('#password').value;
}); */

//Creación de tareas
const createTaskForm = document.querySelector('#task-form');
createTaskForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const title = document.querySelector('#title').value;
    const description = document.querySelector('#description').value;
    const status = document.querySelector('#status').value;
    const assignee = document.querySelector('#assignee').value;

    //Crear un objeto
    const task = {
        title: title,
        description: description,
        status: status,
        assignee: assignee
    };
    //Solicitud POST
    fetch('/tasks', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(task)
    })
    .then(function(response) {
        if(response.ok) {
            return response.json();
        } else {
            throw new Error('Error al guardar tarea');
        }
    })
    .then(function(data) {
        const taskCard = createTaskCard(data);
        const taskList = document.querySelector('#task-list');
        taskList.appendChild(taskCard);
    })
    .catch(function(error) {
        console.log(error);
    })
});

//Obtener todas las tareas
fetch('tasks')
    .then(response => response.json())
    .then(data => {
        renderTasks(data);
    })
    .catch(function(error) {
        console.log(error);
    });
    //Renderizar tareas
    function renderTasks(tasks) {
        const taskList = document.querySelector('#task-list');
        taskList.innerHTML = '';

        tasks.forEach(task => {
            const taskCard = createTaskCard(task);
            TaskList.appendChild(taskCard);
        });
    }
    //Creación del card de la tarea
    function createTaskCard(task) {
        const card = document.createElement('div');
        card.classList.add('card');
      
        const titleElement = document.createElement('h5');
        titleElement.classList.add('card-title');
        titleElement.textContent = task.title;
        card.appendChild(titleElement);
      
        const descriptionElement = document.createElement('p');
        descriptionElement.classList.add('card-description');
        descriptionElement.textContent = task.description;
        card.appendChild(descriptionElement);
      
        const statusElement = document.createElement('p');
        statusElement.classList.add('card-status');
        statusElement.textContent = 'Estado: ' + task.status;
        card.appendChild(statusElement);
      
        const assigneeElement = document.createElement('p');
        assigneeElement.classList.add('card-responsible');
        assigneeElement.textContent = 'Responsable: ' + task.assignee;
        card.appendChild(assigneeElement);
      
        return card;
      }
//Filtrado de tareas por usuarios
const userFilter = document.querySelector('#user-filter');

userFilter.addEventListener('change', (e) => {
    const selectedUser = e.target.value;
});