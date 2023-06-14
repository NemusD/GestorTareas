const express = require('express');
const mysql = require('mysql');
const router = express.Router();

//Crear conexión a la base de datos
const connection = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: 'Alta_1907',
    database: 'tareas'
});

//Arreglo para almacenar las tareas
let tasks = [];

//Obtener todas las tareas
const getAllTasks = (req, res) => {
    connection.query('SELECT * FROM tasks', (error, results) => {
        if(error) {
            console.error('Error al obtener las tareas', error);
            res.status(500).json({ error: 'Error al obtener las tareas' });
        } else {
            res.json(results);
        }
    })
};

//Agregar una nueva tarea
const createTask = (req, res) => {
    const { title, description, status, assignee } = req.body;

    //Insertar tarea en la base de datos
    connection.query( 'INSERT INTO tasks (title, description, status, assignee) VALUES (?, ?, ?, ?)', [title, description, status, assignee],
    (error, result) => {
        if(error) {
            console.error('Error al crear la tarea', error);
            res.status(500).json({ error: 'Error al crear la tarea'});
        } else {
            const createdTask = { 
                id: result.insertId, 
                title, 
                description, 
                status, 
                assignee
            };
            res.status(201).json(createdTask);
        }
    })
};

//Editar una tarea existente
const putTasks = (req, res) => {
    const taskId = req.params.taskId;
    const { title, description, assignee } = req.body;

    const task = tasks.find(task => task.id === taskId);
    if (!task){
        return res.status(404).json({ error: 'Tarea no encontrada' });
    }
    task.title = title || task.title;
    task.description = description || task.description;
    task.assignee = assignee || task.assignee;

    res.json(task);
};

//Eliminar una tarea existente
const deleteTasks = (req, res) => {
    const taskId = req.params.taskId;
    const index = tasks.findIndex(task => task.id === taskId);

    if (index === -1 ) {
        return res.status(404).json({ error: 'Tarea no encontrada' });
    }
    tasks.splice(index, 1);

    res.json({ message: 'Tarea eliminada exitosamente' });
};

module.exports = {
    getAllTasks,
    createTask,
    putTasks,
    deleteTasks
};