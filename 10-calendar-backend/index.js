const express = require('express');
require('dotenv').config();
const { dbConnection } = require('./database/config');
var cors = require('cors');

// crear servidor express
const app = express();

// base de Datos
dbConnection();

// cors
app.use(cors());

// directorio publico
app.use(express.static('public'))

// Lectura y parseo del body
app.use( express.json() );

// Rutas
app.use('/api/auth', require('./routes/auth'));
app.use('/api/events', require('./routes/events'));


// escuchar peticiones
app.listen(process.env.PORT, () => {
   console.log(`servidor levandado en el puerto ${process.env.PORT}`);
});
