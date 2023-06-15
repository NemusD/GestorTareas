const express = require('express');
const app = express();
const port = 3000;

let tasks = [];

// Configuración del middleware 
app.use(express.static('public'));

// Rutas
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});
app.get('/login', (req, res) => {
  res.sendFile(__dirname + '/public/login.html');
});
app.get('registro', (req, res) => {
  res.sendFile(__dirname + '/public/registro.html');
});
app.post('/tasks', (req, res) => {
  const task = req.body;
  tasks.push(task);
  res.json('ok');
})

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor en funcionamiento en http://localhost:${port}`);
});
