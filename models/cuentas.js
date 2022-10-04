const { DataTypes } = require('sequelize');
const sequelize = require('./index')();

const Cuentas = sequelize.define('Cuentas', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    field: 'idcuenta',
    primaryKey: true,
  },
  saldoInicial: {
    type: DataTypes.FLOAT,
    field: 'saldo_inicial',
  },
  cuenta: {
    type: DataTypes.STRING,
  },
  saldo: {
    type: DataTypes.FLOAT,
  },
}, {
  timestamps: false,
  tableName: 'CUENTAS',
});

module.exports = Cuentas;
