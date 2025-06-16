const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 3000;
const DATA_FILE = path.join(__dirname, 'reservas.json');

// Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Servir archivos estáticos correctamente
app.use(express.static(__dirname));
app.use('/assets', express.static(path.join(__dirname, 'assets')));

// Ruta principal: enviar index.html
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Ruta POST para guardar reservas
app.post('/reservar', (req, res) => {
  const nuevaReserva = req.body;

  let reservas = [];
  if (fs.existsSync(DATA_FILE)) {
    const data = fs.readFileSync(DATA_FILE, 'utf8');
    reservas = JSON.parse(data);
  }

  reservas.push(nuevaReserva);
  fs.writeFileSync(DATA_FILE, JSON.stringify(reservas, null, 2));

  console.log('✅ Reserva guardada:', nuevaReserva);
  res.status(200).send('Reserva recibida correctamente');
});

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`🚀 Servidor corriendo en: http://localhost:${PORT}`);
});
