const express = require('express');
const app = express();
const port = 3000;

// Configuración del middleware 
app.use(express.static('public'));

// Ruta
app.get('/', (req, res) => {
  res.send('¡Hola, mundo!');
});

// Inicia el servidor
app.listen(port, () => {
  console.log(`Servidor en funcionamiento en http://localhost:${port}`);
});
