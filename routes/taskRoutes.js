const express = require('express');
const router = express.Router();
const taskController = require('../controllers/taskController');

//Ruta para obtener las todas tareas
router.get('/tasks', taskController.getAllTasks);

//Ruta para crear una nueva tarea
router.post('/tasks', taskController.createTask);

//Ruta para modificar una tarea existente
router.put('/tasks/:taskId', taskController.putTasks)

//Ruta para eliminar una tarea
router.delete('/tasks/:taskId', taskController.deleteTasks)

module.exports = router;