const { DataTypes } = require('sequelize');
const sequelize = require('./index')();

const Clientes = sequelize.define('Clientes', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    field: 'idcliente',
    primaryKey: true,
  },
  nombre: {
    type: DataTypes.STRING,
  },
  apellidos: {
    type: DataTypes.STRING,
  },
}, {
  timestamps: false,
  tableName: 'PROVEEDORES',
});

module.exports = Clientes;
