//Registro de usuario
const registerForm = document.querySelector('.register-form');

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
});

//Creación de tareas
const createTaskForm = document.querySelector('#form-group');
createTaskForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const title = document.querySelector('#title').value;
    const description = document.querySelector('#description').value;
    const status = document.querySelector('#status').value;
    const assignee = document.querySelector('#assignee').value;

});

//Obtener todas las tareas
fetch('tasks')
    .then(response => response.json())
    .then(data => {

    });

//Filtrado de tareas por usuarios
const userFilter = document.querySelector('#user-filter');

userFilter.addEventListener('change', (e) => {
    const selectedUser = e.target.value;
});