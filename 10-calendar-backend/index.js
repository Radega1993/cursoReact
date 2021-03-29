const express = require('express');
require('dotenv').config();

// crear servidor express
const app = express();

// directorio publico
app.use(express.static('public'))

// Rutas


// escuchar peticiones
app.listen(process.env.PORT, () => {
   console.log(`servidor levandado en el puerto ${process.env.PORT}`);
});
