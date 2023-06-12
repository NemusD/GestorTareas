const express = require('express');
const router = express.Router();

//Arreglo para almacenar las tareas
let tasks = [];

//Obtener todas las tareas
router.get('/tasks', (req, res) => {
    res.json(tasks);
});

//Agregar una nueva tarea
router.post('/tasks', (req, res) => {
    const { title, description, assignee } = req.body;

    const newTask = {
        title,
        description,
        assignee
    };
    tasks.push(newTask);
    res.status(201).json(newTask);
});

//Editar una tarea existente
router.put('/tasks/:taskId', (req, res) => {
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
});

//Eliminar una tarea existente
router.delete('/tasks/:taskId', (req, res) => {
    const taskId = req.params.taskId;
    const index = tasks.findIndex(task => task.id === taskId);

    if (index === -1 ) {
        return res.status(404).json({ error: 'Tarea no encontrada' });
    }
    tasks.splice(index, 1);

    res.json({ message: 'Tarea eliminada exitosamente' });
});

module.exports = router;