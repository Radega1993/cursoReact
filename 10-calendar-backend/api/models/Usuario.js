const { Schema, model } = require('mongoose');

let UsuarioSchema = new Schema({
  name: {
    type: String,
    required: [true, 'El nombre es necesario!'],
  },
  email: {
    type: String,
    unique: true,
    required: [true, 'El correo es necesario']
  },
  password: {
    type: String,
    required: [true, 'La contraseña es obligatoria']
  }
});

module.exports = model('Usuario', UsuarioSchema);
