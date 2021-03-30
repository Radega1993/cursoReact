const mongoose = require('mongoose');

// ====================================
// Base de Datos
// ===================================

const dbConnection = async() => {
  try {

    await mongoose.connect(process.env.urlDB, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true
    });

    console.log('DB online');

  } catch (error) {
    console.log(error);
    throw new Error('Error a la hora d einicializar la BD')
  }
}

module.exports = {
  dbConnection
}
