const { DataTypes } = require('sequelize');
const sequelize = require('./index')();

const Usuarios = sequelize.define('Usuarios', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    field: 'idusuario',
    primaryKey: true,
  },
  nombre: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  apellidos: {
    type: DataTypes.STRING,
  },
  correo: {
    type: DataTypes.STRING,
    unique: true,
  },
  contrasenia: {
    type: DataTypes.STRING,
  },
}, {
  timestamps: false,
  tableName: 'usuarios',
});

module.exports = Usuarios;
