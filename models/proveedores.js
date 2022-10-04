const { DataTypes } = require('sequelize');
const sequelize = require('./index')();

const Proveedores = sequelize.define('Proveedores', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    field: 'idproveedor',
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

module.exports = Proveedores;
