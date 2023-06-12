const express = require('express');
const app = express();
const port = 3000;

// Configuración del middleware para servir archivos estáticos desde la carpeta 'public'
app.use(express.static('public'));

// Ruta de ejemplo
app.get('/', (req, res) => {
  res.send('¡Hola, mundo!');
});

// Inicia el servidor
app.listen(port, () => {
  console.log(`Servidor en funcionamiento en http://localhost:${port}`);
});
